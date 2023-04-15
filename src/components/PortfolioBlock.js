"use server";

import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { slugify } from "../util";
import { getImagePathsForPortfolioSlug, getThumbnailSrc } from "../helpers/image";
import { CalculatedImage } from "./CalculatedImage";
import { generateSummary } from "../helpers/generation";

export const PortfolioBlock = async ({ item }) => {
    const { content, tags = [], slug, title, years } = item;
    const [firstImagePath] = getImagePathsForPortfolioSlug(slug);
    const thumbnailSrc = firstImagePath && (await getThumbnailSrc(firstImagePath));
    const itemHref = `/${slug}/`;
    const excerpt = await generateSummary(content);
    return (
        <div className="py-2 mb-3 prose clearfix portfolio-block">
            {thumbnailSrc && (
                <div className="col-3 right sm-width-full mb-2 mb-lg-0">
                    <Link href={itemHref}>
                        <div className="imageholder">
                            <CalculatedImage src={thumbnailSrc} alt={title} />
                        </div>
                    </Link>
                </div>
            )}

            <div className={clsx("left", "sm-width-full", `col-${thumbnailSrc ? 9 : 12}`)}>
                <h2 className="h2 lh-condensed col-10 mt-0 mb-2">
                    <Link href={itemHref} className="link-primary text-500">
                        {title}
                    </Link>
                </h2>

                <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />

                <Link href={itemHref} className="years no-underline h5">
                    {years}
                </Link>
                <div>
                    {tags.map((tag) => (
                        <Link
                            href={`/tag/${slugify(tag)}`}
                            name={tag}
                            prefetch={false}
                            className={clsx(
                                "inline-block",
                                "portfolio-tag",
                                "tag",
                                `tag-color-background-${slugify(tag)}`
                            )}
                            key={tag}
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
