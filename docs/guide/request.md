
# Request

An HTTP request starts with a request line followed by optional header fields, message body, response handler, and previous response references.

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

<<< ./examples/request/requestBodyImportReplace.http{5}

All files are read with UTF-8 encoding. If a different encoding is desired, provide it. All [encodings](https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings) supported by NodeJS are available.


<<< ./examples/request/requestBodyImportReplaceEncoding.http{5}

::: warning
If the request body is configured in-place, whitespaces around it will be trimmed. To send leading or trailing whitespaces as part of the request body, send it from a separate file.
:::

::: tip
You can use Variable Substitution in file import.
:::

<<< ./examples/request/requestBodyImportVariable.http{7}

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

::: tip
You can use Variable Substitution in file import.
:::
<<< ./examples/request/graphqlImportVariables.http{6}

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

Using `###` Regions without a request can be defined. These global regions are executed and interpreted for all requests within the file. This way [meta data](/guide/metaData.html), [variables](/guide/variables.html) and [scripts](/guide/scripting.html) can be set for each request.

```http
@host=https://httpbin.org
###
GET /post HTTP/1.1

GET /post HTTP/1.1
```

## gRPC

It is also possible to send gRPC requests. The same request line format is used as for Http requests, but `GRPC` must be specified as the request method.


<<< ./examples/request/grpc.http


### Protobuf Loader

To use the gRPC call, the proto file associated with the call must first be loaded. This is loaded using [@grpc/proto-loader](https://www.npmjs.com/package/@grpc/proto-loader). This can be configured using options in the header format

<<< ./examples/request/protoImport.http

The import of the proto file can also be done globally

<<< ./examples/request/protoGlobalImport.http


::: tip
You can use Variable Substitution in file import and in proto-loader options.
:::
<<< ./examples/request/protoImportVariables.http{3}

::: warn
IncludeDirs of @grpc/proto-loader currently supports only absolute paths. 
:::

### Unary RPC

[Unary RPC]( https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc) behaves identically to Http requests. The url need to be in the following format

```
GRPC {{server}}/{{service}}/{{method}}
```

<<< ./examples/request/grpcUnary.http

Using [header notation](/guide/request.html#headers) it is also possible to send meta data. 

Header `ChannelCredentials` or `Authorization`are special and defines the [authentication](https://grpc.io/docs/guides/auth/#nodejs) used by gRPC. If no such header is specified, `grpc.credentials.createInsecure()` is used automatically

### Server Streaming RPC

[Server Streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc) is similar to a unary RPC, except that the server returns a stream of messages in response to a client’s request.

<<< ./examples/request/grpcServerStreaming.http

All responses are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using `# @noStreamingLog`.

<<< ./examples/metaData/noStreamingLog.http

### Client Streaming RPC

[Client Streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc) is similar to a unary RPC, except that the client sends a stream of messages to the server instead of a single message. To enable this, a custom script can be used that registers for the @streaming hook. This script must export a Promise at the end of which the client stream is terminated.

<<< ./examples/request/grpcClientStreaming.http

::: tip
To control the wait time more easily, a method `sleep` is provided that waits the number of milliseconds.
:::


### Bidirectional Streaming RPC

[Bidirectional Streaming RPC](https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc) is a combination of client streaming and server streaming.


<<< ./examples/request/grpcBidirectional.http

## Server-Sent Events / EventSource

By means of the method `SSE` an [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) instance can be created. This opens a persistent connection to an HTTP server, which sends events in text/event-stream format. By means of the header `event` the list of events to be output is specified

<<< ./examples/request/eventSource.http{2}

The events of the server can be waited for by means of [streaming event](/guide/scripting.html#events). As soon as this hook has been successfully processed, the connection is terminated.

<<< ./examples/request/eventSource.http{4-9}

::: tip
Meta Data `keepStreaming` can be used to respond to events until manually aborted.
:::

<<< ./examples/request/eventSourceKeepStreaming.http{1}


## WebSocket

By means of the method `WS` a [WebSocket connection](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) to a server can be opened. If a body is included in the request, it is sent immediately after the connection is established. 

<<< ./examples/request/websocket.http{1}

The events of the server can be waited for by means of [streaming event](/guide/scripting.html#events). As soon as this hook has been successfully processed, the connection is terminated. Within the `streaming` block it is possible to send further message using [`websocketClient`](https://www.npmjs.com/package/ws#sending-and-receiving-text-data).

<<< ./examples/request/websocket.http{7}

::: tip
Meta Data `keepStreaming` can be used to respond to events until manually aborted.
:::

<<< ./examples/request/websocketKeepStreaming.http{1}

:::tip
All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using `# @noStreamingLog`.
:::

:::tip
If special options are needed for initialization, they can be configured in a NodeJS script using [`request.options`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L26).
:::

## MQTT

By means of the method `MQTT` a MQTT Client can be created. [MQTT.js](https://github.com/mqttjs/MQTT.js) opens a TCP or WebSocket Connection to a MQTT Broker. The header `Topic` specifies the topic to be registered (multiple specification allowed)

<<< ./examples/request/mqtt.http{2}

If a body is specified, it will be published immediately after connecting.

<<< ./examples/request/mqttBody.http{4}

:::tip
If the topic used for publishing is different from the topic used for replying, the headers `subscribe` and `publish` can be used instead.
::: 

The messages of the server can be waited for by means of [streaming event](/guide/scripting.html#events). As soon as this hook has been successfully processed, the connection is terminated. Within the `streaming` block it is possible to publish further message using [`mqttClient`](https://github.com/mqttjs/MQTT.js#publish).

<<< ./examples/request/mqttPublish.http{7}

::: tip
Meta Data `keepStreaming` can be used to respond to events until manually aborted.
:::

<<< ./examples/request/mqtt.http{1}

:::tip
All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using `# @noStreamingLog`.
:::

[QoS](https://github.com/mqttjs/MQTT.js#qos), [retain, username, password, keepAlive (10seconds default) and clean](https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options) can be configured using header notation.

<<< ./examples/request/mqttHeaders.http{4-6}

:::tip
If more options are needed for the initialization, they could be configured in a NodeJS script using [`request.options`](https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L36).
:::


As long as the connection of the MQTT instance to the MessageQueue exists, messages can also be published from other NodeJS blocks.
<<< ./examples/request/mqttScript.http{8}
