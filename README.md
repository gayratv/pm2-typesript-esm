# problem to start pm2 typescript ESM app

ts-node options
https://typestrong.org/ts-node/docs/options/

### how I start it

1. copy all files to server
2. npm i
3. cd to project dir
3. pm2 start ecosystem.config.cjs

As you can see - I fully configure ts-node in tsconfig.json
I try to use node and ts-node and try to pass argument - result is the same:

```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for /var/node/srv2/src/main.ts
    at new NodeError (node:internal/errors:399:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:79:11)
    at defaultGetFormat (node:internal/modules/esm/get_format:121:38)
    at defaultLoad (node:internal/modules/esm/load:81:20)
    at nextLoad (node:internal/modules/esm/loader:163:28)
    at ESMLoader.load (node:internal/modules/esm/loader:605:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:457:22)
    at new ModuleJob (node:internal/modules/esm/module_job:64:26)
    at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:480:17)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:434:34) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
}

```
