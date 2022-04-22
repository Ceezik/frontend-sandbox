import Skeleton from "react-loading-skeleton";
import { RelatedProductsListSkeleton } from "./RelatedProductsList/skeleton";

export const RelatedProductsSkeleton = (): JSX.Element => {
  return (
    <div>
      <Skeleton />
      <RelatedProductsListSkeleton />
    </div>
  );
};
