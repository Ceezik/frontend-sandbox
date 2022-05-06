import React from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../../../../entities/Product/hooks/useProduct";
import { EditProductButton } from "./components/EditProductButton";
import { ProductInfos } from "./components/ProductInfos";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductLayout } from "./layout";
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
      <ProductLayout
        editButton={<EditProductButton productId={productId} />}
        productInfos={<ProductInfos product={data} />}
        relatedProducts={<RelatedProducts tags={data.tags} />}
      />
    );

  return null;
};
