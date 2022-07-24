import { ProductsListItemSkeleton } from "../../../../components/ProductsListItem/skeleton";
import { ProductsListLayout } from "./layout";

export const ProductsListSkeleton = (): JSX.Element => {
    return (
        <ProductsListLayout
            infiniteScrollParams={{ loadMore: () => 0, hasMore: false }}
            products={Array.from({ length: 5 }, (_, idx) => (
                <ProductsListItemSkeleton key={idx} />
            ))}
        />
    );
};
