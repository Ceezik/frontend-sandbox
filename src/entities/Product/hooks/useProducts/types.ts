import { UseInfiniteQueryResult } from "react-query";
import { Product } from "../../types";

export type UseProductsProps = {
  search?: string;
  count?: number;
  tags?: Array<string>;
};
export type UseProductsReturnType = UseInfiniteQueryResult<{
  products: Array<Product>;
  count: number;
}>;
