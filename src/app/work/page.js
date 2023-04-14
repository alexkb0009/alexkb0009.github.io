import React from "react";
import { getAllPortfolioItems } from "../../helpers/generation";
import { PortfolioBlock } from "../../components/PortfolioBlock";
import { COUNT_PER_PAGE } from "./constants";
import { PaginationFooter } from "../../components/PaginationFooter";
import { PaginationHeader } from "../../components/PaginationHeader";

export const dynamicParams = false;

// export async function generateStaticParams() {
//     const allPortfolioItems = (await getAllPortfolioItems(false));
//     const params = [{ page: null }];
//     let i;
//     for (let i = 11; i <= allPortfolioItems.length; i += 10) {
//         console.log(i);
//         const pageNum = Math.floor(i / 10) + 1;
//         params.push({ page: pageNum });
//     }
//     return params;
// }

export default async () => {
    const allItems = await getAllPortfolioItems();
    const firstPagePortfolioItems = allItems.slice(0, COUNT_PER_PAGE);
    const totalPageCount = Math.ceil(allItems.length / COUNT_PER_PAGE);
    const moreExist = totalPageCount > 1;
    const nextHref = moreExist && "work/2";

    return (
        <div className="container mx-auto px-2 py-3">
            {moreExist && <PaginationHeader nextHref={nextHref} totalCount={totalPageCount} />}
            {firstPagePortfolioItems.map((item, i, all) => {
                return (
                    <React.Fragment key={item.slug}>
                        <PortfolioBlock item={item} />
                        {(moreExist || i < all.length - 1) && (
                            <hr className="mb-3 portfolio-block-separator" />
                        )}
                    </React.Fragment>
                );
            })}
            {moreExist && <PaginationFooter nextHref={nextHref} totalCount={totalPageCount} />}
        </div>
    );
};
