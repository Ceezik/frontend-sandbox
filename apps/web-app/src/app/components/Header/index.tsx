import { NavLink } from "react-router-dom";

export const Header = (): JSX.Element => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <p>frontend sandbox</p>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/">
                    Home
                </NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/products">
                    Products
                </NavLink>
            </div>
        </div>
    );
};
