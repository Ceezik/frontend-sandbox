import { ProductInfosLayout } from "./layout";
import { ProductInfosProps } from "./types";

export const ProductInfos = ({ product }: ProductInfosProps): JSX.Element => {
  return (
    <ProductInfosLayout
      name={<h3 style={{ margin: 0 }}>{product.name}</h3>}
      price={<p style={{ margin: 0 }}>{product.price}€</p>}
      description={<p style={{ margin: 0 }}>{product.description}</p>}
      tags={product.tags.map((tag) => (
        <div
          key={tag}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "lightblue",
            borderRadius: 10,
          }}
        >
          {tag}
        </div>
      ))}
    />
  );
};
