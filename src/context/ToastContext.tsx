import React from "react";
import { htmlIdGenerator } from "@elastic/eui";
import { Children, CustomToastProps, ToastContextState } from "../utils/types";
import { EuiToastProps } from "@elastic/eui/src/components/toast/toast";
import { Toast } from "@elastic/eui/src/components/toast/global_toast_list";

// @ts-ignore
export const ToastContext = React.createContext<ToastContextState>()

export const ToastProvider = ({ children }: Children) => {

    const [toasts, setToasts] = React.useState<Array<Toast>>([])

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
