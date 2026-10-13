import { createContext, useContext } from 'react';

/**
 * Lives apart from Toast.tsx so that file exports only a component, which is
 * what React Fast Refresh needs to hot-reload the provider reliably.
 */
export const ToastContext = createContext<(message: string) => void>(() => {});

export const useToast = () => useContext(ToastContext);
