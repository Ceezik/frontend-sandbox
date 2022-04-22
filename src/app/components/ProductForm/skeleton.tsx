import Skeleton from "react-loading-skeleton";
import { DEFAULT_PRODUCT_FORM_VALUES } from "./constants";

export const ProductFormSkeleton = (): JSX.Element => {
  return (
    <div>
      {Object.keys(DEFAULT_PRODUCT_FORM_VALUES).map((key) => (
        <Skeleton key={key} />
      ))}

      <Skeleton />
    </div>
  );
};
