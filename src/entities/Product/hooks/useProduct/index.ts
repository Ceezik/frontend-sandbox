import { useQuery, useQueryClient, QueryClient } from "react-query";
import { axios } from "../../../../api/axios";
import { Product } from "../../types";
import { USE_PRODUCTS_QUERY_KEY } from "../useProducts/constants";
import { UseProductsReturnType } from "../useProducts/types";
import { buildUseProductQueryKey } from "./helpers/buildUseProductQueryKey";
import { UseProductProps, UseProductReturnType } from "./types";

const fetchProduct = async (_id: string): Promise<Product> => {
  const { data } = await axios.get<{ product: Product }>(`/products/${_id}`);
  return data.product;
};

const getInitialData = ({
  queryClient,
  productId,
}: {
  queryClient: QueryClient;
  productId: UseProductProps["_id"];
}): Product | undefined => {
  const cached = queryClient.getQueryData<UseProductsReturnType["data"]>(
    USE_PRODUCTS_QUERY_KEY,
    { exact: false }
  );
  if (!cached) return undefined;

  return cached.pages
    .map((p) => p.products)
    .flat()
    .find((p) => p._id === productId);
};

export const useProduct = (props: UseProductProps): UseProductReturnType => {
  const queryClient = useQueryClient();

  return useQuery(
    buildUseProductQueryKey(props),
    () => fetchProduct(props._id!),
    {
      enabled: !!props._id,
      initialData: () => getInitialData({ queryClient, productId: props._id }),
    }
  );
};
