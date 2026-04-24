# make-post-cli

A simple NPM CLI tool to quickly generate Markdown files for blog posts with a predefined frontmatter template.

## Installation

You can install this tool globally using npm:

```bash
npm install -g .
```

*(Note: Use `npm install -g make-post-cli` once published to the registry)*

## Usage

To create a new blog post file, use the `mp` command followed by your desired filename (without the `.md` extension):

```bash
mp my-new-blog-post
```

This will create a file named `my-new-blog-post.md` in your current directory.

## Template

The generated file includes the following frontmatter:

```markdown
---
title: 
date: 2026-04-23T... (current date)
description: 
tags: []
---
```

## Features

- **Automatic Date Generation:** Sets the current UTC timestamp in the frontmatter.
- **Safety First:** Uses the `wx` flag to prevent accidentally overwriting existing files.
- **Lightweight:** Zero external dependencies beyond Node.js built-ins.

## License

ISC
