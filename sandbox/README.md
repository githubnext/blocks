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


`_.compact`

<CodeSandbox language="js" dependencies={["lodash"]}>

```js
import _ from "lodash"

const compact = _.compact([0, 1, false, 2, '', 3]);
console.log(compact)
```

</CodeSandbox>

`_.concat`

<CodeSandbox language="js" dependencies={["lodash"]}>

```js
import _ from "lodash"

const array = [1];
const other = _.concat(array, 2, [3], [[4]]);

console.log(other)
console.log(array)
```

</CodeSandbox>