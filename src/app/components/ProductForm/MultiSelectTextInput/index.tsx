import { useField, FieldArray, Formik } from "formik";
import { TextInput } from "../TextInput";
import { DEFAULT_MULTI_SELECT_TEXT_INPUT_VALUES } from "./constants";
import { MultiSelectTextInputProps } from "./types";
import { buildMultiSelectTextInputValidationSchema } from "./validation";

export const MultiSelectTextInput = ({
  label,
  name,
  disabled,
  placeholder,
  valueValidationSchema,
  ...props
}: MultiSelectTextInputProps): JSX.Element => {
  const [field, meta] = useField<Array<string>>(name);
  const multiSelectTextInputValidationSchema =
    buildMultiSelectTextInputValidationSchema({ valueValidationSchema });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {label && <label>{label}</label>}

      <FieldArray name={name} {...props}>
        {({ remove, push }) => (
          <div
            style={{ display: "flex", gap: "0.25rem", flexDirection: "column" }}
          >
            <Formik
              onSubmit={({ value }, { resetForm }) => {
                if (!field.value.includes(value)) push(value);
                resetForm();
              }}
              initialValues={DEFAULT_MULTI_SELECT_TEXT_INPUT_VALUES}
              validationSchema={multiSelectTextInputValidationSchema}
              validateOnBlur={false}
              validateOnChange={false}
            >
              {({ isSubmitting, submitForm }) => (
                <div
                  onKeyDownCapture={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      submitForm();
                    }
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <TextInput
                      disabled={disabled}
                      placeholder={placeholder}
                      type="text"
                      name="value"
                    />

                    <button
                      disabled={disabled ?? isSubmitting}
                      type="button"
                      onClick={submitForm}
                    >
                      {isSubmitting ? "Adding..." : "Add"}
                    </button>

                    {meta.error && meta.touched && (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    )}
                  </div>
                </div>
              )}
            </Formik>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {field.value.map((value, idx) => (
                <div
                  key={value}
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                  }}
                >
                  <div>{value}</div>
                  <button
                    type="button"
                    style={{ color: "red" }}
                    disabled={disabled}
                    onClick={() => remove(idx)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </FieldArray>

      {meta.error && meta.touched && (
        <div style={{ color: "red" }}>{meta.error}</div>
      )}
    </div>
  );
};
