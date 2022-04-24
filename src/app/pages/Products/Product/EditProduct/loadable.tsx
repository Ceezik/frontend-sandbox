import React from "react";
import { lazyLoad } from "../../../../../helpers/lazyLoad";
import { EditProductSkeleton } from "./skeleton";

export const EditProductLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.EditProduct,
  {
    fallback: <EditProductSkeleton />,
  }
);
