import { UseProductsReturnType } from "../../../../../entities/Product/hooks/useProducts/types";
import InfiniteScroll from "react-infinite-scroller";

export type ProductsListProps = Pick<UseProductsReturnType, "isFetchingNextPage" | "fetchNextPage" | "hasNextPage"> & {
    data: NonNullable<UseProductsReturnType["data"]>;
};

export type ProductsListLayoutProps = {
    products: React.ReactNode;
    infiniteScrollParams: React.ComponentProps<typeof InfiniteScroll>;
};
