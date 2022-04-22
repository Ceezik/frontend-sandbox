import Skeleton from "react-loading-skeleton";

export const ProductInfosSkeleton = (): JSX.Element => {
  return (
    <div>
      <div>
        <Skeleton />
        <Skeleton />
      </div>
      <Skeleton count={2} />

      <div>
        {Array.from({ length: 3 }, (_, idx) => (
          <Skeleton key={idx} />
        ))}
      </div>
    </div>
  );
};
