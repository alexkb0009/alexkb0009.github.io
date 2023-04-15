import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

export const PaginationFooter = ({
    previousHref,
    nextHref,
    currentPage = null,
    totalCount = null,
}) => {
    const currPage = currentPage || 1;
    return (
        <div className="d-flex mt-4 justify-content-center">
            {previousHref ? (
                <Link href={previousHref} className="link-primary h3 px-2">
                    <FontAwesomeIcon icon={faAngleLeft} fixedWidth />
                </Link>
            ) : (
                <div className="px-2">
                    <span className="fa-fw" />
                </div>
            )}
            <div className="text-center d-flex align-items-center px-2 justify-content-center">
                {currPage}
                {totalCount && ` of ${totalCount}`}
            </div>
            {nextHref ? (
                <Link href={nextHref} className="link-primary h3 px-2">
                    <FontAwesomeIcon icon={faAngleRight} fixedWidth />
                </Link>
            ) : (
                <div className="px-2">
                    <span className="fa-fw" />
                </div>
            )}
        </div>
    );
};
