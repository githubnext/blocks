# Let's learn how to use Lodash

`_.chunk`

<CodeSandbox language="js" dependencies={["lodash"]}>

```js
import _ from "lodash"

const chunk2 = _.chunk(['a', 'b', 'c', 'd'], 2)
console.log(chunk2)

const chunk3 = _.chunk(['a', 'b', 'c', 'd'], 3)
console.log(chunk3)
```

</CodeSandbox>