# GitHub Blocks + Designers

The line between developers and designers is blurring. You can see this with the recent of designers learning how to code, but can the code also meet designers where they are?

GitHub Blocks would be a game-changer for designers in many ways: empowering them to interact with code and work on github.com.

## Learning how to code

Blocks can help designers dip their toe in and learn how code translates into styles.

You could imagine a Block that would show the code side-by-side with explanations of what each line does.

- CSS definitions (need to build/mock up)

Or a Block that translates a site's CSS into the actual styles. This would be great for seeing changes through time, to test out changes, or to visualize the difference in a PR.

<BlockComponent
block={{
    owner:"githubnext",
    repo: "blocks-examples",
    id:"css-block",
    type: "file",
  }}
context={{path:"global.css"}}
/>

## Syncing between tools

Designers and developers work across a myriad of different tools - can we make github.com a unified place for all of their work?

- Figma sync ? (need to build/mock up)

## Design systems

A prime example of where design turns into code! Can we make it easier to build and maintain design systems?

<BlockComponent
block={{
    owner:"Wattenberger",
    repo: "blocks",
    id:"images",
    type: "folder",
  }}
context={{path:"",owner: "primer", repo: "octicons"}}
/>

<BlockComponent
block={{
    owner:"Wattenberger",
    repo: "blocks",
    id:"primer-colors",
    type: "file",
  }}
context={{path:"data/colors/themes/light.ts",owner: "primer", repo: "primitives"}}
/>

## Collaborating with developers

No more "throwing designs over the wall"! Can we make it easier for designers to respond to live code changes?

<BlockComponent
block={{
    owner:"githubnext",
    repo: "blocks-examples",
    id:"react-feedback-block",
    type: "file",
  }}
context={{path:"Aside.jsx"}}
/>

<BlockComponent
block={{
    owner:"githubnext",
    repo: "preview-block",
    id:"preview-folder-block",
    type: "folder",
  }}
context={{
    path:"",
    owner: "githubnext",
    repo: "blocks-preview-experiment",
    sha: "ec85745a2d8c7da8932aee921a6b8960e9eccf3d"
  }}
/>
