# Deploying your blocks

To make your custom block accessible to the Blocks app without your development server running, there are a few steps you need to take:

## Commit your code and push a new tag

This template includes a GitHub Action to build a production version of your block. All you need to do to kick off the build process is commit and push your code changes, then create a new tag:

```bash
git commit -m'made an awesome block'
git push
git tag 0.9.0 # Create a new tag with your own version number
git push --tags # Push the tag to GitHub
```

The action runs `yarn build`, which can be more picky than the development server. You might want to run `yarn build` manually to ensure the action will succeed, or to debug an issue if the action fails.

## Wait for the build process to finish

Look under Actions for your repo to see that your build has finished. The latest successful build should now be accessible in the GitHub Blocks application.

From the repository settings page, make sure that your workflow has **Read and write** permissions or the action will fail with a 403 error.

<img width="805" alt="&quot;Workflow permissions&quot; setting" src="https://user-images.githubusercontent.com/5148596/167847856-22ad190a-d73c-4b97-a0e2-c3c854db0d4f.png" />

<img width="1097" alt="Successful build action screen" src="https://user-images.githubusercontent.com/8978670/144665796-cb1ff450-c872-47c5-90b3-f74aea10286b.png" />

<img width="152" alt="Tagged release" src="https://user-images.githubusercontent.com/8978670/144665673-431e28f9-9e9d-43b3-87f8-1e5d98bed92c.png" />

## Test your production block in the Blocks app

Once the action has completed, visit [blocks.githubnext.com](https://blocks.githubnext.com) (with no `devServer` parameter in the URL), then paste your repo URL (`https://github.com/{owner}/{repo}`) into the block picker search bar. This will load the production version of your block, without using your development server.

Everything should work the same as before.

## Add the topic `github-blocks` to your repo (optional)

If you want your blocks to show up in the block picker in GitHub Blocks, you need to tag this repository with the topic `github-blocks` so the application can find it.

<img width="323" alt="Repository tagged with &quot;github-blocks&quot;" src="https://user-images.githubusercontent.com/8978670/144665902-63543c98-2486-4e13-9c54-f1d4bc6544a4.png" />

> If you aren't ready to share your block with others, *simply don't tag the repo*. Your blocks won't show up in the block picker by default, but you can still paste the repo URL (`https://github.com/{owner}/{repo}`) into the search box at the top of the block picker to search blocks in the repo. If your repo is private, only people with access to the repo can see and use your blocks.

