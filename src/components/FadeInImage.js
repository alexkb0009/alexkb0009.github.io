"use client";

import React, { useState } from "react";
import Image from "next/image";

export const FadeInImage = ({ wrapper, ...props }) => {
    const [isImgLoaded, setIsImgLoaded] = useState(false);
    const onLoaded = () => {
        setTimeout(() => setIsImgLoaded(true), 250);
    };
    const style = { opacity: isImgLoaded ? 1 : 0 };
    const image = (
        <Image
            {...props}
            unoptimized
            onLoadingComplete={onLoaded}
            style={!wrapper ? { opacity: isImgLoaded ? 1 : 0 } : null}
        />
    );
    if (wrapper) {
        return React.cloneElement(wrapper, { style }, image);
    } else {
        return image;
    }
};
