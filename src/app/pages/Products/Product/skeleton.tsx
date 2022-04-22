import Skeleton from "react-loading-skeleton";
import { ProductInfosSkeleton } from "./components/ProductInfos/skeleton";
import { RelatedProductsSkeleton } from "./components/RelatedProducts/skeleton";

export const ProductSkeleton = (): JSX.Element => {
  return (
    <div>
      <div>
        <Skeleton />
        <ProductInfosSkeleton />
      </div>

      <RelatedProductsSkeleton />
    </div>
  );
};
