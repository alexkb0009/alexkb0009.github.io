import React from "react";
import { PortfolioBlock } from "../../../components/PortfolioBlock";
import {
    getAllTags,
    mapSlugsToTags,
    getAllPortfolioItemsForTagSlug,
} from "../../../helpers/generation";

export const dynamicParams = false;

/** Generates all the tag views */
export async function generateStaticParams() {
    const allTagSlugs = Object.keys(mapSlugsToTags(await getAllTags()));
    return allTagSlugs.map((tag) => ({ tag }));
}

export default async ({ params }) => {
    const portfolioItemsForTag = await getAllPortfolioItemsForTagSlug(params.tag);
    return (
        <>
            <div className="container mx-auto px-2 py-3">
                {portfolioItemsForTag.map((item, i, all) => {
                    return (
                        <React.Fragment key={item.slug}>
                            <PortfolioBlock item={item} />
                            {i < all.length - 1 && (
                                <hr className="mb-3 portfolio-block-separator" />
                            )}
                        </React.Fragment>
                    );
                })}
            </div>
        </>
    );
};
