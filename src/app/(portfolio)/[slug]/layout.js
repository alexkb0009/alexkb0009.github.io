import React from "react";
import { TopNav } from "../../../components/TopNav";
import { Footer } from "../../../components/Footer";

export default ({ children }) => {
    return (
        <>
            <TopNav />
            {children}
            <Footer />
        </>
    );
};
