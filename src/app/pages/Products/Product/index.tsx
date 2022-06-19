import React from "react";
import { useParams } from "react-router-dom";
import { EditProductButton } from "./components/EditProductButton";
import { ProductInfos } from "./components/ProductInfos";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductLayout } from "./layout";
import { ProductSkeleton } from "./skeleton";
import { ProductProps, ProductURLParams } from "./types";

export const Product = ({ isLoading, isError, isSuccess, data }: ProductProps): JSX.Element | null => {
  const { productId } = useParams<ProductURLParams>();

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
