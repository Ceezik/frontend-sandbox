import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { ProductsListItem } from "../../../../components/ProductsListItem";
import { ProductsListItemSkeleton } from "../../../../components/ProductsListItem/skeleton";
import { ProductsListLayout } from "./layout";
import { ProductsListProps } from "./types";

export const ProductsList = ({
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
  data,
}: ProductsListProps): JSX.Element => {
  return (
    <ProductsListLayout
      infiniteScrollParams={{
        loadMore: () => (isFetchingNextPage ? undefined : fetchNextPage()),
        hasMore: hasNextPage ?? false,
        loader: <ProductsListItemSkeleton key="loader" />,
      }}
      products={data.pages
        .map((page) => page.products)
        .flat()
        .map((product) => (
          <ProductsListItem product={product} key={product._id} />
        ))}
    />
  );
};
