export const exampleFlow = [
  {
    id: "1",
    type: "default",
    data: {
      label: "Node A",
    },
    position: {
      x: 0,
      y: 25,
    },
  },
  {
    id: "2",
    type: "default",
    data: {
      label: "Node B",
    },
    position: {
      x: 250,
      y: 25,
    },
  },
  {
    id: "3",
    type: "default",
    data: {
      label: "Node C",
    },
    position: {
      x: 100,
      y: 150,
    },
  },
  {
    id: "4",
    type: "default",
    data: {
      label: "Node D",
    },
    position: {
      x: 350,
      y: 150,
    },
  },
  {
    id: "5",
    type: "default",
    data: {
      label: "Node E",
    },
    position: {
      x: 450,
      y: 25,
    },
  },
  {
    id: "e1-2",
    type: "straight",
    source: "1",
    target: "2",
    animated: false,
    label: "3",
  },
  {
    id: "e2-3",
    type: "straight",
    source: "2",
    target: "3",
    animated: false,
    label: "7",
  },
  {
    id: "e1-3",
    type: "straight",
    source: "1",
    target: "3",
    animated: false,
    label: "1",
  },
  {
    id: "e2-4",
    type: "straight",
    source: "2",
    target: "4",
    animated: false,
    label: "5",
  },
  {
    id: "e3-4",
    type: "straight",
    source: "3",
    target: "4",
    animated: false,
    label: "2",
  },
  {
    id: "e2-5",
    type: "straight",
    source: "2",
    target: "5",
    animated: false,
    label: "1",
  },
  {
    id: "e4-5",
    type: "straight",
    source: "4",
    target: "5",
    animated: false,
    label: "7",
  },
];

export const emptyFlowNode = [
  {
    id: "1",
    type: "default",
    data: {
      label: "Flow is emtpy. Add some nodes and edges using the actions",
    },
    animated: true,
    position: {
      x: 250,
      y: 100,
    },
  }]