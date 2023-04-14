import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { markdownToHtml } from "./markdownToHtml";
import { slugify } from "../util";

const portfolioDirectory = join(process.cwd(), "content/portfolio");

export function getPorfolioSlugs() {
    return fs.readdirSync(portfolioDirectory);
}

export async function getPortfolioItemBySlug(slug, includeContent = true) {
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
        const words = content.replace(/(?:\r\n|\r|\n)/g, " ").split(" ");
        const excerptContent = words.slice(0, 30).join(" ") + (words.length > 30 ? "..." : "");
        const htmlExcerpt = await markdownToHtml(excerptContent);
        item.content = content;
        item.excerpt = htmlExcerpt;
    }

    return item;
}

export async function getAllPortfolioItems(includeContent = true) {
    const slugs = getPorfolioSlugs();
    const items = await Promise.all(
        slugs.map((slug) => getPortfolioItemBySlug(slug, includeContent))
    );
    // sort posts by date in descending order
    items.sort((item1, item2) => (item1.date > item2.date ? -1 : 1));
    return items;
}

export async function getAllTags() {
    const allPortfolioItems = await getAllPortfolioItems(false);
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

export async function getAllPortfolioItemsForTagSlug(tagSlug) {
    const allPortfolioItems = await getAllPortfolioItems(true);
    return allPortfolioItems.filter(({ tags }) => !!tags.find((tag) => slugify(tag) === tagSlug));
}