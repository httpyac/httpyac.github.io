# Environments

An environment is a set of variables. By changing the environment, these variables can be exchanged. This system can be used to support different environments (e.g. dev, test, prod).

::: tip
It is possible to select several environments at the same time.
:::

All environment variables are expanded automatically.


```ini
# .env
auth_tokenEndpoint={{authHost}}/auth/realms/test/protocol/openid-connect/token

# 9.env
authHost=https://my.openid.de

# resolved variables
authHost=https://my.openid.de
auth_tokenEndpoint=https://my.openid.de/auth/realms/test/protocol/openid-connect/token
```


::: tip
The VS Code extension supports switching to different environments. A different environment can be selected per file. Newly opened files in are opened with the last active environment.
:::


::: tip
Since rejectUnauthorized and the use of a proxy can be different per environment, they can be set using the special variables `request_rejectUnauthorized` and `request_proxy`.
:::

## JSON
Environments can be provided with setting `environments` in [.httpyac.js](/config/). All settings with key `$shared` are shared between all environments. All settings with key `$default` are used only if no environment is selected

```json
{
  "$shared": {
    "host": "https://mydoman"
  },
  "dev": {
    "user": "mario",
    "password": "123456"
  },
  "prod": {
    "user": "mario",
    "password": "password$ecure123"
  }
}
```
::: tip
A setting `environmentVariables` is supported in VS Code setting. It is automatically monitored and when changes are made, the environment is reinitialized.
:::

## Dotenv
[dotenv](https://www.npmjs.com/package/dotenv) support is enabled by default.

```sh
authHost=https://my.openid.de
auth_tokenEndpoint=https://my.openid.de/auth/realms/test/protocol/openid-connect/token
```

You can specify environments by pre pending or appending a environment identifier

```sh
.env                # global variables
.env.local          # variables only used in env local
local.env           # variables only used in env local
```

The .env files are searched from the following locations:
* same location as *.http file
* [project root](/config/#project-root)
* `env` folder in [project root](/config/#project-root)
* value of global environment variable `HTTPYAC_ENV`

::: warning
httpYac tries to detect changes in .env files and clean the cache. However, if the change is made outside of VS Code, command `httpyac.reset` must be run manually.
:::


## Intellij Environment
[Intellij Environment Variables](https://www.jetbrains.com/help/idea/exploring-http-syntax.html#environment-variables) support is enabled by default.

The `http-client.env.json` and `http-client.private.env.json` files are searched from the following locations:
* same location as *.http file
* [project root](/config/#project-root)
* `env` folder in [project root](/config/#project-root)

::: warning
httpYac tries to detect changes in .env files and clean the cache. However, if the change is made outside of VS Code, command `httpyac.reset` must be run manually.
:::
