import React from "react";
import { lazyLoad } from "../../../../helpers/lazyLoad";

export const ProductLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.Product,
  {
    fallback: <p>loafing</p>,
  }
);
