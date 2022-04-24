import Skeleton from "react-loading-skeleton";

export const ProductInfosSkeleton = (): JSX.Element => {
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
        <Skeleton height="1.375rem" width="10rem" />
        <Skeleton height="1.125rem" width="4rem" />
      </div>
      <Skeleton height="1.2rem" width="100%" count={2} />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {Array.from({ length: 3 }, (_, idx) => (
          <Skeleton
            key={idx}
            width="3rem"
            height="1.1rem"
            style={{
              padding: "0.5rem 1rem",
              borderRadius: 10,
            }}
          />
        ))}
      </div>
    </div>
  );
};
