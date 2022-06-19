import { ProductsListLayoutProps } from "./types";
import InfiniteScroll from "react-infinite-scroller";

export const ProductsListLayout = ({ products, infiniteScrollParams }: ProductsListLayoutProps): JSX.Element => {
  return (
    <InfiniteScroll style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }} {...infiniteScrollParams}>
      {products}
    </InfiniteScroll>
  );
};
