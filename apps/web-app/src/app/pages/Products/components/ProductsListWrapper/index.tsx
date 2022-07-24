import { ProductsList } from "../ProductsList";
import { ProductsListSkeleton } from "../ProductsList/skeleton";
import { ProductsListWrapperProps } from "./types";

export const ProductsListWrapper = ({
    isLoading,
    isError,
    isSuccess,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
}: ProductsListWrapperProps): JSX.Element | null => {
    if (isLoading) return <ProductsListSkeleton />;
    if (isError) return <p>Error!</p>;

    if (isSuccess)
        return <ProductsList data={data} isFetchingNextPage={isFetchingNextPage} fetchNextPage={fetchNextPage} hasNextPage={hasNextPage} />;

    return null;
};
