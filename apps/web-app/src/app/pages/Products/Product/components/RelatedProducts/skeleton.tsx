import Skeleton from "react-loading-skeleton";
import { RelatedProductsLayout } from "./layout";
import { RelatedProductsListSkeleton } from "./RelatedProductsList/skeleton";

export const RelatedProductsSkeleton = (): JSX.Element => {
    return <RelatedProductsLayout title={<Skeleton height="1.5rem" width="15rem" />} relatedProducts={<RelatedProductsListSkeleton />} />;
};
