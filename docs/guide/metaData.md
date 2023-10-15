# Meta Data

All lines starting with `#` are interpreted as meta data lines. Lines in Format `# @foo bar` are interpreted as meta data (or alternatively `// @foo` because of [Intellij](https://www.jetbrains.com/help/idea/exploring-http-syntax.html#enable-disable-redirects)). It is possible to attach meta data that influences the processing of the request

## Name
Responses of a requests with a Name are automatically added as Variables and can be reused by other Requests. The variable contains the response body. If the body is valid JSON, this will be parsed automatically.

<<< @../../examples/metaData/name.http{1}

::: warning
Name must be unique in all imported files, there is no scope support and first found request with name will be used.
:::

::: warning
Variable Name must be a valid Javascript Variable Name. No Javascript keywords like import, var, ... are allowed.
:::

To access response headers, the variable [`response`](https://httpyac.github.io/guide/scripting.html#access-to-variables) can be used in post request scripts

<<< @../../examples/script/postRequestScript.http{5}


## Title
additional title of region (used in cli output and outline view). It is possible to define title in region delimiter

<<< @../../examples/metaData/title.http{1}

<<< @../../examples/metaData/title_shorthand.http{1}

::: tip
If no other name is specified title after `###` is also used as name
:::

## Description
additional description of region (used in cli output and outline view)

<<< @../../examples/metaData/description.http{1}

::: tip
first comment of a region is automatically used as description
:::

<<< @../../examples/metaData/description_comment.http{1-3}

## Ref and ForceRef

Requests can reference other requests. When the request is called, it is ensured that the referenced Request is called beforehand. `forceRef` always call the other request. `ref` only calls if no response is cached.

<<< @../../examples/metaData/ref.http{1,5,10}

::: tip
It is possible to reference any number of requests.
:::

::: tip
Referencing also makes the variables of the other region accessible and thus also the [named response body](/guide/metaData.html#name).
:::

## Import
To reference Requests from other files, these must first be imported. Imported files are enabled for all requests in one file.

<<< @../../examples/metaData/import.http{1}

## Disabled
requests can be disabled. It is possible to disable requests dynamically with <span v-pre>{{httpRegion.metaData.disabled=true}}</span> in script

<<< @../../examples/metaData/disabled.http{1}


## JWT
jwt meta data supports auto decode of jwt token. just provide property in response to decode and it is added to the promise with ${property}_parsed


<<< @../../examples/metaData/jwt.http{1}

## Inject Variables
Inject Variables in request body (needed because of compatibility with Intellij)

<<< @../../examples/metaData/injectVariables.http{1}

## Note
shows a confirmation dialog before sending request

<<< @../../examples/metaData/note.http{1}

## Loop
Allows multiple Invocations of a Request with different parameters.

### for ... of ...
Variable `$index` and Variable Name is injected in Variables for every iteration

<<< @../../examples/metaData/loopForOf.http{5}

### for ...

Variable `$index` is injected in Variables for every iteration

<<< @../../examples/metaData/loopFor.http{1}

### while ...

Variable `$index` is injected in Variables for every iteration

<<< @../../examples/metaData/loopWhile.http{7}


::: tip
An index is automatically appended to the Name of the request, which can be used to access it in subsequent requests (name=foo => foo0, foo1,...).
:::

<<< @../../examples/metaData/loopAccessRequests.http{6}

## GRPC Reflection

Enable [Grpc Reflection lookup](https://github.com/grpc/grpc/blob/master/doc/server-reflection.md) for current grpc server

<<< @../../examples/request/grpc/grpc_reflection.http{1}

## Save

If `@save` is specified, the response will not be displayed but saved directly.

<<< @../../examples/metaData/save.http{1}

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## OpenWith

Provide viewType of custom editor to preview files. If content-type header of the response is image, files will be previewed automatically with built-in image preview. If content-type is `application/pdf` and extension [vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf) is installed, it will be used for preview.

<<< @../../examples/metaData/openWith.http{1}

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## Extension

Change Extension of file for save or openWith.

<<< @../../examples/metaData/extension.http{2}

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## RateLimit

throttle requests to limit network traffic.

It is possible to force a minimum idle time between 2 requests (minIdleTime in milliseconds)

<<< @../../examples/metaData/rateLimit.http{1}

The maximum number of requests in a defined period of time  can also be enforced (expire in milliseconds).

<<< @../../examples/metaData/rateLimitMax.http{1}

The network cap can also be divided into slots

<<< @../../examples/metaData/rateLimitSlot.http{1}

All limitations can also be combined

<<< @../../examples/metaData/rateLimitAll.http{1}

## Sleep

Sleep/ Wait defined milliseconds

<<< @../../examples/metaData/sleep.http{1}


## No log

Prevent logging of request data in output console

<<< @../../examples/metaData/noLog.http{1}

## No Response View

Prevent open response in editor of VSCode

<<< @../../examples/metaData/noResponseView.http{1}

## No Streaming Log

Prevent logging of intermediate responses while streaming data in output console

<<< @../../examples/metaData/noStreamingLog.http{3}

## No CookieJar

cookieJar support is disabled for this request

<<< @../../examples/metaData/noCookieJar.http{1}

## No Client Certificate

SSL client certificate is not send for this request

<<< @../../examples/metaData/noClientCert.http{1}

## No Redirect

Prevent following Redirects

<<< @../../examples/metaData/noRedirect.http{1}


## No Reject Unauthorized

All invalid SSL certificates will be ignored and no error will be thrown.

<<< @../../examples/metaData/noRejectUnauthorized.http{1}

::: tip
Since rejectUnauthorized can be different per environment, it can be set using the special variable `request_rejectUnauthorized`.
:::

:::: code-group 
```ini [.env]
request_rejectUnauthorized=false
```
::::

## Proxy

Set proxy for requests

<<< @../../examples/metaData/proxy.http{1}

::: tip
Since using a proxy can be different per environment, it can be set using the special variable `request_proxy`.
:::

:::: code-group

```ini [prod.env]
request_proxy=socks://localhost:1080
```
::::

## No Proxy

Ignore system proxy setting for requests

<<< @../../examples/metaData/noproxy.http{1}


## Debug

enable debug log level

<<< @../../examples/metaData/debug.http{1}

## Verbose

enable trace log level

<<< @../../examples/metaData/verbose.http{1}

## keepStreaming

keep streaming of MQTT, Server-Sent-Events or WebSocket until the session is ended manually. 

<<< @../../examples/metaData/keepStreaming.http{1}
