import Skeleton from "react-loading-skeleton";
import { DEFAULT_PRODUCT_FORM_VALUES } from "./constants";
import { ProductFormLayout } from "./layout";
import { TextInputSkeleton } from "./TextInput/skeleton";

export const ProductFormSkeleton = (): JSX.Element => {
  return (
    <ProductFormLayout
      form={Object.keys(DEFAULT_PRODUCT_FORM_VALUES).map((key) => (
        <TextInputSkeleton key={key} />
      ))}
      submitButton={<Skeleton height="1.3rem" width="6rem" />}
    />
  );
};
