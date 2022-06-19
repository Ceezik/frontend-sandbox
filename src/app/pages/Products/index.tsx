import React, { useState } from "react";
import { useProducts } from "../../../entities/Product/hooks/useProducts";
import { Searchbar } from "../../components/Searchbar";
import { CreateProductButton } from "./components/CreateProductButton";
import { ProductsList } from "./components/ProductsList";
import { ProductsListSkeleton } from "./components/ProductsList/skeleton";
import { ProductsLayout } from "./layout";

export const Products = (): JSX.Element | null => {
  const [search, setSearch] = useState<undefined | string>(undefined);
  const { isSuccess, data, isError, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = useProducts({
    search,
  });

  return (
    <ProductsLayout
      searchbar={<Searchbar defaultSearch={search} onSearch={setSearch} />}
      createButton={<CreateProductButton />}
      list={(() => {
        if (isLoading) return <ProductsListSkeleton />;
        if (isError) return <p>Error!</p>;

        if (isSuccess)
          return (
            <ProductsList
              data={data}
              isFetchingNextPage={isFetchingNextPage}
              fetchNextPage={fetchNextPage}
              hasNextPage={hasNextPage}
            />
          );

        return null;
      })()}
    />
  );
};
