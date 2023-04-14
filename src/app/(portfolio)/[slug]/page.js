import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { getPortfolioItemBySlug, getAllPortfolioItems } from "../../../helpers/generation";
import { getImagePathsForPortfolioSlug } from "../../../helpers/image";
import { markdownToHtml } from "../../../helpers/markdownToHtml";
import { Carousel } from "../../../components/Carousel";

export const dynamicParams = false;

/** Generates all the static portfolio pages */
export async function generateStaticParams() {
    return (await getAllPortfolioItems()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const portfolioItem = await getPortfolioItemBySlug(params.slug);
    return {
        title: portfolioItem.title,
    };
}

export default async ({ params }) => {
    const portfolioItem = await getPortfolioItemBySlug(params.slug);
    const { content, link, link_title, title, years } = portfolioItem;
    const htmlContent = await markdownToHtml(content);

    const imageFilenames = getImagePathsForPortfolioSlug(params.slug).filter(
        (filepath) => !filepath.includes("HIDDEN") && !filepath.includes("/extra/")
    );

    return (
        <>
            {imageFilenames.length > 0 ? <Carousel imageFilenames={imageFilenames} /> : null}

            <article
                className="container px-2 mx-auto mb4"
                itemScope
                itemType="http://schema.org/BlogPosting"
            >
                <h1
                    className="h1 text-300 col-12 sm-width-full py-2 mt-2 inline-block"
                    itemProp="name headline"
                >
                    {title}
                </h1>
                <div className="col-4 sm-width-full mt-1 border-top-thin ">
                    <p className="mb-3 py-1 h4 text-300">
                        {/*
                        <time
                            datetime={{ page.date | date_to_xmlschema }}
                            itemProp="datePublished"
                        >
                            {years}
                        </time>
                        */}
                        {years}
                    </p>
                </div>

                <div
                    className="prose"
                    itemProp="articleBody"
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />

                {link && link_title && (
                    <div className="link-to-demo-container">
                        <a className="link-to-demo orange-button" href={link} target="_blank">
                            {link_title}
                            <FontAwesomeIcon icon={faAngleRight} className="mx-2" />
                        </a>
                    </div>
                )}
            </article>

            <div className="container mx-auto px-2 py-3 mt-4 clearfix">
                {/*% include previous-next.html %*/}
            </div>
        </>
    );
};
