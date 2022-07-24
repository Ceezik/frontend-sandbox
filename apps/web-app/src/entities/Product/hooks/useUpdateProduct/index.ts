import { useMutation, useQueryClient } from "react-query";
import { axios } from "../../../../api/axios";
import { ProductFormValues } from "../../../../app/components/ProductForm/types";
import { Product } from "../../types";
import { buildUseProductQueryKey } from "../useProduct/helpers/buildUseProductQueryKey";
import { USE_PRODUCTS_QUERY_KEY } from "../useProducts/constants";
import { UseUpdateProductProps, UseUpdateProductReturnType } from "./types";

const updateProduct = async (product: Product) => {
    const { data } = await axios.put<{ product: Product }>(`/products/${product._id}`, product);
    return data.product;
};

export const useUpdateProduct = (props: UseUpdateProductProps): UseUpdateProductReturnType => {
    const queryClient = useQueryClient();

    return useMutation((product: ProductFormValues) => updateProduct({ ...product, _id: props._id }), {
        onSuccess: (data) => {
            queryClient.invalidateQueries(USE_PRODUCTS_QUERY_KEY);
            queryClient.setQueryData(buildUseProductQueryKey(props), data);
        },
    });
};
