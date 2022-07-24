import React from "react";
import { lazyLoad } from "@/helpers/lazyLoad";
import { HomeSkeleton } from "./skeleton";

export const HomeLoadable = lazyLoad(
    () => import(/* webpackChunkName: 'pages.home' */ "./index"),
    (module) => module.Home,
    {
        fallback: <HomeSkeleton />,
    },
);
