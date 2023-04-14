import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons/faList";

export const TopNav = ({ className }) => {
    return (
        <header
            className={clsx(
                "border-bottom-thin",
                "no-print",
                "d-flex",
                "justify-content-between",
                "align-items-center",
                className
            )}
        >
            <TopNavInner />
        </header>
    );
};

export const TopNavInner = ({ className }) => {
    return (
        <>
            <div className={clsx("py-1", "px-2", className)}>
                <Link href="/work" className="align-middle link-primary">
                    <FontAwesomeIcon icon={faList} fixedWidth />
                </Link>
            </div>
            <div className={clsx("px-2", className)}>
                <ul className="list-reset">
                    <TopNavLinks />
                </ul>
            </div>
        </>
    );
};

export const TopNavLinks = () => {
    return (
        <li className="inline-block">
            <Link href="/about" className="align-middle link-primary">
                About
            </Link>
        </li>
    );
};
