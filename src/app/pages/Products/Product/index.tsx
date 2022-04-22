import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../../entities/Product/hooks/useProduct";
import { EditProductButton } from "./components/EditProductButton";
import { ProductInfos } from "./components/ProductInfos";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductSkeleton } from "./skeleton";
import { ProductURLParams } from "./types";

export const Product = (): JSX.Element | null => {
  const { productId } = useParams<ProductURLParams>();
  const { isLoading, isError, isSuccess, data } = useProduct({
    _id: productId,
  });

  if (isLoading) return <ProductSkeleton />;
  if (isError) return <p>Error ...</p>;

  if (isSuccess)
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <EditProductButton productId={productId} />
          <ProductInfos product={data} />
        </div>

        <RelatedProducts tags={data.tags} />
      </div>
    );

  return null;
};
