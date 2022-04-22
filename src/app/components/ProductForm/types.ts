import { Product } from "../../../entities/Product/types";

export type ProductFormValues = {
  name: string;
  price: number;
  description: string;
  image: string;
  tags: Array<string>;
};

export type ProductFormProps = {
  product?: Product;
  onSubmit: (values: ProductFormValues) => Promise<void>;
};
