import React from "react";
import { lazyLoad } from "../../../../helpers/lazyLoad";
import { CreateProductSkeleton } from "./skeleton";

export const CreateProductLoadable = lazyLoad(
  () => import(/* webpackChunkName: 'pages.products.create' */ "./index"),
  (module) => module.CreateProduct,
  {
    fallback: <CreateProductSkeleton />,
  }
);
