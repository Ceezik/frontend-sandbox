import { Form, Formik } from "formik";
import React, { useMemo } from "react";
import { DEFAULT_PRODUCT_FORM_VALUES } from "./constants";
import { ProductFormLayout } from "./layout";
import { MultiSelectTextInput } from "./MultiSelectTextInput";
import { TextInput } from "./TextInput";
import { ProductFormProps } from "./types";
import { productFormValidationSchema, productFormTagValidationSchema } from "./validation";

export const ProductForm = ({ product, onSubmit }: ProductFormProps): JSX.Element => {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={product ?? DEFAULT_PRODUCT_FORM_VALUES}
            validationSchema={productFormValidationSchema}
            validateOnBlur={false}
            validateOnChange={false}
        >
            {({ isSubmitting }) => {
                const form = useMemo(
                    () => (
                        <>
                            <TextInput name="name" placeholder="Name" label="Name" />
                            <TextInput name="description" placeholder="Description" label="Description" />
                            <TextInput name="image" placeholder="Image URL" label="Image" />
                            <TextInput name="price" type="number" placeholder="Price" label="Price" />
                            <MultiSelectTextInput
                                name="tags"
                                label="Tags"
                                placeholder="Add a tag"
                                valueValidationSchema={productFormTagValidationSchema}
                            />
                        </>
                    ),
                    [productFormTagValidationSchema],
                );
                const submitButton = useMemo(
                    () => (
                        <div>
                            <button disabled={isSubmitting} type="submit">
                                {isSubmitting ? "Submitting ..." : "Submit"}
                            </button>
                        </div>
                    ),
                    [isSubmitting],
                );

                return (
                    <Form>
                        <ProductFormLayout form={form} submitButton={submitButton} />
                    </Form>
                );
            }}
        </Formik>
    );
};
