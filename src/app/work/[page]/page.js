import React from "react";
import { getAllPortfolioItems, generatePageParams } from "../../../helpers/generation";
import { PortfolioBlock } from "../../../components/PortfolioBlock";
import { COUNT_PER_PAGE } from "../constants";
import { PaginationFooter } from "../../../components/PaginationFooter";
import { PaginationHeader } from "../../../components/PaginationHeader";

export const dynamicParams = false;

export async function generateStaticParams() {
    const allPortfolioItems = await getAllPortfolioItems(false);
    return generatePageParams(allPortfolioItems.length, COUNT_PER_PAGE);
}

export default async ({ params }) => {
    const { page: pageNumText } = params;
    const pageNum = parseInt(pageNumText);
    const allItems = await getAllPortfolioItems(true);
    const totalCount = allItems.length;
    const totalPageCount = Math.ceil(totalCount / COUNT_PER_PAGE);
    const startIndex = (pageNum - 1) * COUNT_PER_PAGE;
    const endIndex = startIndex + COUNT_PER_PAGE;
    const portfolioItemsForPage = allItems.slice(startIndex, endIndex);
    const previousHref = `/work${pageNum === 2 ? "" : "/" + (pageNum - 1)}`;
    const nextHref = endIndex + 1 < totalCount ? `/work/${pageNum + 1}` : null;
    const paginationProps = {
        previousHref,
        nextHref,
        currentPage: pageNum,
        totalCount: totalPageCount,
    };
    return (
        <div className="container mx-auto px-2 py-3">
            <PaginationHeader {...paginationProps} />
            {portfolioItemsForPage.map((item, i, all) => {
                return (
                    <React.Fragment key={item.slug}>
                        <PortfolioBlock item={item} />
                        <hr className="mb-3 portfolio-block-separator" />
                    </React.Fragment>
                );
            })}
            <PaginationFooter {...paginationProps} />
        </div>
    );
};
