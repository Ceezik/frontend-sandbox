import { UseProductsReturnType } from "../../../../../entities/Product/hooks/useProducts/types";

export type ProductsListProps = Pick<
  UseProductsReturnType,
  "isFetchingNextPage" | "fetchNextPage" | "hasNextPage"
> & { data: NonNullable<UseProductsReturnType["data"]> };
