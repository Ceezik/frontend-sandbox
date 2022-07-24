import { Product } from "../../../../../../entities/Product/types";

export type ProductInfosProps = {
    product: Product;
};

export type ProductInfosLayoutProps = {
    name: React.ReactNode;
    price: React.ReactNode;
    description: React.ReactNode;
    tags: React.ReactNode;
};
