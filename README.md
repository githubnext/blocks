# GitHub Blocks Tutorial

GitHub Blocks is an exploration of the question:

> What if developers could customize GitHub, not only to present their code and data, but to make it a living, interactive platform?

Instead of feeling like a storage locker for code, can we bring that content to life? What if a designer could view styles from a CSS file instead of having to wait for a developer to transform it? Or if journalists could visualize data right on GitHub, along with how it's changed over time? There are so many possibilities! 

This sounds like a lot of work to build, right? With such an enthusiastic & active community, GitHub could build a flexible API that allows users to take control, and help with building out any use case. 

In our exploration we've created a first version of this API that let's anyone create their own custom Blocks. 

## What is a Block?

Our experiment looks similar to the current github.com ui, but introduces the concept of a Block: a different way to view or interact with a file or folder.

Technically, a Block is React component that receives specific props and renders a view of them. There are two types of blocks:

- **File Blocks** receive the contents of a file, and
- **Folder Blocks** receive the structure of a folder.

## Show me the Blocks demo! 

We've created an app at: [github-blocks.vercel.app](https://github-blocks.vercel.app/) that let's you view your files and repositories with different Blocks. 

> 💡 If you're reading this on the app, you're looking at a Block right now! This is a Markdown Block that is rendering the content of the `README.md` file. 

### Viewing file Blocks

You can switch which Block you're using in the dropdown menu in the top left of this window.

We have Blocks for viewing 3D files, prettifying CSV and JSON files, iframe components, React components, CSS selectors, and much more.

We've populated this repo with different types of content to explore. Feel free to poke around by clicking files and folders in the left sidebar, and see what you find!

![otherBlocks1](https://user-images.githubusercontent.com/8978670/144443697-ed57d444-8db2-4d34-80ec-ce474fe81c71.gif)

You can find the code for all of these example Blocks in our [example Blocks repo](https://github.com/githubnext/blocks-examples)

### Viewing folder Blocks

Folder blocks can help you visualize the contents of a folder, or work with the entire data of a folder. 

Check out our example folder Block by [clicking the root folder of this repo](https://github-blocks.vercel.app/githubnext/blocks-tutorial), or on your own repos by searching in the top left.

## Block features

### View live data

Since we have complete control over this content, we can render live data: say we want to see the latest commits in this repo:

<Commits num={3} />

The nice view of the commits above were generated with a custom component and one line of text in this markdown file:

`<Commits />`

The code for this custom example component can be found [HERE](https://github.com/githubnext/blocks-examples/blob/main/src/blocks/file-blocks/live-markdown/index.tsx#L198). 

### View changes over time

We've also included the commit history for the file or folder you're viewing in the right sidebar. 

This is a great way to keep an eye on what's changed recently, plus you can click to surf through past versions of the code. This becomes very powerful, when combined with different visualizations of the code, instead of just the raw content.

![commits](https://user-images.githubusercontent.com/8978670/144443772-36c4f827-d09b-4b03-99cd-e20ecadcf813.gif)

### Blocks metadata

Allowing Blocks to store metadata per file/folder opens the concept up to many more use cases. For example, the Chart Block uses this to store an array of saved chart types to easily come back to later.

We've added a `metadata` prop to the Block. This is a freeform prop that can be used to store any information you'd like. To update it, the Block can call the `onUpdateMetadata` prop with new metadata. This creates a commit that stores that data in `.github/blocks/file/` for File Blocks and `.github/blocks/folder/` for Folder Blocks. You can see some example metadata by poking around those folders in the left sidebar.

## Create your own custom Blocks

Hopefully you can see how a flexible Blocks API allows for completely new ways of interacting with code. 

If you want to create your own custom Blocks then these repositories are setup to get you started:

* [Blocks API](https://github.com/githubnext/blocks): Contains the API for building custom blocks
* [Blocks template starter project](https://github.com/githubnext/blocks-template): a repo that has been setup to be cloned and be used as a template for creating your own custom Blocks.
* [Blocks examples](https://github.com/githubnext/blocks-examples): a repo with example blocks we've built to showcase the API.       
* [Blocks utility library](https://github.com/githubnext/utils): a set of helper functions for writing custom blocks
