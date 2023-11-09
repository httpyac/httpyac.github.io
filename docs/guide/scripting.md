
# Scripting

It is possible to use NodeJS scripts. All scripts before the request line are executed before the request is called. All scripts after the request line are executed as soon as the response is received. All exports of the script are stored as variables.


<<< @../../examples/script/script.http

::: warning
Scripts are executed in a custom context/ execution environment. This context should behave identically to [NodeJS Default execution environment](https://nodejs.org/api/vm.html#what-does-it-mean-to-contextify-an-object), but there may be variations. These can be bypassed using require.
:::


::: warning
The line break after <code v-pre>'{{'</code> is important to distinguish between script execution and variable substitution/ templating. 
:::

## Async/Await or Promise

If the execution of the script is `async`, it is necessary to export this Promise. In this case, the program waits for the Promise to be completed.

<<< @../../examples/script/scriptPromise.http


## Access to Variables

All Variables already defined can be accessed via the [global object](https://nodejs.org/api/globals.html).

::: warning
Since all variables are placed on the global scope of the script, they may overwrite other variables. Please use unique variable names
:::

In addition to the defined variables and [NodeJS Global](https://nodejs.org/api/globals.html), the following values are also set on global object.

| name | description | condition | example |
| - | - | - | - |
| $global | Object which allows storing global Variables | | [globalVariables.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/variables/globalVariables.http) |
| $requestClient | [requestClient](https://github.com/AnWeber/httpyac/blob/main/src/models/requestClient.ts) to send additional body in streaming event.  | | [requestClient.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/request/requestclient.http) |
| httpFile | current [httpFile](https://github.com/AnWeber/httpyac/blob/main/src/models/httpFile.ts) | - | [scriptVariablesHttpFile.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/scriptVariablesHttpFile.http) |
| httpRegion | current [httpRegion](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRegion.ts) | - | [scriptVariablesHttpRegion.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/scriptVariablesHttpRegion.http) | 
| oauth2Session | [OAuth2 Response](https://github.com/AnWeber/httpyac/blob/main/src/models/openIdInformation.ts#L29-L37) |only if [OAuth2/ OpenId Connect](/guide/variables.html#oauth2-openid-connect) is used | [scriptVariablesOAuthSession.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/scriptVariablesOAuthSession.http) |
| request | request of the next [http request](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts) | - | [custom.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/variables/custom.http) |
| response | [http response](https://github.com/AnWeber/httpyac/blob/main/src/models/httpResponse.ts) of the last executed request | only use it in post request scripts or for responses imported with `@forceRef` | [websocket.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/assert.http) |
| sleep | [Method](https://github.com/AnWeber/httpyac/blob/main/src/utils/promiseUtils.ts#L7) to wait for a fixed period of time | - | [grpcClientStreaming.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/request/grpc/grpcClientStreaming.http) |
| test | method to simplify [tests](https://github.com/AnWeber/httpyac/blob/main/src/models/testFunction.ts#L6-L14) ([assert](https://github.com/httpyac/httpyac.github.io/tree/main/examples/project/tests/assert.http) or [chai](https://github.com/httpyac/httpyac.github.io/tree/main/examples/project/tests/chai.http)) | - | [test.http](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/test.http) |
| __dirname | [path to current working directory](https://nodejs.org/api/modules.html#__dirname) | - | - |
| __filename | [The file name of the current module.](https://nodejs.org/api/modules.html#__filename) | - | - |

## Require

External scripts can be imported using require, but you need to install dependencies yourself.

<<< @../../examples/script/scriptRequire.http{3}


::: tip
External dependencies must be installed independently, exceptions are , ,  and  Dependency, which are provided from the extension.
:::

External dependencies must be installed independently, but some dependencies are provided from httpyac:
- [@cloudamqp/amqp-client](https://www.npmjs.com/package/@cloudamqp/amqp-client)
- [@xmldom/xmldom](https://www.npmjs.com/package/@xmldom/xmldom)
- [dayjs](https://www.npmjs.com/package/dayjs) ([example](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/dayjs.http))
- [eventsource](https://www.npmjs.com/package/eventsource)
- [got](https://www.npmjs.com/package/got)
- [grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) ([example](https://github.com/httpyac/httpyac.github.io/tree/main/examples/request/grpc/grpc.http))
- [httpYac](https://www.npmjs.com/package/httpyac)
- [mqtt](https://www.npmjs.com/package/mqtt)
- [NodeJS API](https://nodejs.org/docs/latest/api/) ([example](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/assert.http))
- [uuid](https://www.npmjs.com/package/uuid) ([example](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/uuid.http))
- [vscode](https://www.npmjs.com/package/@types/vscode)
- [ws](https://www.npmjs.com/package/ws)
- [xpath](https://www.npmjs.com/package/xpath) ([example](https://github.com/httpyac/httpyac.github.io/tree/main/examples/script/xpath.http))


::: warning
[NodeJS](https://nodejs.org/api/modules.html#modules_require_cache) caches all loaded scripts. Since in VS Code the script is executed in the context of the extension, the content of the script is not reloaded. Therefore, the script must be manually removed from the cache.
:::

## Console

The console cannot be accessed in VS Code. Therefore, a separate Console object is provided in the context of the script that redirects the output to the OutputChannel.

```http
@foo = https://httpbin.org

{{
  console.info(foo);
}}
```

Open the OutputChannel by pressing `CTRL+K` followed by `CTRL+H`, then select `httpyac - Console` from the select on the right.

## Global Scripts

Scripts with no request in the same region are always executed (Global Scripts).

<<< @../../examples/script/globalScripts.http

## Events

The normal script registration is executed in order of occurrence in http File. For the execution of a request, several steps have to be executed besides the actual request: Replace Variables, Prepare Body, Pretty Print Body. With events scripts can be hooked into concrete steps in this process. 

<<< @../../examples/script/events.http{1}

The following events are possible.

| Events | Description |
| - | - |
| request | event triggered before every request (but after replaceVariableHook) |
| streaming | event triggered while client streaming |
| response | event triggered on response of request |
| responseLogging | event triggered on output of response, used for altering output which is provided with variable response |
| after | event triggered after all request is sent |


::: tip
The events can be registered automatically globally using `+`.
:::

<<< @../../examples/script/globalScriptOnEveryHttpRegionAfter.http{1}

If no event is specified for global registration, the script is executed before every request.

<<< @../../examples/script/globalScriptOnEveryHttpRegion.http{1}

![events](./scripting.svg)

## Intellij Script

Intellij Scripts are supported. An [Http client](https://www.jetbrains.com/help/idea/http-client-reference.html) and [response](https://www.jetbrains.com/help/idea/http-response-reference.html) object corresponding to the interface is created and are available in the script.

::: warning
The execution environment differs between NodeJS and Intellij (uses Nashorn). Possibly the behavior is not completely identical, to Intellij Execution. If there are problems, please let me know.
:::

<<< @../../examples/script/intellij.http{1}

## How to debug scripts

1. Install httpYac cli with `npm install httpyac -g`
1. open Http File in VS Code
3. add [debugger;](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/debugger) statement in script
4. open [Javascript Debug Terminal](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal) in VS Code
5. execute command `httpyac <file> -l <line>`


<<< @../../examples/script/debugger.http{7}
