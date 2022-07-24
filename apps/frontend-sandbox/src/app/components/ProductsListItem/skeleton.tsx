import React from "react";
import Skeleton from "react-loading-skeleton";
import { ProductsListItemLayout } from "./layout";

export const ProductsListItemSkeleton = (): JSX.Element => {
    return (
        <ProductsListItemLayout
            image={<Skeleton style={{ height: "10rem", width: "10rem" }} />}
            name={<Skeleton height="1.5rem" width="100%" />}
            description={<Skeleton height="1.2rem" width="100%" count={2} />}
        />
    );
};
