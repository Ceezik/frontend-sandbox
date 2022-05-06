import React from "react";

export type ProductURLParams = {
  productId: string;
};

export type ProductLayoutProps = {
  editButton: React.ReactNode;
  productInfos: React.ReactNode;
  relatedProducts: React.ReactNode;
};
