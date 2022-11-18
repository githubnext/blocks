# Deploying your blocks

To make your custom block accessible to the Blocks Platform without your development server running, there are a few steps you need to take:
## Configure workflow permissions

From the repository settings page, make sure that your workflow has `Read and write` permissions or the action will fail with a 403 error:
<img width="805" alt="&quot;Workflow permissions&quot; setting" src="https://user-images.githubusercontent.com/5148596/167847856-22ad190a-d73c-4b97-a0e2-c3c854db0d4f.png" />
## Commit your code and push a new tag

The blocks template includes a GitHub Action to build a production version of your block. To kick off the build process, commit and push your code changes, then create — **and push** — new tag:

```bash
git commit -m'made an awesome block'
git push
git tag 0.9.0 # Create a new tag with your own version number
git push --tags # Push the tag to GitHub
```

The action runs `yarn build`, which can be more picky than the development server. You can run `yarn build` manually on your local checkout to spot any errors before pushing, or as a way to debug issues if the action fails.

## Wait for the build process to finish

Look under Actions for your repo to see that your build has finished successfully:

<img width="1097" alt="Successful build action screen" src="https://user-images.githubusercontent.com/8978670/144665796-cb1ff450-c872-47c5-90b3-f74aea10286b.png" />

<img width="152" alt="Tagged release" src="https://user-images.githubusercontent.com/8978670/144665673-431e28f9-9e9d-43b3-87f8-1e5d98bed92c.png" />

## Test your production block in the Blocks app

Once the action has completed, visit [blocks.githubnext.com](https://blocks.githubnext.com) (with no `devServer` parameter in the URL), then paste your repository URL (`https://github.com/{owner}/{repo}`) into the block picker search bar. This will load the production version of your block, without using your development server.

## Add the topic `github-blocks` to your repository (optional)

If you want your blocks to be listed in the block picker for others to use, you need to tag this repository with the topic `github-blocks` so the platform can find it.

<img width="323" alt="Repository tagged with &quot;github-blocks&quot;" src="https://user-images.githubusercontent.com/8978670/144665902-63543c98-2486-4e13-9c54-f1d4bc6544a4.png" />

> If you aren't ready for others to discover your block, *don't tag the repository*. Your blocks won't show up in the block picker by default, but anyone can still paste the URL for the repository of your block (`https://github.com/{owner}/{repo}`) into the search box at the top of the block picker to use it. If your repo is private, only people with access to the repo can see and use your blocks.


