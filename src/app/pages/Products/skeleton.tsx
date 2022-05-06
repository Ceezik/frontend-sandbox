import { SearchbarSkeleton } from "../../components/Searchbar/skeleton";
import { CreateProductButtonSkeleton } from "./components/CreateProductButton/skeleton";
import { ProductsListSkeleton } from "./components/ProductsList/skeleton";
import { ProductsLayout } from "./layout";

export const ProductsSkeleton = (): JSX.Element => {
  return (
    <ProductsLayout
      searchbar={<SearchbarSkeleton />}
      createButton={<CreateProductButtonSkeleton />}
      list={<ProductsListSkeleton />}
    />
  );
};
