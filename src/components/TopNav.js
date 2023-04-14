import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";

export const TopNav = ({ className }) => {
    return (
        <header className={clsx("border-bottom-thin", "clearfix", "no-print", className)}>
            <TopNavInner />
        </header>
    );
};

export const TopNavInner = ({ className }) => {
    return (
        <>
            <div
                className={clsx(
                    "left",
                    "sm-width-full",
                    "py-1",
                    "px-2",
                    "mt-1",
                    "mt-lg-0",
                    className
                )}
            >
                <Link href="/work" className="align-middle link-primary">
                    <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                </Link>
            </div>
            <div className={clsx("right", "sm-hidden", "px-2", className)}>
                <ul className="list-reset mt-lg-1 mb-2 mb-lg-1">
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
