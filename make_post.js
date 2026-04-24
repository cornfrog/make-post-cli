#!/usr/bin/env node

import { writeFile } from 'node:fs/promises';

const POST_TEMPLATE = `---
title: 
date: ${new Date().toISOString()}
description: 
tags: []
---
`;

const args = process.argv;
const userInputs = args.slice(2);

const createFile = async (postTitle) => {
    try {
        await writeFile(
            `${postTitle}.md`, 
            POST_TEMPLATE,
            {
                flag: 'wx'
            }
        );
    } catch (error) {
        console.log("Error creating file: ", error);
    }
};

if(userInputs.length === 1) {
    createFile(userInputs[0]);
} else {
    console.log("[Error]: Invalid Usage!");
    console.log("[USAGE]: mp <blog_post_name>");
}