import Skeleton from "react-loading-skeleton";
import { ProductInfosSkeleton } from "./components/ProductInfos/skeleton";
import { RelatedProductsSkeleton } from "./components/RelatedProducts/skeleton";

export const ProductSkeleton = (): JSX.Element => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <Skeleton height="1.4rem" width="5rem" />
        <ProductInfosSkeleton />
      </div>

      <RelatedProductsSkeleton />
    </div>
  );
};
