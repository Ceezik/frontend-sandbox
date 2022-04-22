import { UseQueryResult } from "react-query";
import { Product } from "../../types";

export type UseProductProps = {
  _id?: string;
};
export type UseProductReturnType = UseQueryResult<Product>;
