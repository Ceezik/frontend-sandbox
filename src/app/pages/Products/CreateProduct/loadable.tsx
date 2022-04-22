import React from "react";
import { lazyLoad } from "../../../../helpers/lazyLoad";

export const CreateProductLoadable = lazyLoad(
  () => import("./index"),
  (module) => module.CreateProduct,
  {
    fallback: <p>loafing</p>,
  }
);
