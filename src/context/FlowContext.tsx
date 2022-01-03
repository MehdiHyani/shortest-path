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
                "label": "Marrakech"
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
                "label": "Rabat"
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
                "label": "Casablanca"
            },
            "position": {
                "x": 500,
                "y": 25
            }
        }
    ])
    const [currentId, setCurrentId] = React.useState(4)
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