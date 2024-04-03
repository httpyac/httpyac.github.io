# Comments

Comments are supported in HTTP Requests.

```HTTP
# comment type 1
// comment type 2

/*
  multi line comment
*/
```

::: warning
Comments used within the request body must start from the beginning of the line (only whitespace before comment start).
:::


::: tip
The first comment is automatically used as description for this request.
:::

[httpBook](/guide/installation_httpbook) uses comments to inject markdown documentation


![httpbook](/httpbook.gif)

<<< @../../examples/api/httpbin.http{HTTP}