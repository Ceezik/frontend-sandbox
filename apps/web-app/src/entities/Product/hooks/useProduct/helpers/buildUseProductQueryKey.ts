import { QueryKey } from "react-query";
import { USE_PRODUCT_QUERY_KEY } from "../constants";
import { UseProductProps } from "../types";

export const buildUseProductQueryKey = (params: UseProductProps): QueryKey => [USE_PRODUCT_QUERY_KEY, params._id];
