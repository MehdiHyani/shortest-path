import React from "react";
import { FlowContextState } from "../utils/types";

// @ts-ignore
export const FlowContext = React.createContext<FlowContextState>()

export const FlowProvider = ({ children }: any) => {
  const [flow, setFlow] = React.useState<Array<any>>([])
  const [currentId, setCurrentId] = React.useState(6)
  return (
    <FlowContext.Provider value={{ flow, setFlow, currentId, setCurrentId }}>
      {children}
    </FlowContext.Provider>
  )
}
