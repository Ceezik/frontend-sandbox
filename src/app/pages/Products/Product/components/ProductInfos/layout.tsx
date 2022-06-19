import { ProductInfosLayoutProps } from "./types";

export const ProductInfosLayout = ({ name, price, description, tags }: ProductInfosLayoutProps): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {name}
        {price}
      </div>
      {description}

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>{tags}</div>
    </div>
  );
};
