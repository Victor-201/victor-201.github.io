import { useCallback, useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useThrottle = <T extends (...args: any[]) => void>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    const funcRef = useRef(func);
    funcRef.current = func;
    const lastFunc = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const lastRan = useRef<number>(0);

    return useCallback(
        (...args: Parameters<T>) => {
            if (!lastRan.current) {
                funcRef.current(...args);
                lastRan.current = Date.now();
            } else {
                clearTimeout(lastFunc.current);
                lastFunc.current = setTimeout(() => {
                    if (Date.now() - lastRan.current >= limit) {
                        funcRef.current(...args);
                        lastRan.current = Date.now();
                    }
                }, limit - (Date.now() - lastRan.current));
            }
        },
        [limit]
    );
};
