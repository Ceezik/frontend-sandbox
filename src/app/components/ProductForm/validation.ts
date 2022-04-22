import * as Yup from "yup";

export const productFormValidationSchema = Yup.object({
  name: Yup.string().required().min(3).max(50),
  description: Yup.string().required().min(3).max(500),
  image: Yup.string().required().url(),
  price: Yup.number().required().min(0),
  tags: Yup.array(Yup.string().required().min(3).max(50)),
});
