import React from "react";
import { lazyLoad } from "../../../helpers/lazyLoad";

export const HomeLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.Home,
  {
    fallback: <p>loafing</p>,
  }
);
