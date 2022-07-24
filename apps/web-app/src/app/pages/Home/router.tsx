import { Route, Routes } from "react-router-dom";
import { HomeLoadable } from "./loadable";

export const HomeRouter = (): JSX.Element => {
    return (
        <Routes>
            <Route index element={<HomeLoadable />} />
        </Routes>
    );
};
