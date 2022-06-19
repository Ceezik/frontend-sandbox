import * as Yup from "yup";

export const productFormTagValidationSchema = Yup.string().required().min(3).max(50);

export const productFormValidationSchema = Yup.object({
  name: Yup.string().required().min(3).max(50),
  description: Yup.string().required().min(3).max(500),
  image: Yup.string().required().url(),
  price: Yup.number().required().min(0),
  tags: Yup.array(productFormTagValidationSchema),
});
