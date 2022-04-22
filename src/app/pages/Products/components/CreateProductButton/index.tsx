import { Link } from "react-router-dom";

export const CreateProductButton = (): JSX.Element => {
  return (
    <Link to="/products/create">
      <button>Create</button>
    </Link>
  );
};
