import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "@/app/components/Header";
import { HomeRouter } from "@/app/pages/Home/router";
import { ProductsRouter } from "@/app/pages/Products/router";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: { refetchOnWindowFocus: false, staleTime: 10000 },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/*" element={<HomeRouter />} />
                    <Route path="products/*" element={<ProductsRouter />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
