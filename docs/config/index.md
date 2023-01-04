---
sidebar: auto
---

# Configuration Reference

Basic settings for all requests, logging and general application behavior can be configured via application argument (CLI arguments or VS Code settings). It is also possible to store these centrally in the project root  in an `httpyac.config.js` file, which is observed by both CLI and VS Code Extension.


## Project Root

The project root directory is determined by finding closest directory depending on the current file with one of the following files:

* `package.json`
* `httpyac.config.js`
* `.httpyac.js`
* `.httpyac.json`
* `env` directory

If no suitable folder can be determined, the default settings are used.

## httpyac.config.js

`httpyac.config.js` (or `.httpyac.js`, `.httpyac.json`) is an optional config file that will be automatically loaded by httpYac if it's present in your project root (next to `package.json`). You can also use the `httpyac` field in `package.json`, but do note in that case you will be limited to JSON-compatible values only.

The file should export an object containing options:

``` js
// httpyac.config.js
module.exports = {
  // options...
  log: {
    level: models.LogLevel.warn,
    supportAnsiColors: true,
  },
  cookieJarEnabled: true,
  envDirName: 'env',
}
```

The content of the httpyac.config.js file should correspond to the [interface `environmentConfig`](https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts).

### log.level

- Type: `number`
- Default: `warn`

[log level](https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L4-L11) of outputs.

```ts
export enum LogLevel {
  trace = 1,
  debug = 2,
  warn = 5,
  info = 10,
  error = 100,
  none = 1000,
}
```

### log.supportAnsiColors

- Type: `boolean`
- Default: `true`

enable ansi color support (using [chalk](https://github.com/chalk/chalk))

### envDirName

- Type: `string`
- Default: `'env'`

relative or absolute path to env dir

::: warning
A changed value is not used in the Project Root determination
:::

### environments

- Type: `object`
- Default: `undefined`

This setting is used for environment detection using [JSON](/guide/environments.html#json). Each key of first level of the object is used as environment. Value of the Object is used as Variables.

### request

- Type: `Object`
- Default: `undefined`

default configuration for each http request. httpYac uses [got](https://github.com/sindresorhus/got) as Http Request Library. [Here](https://github.com/sindresorhus/got/blob/main/documentation/2-options.md) all options of [got](https://github.com/sindresorhus/got) are described.

```json
"request": {
  "https":  {
    "rejectUnauthorized": false
    }
}
```
::: warning
This configuration is passed directly to `got` without further adjustment. No files are loaded and no variable substitution takes place.
:::

### proxy

- Type: `string`
- Default: `undefined`

Proxy url for which an HttpProxyAgent is created

### requestBodyInjectVariablesExtensions

- Type: `Array<String>`
- Default: `undefined`

List of file extensions for which [request body variable replacement](../guide/request.md#request-body) is always activated automatically

::: warning
This setting was introduced because of better compatibility with Intellij. It is recommended to specify it explicitly per file, otherwise files will be loaded into memory unnecessarily.
:::

### clientCertificates

- Type: `Object`
- Default: `undefined`

[Object](https://github.com/AnWeber/httpyac/blob/main/src/models/clientCertifcateOptions.ts) with all client certificates. Each key is interpreted as host. When a call is made to this host, the certificate is automatically appended to the request.

```json
{
  "clientCertificates":{
    "localhost:8081": {
        "cert": "/Users/demo/Certificates/client.crt",
        "key": "/Users/demo/Keys/client.key"
    },
    "example.com": {
        "cert": "/Users/demo/Certificates/client.crt",
        "key": "/Users/demo/Keys/client.key"
    }
  }
}
```

### defaultHeaders

- Type: `Object`
- Default: `undefined`

Object with default headers used for every request.

```json
{
  "defaultHeaders":{
    "Authorization": "Bearer {{token}}"
  }
}
```

### cookieJarEnabled

- Type: `boolean` or `Object`
- Default: `true`

Enable cookieJar support for every request. Following options are available

```ts
{
  allowSpecialUseDomain?: boolean | undefined;
  looseMode?: boolean | undefined;
  rejectPublicSuffixes?: boolean | undefined;
  prefixSecurity?: string | undefined;
}
```


### configureHooks

- Type: `Function`

By means of the function [`configureHooks`](https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L35) the [plugin api](../plugins/plugin-api.md) can be accessed easily. So without creating a plugin, the same interface can be used to make further adjustments to httpYac.

```js
module.exports = {
	configureHooks: function (api) {
		api.hooks.responseLogging.addHook('removeSensitiveData', function (response) {
			if (response.request) {
				delete response.request.headers['authorization'];
			}
		});
	}
}
```

### plugins

- Type: `Object`
- Default: `undefined`

This is an object that doesn't go through any schema validation, so it can be used to pass arbitrary options to 3rd party plugins.

