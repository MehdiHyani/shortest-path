import { EuiToastProps } from "@elastic/eui/src/components/toast/toast";
import React, { MouseEventHandler } from "react";

export interface FlowContextState {
  flow: Array<any>;
  setFlow: React.Dispatch<React.SetStateAction<any[]>>;
  currentId: number;
  setCurrentId: React.Dispatch<React.SetStateAction<number>>;
}
export interface ToastContextState {
  toasts: Array<any>;
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