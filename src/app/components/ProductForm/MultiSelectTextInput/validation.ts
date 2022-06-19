import * as Yup from "yup";
import { MultiSelectTextInputProps } from "./types";

const valueDefaultValidationSchema = Yup.string().required();

export const buildMultiSelectTextInputValidationSchema = ({
  valueValidationSchema = valueDefaultValidationSchema,
}: Pick<MultiSelectTextInputProps, "valueValidationSchema">) => Yup.object({ value: valueValidationSchema });
