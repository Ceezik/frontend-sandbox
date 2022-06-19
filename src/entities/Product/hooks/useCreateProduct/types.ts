import { UseMutationResult } from "react-query";
import { ProductFormValues } from "../../../../app/components/ProductForm/types";
import { Product } from "../../types";

export type UseCreateProductReturnType = UseMutationResult<Product, unknown, ProductFormValues>;
