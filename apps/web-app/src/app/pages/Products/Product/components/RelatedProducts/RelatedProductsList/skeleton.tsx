import { ProductsListItemSkeleton } from "@/app/components/ProductsListItem/skeleton";
import { RelatedProductsListLayout } from "./layout";

export const RelatedProductsListSkeleton = (): JSX.Element => {
    return (
        <RelatedProductsListLayout
            relatedProducts={Array.from({ length: 3 }, (_, idx) => (
                <ProductsListItemSkeleton key={idx} />
            ))}
        />
    );
};
