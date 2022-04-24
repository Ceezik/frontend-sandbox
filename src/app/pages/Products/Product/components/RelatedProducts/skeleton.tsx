import Skeleton from "react-loading-skeleton";
import { RelatedProductsListSkeleton } from "./RelatedProductsList/skeleton";

export const RelatedProductsSkeleton = (): JSX.Element => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Skeleton height="1.5rem" width="15rem" />
      <RelatedProductsListSkeleton />
    </div>
  );
};
