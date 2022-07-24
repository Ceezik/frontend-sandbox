import React, { useMemo } from "react";
import { useProducts } from "../../../../../../entities/Product/hooks/useProducts";
import { RelatedProductsLayout } from "./layout";
import { RelatedProductsListWrapper } from "./RelatedProductsListWrapper";
import { RelatedProductsProps } from "./types";

export const RelatedProducts = ({ tags }: RelatedProductsProps): JSX.Element => {
    const useProductsState = useProducts({
        count: 3,
        tags,
    });

    const relatedProducts = useMemo(() => <RelatedProductsListWrapper {...useProductsState} />, [useProductsState]);

    return <RelatedProductsLayout title={<h1 style={{ margin: 0 }}>Related Products</h1>} relatedProducts={relatedProducts} />;
};
