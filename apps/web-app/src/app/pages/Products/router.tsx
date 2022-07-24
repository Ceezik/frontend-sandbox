import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateProductLoadable } from "./CreateProduct/loadable";
import { ProductsLoadable } from "./loadable";
import { ProductRouter } from "./Product/router";

export const ProductsRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route index element={<ProductsLoadable />} />
            <Route path="create" element={<CreateProductLoadable />} />
            <Route path=":productId/*" element={<ProductRouter />} />
        </Routes>
    );
};
