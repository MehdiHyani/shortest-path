import React from "react";
import { FlowContextState } from "../utils/types";

// @ts-ignore
export const FlowContext = React.createContext<FlowContextState>()

export const FlowProvider = ({ children }: any) => {
  const [flow, setFlow] = React.useState<Array<any>>([
    {
      "id": "1",
      "type": "default",
      "data": {
        "label": "Node A"
      },
      "position": {
        "x": 0,
        "y": 25
      }
    },
    {
      "id": "2",
      "type": "default",
      "data": {
        "label": "Node B"
      },
      "position": {
        "x": 250,
        "y": 25
      }
    },
    {
      "id": "3",
      "type": "default",
      "data": {
        "label": "Node C"
      },
      "position": {
        "x": 100,
        "y": 150
      }
    },
    {
      "id": "4",
      "type": "default",
      "data": {
        "label": "Node D"
      },
      "position": {
        "x": 350,
        "y": 150
      }
    },
    {
      "id": "5",
      "type": "default",
      "data": {
        "label": "Node E"
      },
      "position": {
        "x": 450,
        "y": 25
      }
    },
    {
      id: "e1-2",
      type: "straight",
      source: "1",
      target: "2",
      animated: false,
      label: "3"
    },
    {
      id: "e2-3",
      type: "straight",
      source: "2",
      target: "3",
      animated: false,
      label: "7"
    },
    {
      id: "e1-3",
      type: "straight",
      source: "1",
      target: "3",
      animated: false,
      label: "1"
    },
    {
      id: "e2-4",
      type: "straight",
      source: "2",
      target: "4",
      animated: false,
      label: "5"
    },
    {
      id: "e3-4",
      type: "straight",
      source: "3",
      target: "4",
      animated: false,
      label: "2"
    },
    {
      id: "e2-5",
      type: "straight",
      source: "2",
      target: "5",
      animated: false,
      label: "1"
    },
    {
      id: "e4-5",
      type: "straight",
      source: "4",
      target: "5",
      animated: false,
      label: "7"
    },
  ])
  const [currentId, setCurrentId] = React.useState(6)
  return (
    <FlowContext.Provider value={{ flow, setFlow, currentId, setCurrentId }}>
      {children}
    </FlowContext.Provider>
  )
}

/*
[
  {
    "id": "1",
    "type": "output",
    "data": {
      "label": "Marrakech"
    },
    "position": {
      "x": 0,
      "y": 25
    }
  },
  {
    "id": "2",
    "type": "output",
    "data": {
      "label": "Rabat"
    },
    "position": {
      "x": 250,
      "y": 25
    }
  },
  {
    "id": "3",
    "type": "output",
    "data": {
      "label": "Casablanca"
    },
    "position": {
      "x": 500,
      "y": 25
    }
  }
]
*/