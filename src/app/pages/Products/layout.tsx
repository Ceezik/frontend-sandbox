import { ProductsLayoutProps } from "./types";

export const ProductsLayout = ({
  list,
  createButton,
  searchbar,
}: ProductsLayoutProps): JSX.Element => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {searchbar}
        {createButton}
      </div>

      {list}
    </div>
  );
};
