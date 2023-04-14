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
        <div className="d-flex mt-4">
            {previousHref ? (
                <Link href={previousHref} className="orange-button">
                    <FontAwesomeIcon icon={faAngleLeft} fixedWidth className="mr-1" />
                    Page {currPage - 1}
                </Link>
            ) : (
                <div className="orange-button-placeholder" />
            )}
            <div className="flex-grow-1 text-center d-flex align-items-center px-2 justify-content-center">
                {currPage}
                {totalCount && ` of ${totalCount}`}
            </div>
            {nextHref ? (
                <Link href={nextHref} className={clsx("orange-button")}>
                    Page {currPage + 1}
                    <FontAwesomeIcon icon={faAngleRight} className="ml-1" />
                </Link>
            ) : (
                <div className="orange-button-placeholder" />
            )}
        </div>
    );
};
