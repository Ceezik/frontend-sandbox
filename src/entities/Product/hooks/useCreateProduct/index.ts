import { useMutation, useQueryClient } from "react-query";
import { axios } from "../../../../api/axios";
import { ProductFormValues } from "../../../../app/components/ProductForm/types";
import { Product } from "../../types";
import { USE_PRODUCTS_QUERY_KEY } from "../useProducts/constants";
import { UseCreateProductProps, UseCreateProductReturnType } from "./types";

const createProduct = async (product: ProductFormValues) => {
  const { data } = await axios.post<{ product: Product }>("/products", product);
  return data.product;
};

export const useCreateProduct = (
  props: UseCreateProductProps
): UseCreateProductReturnType => {
  const queryClient = useQueryClient();

  return useMutation((product: ProductFormValues) => createProduct(product), {
    onSuccess: () => {
      queryClient.invalidateQueries(USE_PRODUCTS_QUERY_KEY);
    },
  });
};
