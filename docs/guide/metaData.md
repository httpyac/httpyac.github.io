# Meta Data

All lines starting with `#` are interpreted as meta data lines. Lines in Format `# @foo bar` are interpreted as meta data (or alternatively `// @foo` because of [Intellij](https://www.jetbrains.com/help/idea/exploring-http-syntax.html#enable-disable-redirects)). It is possible to attach meta data that influences the processing of the request

## Name
Responses of a requests with a Name are automatically added as Variables and can be reused by other Requests. The variable contains the response body. If the body is valid JSON, this will be parsed automatically.

@[code http{1}](../../examples/metaData/name.http)

::: warning
Name must be unique in all imported files, there is no scope support and first found request with name will be used.
:::

::: warning
Variable Name must be a valid Javascript Variable Name. No Javascript keywords like import, var, ... are allowed.
:::

To access response headers, the variable [`response`](https://httpyac.github.io/guide/scripting.html#access-to-variables) can be used in post request scripts

@[code http{5}](../../examples/script/postRequestScript.http)


## Title
additional title of region (used in cli output and outline view). It is possible to define title in region delimiter

@[code http{1}](../../examples/metaData/title.http)

@[code http{1}](../../examples/metaData/title_shorthand.http)

::: tip
If no other name is specified title after `###` is also used as name
:::

## Description
additional description of region (used in cli output and outline view)

@[code http{1}](../../examples/metaData/description.http)

::: tip
first comment of a region is automatically used as description
:::

@[code http{1-3}](../../examples/metaData/description_comment.http)

## Ref and ForceRef

Requests can reference other requests. When the request is called, it is ensured that the referenced Request is called beforehand. `forceRef` always call the other request. `ref` only calls if no response is cached.

@[code http{1,5,10}](../../examples/metaData/ref.http)

::: tip
It is possible to reference any number of requests.
:::

::: tip
Referencing also makes the variables of the other region accessible and thus also the [named response body](/guide/metaData.html#name).
:::

## Import
To reference Requests from other files, these must first be imported. Imported files are enabled for all requests in one file.

@[code http{1}](../../examples/metaData/import.http)

## Disabled
requests can be disabled. It is possible to disable requests dynamically with <span v-pre>{{httpRegion.metaParams.disabled=true}}</span> in script

@[code http{1}](../../examples/metaData/disabled.http)


## JWT
jwt meta data supports auto decode of jwt token. just provide property in response to decode and it is added to the promise with ${property}_parsed


@[code http{1}](../../examples/metaData/jwt.http)

## Inject Variables
Inject Variables in request body (needed because of compatibility with Intellij)

@[code http{1}](../../examples/metaData/injectVariables.http)

## Note
shows a confirmation dialog before sending request

@[code http{1}](../../examples/metaData/note.http)

## Loop
Allows multiple Invocations of a Request with different parameters.

### for ... of ...
Variable `$index` and Variable Name is injected in Variables for every iteration

@[code http{5}](../../examples/metaData/loopForOf.http)

### for ...

Variable `$index` is injected in Variables for every iteration

@[code http{1}](../../examples/metaData/loopFor.http)

### while ...

Variable `$index` is injected in Variables for every iteration

@[code http{7}](../../examples/metaData/loopWhile.http)


::: tip
An index is automatically appended to the Name of the request, which can be used to access it in subsequent requests (name=foo => foo0, foo1,...).
:::

@[code http{6}](../../examples/metaData/loopAccessRequests.http)

## Save

If `@save` is specified, the response will not be displayed but saved directly.

@[code http{1}](../../examples/metaData/save.http)

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## OpenWith

Provide viewType of custom editor to preview files. If content-type header of the response is image, files will be previewed automatically with built-in image preview. If content-type is `application/pdf` and extension [vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf) is installed, it will be used for preview.

@[code http{1}](../../examples/metaData/openWith.http)

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## Extension

Change Extension of file for save or openWith.

@[code http{2}](../../examples/metaData/extension.http)

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## RateLimit

throttle requests to limit network traffic.

It is possible to force a minimum idle time between 2 requests (minIdleTime in milliseconds)

@[code http{1}](../../examples/metaData/rateLimit.http)

The maximum number of requests in a defined period of time  can also be enforced (expire in milliseconds).

@[code http{1}](../../examples/metaData/rateLimitMax.http)

The network cap can also be divided into slots

@[code http{1}](../../examples/metaData/rateLimitSlot.http)

All limitations can also be combined

@[code http{1}](../../examples/metaData/rateLimitAll.http)

## Sleep

Sleep/ Wait defined milliseconds

@[code http{1}](../../examples/metaData/sleep.http)


## No log

Prevent logging of request data in output console

@[code http{1}](../../examples/metaData/noLog.http)

## No Response View

Prevent open response in editor of VSCode

@[code http{1}](../../examples/metaData/noResponseView.http)

## No Streaming Log

Prevent logging of intermediate responses while streaming data in output console

@[code http{3}](../../examples/metaData/noStreamingLog.http)

## No CookieJar

cookieJar support is disabled for this request

@[code http{1}](../../examples/metaData/noCookieJar.http)

## No Client Certificate

SSL client certificate is not send for this request

@[code http{1}](../../examples/metaData/noClientCert.http)

## No Reject Unauthorized

All invalid SSL certificates will be ignored and no error will be thrown.

@[code http{1}](../../examples/metaData/noRejectUnauthorized.http)

## Debug

enable debug log level

@[code http{1}](../../examples/metaData/debug.http)

## Verbose

enable trace log level

@[code http{1}](../../examples/metaData/verbose.http)

## keepStreaming

keep streaming of MQTT, Server-Sent-Events or WebSocket until the session is ended manually. 

@[code http{1}](../../examples/metaData/keepStreaming.http)
