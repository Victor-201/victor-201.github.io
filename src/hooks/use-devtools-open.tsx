import { useEffect, useState } from "react";
import { addListener, removeListener, launch, stop } from "devtools-detector";

export const useDevToolsOpen = () => {
    const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const listener = (isOpen: boolean) => {
            if (isOpen) {
                setIsDevToolsOpen(true);
                stop();
            }
        };
        addListener(listener);
        launch();
        return () => {
            removeListener(listener);
            stop();
        };
    }, []);
    return { isDevToolsOpen };
};
