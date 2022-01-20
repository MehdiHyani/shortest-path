import { Toast } from "@elastic/eui/src/components/toast/global_toast_list";
import { EuiToastProps } from "@elastic/eui/src/components/toast/toast";
import React, { MouseEventHandler } from "react";

export interface FlowContextState {
  flow: Array<any>;
  setFlow: React.Dispatch<React.SetStateAction<any[]>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}
export interface ToastContextState {
  toasts: Array<Toast>;
  addToast: Function;
  dismissToast: (removedToast: EuiToastProps) => void;
}
export interface MobileBarProps {
  openCreationModal: MouseEventHandler<HTMLAnchorElement>;
  openCalculationModal: MouseEventHandler<HTMLAnchorElement>;
}
export interface ActionsButtonDesktopProps {
  openModal: Function
}
export interface CustomToastProps {
  title: string;
  color: "primary" | "success" | "warning" | "danger";
  icon: string;
  text: string
}
export interface CalculationModalState {
  startNode: string;
  endNode: string;
  isLoading: boolean;
  result: null | { distance: number | "Infinity"; path: Array<string> };
}
export interface RootAppState {
  isCreationModalOpen: boolean;
  isCalculationModalOpen: boolean;
}
export interface Children {
  children: React.ReactChildren | React.ReactChild;
}
export interface FlowEdge {
  id: string;
  type: "straight";
  source: string;
  target: string;
  animated: boolean;
  label: string;
}
export interface FlowNode {
  id: string;
  type: "default";
  data: {
    label: string;
  };
  position: {
    x: number;
    y: number;
  };
}