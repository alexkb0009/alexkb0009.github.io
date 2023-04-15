import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";

export const PaginationHeader = ({
    previousHref,
    nextHref,
    currentPage = null,
    totalCount = null,
}) => {
    const currPage = currentPage || 1;
    return (
        <div className="d-flex mb-2">
            {previousHref && (
                <Link href={previousHref} className="link-primary text-500">
                    <FontAwesomeIcon icon={faAngleLeft} fixedWidth className="mr-1" />
                    Page {currPage - 1}
                </Link>
            )}
            <div className="flex-grow-1">
                {/*
                {`Page ${currPage}`}
                {totalCount && ` of ${totalCount}`}
                */}
            </div>
            {nextHref && (
                <Link href={nextHref} className="link-primary text-500">
                    Page {currPage + 1}
                    <FontAwesomeIcon icon={faAngleRight} className="ml-1" />
                </Link>
            )}
        </div>
    );
};
