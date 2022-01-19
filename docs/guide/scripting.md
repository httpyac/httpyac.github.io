
# Scripting

It is possible to use NodeJS scripts. All scripts before the request line are executed before the request is called. All scripts after the request line are executed as soon as the response is received. All exports of the script are stored as variables.


@[code http](../../examples/script/script.http)

::: tip
If the execution of the script is `async`, it is necessary to export this Promise. In this case, the program waits for the Promise to be completed.
:::

@[code http](../../examples/script/scriptPromise.http)

::: warning
Scripts are executed in a custom context/ execution environment. This context should behave identically to [NodeJS Default execution environment](https://nodejs.org/api/vm.html#what-does-it-mean-to-contextify-an-object), but there may be variations. These can be bypassed using require.
:::

## Access to Variables

All Variables already defined can be accessed via the global scope.

::: warning
Since all variables are placed on the global scope of the script, they may overwrite other variables. Please use unique variable names
:::

In addition to the defined variables, the following values are also set on global scope

| name | description | condition | example |
| - | - | - | - |
| grpcStream | currently active [Grpc Writable Stream](https://nodejs.org/api/stream.html#writable-streams) | only if grpc stream is active | [grpcClientStreaming.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/request/grpcClientStreaming.http) |
| httpFile | current [httpFile](https://github.com/AnWeber/httpyac/blob/main/src/models/httpFile.ts) | - | [scriptVariablesHttpFile.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/script/scriptVariablesHttpFile.http) |
| httpRegion | current [httpRegion](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRegion.ts) | - | [scriptVariablesHttpRegion.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/script/scriptVariablesHttpRegion.http) | 
| mqttClient | currently active [MQTT Client](https://github.com/mqttjs/MQTT.js#example) | only if mqtt client is active | [mqttPublish.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/request/mqttPublish.http) |
| oauth2Session | [OAuth2 Response](https://github.com/AnWeber/httpyac/blob/main/src/variables/replacer/oauth2/openIdInformation.ts#L6-L14) |only if [OAuth2/ OpenId Connect](/guide/variables.html#oauth2-openid-connect) is used | [scriptVariablesOAuthSession.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/script/scriptVariablesOAuthSession.http) |
| request | request of the next [http request](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts) | - | [custom.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/variables/custom.http) |
| response | [http response](https://github.com/AnWeber/httpyac/blob/main/src/models/httpResponse.ts) of the last executed request | only use it in post request scripts or for responses imported with `@forceRef` | [websocket.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/script/assert.http) |
| sleep | [Method](https://github.com/AnWeber/httpyac/blob/main/src/utils/promiseUtils.ts#L7) to wait for a fixed period of time | - | [grpcClientStreaming.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/request/grpcClientStreaming.http) |
| test | method to simplify [tests](https://github.com/AnWeber/httpyac/blob/main/src/models/testFunction.ts#L6-L14) ([assert](https://github.com/httpyac/httpyac.github.io/blob/main/examples/project/tests/assert.http) or [chai](https://github.com/httpyac/httpyac.github.io/blob/main/examples/project/tests/chai.http)) | - | [test.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/script/test.http) |
| websocketClient | currently active [Websocket Client](https://www.npmjs.com/package/ws#sending-and-receiving-text-data) | if websocket client is active | [websocket.http](https://github.com/httpyac/httpyac.github.io/blob/main/examples/request/websocket.http) |

## Require

External scripts can be imported using require, but you need to install dependencies yourself.

@[code http{3}](../../examples/script/scriptRequire.http)


::: tip
External dependencies must be installed independently, exceptions are [vscode](https://www.npmjs.com/package/@types/vscode), [got](https://www.npmjs.com/package/got), [grpc-js](https://www.npmjs.com/package/@grpc/grpc-js) and [httpYac](https://www.npmjs.com/package/httpyac) Dependency, which are provided from the extension.
:::

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

## Test
You can write easily test scripts in JavaScript. Tests allow you to ensure that your API is working as expected, to establish that integrations between services are functioning reliably, and to verify that new developments haven't broken any existing functionality. You can also use test code to aid the debugging process when something goes wrong with your API project.


@[code http](../../examples/script/assert.http)

@[code http](../../examples/script/chai.http)


::: tip
[Auxiliary methods](https://github.com/AnWeber/httpyac/blob/790a1b0409bd9eed6ef0ff26a2fc017952d58231/src/models/testFunction.ts#L6-L14) are provided for standard tests such as Status and Content-Type
:::

@[code http](../../examples/script/test.http)

## Global Scripts

Scripts with no request in the same region are always executed (Global Scripts).

@[code http](../../examples/script/globalScripts.http)

## Events

The normal script registration is executed in order of occurrence in http File. For the execution of a request, several steps have to be executed besides the actual request: Replace Variables, Prepare Body, Pretty Print Body. With events scripts can be hooked into concrete steps in this process. 

@[code http{1}](../../examples/script/events.http)

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

@[code http{1}](../../examples/script/globalScriptOnEveryHttpRegionAfter.http)

If no event is specified for global registration, the script is executed before every request.

@[code http{1}](../../examples/script/globalScriptOnEveryHttpRegion.http)

![events](./scripting.svg)

## Intellij Script

Intellij Scripts are supported. An [Http client](https://www.jetbrains.com/help/idea/http-client-reference.html) and [response](https://www.jetbrains.com/help/idea/http-response-reference.html) object corresponding to the interface is created and are available in the script.

::: warning
The execution environment differs between NodeJS and Intellij (uses Nashorn). Possibly the behavior is not completely identical, to Intellij Execution. If there are problems, please let me know.
:::

@[code http](../../examples/script/intellij.http)

::: warning
Intellij scripts are always executed after request. Scripts before Request Line are ignored
:::


## How to debug scripts

1. Install httpYac cli with `npm install httpyac -g`
1. open Http File in VS Code
3. add [debugger;](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/debugger) statement in script
4. open [Javascript Debug Terminal](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal) in VS Code
5. execute command `httpyac <file> -l <line>`


@[code http{7}](../../examples/script/debugger.http)