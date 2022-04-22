# GitHub Blocks Docs and Tutorial

GitHub Blocks is an exploration of the question:

> What if developers could customize GitHub, not only to present their code and data, but to make it a living, interactive platform?

Instead of feeling like a storage locker for code, can we bring that content to life? What if a designer could view styles from a CSS file instead of having to wait for a developer to transform it? Or if journalists could visualize data right on GitHub, along with how it's changed over time? There are so many possibilities!

This sounds like a lot of work to build, right? With such an enthusiastic and active community, GitHub could build a flexible API that allows users to take control, and help with building out any use case.

In our exploration we've created a first version of this API that lets anyone create their own custom Blocks.

> 🚀🚀🚀 Check out the Demo: [blocks.githubnext.com](https://blocks.githubnext.com/)

## What is a Block?

Our experiment looks similar to the current github.com UI, but introduces the concept of a Block: a different way to view or interact with a file or folder.

Technically, a Block is React component that receives specific props and renders a view of them. There are two types of blocks:

- **File Blocks** receive the contents of a file, and
- **Folder Blocks** receive the structure of a folder.

## Show me the Blocks demo!

We've created an app at: [blocks.githubnext.com](https://blocks.githubnext.com/) that lets you view your files and repositories with different Blocks.

> 💡 If you're reading this on the app, you're looking at a Block right now! This is a Markdown Block that is rendering the content of the `README.md` file.

> 👀 You can also take a look at all of our example blocks by going to the [Blocks Marketplace](https://blocks-marketplace.githubnext.com/)!

### Viewing file Blocks

You can switch which Block you're using in the dropdown menu in the top left of this window.

We have Blocks for viewing 3D files, prettifying CSV and JSON files, React components, CSS selectors, and much more.

We've populated this repo with different types of content to explore. Feel free to poke around by clicking files and folders in the left sidebar, and see what you find!

![otherBlocks1](https://user-images.githubusercontent.com/8978670/144443697-ed57d444-8db2-4d34-80ec-ce474fe81c71.gif)

You can find the code for all of these example Blocks in our [example Blocks repo](https://github.com/githubnext/blocks-examples)

### Viewing folder Blocks

Folder blocks can help you visualize the contents of a folder, or work with the entire data of a folder.

Check out our example folder Block by [clicking the root folder of this repo](https://blocks.githubnext.com/githubnext/blocks-tutorial), or on your own repos by searching in the top left.

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

---

## Create your own custom Blocks

> 📣 Read this if you're a GitHub user interested in building your own custom Blocks!

Hopefully you can see how a flexible Blocks API allows for completely new ways of interacting with code. The following section gives a high-level sense of the Blocks API and other resources for creating your own custom Block. 

We also recommend you get started by going through our custom block tutorial in the <a href="https://github.com/githubnext/blocks-template" target="_blank">`blocks-template`</a> repo.

### GitHub Blocks API

Recall there are two type of Blocks: File Blocks and Folder Blocks. Their API is largely the same, receiving the following props:

```ts
interface BlockProps {
  block: {
    id: string;
    type: string;
    title: string;
    description: string;
    entry: string;
    extensions?: string[]; // Soon to be deprecated in favor of the following "matches" key.
    matches?: string[]; // An array of globs written in picomatch syntax. See https://github.com/micromatch/picomatch for examples.
  };
  context: {
    path: string;
    file: string;
    repo: string;
    owner: string;
    sha: string;
  };
  metadata: any;

  // callback functions
  onUpdateMetadata: (
    newMetadata: any,
    path: string,
    block: Block,
    currentMetadata: any
  ) => void;
  onRequestUpdateContent: (newContent: string) => void;
  onRequestGitHubData: (type: string, config: any, id: string) => Promise<any>;
  onNavigateToPath: (path: string) => void;

  // if a File Block
  content: string;

  // if a Folder Block
  tree: {
    path?: string;
    mode?: string;
    type?: string;
    sha?: string;
    size?: number;
    url?: string;
  }[];
}
```

For simple use cases, the `content` (the content of the file) or `tree` (a list of the contained files & folders) prop will be the most useful, with info about the file or folder the user is looking at on the GitHub Blocks UI. But if you need additional context (such as the path to the file or the owner/repo in which the file lives), you can access it via the handy `context` prop.

`metadata` is a free-form prop that can be used to store arbitrary data about the file. It's up to you to decide what you want to store in this object: anywhere from definitions of data visualizations in a charts Block to annotations for a code Block. This is unique per file/folder per Block and stored within a [`.github/blocks/file/`](https://github.com/githubnext/blocks-tutorial/tree/main/.github/blocks) folder within the viewed repo. To update the metadata, you can call the `onUpdateMetadata` prop with the updated data, which creates a new commit on the repo.

A few caveats and callouts:

- Blocks have access to [GitHub Primer CSS styles](https://primer.style/css/) and Tailwind by default.
- You can use both third-party _and_ relative imports in your Block code! Simply put, feel free to install any dependencies from NPM, or import a local JS/CSS file and it should be included in the final bundle.
- Your Block entry file **must have the Block component as its default export**. If it does not, bad things will happen.

### Other Relevant repos

* [Blocks examples](https://github.com/githubnext/blocks-examples): Example blocks that we've built to showcase the API.
* [Blocks template starter project](https://github.com/githubnext/blocks-template): A template and tutorial for creating your own custom Blocks.
* [Blocks utility library](https://github.com/githubnext/utils): To reduce the cognitive load associated with writing file and folder Block components, we've assembled a helper library called `@githunext/utils` that exposes interface definitions and a few helper functions. This list will undoubtedly change over time, so be sure to check out [the repository page](https://github.com/githubnext/utils) for more detail.
