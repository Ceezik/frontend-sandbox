import * as Yup from "yup";

export type MultiSelectTextInputProps = {
  name: string;
  label?: string;
  valueValidationSchema?: Yup.StringSchema;
} & React.HTMLProps<HTMLInputElement>;

export type MultiSelectTextInputValues = {
  value: string;
};
