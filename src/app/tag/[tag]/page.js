import React from "react";
import { PortfolioBlock } from "../../../components/PortfolioBlock";
import {
    getAllTags,
    mapSlugsToTags,
    getAllPortfolioItemsForTagSlug,
} from "../../../helpers/generation";

export const dynamicParams = false;

/** Generates all the tag views */
export function generateStaticParams() {
    const allTagSlugs = Object.keys(mapSlugsToTags(getAllTags()));
    return allTagSlugs.map((tag) => ({ tag }));
}

export default ({ params }) => {
    const portfolioItemsForTag = getAllPortfolioItemsForTagSlug(params.tag);
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
