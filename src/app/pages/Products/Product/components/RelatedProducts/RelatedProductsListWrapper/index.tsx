import { RelatedProductsList } from "../RelatedProductsList";
import { RelatedProductsListSkeleton } from "../RelatedProductsList/skeleton";
import { RelatedProductsListWrapperProps } from "./types";

export const RelatedProductsListWrapper = ({
  isLoading,
  isError,
  isSuccess,
  data,
}: RelatedProductsListWrapperProps): JSX.Element | null => {
  if (isLoading) return <RelatedProductsListSkeleton />;
  if (isError) return <p>Error ...</p>;

  if (isSuccess) return <RelatedProductsList data={data} />;

  return null;
};
