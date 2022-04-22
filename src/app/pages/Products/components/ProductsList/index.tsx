import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { ProductsListItem } from "../../../../components/ProductsListItem";
import { ProductsListItemSkeleton } from "../../../../components/ProductsListItem/skeleton";
import { ProductsListProps } from "./types";

export const ProductsList = ({
  isFetchingNextPage,
  fetchNextPage,
  hasNextPage,
  data,
}: ProductsListProps): JSX.Element => {
  return (
    <InfiniteScroll
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
      loadMore={() => (isFetchingNextPage ? undefined : fetchNextPage())}
      hasMore={hasNextPage ?? false}
      loader={<ProductsListItemSkeleton key="loader" />}
    >
      {data.pages
        .map((page) => page.products)
        .flat()
        .map((product) => (
          <ProductsListItem product={product} key={product._id} />
        ))}
    </InfiniteScroll>
  );
};
