import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";

import { getAllPortfolioItems } from "./../helpers/generation";
import { PortfolioBlock } from "./../components/PortfolioBlock";

export default async function HomePage() {
    const allPortfolioItems = await getAllPortfolioItems();
    return (
        <div>
            <header className="header-background">
                <div className="clearfix border-bottom-thin header-border">
                    <ul className="list-reset right py-1 header-text font-smoothing">
                        <li className="inline-block">
                            <Link
                                href="/about"
                                className="align-middle link-primary header-link mr-2"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="container mx-auto px-2 mb-1 clearfix header-text">
                    <h1 className="h1 inline-block col-9 sm-width-full py-1 mt-2 mb-0 header-title text-500">
                        <span id="title-main"></span> <span className="text-100">by Alex</span>
                    </h1>

                    <div className="clearfix mb-3 py-1">
                        <div className="col-8 sm-width-full left border-top-thin table social-icons-header">
                            <div className="inline-block h4 mt-2 mr-2">
                                <a
                                    href="https://linkedin.com/in/alexanderbalashov/"
                                    target="_blank"
                                    rel="noreferrer nofollower"
                                    className="block h4"
                                    title="LinkedIn"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                            <div
                                className="inline-block h4 mt-2 mr-1"
                                style={{
                                    paddingLeft: "16px",
                                    borderLeft: "1px solid rgba(255,255,255,0.25)",
                                }}
                            >
                                <a
                                    href="https://github.com/alexkb0009"
                                    target="_blank"
                                    rel="noreferrer nofollower"
                                    title="GitHub"
                                    className="block h4"
                                >
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </div>
                            <div
                                className="inline-block mt-2 sm-hidden"
                                style={{ lineHeight: "31px" }}
                            >
                                alexkb0009
                            </div>
                            <div
                                className="inline-block h4 mt-2 mr-1 ml-2 sm-hidden"
                                style={{
                                    paddingLeft: "16px",
                                    borderLeft: "1px solid rgba(255,255,255,0.25)",
                                }}
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div
                                className="inline-block mt-2 sm-hidden"
                                style={{ lineHeight: "31px" }}
                            >
                                alex <small>dot</small> balashov <small>at</small> gmail{" "}
                                <small>dot</small> com
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container mx-auto px-2 py-3">
                <PortfolioBlocks allPortfolioItems={allPortfolioItems} />
            </div>
        </div>
    );
}

const PortfolioBlocks = ({ allPortfolioItems }) => {
    return allPortfolioItems.map((item, i, all) => {
        return (
            <React.Fragment key={i}>
                <PortfolioBlock key={item.slug} item={item} />
                {i < all.length - 1 && <hr className="mb-3 portfolio-block-separator" />}
            </React.Fragment>
        );
    });
};
