import { ProductsListItem } from "../../../../../../components/ProductsListItem";
import { RelatedProductsListProps } from "./types";

export const RelatedProductsList = ({
  data,
}: RelatedProductsListProps): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {data.pages
        .map((page) => page.products)
        .flat()
        .map((product) => (
          <ProductsListItem product={product} key={product._id} />
        ))}
    </div>
  );
};
