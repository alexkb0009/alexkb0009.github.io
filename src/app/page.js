import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
import { VizScript } from "../components/VizScript";

import "./intro-style.css";

export default function TestPage() {
    return (
        <VizScript>
            <div id="header-bar">
                <div className="container">
                    <h2 id="title" className="mt-0 px-2 text-400">
                        akb
                    </h2>
                </div>
            </div>
            <canvas id="front-page-canvas"></canvas>

            <div id="frontContainer">
                <h4 id="f_locationLabel">Boston, MA</h4>
                <div id="f_menu" style={{ opacity: 0 }}>
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

                <div id="f_latestItems" style={{ opacity: 0 }}>
                    <h3>
                        <span className="text-300 d-none d-md-inline">View</span>{" "}
                        <Link href="/work" className="link-primary">
                            Recent Work&nbsp;
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </h3>
                </div>
            </div>
        </VizScript>
    );
}