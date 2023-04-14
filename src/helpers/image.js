import fs from "fs";
import { join, resolve } from "path";
import sharp from "sharp";

export function getImagePathsForPortfolioSlug(slug) {
    const directoryPath = `/images/${slug}`;
    const absPath = resolve(process.cwd(), "public/", directoryPath.slice(1));
    return fs
        .readdirSync(absPath)
        .filter((dirContent) => fs.statSync(join(absPath, dirContent)).isFile())
        .sort()
        .map((dirContent) => join(directoryPath, dirContent));
}

export async function getThumbnailSrc(
    imagePath,
    options = {
        width: 400,
        height: 300,
    }
) {
    const imagePathParts = imagePath.split("/");
    const imageFilename = imagePathParts.pop();
    const imageFilenameParts = imageFilename.split(".");
    const imageFilenameExtension = imageFilenameParts.pop();
    const imageFilenameWithoutExtension = imageFilenameParts.join(".");

    const thumbnailsDir = join(imagePathParts.join("/"), "thumbnails/");
    const outputLocation = join(
        thumbnailsDir,
        `${imageFilenameWithoutExtension}-${options.width}x${options.height}.${imageFilenameExtension}`
    );
    const absOutputLocation = join(process.cwd(), "public/", outputLocation);
    const srcFileAbsPath = join(process.cwd(), "public", imagePath);

    if (fs.existsSync(absOutputLocation)) {
        const thumbnailStats = fs.statSync(absOutputLocation);
        const srcFileStats = fs.statSync(srcFileAbsPath);
        if (srcFileStats.mtimeMs < thumbnailStats.mtimeMs) {
            // Don't need to generate new thumbnail
            return outputLocation;
        }
    }

    console.log(`Generating Thumbnail: ${imagePath} --> ${outputLocation}`);

    const absThumbnailsDir = join(process.cwd(), "public/", thumbnailsDir);
    if (!fs.existsSync(absThumbnailsDir)) {
        fs.mkdirSync(absThumbnailsDir);
    }
    await sharp(srcFileAbsPath).resize(options).toFile(absOutputLocation);
    return outputLocation;
}
