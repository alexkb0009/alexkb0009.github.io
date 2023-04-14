import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { TopNavLinks } from "../../components/TopNav";

export default async ({ children }) => {
    return (
        <>
            <header className="header-background">
                <div className="clearfix border-bottom-thin header-border">
                    <div
                        className={clsx(
                            "left",
                            "sm-width-full",
                            "py-1",
                            "px-2",
                            "mt-1",
                            "mt-lg-0",
                            "header-text"
                        )}
                    >
                        <Link href="/" className="align-middle link-primary">
                            <FontAwesomeIcon icon={faHome} fixedWidth />
                        </Link>
                    </div>
                    <div className={clsx("right", "sm-hidden", "px-2", "header-text")}>
                        <ul className="list-reset mt-lg-1 mb-2 mb-lg-1">
                            <TopNavLinks />
                        </ul>
                    </div>
                </div>
            </header>
            {children}
        </>
    );
};
