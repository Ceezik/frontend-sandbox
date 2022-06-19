import React from "react";
import { EditProductButton } from "./components/EditProductButton";
import { ProductInfos } from "./components/ProductInfos";
import { RelatedProducts } from "./components/RelatedProducts";
import { ProductLayout } from "./layout";
import { ProductSkeleton } from "./skeleton";
import { ProductProps } from "./types";

export const Product = ({ isLoading, isError, isSuccess, data }: ProductProps): JSX.Element | null => {
  if (isLoading) return <ProductSkeleton />;
  if (isError) return <p>Error ...</p>;

  if (isSuccess)
    return (
      <ProductLayout
        editButton={<EditProductButton productId={data._id} />}
        productInfos={<ProductInfos product={data} />}
        relatedProducts={<RelatedProducts tags={data.tags} />}
      />
    );

  return null;
};
