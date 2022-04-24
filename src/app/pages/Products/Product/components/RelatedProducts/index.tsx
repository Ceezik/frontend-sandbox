import React from "react";
import { useProducts } from "../../../../../../entities/Product/hooks/useProducts";
import { RelatedProductsList } from "./RelatedProductsList";
import { RelatedProductsListSkeleton } from "./RelatedProductsList/skeleton";
import { RelatedProductsProps } from "./types";

export const RelatedProducts = ({
  tags,
}: RelatedProductsProps): JSX.Element => {
  const { isError, isLoading, isSuccess, data } = useProducts({
    count: 3,
    tags,
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1 style={{ margin: 0 }}>Related Products</h1>
      {(() => {
        if (isLoading) return <RelatedProductsListSkeleton />;
        if (isError) return <p>Error ...</p>;

        if (isSuccess) return <RelatedProductsList data={data} />;
      })()}
    </div>
  );
};
