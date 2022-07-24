import Skeleton from "react-loading-skeleton";
import { ProductInfosSkeleton } from "./components/ProductInfos/skeleton";
import { RelatedProductsSkeleton } from "./components/RelatedProducts/skeleton";
import { ProductLayout } from "./layout";

export const ProductSkeleton = (): JSX.Element => {
    return (
        <ProductLayout
            editButton={<Skeleton height="1.4rem" width="5rem" />}
            productInfos={<ProductInfosSkeleton />}
            relatedProducts={<RelatedProductsSkeleton />}
        />
    );
};
