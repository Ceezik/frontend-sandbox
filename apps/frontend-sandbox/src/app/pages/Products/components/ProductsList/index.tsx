import React, { useMemo } from "react";
import { ProductsListItem } from "../../../../components/ProductsListItem";
import { ProductsListItemSkeleton } from "../../../../components/ProductsListItem/skeleton";
import { ProductsListLayout } from "./layout";
import { ProductsListProps } from "./types";

export const ProductsList = ({ isFetchingNextPage, fetchNextPage, hasNextPage, data }: ProductsListProps): JSX.Element => {
    const products = useMemo(
        () =>
            data.pages
                .map((page) => page.products)
                .flat()
                .map((product) => <ProductsListItem product={product} key={product._id} />),
        [data.pages],
    );

    return (
        <ProductsListLayout
            infiniteScrollParams={{
                loadMore: () => (isFetchingNextPage ? undefined : fetchNextPage()),
                hasMore: hasNextPage ?? false,
                loader: <ProductsListItemSkeleton key="loader" />,
            }}
            products={products}
        />
    );
};
