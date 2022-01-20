import React from "react";
import { Children, FlowContextState, FlowEdge, FlowNode } from "../utils/types";

// @ts-ignore
export const FlowContext = React.createContext<FlowContextState>()

export const FlowProvider = ({ children }: Children) => {
  const [flow, setFlow] = React.useState<Array<FlowEdge | FlowNode>>([])
  const [currentId, setCurrentId] = React.useState(6)
  return (
    <FlowContext.Provider value={{ flow, setFlow, currentId, setCurrentId }}>
      {children}
    </FlowContext.Provider>
  )
}
