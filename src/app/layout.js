import React from "react";
import Link from "next/link";
// import Script from "next/script";
import { Roboto_Flex } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons/faCopyright";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./../scss/styles.scss";

config.autoAddCss = false;

const robotoFlex = Roboto_Flex({
    subsets: ["latin"],
    variable: "--font-roboto-flex",
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
        <html lang="en" className={robotoFlex.className}>
            <body>
                {children}
                <div className="border-top-thin clearfix mt-2 mt-lg-4 footer no-print">
                    <div className="container mx-auto px-2">
                        <p className="col-8 sm-width-full left py-2 mb-0 no-print">
                            <small>
                                <FontAwesomeIcon icon={faCopyright} /> Alexander Balashov 2015 -
                                2023
                            </small>
                        </p>
                        <p className="col-4 sm-width-full left text-right py-2 mb-0 no-print">
                            <small>
                                <Link href="/privacy/">Privacy Policy</Link>
                            </small>
                        </p>
                        {/* TODO:
                        <p className="col-8 sm-width-full left py-2 mb-0 print-only">
                            <small>Printed from <a href="{{ page.url | replace:'index.html','' | prepend: site.url }}">{{ page.url | replace:'index.html','' | prepend: site.url }}</a></small>
                        </p>
                        */}
                    </div>
                </div>
                {/*
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
                */}
            </body>
        </html>
    );
};
