import React from "react";
import { lazyLoad } from "../../../helpers/lazyLoad";

export const ProductsLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.Products,
  {
    fallback: <p>loafing</p>,
  }
);
