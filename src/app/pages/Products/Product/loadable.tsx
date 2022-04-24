import React from "react";
import { lazyLoad } from "../../../../helpers/lazyLoad";
import { ProductSkeleton } from "./skeleton";

export const ProductLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.Product,
  {
    fallback: <ProductSkeleton />,
  }
);
