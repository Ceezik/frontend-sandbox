import React from "react";
import Skeleton from "react-loading-skeleton";

export const ProductsListItemSkeleton = (): JSX.Element => {
  return (
    <div>
      <Skeleton />
      <div>
        <Skeleton />
        <Skeleton count={2} />
      </div>
    </div>
  );
};
