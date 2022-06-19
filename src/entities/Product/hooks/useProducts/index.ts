import { useInfiniteQuery } from "react-query";
import { axios } from "../../../../api/axios";
import { Product } from "../../types";
import { buildUseProductsQueryKey } from "./helpers/buildUseProductsQueryKey";
import { UseProductsProps, UseProductsReturnType } from "./types";

const fetchProducts = async (params: { start: number; count: number; search?: string; tags?: Array<string> }) => {
  const { data } = await axios.get<{ products: Array<Product>; count: number }>("/products", {
    params,
  });
  return {
    ...data,
    nextPage: params.start + params.count < data.count ? params.start + params.count : undefined,
  };
};

export const useProducts = (props: UseProductsProps): UseProductsReturnType => {
  return useInfiniteQuery(
    buildUseProductsQueryKey(props),
    ({ pageParam }) =>
      fetchProducts({
        start: pageParam ?? 0,
        count: props.count ?? 20,
        tags: props.tags,
        search: props.search && props.search.trim().length ? props.search : undefined,
      }),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );
};
