import { useField } from "formik";
import { TextInputProps } from "./types";

export const TextInput = ({ label, ...props }: TextInputProps): JSX.Element => {
  const [field, meta] = useField(props.name);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {label && <label>{label}</label>}
      <input {...field} {...props} />
      {meta.error && meta.touched && <div style={{ color: "red" }}>{meta.error}</div>}
    </div>
  );
};
