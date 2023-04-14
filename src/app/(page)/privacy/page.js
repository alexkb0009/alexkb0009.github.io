import React from "react";
import Privacy, { title } from "./privacy.mdx";

export { title };

export const metadata = {
    title,
};

export default async () => {
    return (
        <>
            <Privacy />
        </>
    );
};
