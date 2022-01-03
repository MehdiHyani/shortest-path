import React from "react";

export interface FlowContextState {
  flow: Array<any>;
  setFlow: React.Dispatch<React.SetStateAction<any[]>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}
