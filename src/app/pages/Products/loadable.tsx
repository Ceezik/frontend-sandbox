import React from "react";
import { lazyLoad } from "../../../helpers/lazyLoad";
import { ProductsSkeleton } from "./skeleton";

export const ProductsLoadable = lazyLoad(
  () => import(/* webpackChunkName: 'pages.products' */ "./index"),
  (module) => module.Products,
  {
    fallback: <ProductsSkeleton />,
  }
);
