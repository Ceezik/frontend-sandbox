import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Image } from "../Image";
import { ProductsListItemLayout } from "./layout";
import { ProductsListItemProps } from "./types";

export const ProductsListItem = ({ product }: ProductsListItemProps): JSX.Element => {
  const image = useMemo(
    () => (
      <Image style={{ height: "10rem", width: "10rem", objectFit: "cover" }} src={product.image} alt={product.name} />
    ),
    [product]
  );
  const name = useMemo(
    () => (
      <Link style={{ color: "black", textDecoration: "none" }} to={`/products/${product._id}`}>
        <h3 style={{ margin: 0 }}>{product.name}</h3>
      </Link>
    ),
    [product]
  );
  const description = useMemo(() => <p style={{ margin: 0 }}>{product.description}</p>, [product]);

  return <ProductsListItemLayout image={image} name={name} description={description} />;
};
