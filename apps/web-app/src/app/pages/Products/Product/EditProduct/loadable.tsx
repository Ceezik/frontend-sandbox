import React from "react";
import { lazyLoad } from "@/helpers/lazyLoad";
import { EditProductSkeleton } from "./skeleton";

export const EditProductLoadable = lazyLoad(
    () => import(/* webpackChunkName: 'pages.products.product.edit' */ "./index"),
    (module) => module.EditProduct,
    {
        fallback: <EditProductSkeleton />,
    },
);
