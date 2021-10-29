# Response

Responses can also be specified within an http file. This feature is mainly intended for documentation purposes.

## Response Documentation

Once a line starts with `HTTP/{version}} {{statusCode}}`, the following content is interpreted as a response and parsed. 


<<< ./examples/response/documentation.http{3}

::: warn
The response is not used further in the program. Instead, it is only used to initially set up the display in `httpbook` correctly, for example.
:::


## Output Redirection

httpYac canc redirect response body to a custom file. It supports two operators:

* `>>` operator always creates a new file, adding an `-n` suffix to a file name if the requested file name already exists.

<<< ./examples/response/outputRedirection.http{3}

* `>>!` operator overrides the file, if it already exists.

<<< ./examples/response/outputRedirectionForce.http{3}
