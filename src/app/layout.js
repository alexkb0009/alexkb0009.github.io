import React from "react";
import Script from "next/script";
import { Heebo } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./../scss/styles.scss";

config.autoAddCss = false;

const heebo = Heebo({
    subsets: ["latin"],
    variable: "--font-heebo",
    display: "swap",
});

export const metadata = {
    icons: {
        icon: "/favicon.ico",
    },
    title: "AKB",
    description: "This is some of the past work by Alex B.",
};

// Layouts must accept a children prop.
// This will be populated with nested layouts or pages
export default async ({ children }) => {
    return (
        <html lang="en" className={heebo.className}>
            <body>
                {children}
                <Script
                    strategy="afterInteractive"
                    src="https://www.googletagmanager.com/gtag/js?id=UA-60994823-4"
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-60994823-4', {
            page_path: window.location.pathname,
          });
        `,
                    }}
                />
            </body>
        </html>
    );
};
