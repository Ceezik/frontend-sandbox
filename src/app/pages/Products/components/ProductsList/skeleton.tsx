import { ProductsListItemSkeleton } from "../../../../components/ProductsListItem/skeleton";

export const ProductsListSkeleton = (): JSX.Element => {
  return (
    <div>
      {Array.from({ length: 5 }, (_, idx) => (
        <ProductsListItemSkeleton key={idx} />
      ))}
    </div>
  );
};
