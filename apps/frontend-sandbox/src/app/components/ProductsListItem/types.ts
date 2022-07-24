import { Product } from "../../../entities/Product/types";

export type ProductsListItemProps = {
    product: Product;
};

export type ProductsListItemLayoutProps = {
    image: React.ReactNode;
    name: React.ReactNode;
    description: React.ReactNode;
};
