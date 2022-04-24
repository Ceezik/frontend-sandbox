import Skeleton from "react-loading-skeleton";
import { DEFAULT_PRODUCT_FORM_VALUES } from "./constants";
import { TextInputSkeleton } from "./TextInput/skeleton";

export const ProductFormSkeleton = (): JSX.Element => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {Object.keys(DEFAULT_PRODUCT_FORM_VALUES).map((key) => (
        <TextInputSkeleton key={key} />
      ))}

      <Skeleton height="1.3rem" width="6rem" />
    </div>
  );
};
