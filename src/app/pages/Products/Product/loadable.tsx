import React from "react";
import { lazyLoad } from "../../../../helpers/lazyLoad";
import { ProductSkeleton } from "./skeleton";

export const ProductLoadable = lazyLoad(
  () => import(/* webpackChunkName: 'pages.products.product' */ "./index"),
  (module) => module.Product,
  {
    fallback: <ProductSkeleton />,
  }
);
