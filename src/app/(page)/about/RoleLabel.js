import React from "react";

export const RoleLabel = ({ roles = [] }) => {
    const renderedRoles = roles.map(({ years, title }, i, all) => {
        return (
            <React.Fragment key={i}>
                <span>
                    {years}
                    {title && (
                        <>
                            &nbsp;&ndash;&nbsp;<span className="text-500">{title}</span>
                        </>
                    )}
                </span>
                {i < all.length - 1 && <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
            </React.Fragment>
        );
    });
    return <h6 className="text-400 mt-0 mb-1">{renderedRoles}</h6>;
};
