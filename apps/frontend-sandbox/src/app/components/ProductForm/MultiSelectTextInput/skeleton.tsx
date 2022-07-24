import Skeleton from "react-loading-skeleton";

export const MultiSelectTextInputSkeleton = (): JSX.Element => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <Skeleton height="1.125rem" width="8rem" />
            <Skeleton height="1.375rem" width="12rem" />
        </div>
    );
};
