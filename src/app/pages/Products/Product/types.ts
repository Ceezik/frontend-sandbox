import React from "react";
import { useProduct } from "../../../../entities/Product/hooks/useProduct";

export type ProductURLParams = {
  productId: string;
};

export type ProductProps = ReturnType<typeof useProduct>;

export type ProductLayoutProps = {
  editButton: React.ReactNode;
  productInfos: React.ReactNode;
  relatedProducts: React.ReactNode;
};
