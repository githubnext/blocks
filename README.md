# GitHub Blocks

> 🎉 You made it! Welcome to the GitHub Blocks Technical Preview. For questions and help, join us at [discord.gg/githubnext](https://discord.gg/githubnext) in the `#blocks` channel.
## What are blocks?

With Blocks, you can extend GitHub's interface in some pretty powerful ways! It could be as simple as a custom renderer for files or folders in your repository, and it can be as flexible as a full interface for editing content.

The Blocks platform is [blocks.githubnext.com](https://blocks.githubnext.com). If you have access, you can view any public repository on GitHub by navigating to `blocks.githubnext.com/{owner}/{repo}`.

> 🚨 Blocks is currently an experimental technical preview! It WILL have bugs and issues, and should not be used for anything mission-critical.

## Goals of the Technical Preview

We’re aiming for two things with the technical preview:
- Seed a marketplace with Blocks for common use cases
- Refine the developer experience for building and using Blocks.

**As an early adopter you can help shape the direction for Blocks by building your own, and by sharing your feedback. We will work closely with you every step of the way**.

GitHub Blocks is an exploration of the question:

> What if developers could customize GitHub, not only to present their code and data, but to make it a living, interactive platform?

Instead of feeling like a storage locker for code, could you bring that content to life? What if a designer could view styles from a CSS file instead of having to wait for a developer to transform it? What if you could review that branch with the new component by looking at the file here, instead of cloning the repository and setting up a local development environment? What if journalists and scientists could visualize data right on GitHub, along with how it's changed over time?

Ultimately, extensibility is about making all the parts of the developer platform that we never imagined. It could be a great idea that all developers love, or just something that scratches your own itch. 

We can't imagine the developer platform of the future alone! **We want you to build blocks and share them.** Help us to design the developer experience, and help us to figure out how to strike a good balance between ease-of-use and flexibility. We're very excited to see how you use the Blocks platform!

### Using Blocks

If you're viewing this in the [Blocks platform](https://blocks.githubnext.com), You can switch which block you're using in the dropdown menu in the top left of this window.

### File blocks 

We have Blocks for viewing 3D files, prettifying CSV and JSON files, React components, CSS selectors, and much more.

We've populated this repo with different types of content to explore. Feel free to poke around by clicking files and folders in the left sidebar, and see what you find!

![otherBlocks1](https://user-images.githubusercontent.com/8978670/144443697-ed57d444-8db2-4d34-80ec-ce474fe81c71.gif)

You can find the code for all of these example Blocks in our [example Blocks repo](https://github.com/githubnext/blocks-examples)

### Folder blocks

Folder blocks can visualize or the contents of a folder, or even the entire repository.

Check out our example folder Block by [clicking the root folder of this repo](https://blocks.githubnext.com/githubnext/blocks).

## Block features

### View live data

Since we have complete control over this content, we can render live data: say we wanted to show off our p5.js sketch, we can do that inline:

<BlockComponent
block={{"owner":"githubnext","repo":"blocks-examples","id":"processing-block","type":"file"}}
context={{"repo":"blocks","owner":"githubnext","path":"examples/p5-sketch.js","sha":"HEAD","file":"README.md"}}
height={438}
/>
as well as show the code for that sketch:

<BlockComponent
block={{"owner":"githubnext","repo":"blocks-examples","id":"code-block","type":"file"}}
context={{"repo":"blocks","owner":"githubnext","path":"examples/p5-sketch.js","sha":"HEAD","file":"README.md"}}
height={202}
/>
We can also embed interactive code examples, say for demonstrating how to use gestures in framer-motion:

<BlockComponent
block={{"owner":"githubnext","repo":"blocks-examples","id":"sandbox-block","type":"file"}}
context={{"repo":"blocks","owner":"githubnext","path":"examples/framer motion docs/example2.js","sha":"HEAD","file":"README.md"}}
/>

### View changes over time

We've also included the commit history for the file or folder you're viewing in the right sidebar.

This is a great way to keep an eye on what's changed recently, plus you can click to surf through past versions of the code. This becomes very powerful when combined with different visualizations of the code, instead of just the raw content.

![commits](https://user-images.githubusercontent.com/8978670/144443772-36c4f827-d09b-4b03-99cd-e20ecadcf813.gif)


---

## Developing your own blocks

We've written a guide for developing blocks! Use the file tree on the left to navigate to `docs/Developing Blocks`.

## Getting help

Blocks is a technical preview, and is NOT a supported GitHub product. Please don't reach out to GitHub support, as they will not be able to help you.

The best venue to find help and connect with other creators is the GitHub Next discord, at [discord.gg/githubnext](https://discord.gg/githubnext). Join the `#blocks` channel and say hi!
