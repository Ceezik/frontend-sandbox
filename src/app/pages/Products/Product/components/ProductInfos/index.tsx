import { ProductInfosProps } from "./types";

export const ProductInfos = ({ product }: ProductInfosProps): JSX.Element => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ margin: 0 }}>{product.name}</h3>
        <p style={{ margin: 0 }}>{product.price}€</p>
      </div>
      <p>{product.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {product.tags.map((tag) => (
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
      </div>
    </div>
  );
};
