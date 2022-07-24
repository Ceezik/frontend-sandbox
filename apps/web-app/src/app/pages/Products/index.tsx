import React, { useMemo, useState } from "react";
import { useProducts } from "../../../entities/Product/hooks/useProducts";
import { Searchbar } from "../../components/Searchbar";
import { CreateProductButton } from "./components/CreateProductButton";
import { ProductsListWrapper } from "./components/ProductsListWrapper";
import { ProductsLayout } from "./layout";

export const Products = (): JSX.Element | null => {
    const [search, setSearch] = useState<undefined | string>(undefined);
    const useProductsState = useProducts({ search });

    const searchbar = useMemo(() => <Searchbar defaultSearch={search} onSearch={setSearch} />, [search, setSearch]);
    const createProductButton = useMemo(() => <CreateProductButton />, []);
    const list = useMemo(() => <ProductsListWrapper {...useProductsState} />, [useProductsState]);

    return <ProductsLayout searchbar={searchbar} createButton={createProductButton} list={list} />;
};
