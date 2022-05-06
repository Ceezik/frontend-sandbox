import { RelatedProductsListLayoutProps } from "./types";

export const RelatedProductsListLayout = ({
  relatedProducts,
}: RelatedProductsListLayoutProps): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {relatedProducts}
    </div>
  );
};
