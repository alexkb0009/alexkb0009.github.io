import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons/faTags";
import { TopNavInner } from "../../../components/TopNav";
import { getAllTags, mapSlugsToTags } from "../../../helpers/generation";
import { slugify } from "../../../util";

export default async ({ children, params, ...props }) => {
    const { tag } = params;
    const allTags = await getAllTags();
    const slugsToTags = mapSlugsToTags(allTags);
    return (
        <>
            <header className="header-background">
                <div className="clearfix border-bottom-thin header-border">
                    <TopNavInner className="header-text" />
                </div>

                <div className="container mx-auto px-2 clearfix header-text">
                    <h1 className="h1 text-100 inline-block col-9 sm-width-full py-3 mt-0 mb-0 header-title">
                        {slugsToTags[tag]}
                    </h1>

                    <div className="clearfix mb-4 py-0">
                        <div className="col-9 sm-width-full left border-top-thin mt-3 mt-lg-0 table">
                            <div className="mt-2 mb-2 text-300">
                                <FontAwesomeIcon icon={faTags} />
                                &nbsp; All Tags
                            </div>
                            <div className="tags-page-tag-container">
                                {allTags.map((tagName) => {
                                    const slugTagName = slugify(tagName);
                                    return (
                                        <Link
                                            href={`/tag/${slugTagName}`}
                                            className={clsx(
                                                "dark-bg",
                                                "portfolio-tag",
                                                "link",
                                                tag === slugTagName && "active",
                                                `tag-color-background-${slugTagName}`
                                            )}
                                        >
                                            {tagName}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {children}
        </>
    );
};
