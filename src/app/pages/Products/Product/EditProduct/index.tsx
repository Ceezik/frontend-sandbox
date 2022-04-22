import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "../../../../../entities/Product/hooks/useProduct";
import { useUpdateProduct } from "../../../../../entities/Product/hooks/useUpdateProduct";
import { ProductForm } from "../../../../components/ProductForm";
import { ProductFormSkeleton } from "../../../../components/ProductForm/skeleton";
import { ProductFormValues } from "../../../../components/ProductForm/types";
import { ProductURLParams } from "../types";

export const EditProduct = (): JSX.Element | null => {
  const { productId } = useParams<ProductURLParams>();
  const navigate = useNavigate();
  const { isLoading, isError, isSuccess, data } = useProduct({
    _id: productId,
  });
  const updateProduct = useUpdateProduct({ _id: productId! });

  if (isLoading) return <ProductFormSkeleton />;
  if (isError) return <p>Error ...</p>;

  const handleEditProduct = async (values: ProductFormValues) => {
    await updateProduct.mutateAsync(values);
    navigate(`/products/${productId}`);
  };

  if (isSuccess)
    return <ProductForm product={data} onSubmit={handleEditProduct} />;

  return null;
};
