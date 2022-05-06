import { ProductsListItem } from "../../../../../../components/ProductsListItem";
import { RelatedProductsListLayout } from "./layout";
import { RelatedProductsListProps } from "./types";

export const RelatedProductsList = ({
  data,
}: RelatedProductsListProps): JSX.Element => {
  return (
    <RelatedProductsListLayout
      relatedProducts={data.pages
        .map((page) => page.products)
        .flat()
        .map((product) => (
          <ProductsListItem product={product} key={product._id} />
        ))}
    />
  );
};
