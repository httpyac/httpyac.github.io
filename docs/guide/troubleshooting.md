# Troubleshooting

This document covers some common httpYac issues and how to resolve them. You should always follow these steps before opening a new issue.

## Turn off verification of self-signed certificate

Self-signed certificates are not accepted by Node JS. For this reason, certificate verification must be disabled. For individual cases, the following is an option.


<<< @../../examples/metaData/noRejectUnauthorized.http{1}

It is also possible to disable the check in general in the [.httpyac.js configuration](../config/index.md)


```js
module.exports = {
  "request": {
    "https":  {
      "rejectUnauthorized": false
     }
  }
}
```

## Protocol "https:" not supported. Expected "http:" in VS Code with HTTP/2.0
The cause is the proxy configuration of VS Code. This is set to `https.proxysupport=override` by default. For the use of http2 a [http2wrapper](https://github.com/szmarczak/http2-wrapper) is used. However, this is not recognized [correctly](https://github.com/TooTallNate/node-agent-base/blob/master/src/index.ts#L15-L19) when using the [VS Code Proxy Agent](https://github.com/microsoft/vscode-proxy-agent/blob/main/package.json#L32). To work around this behavior, proxy support must be disabled

```ini
https.proxysupport=off
```
