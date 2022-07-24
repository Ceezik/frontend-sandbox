import { UseMutationResult } from "react-query";
import { ProductFormValues } from "@/app/components/ProductForm/types";
import { Product } from "../../types";

export type UseUpdateProductProps = { _id: string };

export type UseUpdateProductReturnType = UseMutationResult<Product, unknown, ProductFormValues>;
