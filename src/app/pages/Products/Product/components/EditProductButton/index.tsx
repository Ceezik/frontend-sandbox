import { Link } from "react-router-dom";
import { EditProductButtonProps } from "./types";

export const EditProductButton = ({ productId }: EditProductButtonProps): JSX.Element => {
  return (
    <Link to={`/products/${productId}/edit`}>
      <button>Edit</button>
    </Link>
  );
};
