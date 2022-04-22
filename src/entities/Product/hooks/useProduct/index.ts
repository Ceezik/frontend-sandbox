import { useQuery, useQueryClient } from "react-query";
import { axios } from "../../../../api/axios";
import { Product } from "../../types";
import { buildUseProductsQueryKey } from "../useProducts/helpers/buildUseProductsQueryKey";
import { UseProductsReturnType } from "../useProducts/types";
import { buildUseProductQueryKey } from "./helpers/buildUseProductQueryKey";
import { UseProductProps, UseProductReturnType } from "./types";

const fetchProduct = async (_id: string): Promise<Product> => {
  const { data } = await axios.get<{ product: Product }>(`/products/${_id}`);
  return data.product;
};

export const useProduct = (props: UseProductProps): UseProductReturnType => {
  const queryClient = useQueryClient();

  return useQuery(
    buildUseProductQueryKey(props),
    () => fetchProduct(props._id!),
    {
      enabled: !!props._id,
      initialData: () => {
        const cached = queryClient.getQueryData<UseProductsReturnType["data"]>(
          buildUseProductsQueryKey({})
        );
        if (!cached) return undefined;

        return cached.pages
          .map((p) => p.products)
          .flat()
          .find((p) => p._id === props._id);
      },
    }
  );
};
