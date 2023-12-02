# Introduction

You can _use_ blocks made by the community without _building_ blocks yourself. To use a block that someone else has made, choose it in the block picker at the top of the content area. If you're interested in building your own block, read on!

Under the hood, a block is a React component; it receives a fixed set of props and returns JSX. The [Blocks Platform](https://blocks.githubnext.com) supplies a standard set of inputs to blocks, including the content to render, and hooks that a block can call in order to take actions like updating content or calling the GitHub API.

There are two kinds of blocks: file blocks and folder blocks. Their API is mostly the same, except that file blocks receive the content of a file and folder blocks receive the contents of a directory.

## How are blocks developed and shared?

You develop blocks using standard web technologies, and you publish them for yourself or others to use by pushing their code to a GitHub repository and adding the `github-blocks` topic. You won't need to handle building, deploying, or hosting. Not every app can be a block, but many can! We want you to reimagine repositories, and customize them with minimum effort.

### Relevant repos

**[githubnext/blocks-template](https://github.com/githubnext/blocks-template)**
A template repository which you can use as the starting point for developing your own blocks.

**[githubnext/blocks-dev](https://github.com/githubnext/blocks-dev)**
The template includes a dependency on the `blocks-dev` utility library, which contains types and functions to make it easier to author Blocks.

**[githubnext/blocks-examples](https://github.com/githubnext/blocks-examples)**
Example blocks that we've built to showcase the API.

### Terminology and conventions

- `GitHub Blocks` or just `Blocks`, capitalized, refers to the product.
- `blocks`, uncapitalized, refers to specific blocks, abstract blocks, or to blocks _en masse_.
- `Blocks platform` or `the platform` is the web application which hosts or embeds blocks, running on [blocks.githubnext.com](https://blocks.githubnext.com)
- `file blocks` and `folder blocks` refer to the two kinds of blocks that are possible today.
