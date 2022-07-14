# Lodash documentation

`_.chunk`

Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

<CodeSandbox language="js" dependencies={["lodash"]} sandboxOptions={{expanddevtools:1,hidedevtools:0,view:split}}>

```js
import _ from "lodash"

const chunk = _.chunk(['a', 'b', 'c', 'd'], 2);
console.log(chunk)
```

</CodeSandbox>


`_.compact`

Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

<CodeSandbox language="js" dependencies={["lodash"]} sandboxOptions={{expanddevtools:1,hidedevtools:0,view:split}}>

```js
import _ from "lodash"

const compact = _.compact([0, 1, false, 2, '', 3]);
console.log(compact)
```

</CodeSandbox>


`_.concat`

Creates a new array concatenating array with any additional arrays and/or values.

<CodeSandbox language="js" dependencies={["lodash"]} sandboxOptions={{expanddevtools:1,hidedevtools:0,view:split}}>

```js
import _ from "lodash"

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other)
```

</CodeSandbox>

