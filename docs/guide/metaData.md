# Meta Data

All lines starting with `#` are interpreted as meta data lines. Lines in Format `# @foo bar` are interpreted as meta data (or alternatively `// @foo` because of [Intellij](https://www.jetbrains.com/help/idea/exploring-http-syntax.html#enable-disable-redirects)). It is possible to attach meta data that influences the processing of the request

## Name
Responses of a requests with a Name are automatically added as Variables and can be reused by other Requests

<<< ./examples/metaData/name.http{1}

::: warning
Name must be unique in all imported files, there is no scope support and first found request with name will be used.
:::

## Title
additional title of region (used in cli output and outline view). It is possible to define title in region delimiter

<<< ./examples/metaData/title.http{1}

<<< ./examples/metaData/title_shorthand.http{1}

## Description
additional description of region (used in cli output and outline view)

<<< ./examples/metaData/description.http{1}

::: tip
first comment of a region is automatically used as description
:::

<<< ./examples/metaData/description_comment.http{1-3}

## Ref and ForceRef

Requests can reference other requests. When the request is called, it is ensured that the referenced Request is called beforehand. `forceRef` always call the other request. `ref` only calls if no response is cached.

<<< ./examples/metaData/ref.http{1,5,10}

::: tip
It is possible to reference any number of requests.
:::

## Import
To reference Requests from other files, these must first be imported. Imported files are enabled for all requests in one file.

<<< ./examples/metaData/import.http{1}

## Disabled
requests can be disabled. It is possible to disable requests dynamically with <span v-pre>{{httpRegion.metaParams.disabled=true}}</span> in script

<<< ./examples/metaData/disabled.http{1}


## JWT
jwt meta data supports auto decode of jwt token. just provide property in response to decode and it is added to the promise with ${property}_parsed


<<< ./examples/metaData/jwt.http{1}

## Inject Variables
Inject Variables in request body (needed because of compatibility with Intellij)

<<< ./examples/metaData/injectVariables.http{1}

## Note
shows a confirmation dialog before sending request

<<< ./examples/metaData/note.http{1}

## Loop
Allows multiple Invocations of a Request with different parameters.

### for ... of ...
Variable `$index` and Variable Name is injected in Variables for every iteration

<<< ./examples/metaData/loopForOf.http{4}

### for ...

Variable `$index` is injected in Variables for every iteration

<<< ./examples/metaData/loopFor.http{1}

### while ...

Variable `$index` is injected in Variables for every iteration

<<< ./examples/metaData/loopWhile.http{6}


::: tip
An index is automatically appended to the Name of the request, which can be used to access it in subsequent requests (name=foo => foo0, foo1,...).
:::

<<< ./examples/metaData/loopAccessRequests.http{6}

## Save

If `@save` is specified, the response will not be displayed but saved directly.

<<< ./examples/metaData/save.http{1}

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## OpenWith

Provide viewType of custom editor to preview files. If content-type header of the response is image, files will be previewed automatically with built-in image preview. If content-type is `application/pdf` and extension [vscode-pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf) is installed, it will be used for preview.

<<< ./examples/metaData/openWith.http{1}

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## Extension

Change Extension of file for save or openWith.

<<< ./examples/metaData/extension.http{2}

::: warning
Meta Data is ignored in CLI and Httpbook
:::

## No log

Prevent logging of request data in output console

<<< ./examples/metaData/noLog.http{1}

## No CookieJar

cookieJar support is disabled for this request

<<< ./examples/metaData/noCookieJar.http{1}

## No Client Certificate

SSL client certificate is not send for this request

<<< ./examples/metaData/noClientCert.http{1}

## No Reject Unauthorized

All invalid SSL certificates will be ignored and no error will be thrown.


<<< ./examples/metaData/noRejectUnauthorized.http{1}
