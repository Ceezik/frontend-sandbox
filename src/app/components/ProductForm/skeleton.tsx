import Skeleton from "react-loading-skeleton";
import { DEFAULT_PRODUCT_FORM_VALUES } from "./constants";
import { ProductFormLayout } from "./layout";
import { MultiSelectTextInputSkeleton } from "./MultiSelectTextInput/skeleton";
import { TextInputSkeleton } from "./TextInput/skeleton";

export const ProductFormSkeleton = (): JSX.Element => {
  return (
    <ProductFormLayout
      form={Object.entries(DEFAULT_PRODUCT_FORM_VALUES).map(([key, value]) => {
        if (Array.isArray(value)) return <MultiSelectTextInputSkeleton key={key} />;
        return <TextInputSkeleton key={key} />;
      })}
      submitButton={<Skeleton height="1.3rem" width="6rem" />}
    />
  );
};
