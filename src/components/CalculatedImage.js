import { join } from "path";
import React from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import imageSize from "image-size";

export const CalculatedImage = async ({ src, ...props }) => {
    const blurDataURL = src && (await getPlaiceholder(src, { size: 24 })).base64;
    const sizes = await new Promise((resolve) => {
        const absPath = join(process.cwd(), "public/", src);
        return imageSize(absPath, (error, size) => {
            resolve(size);
        });
    });
    return (
        <Image
            {...props}
            src={src}
            width={sizes.width}
            height={sizes.height}
            blurDataURL={blurDataURL}
            placeholder="blur"
            unoptimized
        />
    );
};
