import React from "react";
import Skeleton from "react-loading-skeleton";

export const ProductsListItemSkeleton = (): JSX.Element => {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        gap: "1rem",
        border: "1px solid transparent",
      }}
    >
      <Skeleton
        style={{ height: "10rem", width: "10rem", objectFit: "cover" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Skeleton height="1.5rem" width="100%" />
        <Skeleton height="1.2rem" width="100%" count={2} />
      </div>
    </div>
  );
};
