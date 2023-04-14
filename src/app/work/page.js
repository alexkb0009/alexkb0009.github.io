import React from "react";
import { getAllPortfolioItems } from "../../helpers/generation";
import { PortfolioBlock } from "../../components/PortfolioBlock";

export const dynamicParams = false;

const getPortfolioListings = async () => {
    return await getAllPortfolioItems(true);
};

export default async () => {
    const allPortfolioItems = await getPortfolioListings();
    return (
        <div className="container mx-auto px-2 py-3">
            {allPortfolioItems.map((item, i, all) => {
                return (
                    <React.Fragment key={item.slug}>
                        <PortfolioBlock item={item} />
                        {i < all.length - 1 && <hr className="mb-3 portfolio-block-separator" />}
                    </React.Fragment>
                );
            })}
        </div>
    );
};
