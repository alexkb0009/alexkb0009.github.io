import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { VizScript } from "../components/VizScript";

import "./intro-style.css";
import { Footer } from "../components/Footer";

export default function TestPage() {
    return (
        <>
            <VizScript>
                {/*
                <div id="header-bar">
                    <div className="container">
                        <h2 id="title" className="mt-0 px-2 text-400">
                            akb
                        </h2>
                    </div>
                </div>
                */}
                <canvas id="front-page-canvas" style={{ opacity: 0 }}></canvas>

                <div id="frontContainer">
                    {/* <h4 id="f_locationLabel">Boston</h4> */}
                    <div
                        id="f_menu"
                        style={{
                            // opacity: 0,
                            top: "calc(min(.65 * 100%, .65 * 80vw + (100% - 80vw) / 2) + 1px)",
                            // top: "calc(75vh - 58px)",
                            // transform: "translate3d(56vw, 0, 0)",
                            transform: "translate3d(calc(100vw - 100% - 24px),0,0)",
                        }}
                    >
                        <ul>
                            <li className="social">
                                <a
                                    href="https://github.com/alexkb0009"
                                    target="_blank"
                                    rel="nofollower referrer"
                                >
                                    <FontAwesomeIcon icon={faGithub} fixedWidth />
                                </a>
                            </li>

                            <li className="social">
                                <a
                                    target="_blank"
                                    href="https://www.linkedin.com/profile/view?id=116314665"
                                >
                                    <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div
                        id="f_latestItems"
                        style={{
                            // opacity: 0,
                            top: "calc(min(.65 * 100%, .65 * 80vw + (100% - 80vw) / 2) - 45px)",
                            // top: "calc(75vh - 104px)",
                            // transform: "translate3d(56vw, 0, 0)",
                            transform: "translate3d(calc(100vw - 100% - 24px),0,0)",
                        }}
                    >
                        <h3>
                            <span className="text-300">View</span>{" "}
                            <Link href="/work" className="link-primary">
                                <span className="d-none d-md-inline">Recent&nbsp;</span>
                                Work&nbsp;
                                <FontAwesomeIcon icon={faAngleRight} />
                            </Link>
                        </h3>
                    </div>
                </div>
            </VizScript>
            <Footer className={null} containerWidth={false} />
        </>
    );
}
