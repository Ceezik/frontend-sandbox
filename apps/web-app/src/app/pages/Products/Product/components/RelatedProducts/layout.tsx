import { RelatedProductsLayoutProps } from "./types";

export const RelatedProductsLayout = ({ title, relatedProducts }: RelatedProductsLayoutProps): JSX.Element => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {title}
            {relatedProducts}
        </div>
    );
};
