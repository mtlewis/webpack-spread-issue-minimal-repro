This repo demonstrates a bug with webpack.

# Bug Description

When a variable name declared via the spread operator shadows the name of an imported module, subsequent references to the variable are incorrectly replaced with the webpack identifier for the module.

# Testing

* `yarn build` bundles the index.js entry point using webpack
* `yarn test` runs the bundle - note the assert in the code confirming that the variable name has been rewritten incorrectly.

Once a build has been made, it's possible to also observe the bug in the bundle itself. If you search the bundle content for the string "Variable A has the wrong value!", you'll see the incorrect replacement of the variable A on the same line.
