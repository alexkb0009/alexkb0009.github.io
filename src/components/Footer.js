import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons/faCopyright";

export const Footer = ({ className = "mt-2 mt-lg-3", containerWidth = true }) => {
    return (
        <div className={clsx("border-top-thin clearfix footer no-print", className)}>
            <div
                className={clsx(
                    containerWidth && "container",
                    "mx-auto",
                    "px-2",
                    "d-flex",
                    "justify-content-between"
                )}
            >
                <p className="col py-2 mb-0 no-print">
                    <small>
                        <FontAwesomeIcon icon={faCopyright} /> Alexander Balashov 2012 - 2023
                    </small>
                </p>
                <p className="col text-right py-2 mb-0 no-print">
                    <small>
                        <Link href="/privacy/">Privacy Policy</Link>
                    </small>
                </p>
                {/* TODO:
                        <p className="col-8 sm-width-full left py-2 mb-0 print-only">
                            <small>Printed from <a href="{{ page.url | replace:'index.html','' | prepend: site.url }}">{{ page.url | replace:'index.html','' | prepend: site.url }}</a></small>
                        </p>
                        */}
            </div>
        </div>
    );
};
