import React from "react";

export default ({ children }) => {
    return (
        <>
            <header className="no-print">
                <h1 className="py-2 mt-1 text-200">Privacy</h1>
            </header>
            <div className="col-4 sm-width-full border-top-thin no-print" />
            <div className="prose mb-4 py-2">{children}</div>
        </>
    );
};
