import { SearchbarSkeleton } from "../../components/Searchbar/skeleton";
import { CreateProductButtonSkeleton } from "./components/CreateProductButton/skeleton";
import { ProductsListSkeleton } from "./components/ProductsList/skeleton";

export const ProductsSkeleton = (): JSX.Element => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <SearchbarSkeleton />
        <CreateProductButtonSkeleton />
      </div>
      <ProductsListSkeleton />;
    </div>
  );
};
