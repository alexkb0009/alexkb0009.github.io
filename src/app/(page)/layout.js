import React from "react";
import { TopNav } from "../../components/TopNav";

export default ({ children, params, ...props }) => {
    return (
        <>
            <TopNav />
            <article className="container mx-auto px-2 mt-2 mb-4">{children}</article>
        </>
    );
};
