import React, { lazy, Suspense } from "react";
import { DelayedLoader } from "@/app/components/DelayedLoader";
import { Unpromisify } from "./types/Unpromisify";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(
    importFunc: () => T,
    selectorFunc?: (s: Unpromisify<T>) => U,
    opts: {
        fallback: React.ReactNode;
        fallbackDelay?: number;
    } = { fallback: null },
): ((props: React.ComponentProps<U>) => JSX.Element) => {
    let lazyFactory: () => Promise<{ default: U }> = importFunc;

    if (selectorFunc) {
        lazyFactory = () => importFunc().then((module) => ({ default: selectorFunc(module) }));
    }

    const LazyComponent = lazy(lazyFactory);

    return (props: React.ComponentProps<U>): JSX.Element => (
        <Suspense fallback={<DelayedLoader loader={opts.fallback} delay={opts.fallbackDelay ?? 300} />}>
            <LazyComponent {...props} />
        </Suspense>
    );
};
