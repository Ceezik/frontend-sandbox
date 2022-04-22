import React from "react";
import { lazyLoad } from "../../../../../helpers/lazyLoad";

export const EditProductLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.EditProduct,
  {
    fallback: <p>loafing</p>,
  }
);
