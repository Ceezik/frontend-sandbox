import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useProduct } from "../../../../entities/Product/hooks/useProduct";
import { EditProductLoadable } from "./EditProduct/loadable";
import { ProductLoadable } from "./loadable";
import { ProductURLParams } from "./types";

export const ProductRouter = (): JSX.Element => {
    const { productId } = useParams<ProductURLParams>();
    const useProductState = useProduct({
        _id: productId,
    });

    return (
        <Routes>
            <Route index element={<ProductLoadable {...useProductState} />} />
            <Route path="edit" element={<EditProductLoadable {...useProductState} />} />
        </Routes>
    );
};
