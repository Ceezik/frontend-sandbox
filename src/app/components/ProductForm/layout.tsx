import { ProductFormLayoutProps } from "./types";

export const ProductFormLayout = ({ form, submitButton }: ProductFormLayoutProps): JSX.Element => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      {form}
      {submitButton}
    </div>
  );
};
