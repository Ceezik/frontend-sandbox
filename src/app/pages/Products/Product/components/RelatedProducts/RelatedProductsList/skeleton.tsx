import { ProductsListItemSkeleton } from "../../../../../../components/ProductsListItem/skeleton";

export const RelatedProductsListSkeleton = (): JSX.Element => {
  return (
    <div>
      {Array.from({ length: 3 }, (_, idx) => (
        <ProductsListItemSkeleton key={idx} />
      ))}
    </div>
  );
};
