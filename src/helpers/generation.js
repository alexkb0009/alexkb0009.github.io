import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdownToHtml";
import { slugify } from "../util";

const portfolioDirectory = join(process.cwd(), "content/portfolio");

export function getPorfolioSlugs() {
    return fs.readdirSync(portfolioDirectory);
}

export function getPortfolioItemBySlug(slug, includeContent = true) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(portfolioDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const item = {
        ...data,
        slug: realSlug,
        tags: Array.isArray(data.tags) ? data.tags : [data.tags],
    };

    if (includeContent) {
        item.content = content;
    }

    return item;
}

export async function generateSummary(markdownContent) {
    const words = markdownContent.replace(/(?:\r\n|\r|\n)/g, " ").split(" ");
    const excerptContent = words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
    return markdownToHtml(excerptContent);
}

export function getAllPortfolioItems(includeContent = true) {
    const slugs = getPorfolioSlugs();
    return slugs
        .map((slug) => getPortfolioItemBySlug(slug, includeContent))
        .filter(({ disabled }) => !disabled)
        .sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
}

export function getAllTags() {
    const allPortfolioItems = getAllPortfolioItems(false);
    const allTags = new Set();
    allPortfolioItems.forEach(({ tags }) => {
        tags.forEach((tag) => {
            allTags.add(tag);
        });
    });
    return [...allTags];
}

export function mapSlugsToTags(allTags) {
    const dict = {};
    allTags.forEach((tagName) => {
        dict[slugify(tagName)] = tagName;
    });
    return dict;
}

export function getAllPortfolioItemsForTagSlug(tagSlug) {
    const allPortfolioItems = getAllPortfolioItems(true);
    return allPortfolioItems.filter(({ tags }) => !!tags.find((tag) => slugify(tag) === tagSlug));
}

export function generatePageParams(totalCount, countPerPage) {
    const params = [];
    for (let i = 10; i < totalCount; i += countPerPage) {
        const pageNum = Math.floor(i / countPerPage) + 1;
        params.push({ page: pageNum.toString() });
    }
    return params;
}
