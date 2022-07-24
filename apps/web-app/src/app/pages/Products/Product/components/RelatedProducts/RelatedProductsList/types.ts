import { UseProductsReturnType } from "../../../../../../../entities/Product/hooks/useProducts/types";

export type RelatedProductsListProps = {
    data: NonNullable<UseProductsReturnType["data"]>;
};

export type RelatedProductsListLayoutProps = {
    relatedProducts: React.ReactNode;
};
