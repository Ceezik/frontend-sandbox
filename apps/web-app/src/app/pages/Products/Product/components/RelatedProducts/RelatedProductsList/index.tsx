import { useMemo } from "react";
import { ProductsListItem } from "../../../../../../components/ProductsListItem";
import { RelatedProductsListLayout } from "./layout";
import { RelatedProductsListProps } from "./types";

export const RelatedProductsList = ({ data }: RelatedProductsListProps): JSX.Element => {
    const relatedProducts = useMemo(
        () =>
            data.pages
                .map((page) => page.products)
                .flat()
                .map((product) => <ProductsListItem product={product} key={product._id} />),
        [data.pages],
    );

    return <RelatedProductsListLayout relatedProducts={relatedProducts} />;
};
