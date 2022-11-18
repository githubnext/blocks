# Blocks API Reference & Types

These are the props that are supplied to every block when it is mounted. These are fixed: you can't change the props, and you can't control the information passed in each prop, as they are automatically determined based on the underlying repo and content.

Blocks are authored in [TypeScript](https://www.typescriptlang.org/). If your editor supports it, you will be able to see this sort of information while developing.

### Props received by all blocks

```ts
interface CommonBlockProps {
  // metadata from `blocks.config.json`
  block: {
    id: string;
    type: string;
    title: string;
    description: string;
    entry: string;
    matches?: string[];
  };

  // context about the repo, file / folder, and version
  context: {
    path: string;
    file: string; // for File Blocks
    folder: string; // for Folder Blocks
    repo: string;
    owner: string;
    sha: string;
  };

  // arbitrary metadata for Blocks to store configuration etc.
  metadata: any;
  onUpdateMetadata: (newMetadata: any) => void;

  // callback to call any GET endpoint in the GitHub API:
  // https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps
  // e.g. `/repos/{owner}/{repo}/contributors`
  onRequestGitHubData: (
    path: string,
    params: Record<string, any>
  ) => Promise<any>;

  onNavigateToPath: (path: string) => void;

  // returns a list of repos containing blocks
  onRequestBlocksRepos: (params?: {
    path?: string; // restrict to blocks that match the path (see `matches` in `blocks.config.json`)
    searchTerm?: string; // restrict to blocks matching the search term
    repoUrl?: string; // restrict to blocks in the repo
    type?: "file" | "folder"; // restrict to blocks of this type
  }) => Promise<BlocksRepo[]>;

  // a React component that renders a block viewing a file or folder
  BlockComponent: ({
    block,
    context,
  }: {
    // owner, repo, and id identifying the block
    block: { owner: string; repo: string; id: string };

    // optional context specifying the file or folder to view;
    // omitted context or omitted fields default to the current file or folder
    context?:
      owner?: string;
      repo?: string;
      path?: string;
      sha?: string;
    };
  }) => JSX.Element;
}
```

### Props received by file blocks

```ts
interface FileBlockProps {
  // the file content
  content: string;
  // callback to update the file content
  onUpdateContent: (newContent: string) => void;

  // the original file content
  originalContent: string;

  // whether or not the user can edit the content
  isEditable: boolean;
}
```

### Props received by folder blocks

```ts
interface FolderBlockProps {
  // flat list of files and folders in the tree
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
