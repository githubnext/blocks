# Building your first block

Let's jump in! Use the [blocks-template](https://github.com/githubnext/blocks-template/generate) as your starting point so you can focus on the fun parts of block development.
## Setup

✨👉 [Fork the template](https://github.com/githubnext/blocks-template/generate) 👈✨

> 💡Alternatively, you can go to [the blocks-template repository](https://github.com/githubnext/blocks-template) and click on the "Use this template" button on the top right of the repository to make a copy for your use. ![](https://user-images.githubusercontent.com/8978670/144893319-5d45ab5c-12c0-42b4-99f8-97f658deb03b.png)


Name your repository:

<img width="801" alt="&quot;Create a new repository from blocks-template&quot; screen" src="https://user-images.githubusercontent.com/8978670/144893351-25b24bfa-3400-4e92-9a2a-618b3ac06a5e.png" />
Finally, clone your newly-created repository, you're ready to work.
## Developing locally

```bash
git clone <repo URL>
yarn # install dependencies
yarn start # start the dev server
```

A development server should now be running on [localhost:4000](localhost:4000).

## View your development server within the Blocks app

When you visit [localhost:4000](localhost:4000) in your browser, you'll be redirected to the Blocks platform with your locally-developed blocks embedded in it. You can see your blocks by clicking on the block picker toward the top of the page (they're shown at the top in blue with a plug icon):

<img alt="Block picker" src="https://user-images.githubusercontent.com/56439/181648955-101b6567-3f9b-44b3-af99-7ef3ca6161b9.png" width="418" />

This starter project has one example folder block and one example file block. Try choosing one of the example blocks in the block picker to see it in action. When you make changes to the block code it will be hot-reloaded in the app.

If you don't see your blocks, make sure that:

- your development server is running
- there's a `devServer` query parameter in the URL pointing to your development server, [like this](https://blocks.githubnext.com/githubnext/blocks?devServer=http://localhost:4000)

## The GitHub Blocks API

To create your own custom blocks you need to do two things:
- Define your custom block
- Code your block
### Define your custom block

If you open up `/blocks.config.json`, you'll notice an array of block objects
with the definitions for each custom block. Block objects follow this interface:

```ts
interface BlockDefinition {
  type: "file" | "folder";
  id: string;
  title: string;
  description: string;
  entry: string;
  matches?: string[];
}
```

You have to define these properties for your own custom block.

From top to bottom:

- `type` determines whether this block applies to files or folders.
- `id` is an identifier string for this block, like `"code-block"`. GitHub Blocks uses this to determine which block to render; it needs to be unique within your project.
- `title` and `description` control how your block appears within the GitHub Blocks application.
- `entry` is the path (relative to the project root) to the block's entry point, like `"blocks/example-file-block/index.tsx"`.
- `matches` is an array of globs describing filenames for which GitHub Blocks should show this block as an option, like `["*.json"]` for a block that handles JSON files, or `["*"]` for one that handles any file. (The glob syntax follows https://github.com/micromatch/picomatch)

> 🚨 Note that the `/blocks.config.json` file is not hot-reloaded, so you'll need to refresh the app to pick up changes.

### Code Your block

Your code goes in the `blocks/` directory. Here you'll find the two example blocks as a starting point. You can modify them, rename them (don't forget to update `blocks.config.json` if you change the path or file names), or just delete them.

Note that your Block entry file **must have the Block component as its default export** so the GitHub Blocks application can find it.

## Important block concepts

### Metadata

Blocks can store freeform metadata about themselves in the repository where they are _used_ (as opposed to the repo containing the code that powers the block). Metadata is unique per file/folder per Block, and committed to the [`.github/blocks/`](https://github.com/githubnext/blocks-tutorial/tree/main/.github/blocks) folder.

Often, metadata is used to store configuration data, so that you can customize how a block works by default for a specific file or folder in your repository.

To store or update metadata, call the `onUpdateMetadata` hook which is supplied to your block as a prop. The user will be prompted to accept the change and commit the new metadata to the repository.

When you next view the specific content with that block, the metadata prop will contain the committed metadata.

### Updating content

Blocks are not just for viewing content! They can also offer custom interfaces for editing content.

There are three props which facilitate editing content in blocks:

- `originalContent`: contains the original contents of the file. This is useful if you want to be able to display a diff of changes made, but not yet committed.
- `isEditable`: a flag indicating whether the current user has permission to edit the file. If it is false, the block should disable editing functionality, if present.
- `onUpdateContent`: a hook that can be called to update content programmatically. Users can also commit changes using the `Save` button in the Blocks interface next to the block picker. Whether triggered via the hook or the save button, the Blocks application will display a dialog containing a diff to the user, and ask for their permission to make a commit. Commits are recorded as being authored by the user that made (and approved) the request.


### Nesting

Blocks can be nested inside other blocks using `BlockComponent`; you can retrieve a list of available blocks using `onRequestBlocksRepos`. See the [edit-and-preview](https://github.com/githubnext/blocks-examples/blob/main/blocks/file-blocks/edit-and-preview/index.tsx) block for an example of their use.


## How might I...

**Import other files?**
You can import CSS files or split your block into multiple TypeScript files, and everything will be bundled with your block.

**Use third-party dependencies?**
You can use any third-party dependencies from NPM; just add them with `yarn add` and import them as usual, and they'll be bundled with your block.

**Style my block like GitHub?**
The [GitHub Primer React components](https://primer.style/react/) are already included as a dependency

If you're looking for examples or inspiration, check out our **[repo full of example blocks](https://github.com/githubnext/blocks-examples)**.
