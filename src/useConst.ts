import { useRef } from "react";

export function useConst<T>(factory: () => T): T {
    const ref = useRef<{ value: T } | undefined>();

    if (!ref.current) {
        ref.current = { value: factory() };
    }

    return ref.current.value;
}