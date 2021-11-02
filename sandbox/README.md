# Let's learn how to use Lodash

`_.chunk`

<CodeSandbox language="js" dependencies={["lodash"]}>

```js
import _ from "lodash"

document.body.insertAdjacentHTML("beforeend", `<div>${
    _.chunk(['a', 'b', 'c', 'd'], 2)
}</div>`)
 
document.body.insertAdjacentHTML("beforeend", `<div>${
    _.chunk(['a', 'b', 'c', 'd'], 3)
}</div>`)
```

</CodeSandbox>