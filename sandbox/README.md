# Let's learn how to use Lodash

`_.chunk`

<CodeSandbox language="js" dependencies={["lodash"]}>
import _ from "lodash"

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
</CodeSandbox>