import { ProductsListItemLayoutProps } from "./types";

export const ProductsListItemLayout = ({ image, name, description }: ProductsListItemLayoutProps): JSX.Element => {
    return (
        <div
            style={{
                border: "1px solid grey",
                borderRadius: 15,
                padding: "1rem",
                display: "flex",
                gap: "1rem",
            }}
        >
            {image}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    width: "100%",
                }}
            >
                {name}
                {description}
            </div>
        </div>
    );
};
