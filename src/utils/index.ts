const shortestDistanceNode = (distances: any, visited: any) => {
  let shortest = null;
  
  for (let node in distances) {
    let currentIsShortest = shortest === null || distances[node] < distances[shortest];

    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
};


export const findShortestPath = (flow: Array<any>, startNode: string, endNode: string) => {
  // Construct the graph @matrix
  const graph: any = {}
  flow
    .filter((elt) => !(elt.id as String).startsWith("e"))
    .forEach((elt: any) => {
      graph[elt.id] = {};
    });
  const edges = flow.filter((elt) => (elt.id as String).startsWith("e"));
  if(edges.length === 0)
    throw new Error("No edges, Add one or more to calculate the shortest path");

  edges.map((edge: any) => {
    graph[edge.source][edge.target] = parseInt(edge.label);
    graph[edge.target][edge.source] = parseInt(edge.label);
    return null
  })

  // console.log(graph);

  // track distances from the start node using a hash object
  let distances = {};
  // @ts-ignore
  distances[endNode] = "Infinity";
  distances = Object.assign(distances, graph[startNode]); // track paths using a hash object
  let parents = { endNode: null };
  for (let child in graph[startNode]) {
    // @ts-ignore
    parents[child] = startNode;
  }

  // collect visited nodes
  // @ts-ignore
  let visited = []; // find the nearest node
  // @ts-ignore
  let node = shortestDistanceNode(distances, visited);

  // for that node:
  while (node) {
    // find its distance from the start node & its child nodes

    // @ts-ignore
    let distance = distances[node];
    let children = graph[node];

    // for each of those child nodes:
    for (let child in children) {
      // make sure each child node is not the start node
      if (String(child) === String(startNode)) {
        continue;
      } else {
        // save the distance from the start node to the child node
        let newdistance = distance + children[child]; // if there's no recorded distance from the start node to the child node in the distances object
        // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
        // @ts-ignore
        if (!distances[child] || distances[child] > newdistance) {
          // save the distance to the object
          // @ts-ignore
          distances[child] = newdistance;
          // record the path
          // @ts-ignore
          parents[child] = node;
        }
      }
    }
    // move the current node to the visited set
    visited.push(node); // move to the nearest neighbor node
    // @ts-ignore
    node = shortestDistanceNode(distances, visited);
  }

  // using the stored paths from start node to end node
  // record the shortest path
  let shortestPath = [endNode];
  // @ts-ignore
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    // @ts-ignore
    parent = parents[parent];
  }
  shortestPath.reverse();

  //this is the shortest path
  let results = {
    // @ts-ignore
    distance: distances[endNode],
    path: shortestPath,
  };
  // return the shortest path & the end node's distance from the start node
  console.log(results)
  return results;
};
