import { Link } from "react-router-dom";
import { Image } from "../Image";
import { ProductsListItemProps } from "./types";

export const ProductsListItem = ({
  product,
}: ProductsListItemProps): JSX.Element => {
  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: 15,
        padding: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Image
        style={{ height: "10rem", width: "10rem", objectFit: "cover" }}
        src={product.image}
        alt={product.name}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
        }}
      >
        <Link
          style={{ color: "black", textDecoration: "none" }}
          to={`/products/${product._id}`}
        >
          <h3 style={{ margin: 0 }}>{product.name}</h3>
        </Link>
        <p style={{ margin: 0 }}>{product.description}</p>
      </div>
    </div>
  );
};
