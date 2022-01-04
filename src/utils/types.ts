import React, { MouseEventHandler } from "react";

export interface FlowContextState {
  flow: Array<any>;
  setFlow: React.Dispatch<React.SetStateAction<any[]>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}

export interface MobileBarProps {
  openCreationModal: MouseEventHandler<HTMLAnchorElement>;
  openCalculationModal: MouseEventHandler<HTMLAnchorElement>;
}
