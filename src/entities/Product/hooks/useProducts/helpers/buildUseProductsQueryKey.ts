import { QueryKey } from "react-query";
import { USE_PRODUCTS_QUERY_KEY } from "../constants";
import { UseProductsProps } from "../types";

export const buildUseProductsQueryKey = (
  params: UseProductsProps
): QueryKey => [
  USE_PRODUCTS_QUERY_KEY,
  params.search,
  params.count,
  params.tags,
];
