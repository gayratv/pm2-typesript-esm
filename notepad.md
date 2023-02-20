
ts-node -P <path/to/tsconfig>

ts-node --showConfig

https://nodejs.org/dist/latest-v18.x/docs/api/esm.html#customizing-esm-specifier-resolution-algorithm

The --experimental-specifier-resolution=[mode] flag can be used to customize the extension resolution algorithm. The default mode is explicit, which requires the full path to a module be provided to the loader. To enable the automatic extension resolution and importing from directories that include an index file use the node mode.

```
$ node index.mjs
success!
$ node index # Failure!
Error: Cannot find module
$ node --experimental-specifier-resolution=node index
success!
```
