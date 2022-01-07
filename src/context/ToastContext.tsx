import React from "react";
import { htmlIdGenerator } from "@elastic/eui";
import { CustomToastProps, ToastContextState } from "../utils/types";
import { EuiToastProps } from "@elastic/eui/src/components/toast/toast";

// @ts-ignore
export const ToastContext = React.createContext<ToastContextState>()

export const ToastProvider = ({ children }: any) => {

    const [toasts, setToasts] = React.useState<Array<EuiToastProps>>([])

    function addToast({ title, color, icon, text }: CustomToastProps) {
        if (toasts.length <= 5) {
            // @ts-ignore
            setToasts(prev => prev.concat({
                id: htmlIdGenerator('toast')(),
                title,
                iconType: icon,
                color,
                text
            }))
        }
    }

    const dismissToast = (removedToast: EuiToastProps) => {
        setToasts(toasts.filter((toast) => toast.id !== removedToast.id));
    }

    return (
        <ToastContext.Provider value={{ toasts, addToast, dismissToast }}>
            {children}
        </ToastContext.Provider>
    )
}
