import Skeleton from "react-loading-skeleton";
import { ProductInfosLayout } from "./layout";

export const ProductInfosSkeleton = (): JSX.Element => {
  return (
    <ProductInfosLayout
      name={<Skeleton height="1.375rem" width="10rem" />}
      price={<Skeleton height="1.125rem" width="4rem" />}
      description={<Skeleton height="1.2rem" width="100%" count={2} />}
      tags={Array.from({ length: 3 }, (_, idx) => (
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
    />
  );
};
