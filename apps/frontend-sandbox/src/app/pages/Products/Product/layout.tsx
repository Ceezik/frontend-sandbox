import { ProductLayoutProps } from "./types";

export const ProductLayout = ({ editButton, productInfos, relatedProducts }: ProductLayoutProps): JSX.Element => {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                {editButton}
                {productInfos}
            </div>

            {relatedProducts}
        </div>
    );
};
