# Blocks Tutorial

GitHub Blocks is a prototype exploring what an extensable GitHub would look like. We wondered how could we use the powerful primitives already avilable on github.com and build on top of those to make the platform more customizable and powerful.

## What is a Block?

We call a block any discrete "app" or "viewer" that can take in as input a file or folder and do something with that data. Blocks come in two types: file blocks and folder blocks.

## Experience your first block

1. Click on the `data.csv` file
2. Notice the `Flat block` show up on the dropdown
3. Enjoy a beautifully rendered csv file! 

## Try other blocks

### File blocks

| File name | Block name | Description                  |
| --------- | ---------- | ---------------------------- |
| drawing.excalidraw | Drawing       | Play with an interactive drawing        |
| figma.iframe | Iframe   | View a figma file |
| global.css | CSS        | View selectors in a css file |
| poll.json | Poll | Nicely rendered poll data  |
| Aside.jsx | React component feedback      | Give design feedback on a react component  |

### Folder blocks

| Folder | Block name | Description                               |
| ---------- | ---------- | ----------------------------------------- |
| Click on the repo name on the left sidebar    | Minimap    | A visualization of your folders and files |

## Commits and previous file versions

You can use the commit history on the right sidebar to click through previous versions of a file. Each block should render a different view or state of the file throughout it's history.

## Create your own custom blocks

Hop on over to [blocks-template](https://github.com/githubnext/blocks-template) to learn how to create your own custom file and folder blocks.

Also check out our [example blocks](https://github.com/githubnext/blocks-examples), created from the same template file above.
