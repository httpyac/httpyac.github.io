
# Request

An HTTP request starts with a request line followed by optional header fields, message body, response handler, and previous response references. Message body must be separated from the request line or header fields with an empty line.

## Request-Line

A [request line](https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.1) consists of a request method, target and the HTTP protocol version. If the request method is omitted, ‘GET’ will be used as a default. The HTTP protocol version can be also omitted.


<<< ./examples/request/requestline.http

::: tip
The HTTP version is optional. But in this guide I have always added it because of syntax highlighting
:::

If the Http version is specified, this can be used to control the use of HTTP2


<<< ./examples/request/requestlineHttpVersion.http

Allowed Requests Methods are:
| |||||
|-|-|-|-|-|
| GET | POST | PUT | DELETE | PATCH | HEAD |
| OPTIONS | CONNECT | TRACE | PROPFIND | PROPPATCH | MKCOL |
| COPY | MOVE | LOCK | UNLOCK | CHECKOUT | CHECKIN |
| REPORT | MERGE | MKACTIVITY | MKWORKSPACE | VERSION-CONTROL | BASELINE-CONTROL |

A request path can be added in the next line

<<< ./examples/request/requestlineMultiline.http


## Query Strings

A [request query](https://datatracker.ietf.org/doc/html/rfc3986#section-3.4) may contain any unicode characters except line separators and the ‘#’ symbol.

<<< ./examples/request/queryString.http

It is also possible to split the query strings to different subsequent lines.

<<< ./examples/request/queryStringMultiline.http

## Headers

Each [header field](https://datatracker.ietf.org/doc/html/rfc7230#section-3.2) consists of a case-insensitive field name followed by a colon (‘:’), optional leading whitespace, the field value, and optional trailing whitespace.


<<< ./examples/request/headers.http

If you use the same headers several times, it is possible to store them in a variable and reuse them.


<<< ./examples/request/headersSpread.http{8}

## Cookie

[CookieJar](https://www.npmjs.com/package/tough-cookie) support is enabled by default. All received [Cookies](https://datatracker.ietf.org/doc/html/rfc6265#section-5.4), previously sent by the server with the Set-Cookie header are automatically sent back. It is possible to send own cookies to the server using cookie header.


<<< ./examples/request/cookie.http

::: warning
Cookies are only stored In-Memory and are cleared in VS Code with command `httpyac.reset`
:::

It is possible to disable cookie support per request.

<<< ./examples/metaData/noCookieJar.http{1}

## Request Body
The [request body](https://datatracker.ietf.org/doc/html/rfc7230#section-3.3) can be represented as a simple message or a mixed type message (multipart-form-data).


<<< ./examples/request/requestBody.http

::: warning
The first content that is not recognized as a header or query string is interpreted as a request body. After that, no more header or query string can be specified.
:::

## Imported Request Body

A body can also be imported by using `< ...`.

<<< ./examples/request/requestBodyImport.http{4}

If you want to replace variables in the file please import it with `<@`

<<< ./examples/request/requestBodyImportReplace.http{4}

All files are read with UTF-8 encoding. If a different encoding is desired, provide it.


<<< ./examples/request/requestBodyImportReplaceEncoding.http{4}

::: warning
If the request body is configured in-place, whitespaces around it will be trimmed. To send leading or trailing whitespaces as part of the request body, send it from a separate file.
:::

## multipart/form-data

It is possible to mix inline text with file imports


<<< ./examples/request/multipartFormData.http

## GraphQL
GraphQL queries are supported. Parsing Logic will automatically generate a GraphQL request body from the query and the optional variables.

<<< ./examples/request/graphql.http

GraphQL fragments are also supported and are included in the body by name.

<<< ./examples/request/graphqlParts.http{1,26}

To import GraphQL File you need to use special GraphQL Import Directive.

<<< ./examples/request/graphqlImport.http{5}

## Request Separators

Multiple requests defined in a single file must be separated from each other with a request separator symbol. A separator may contain comments.

```http
https://httpbin.org/post
### separator
https://httpbin.org/post
```

Alternatively, the request can also be specified in [RFC 7230](https://tools.ietf.org/html/rfc7230#section-3.1.1) Request line format, which also triggers a separation.

```http
GET https://httpbin.org/post HTTP/1.1

GET https://httpbin.org/post HTTP/1.1
```