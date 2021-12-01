# Blocks Tutorial

GitHub Blocks is an exploration of the question:

> What if developers could control how people interact with their code?

Instead of feeling like a storage locker for code, can we bring that content to life? What if a designer could view styles from a CSS file instead of having to wait for a developer to transform it? Or if journalists could visualize data right on GitHub, along with how it's changed over time?

There are so many possibilities! This sounds like a lot of work to build, right? With such an enthusiastic & active community, GitHub could build a flexible API that allows users to take control, and help with building out any use case.

In our exploration, we settled on a flexible API of "Blocks".

## What is a Block?

Our experiment looks similar to the current github.com ui, but introduces the concept of a Block: a different way to view or interact with a file or folder.

Technically, a Block is React component that receives specific props and renders a view of them. There are two types of blocks:

- **File Blocks** receive the contents of a file, and
- **Folder Blocks** receive the structure of a folder.

If you're reading this on `github-blocks.vercel.app`, you're looking at a Block right now! This is a Markdown Block that is rendering the content of the `README.md` file. You can switch which Block you're using in the dropdown menu in the top left of this window.

Try switching to the `code` Block and see the underlying code! Then come back to the Markdown Block, for easy reading.

Since we have complete control over this content, we can render live data: say we want to see the latest commits in this repo:

<Commits />

---

By default, you can choose one of a set of [example Blocks](https://github.com/githubnext/blocks-examples) that we've created (when they're applicable to the viewed file type). To build on that, we've added a way for anyone to create their own custom Blocks! You can find a template and instructions in the [blocks-template repo](https://github.com/githubnext/blocks-template).

We've populated this repo with different types of content to explore. Feel free to poke around by clicking files and folders in the left sidebar, and see what you find!

For example, check out a visual representation of a CSS stylesheet in `global.css`, visualized data in `data.csv`, or a live Figma file in `figma.iframe`.

Hopefully you can see how a flexible Blocks API allows for completely new ways of interacting with code. We've also created a basic folder Block that visualizes the contents of a folder - check it out by clicking the root folder of this repo, or on your own repos by searching in the top left.

## Commits and previous file versions

We've also included the commit history for the file or folder you're viewing in the right sidebar. This is a great way to keep an eye on what's changed recently, plus you can click to surf through past versions of the code. This becomes very powerful, when combined with different visualizations of the code, instead of just the raw content.

## Block Metadata

Allowing Blocks to store metadata per file/folder opens the concept up to many more use cases. For example, the Chart Block uses this to store an array of saved chart types to easily come back to later.

We've added a `metadata` prop to the Block. This is a freeform prop that can be used to store any information you'd like. To update it, the Block can call the `onUpdateMetadata` prop with new metadata. This creates a commit that stores that data in `.github/blocks/file/` for File Blocks and `.github/blocks/folder/` for Folder Blocks. You can see some example metadata by poking around those folders in the left sidebar.
