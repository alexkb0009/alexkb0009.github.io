---
title: Computational Genome Analysis Platform
layout: post
permalink: cgap-portal
years: 2019-Present
tags:
    - JavaScript
    - React.js
    - D3
    - Python
    - PostgreSQL
    - ElasticSearch
    - Pyramid
    - AWS
    - SCSS
date: 2010-01-25
link: https://cgap.hms.harvard.edu
link_title: Homepage
---

A platform for clinicians to gather information on and submit patient cases for DNA sequencing, analysis, reporting, & more. Will be able to run analytic pipelines on sequenced DNA data in order to attempt to identify genetic and yet-undiagnosed diseases.

Alpha version in development (leading front-end). The final 'brand' name (and domain) is still to be decided.

Overall codebase is based on that of the 4DN Nucleome Data Portal. Back-end infrastructure is the same, however is being extended to be able to store & reference variant annotations (terabytes+) from patient sample variants.

For frontend, common reusable components have been split out from 4DN portal into either a repo containing shared portal components or own repo(s) (depending on reusability & potential usefulness to other developers) and are being re-used in this new platform while the overrall look & feel has greately diverged.

One interesting visualization feature we're building is the Pedigree visualization tool for clinicians to be able to view a family tree containing genetic features and history. This tool is built by having React components render out SVG and HTML elements, utilizing some D3 functions used to help generate line dimensions, and a healthy amount of algorithms to figure out the most optimal ordering and positioning of nodes as well as visually optimal routing of edges/paths.