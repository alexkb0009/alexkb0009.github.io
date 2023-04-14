import React from "react";
import About, { title } from "./about.mdx";

export { title };

export const metadata = {
    title,
};

export default async () => {
    return (
        <>
            <div className="print-only mb-4 mt-0 name-container">
                <div className="image-column">
                    <div className="image-container">
                        <img src="https://www.gravatar.com/avatar/e32a241bfb3ee9cac4a47f9b72be874c?s=200" />
                    </div>
                </div>
                <h2 className="mb-0 mt-0 text-400 name-column">
                    <span>Alexander Balashov</span>
                    <div style={{ marginTop: "-3pt", fontSize: "0.72em" }}>
                        <span className="text-300">
                            <a href="https://alexkb0009.github.io/">https://alexkb0009.github.io</a>
                        </span>
                    </div>
                </h2>
            </div>
            <About />
        </>
    );
};
