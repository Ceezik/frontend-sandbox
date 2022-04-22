import React from "react";
import { Route, Routes } from "react-router-dom";
import { EditProductLoadable } from "./EditProduct/loadable";
import { ProductLoadable } from "./loadable";

export const ProductRouter = (): JSX.Element => {
  return (
    <Routes>
      <Route index element={<ProductLoadable />} />
      <Route path="edit" element={<EditProductLoadable />} />
    </Routes>
  );
};
