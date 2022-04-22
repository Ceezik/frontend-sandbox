import { useNavigate } from "react-router-dom";
import { useCreateProduct } from "../../../../entities/Product/hooks/useCreateProduct";
import { ProductForm } from "../../../components/ProductForm";
import { ProductFormValues } from "../../../components/ProductForm/types";

export const CreateProduct = (): JSX.Element => {
  const createProduct = useCreateProduct({});
  const navigate = useNavigate();

  const handleCreateProduct = async (values: ProductFormValues) => {
    const product = await createProduct.mutateAsync(values);
    navigate(`/products/${product._id}`);
  };

  return <ProductForm onSubmit={handleCreateProduct} />;
};
