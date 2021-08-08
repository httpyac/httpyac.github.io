# Troubleshooting

This document covers some common httpYac issues and how to resolve them. You should always follow these steps before opening a new issue.

## Turn off verification of self-signed certificate

Self-signed certificates are not accepted by Node JS. For this reason, certificate verification must be disabled. For individual cases, the following is an option.


<<< ./examples/metaData/noRejectUnauthorized.http{1}

It is also possible to disable the check in general in the [.httpyac.js configuration](/config)


```js
module.exports = {
  "request": {
    "https":  {
      "rejectUnauthorized": false
     }
  }
}
```