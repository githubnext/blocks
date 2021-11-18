# Composable Github Example Files

This repo contains a set of example files you can use with our [example viewers](https://github.com/githubnext/composable-github-example-viewers) within the [Composable Github](https://composable-github.vercel.app/) app. 

## Viewer configuration files

Configuration files for viewers can be stored in the `.github/viewers` folder.

## Testing

## Latest issues

<Issues />

## Latest commits

<Commits />


## Live documentation sandbox

`_.compact`

<CodeSandbox language="js" dependencies={["lodash"]}>

```js
import _ from "lodash"

const compact = _.compact([0, 1, false, 2, '', 3]);
console.log(compact)
```

</CodeSandbox>
