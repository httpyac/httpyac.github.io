# Variables

Variables are used for avoiding unnecessary data duplication in requests or for providing an easy way of switching between environments. They can be used inside request line, header fields, request body or in variable definitions. Each variable is represented by a case-sensitive identifier surrounded by double curly braces.


<<< @../../examples/variables/variables.http



## Variable Scope

The scope is the current context of execution in which variables are "visible" or can be referenced. If a variable or expression is not in the current scope, it will not be available for use. 

- Environment Variables: All Variables provided with `provideVariables` Hook (e.g. [dotenv](/guide/environments.html#dotenv))

- File Global Variables: Variables defined in Region without name or request

- Request Variables: Variables defined in current region

::: tip
You could expand the visiable scope using [`@import`](./variables#import-variables), [`@ref` and `@forceRef`](./metaData.html#ref-and-forceref).
:::

You can also explicitly define variables as global by adding them to the global object in the script.

<<< @../../examples/variables/globalVariables.http


## Inline Variables
Inline Variables can be easily created with the following scheme. Variable Substitution is supported.

<<< @../../examples/variables/variablesDefinition.http

Inline Variables in global scripts are set for each request in the file

<<< @../../examples/variables/variablesGlobal.http


For variables, a distinction is made between fixed and lazy variables. The fixed variables are evaluated directly at definition (request `result` would query `?foo=foobar`). 

<<< @../../examples/variables/variablesFixed.http

Lazy variables are only evaluated before a request or NodeJS execution  (request `result` would query `?foo=foobar2`). . 

<<< @../../examples/variables/variablesLazy.http

::: tip
If a required variable is not yet defined, it will also be set lazy
:::


## Import Variables

The variables are also imported from other files using [`@import`](/guide/metaData.html#import). Only Variables in File Global Scope are imported.

<<< @../../examples/variables/variablesImport.http{1}

To import request Variables, you can also  reference ([`@ref`](/guide/metaData.html#ref-and-forceref)) named responses ([`@name`](/guide/metaData.html#name)) from other files.

:::: code-group

<<< @../../examples/metaData/import.http{1,2} 

<<< @../../examples/metaData/name.http{1} 

::::


## Variable Substitution in Request

Before the request is sent, all variables in the request (request line, headers, request body) are replaced with the value of the variable.

::: tip
 If the replacement is not desired, this can be prevented using `\{\{...\}\}`. This is replaced by <code v-pre>{{...}}</code>
:::

<<< @../../examples/variables/escapeVariableSubstitution.http
### NodeJs Script
All entries of the form <span v-pre>{{...}}</span> are interpreted as NodeJS Javascript which returns exactly one value. Since all variables can be easily accessed on the global scope, this allows for simple substitution.


<<< @../../examples/variables/nodeJsScript.http

::: tip
It is possible to create more complex scripts, but this is not recommended and you should use a separate script block instead.
:::


### Host
If the url starts with / and a variable host is defined the URL of this host will be pre pended


<<< @../../examples/variables/host.http


### Input, Password and QuickPick
Dynamic Variable Resolution with input field, password field or quick pick is supported.


<<< @../../examples/variables/input.http

<<< @../../examples/variables/password.http

<<< @../../examples/variables/pick.http

::: tip
If only a one-time input is desired, the renewed query can be avoided using `-askonce`.
:::

<<< @../../examples/variables/input-askonce.http

<<< @../../examples/variables/pick-askonce.http

### OAuth2 / OpenID Connect
The following [Open ID Connect](https://openid.net/specs/openid-connect-basic-1_0.html) flows are supported.

* Authentication (or Basic) Flow with or without PKCE (grant_type = authorization_code)
* Implicit (or Hybrid) Flow (grant_type = implicit)
* Resource Owner Password Grant (grant_type = password)
* Client Credentials Grant (grant_type = client_credentials)
* Device Authorization Grant (grant_type = device_code)

```http
GET /secured_service
Authorization: openid {{grant_type}} {{prefix}}
```
::: tip
If no `grant_type` is provided `client_credentials` flow is used. If no `prefix` is provided value `oauth2` is used.
:::

To configure the flow, the following variables must be specified

| variable | description | authorization_code | implicit | password | client_credentials | device_code |
| - | - | - | - | - | - | - |
| <span v-pre>{{prefix}}</span>_tokenEndpoint | Token Endpoint URI | x | x | x | x | x |
| <span v-pre>{{prefix}}</span>_clientId |OAuth 2.0 Client Identifier | x | x | x | x | x |
| <span v-pre>{{prefix}}</span>_clientSecret | OAuth 2.0 Client Secret | x | x | x | x | - |
| <span v-pre>{{prefix}}</span>_authorizationEndpoint |  Authorization Endpoint URI | x | x | - | - | - |
| <span v-pre>{{prefix}}</span>_redirectUri |  Redirection URI to which the response is sent | x (default: localhost:3000) | x (default: localhost:3000) | - | - | - |
| <span v-pre>{{prefix}}</span>_scope | Scope | x (default: openid) | x (default: openid) | x | x | x |
| <span v-pre>{{prefix}}</span>_resource|  Resource Indicators (RFC8707) | x | x | x | x | x |
| <span v-pre>{{prefix}}</span>_responseType | response type of auth server | - | x (default: code) | - | - | - |
| <span v-pre>{{prefix}}</span>_audience | audience | x | x | - | - | - |
| <span v-pre>{{prefix}}</span>_username | username| - | - | x | - | - |
| <span v-pre>{{prefix}}</span>_password | password | - | - | x | - | - |
| <span v-pre>{{prefix}}</span>_keepAlive |  AccessToken is automatically renewed in the background, if request_token is provided (default: false)| x | - | x | x | - |
| <span v-pre>{{prefix}}</span>_useAuthorizationHeader  | use Authorization Header for request (default: true) | x | x | x | x | - |
| <span v-pre>{{prefix}}</span>_usePkce | enable PKCE support | x (default: false) | - | - | - | - |
| <span v-pre>{{prefix}}</span>_deviceCodeEndpoint |  Device Code Endpoint URI | - | - | - | - | x |
| <span v-pre>{{prefix}}</span>_intercepRequest |  function used to modify request | x | x | x | x | x |


::: warning
To get the code from the Open ID server, a http server is started for the Authorization Flow and Implicit Flow on port of the redirection Uri (default Port 3000). The server is stopped after receiving the code (delay 2 minutes). You need to configure your OpenId Provider to allow redirectUri as valid redirection uri
:::

::: tip
The http server started for the Authorization Flow and Implicit Flow listens on the port of `{{prefix}}_redirectUri`. You can configure a different port for the server to listen to with variable `oauth2_serverPort`. If the port localhost:8000 is mapped to host `https://port-8000.external-domain` in a reverse proxy, you can set variable `{{prefix}}_redirectUri` as `https://port-8000.external-domain/callback` and set variable `oauth2_serverPort` to 8000.
:::

```http

@keycloakHost = http://127.0.0.1:8080
@local_tokenEndpoint = {{keycloakHost}}/auth/realms/local/protocol/openid-connect/token
@local_clientId = httpyac
@local_clientSecret = 936DA01F-9ABD-4D9D-80C7-02AF85C822A8
@local_scope = openid profile

GET /secured_service HTTP/1.1
Authorization: openid client_credentials local
```

<<< @../../examples/api/arbeitsagentur.http

It is possible to convert the generated token into a token of another realm using [Token Exchange](https://tools.ietf.org/html/rfc8693)

```http
GET /secured_service HTTP/1.1
Authorization: openid client_credentials local token_exchange realm_auth
```
##### Examples
- .env
The following examples use the following values as variables.

<<< @../../examples/variables/oauth2/.env

- Authorization Code Flow

<<< @../../examples/variables/oauth2/authorization_code.http

- Authorization Code Flow with PKCE

<<< @../../examples/variables/oauth2/authorization_code_pkce.http

- Implicit Flow

<<< @../../examples/variables/oauth2/implicit.http

- Client Credentials Flow

<<< @../../examples/variables/oauth2/clientcredentials.http

- Device Code Flow

<<< @../../examples/variables/oauth2/device_code.http

- Password Flow

<<< @../../examples/variables/oauth2/password.http

### AWS Signature v4

AWS Signature v4 authenticates requests to AWS services.

<<< @../../examples/variables/aws.http

### SSL Client Certificate

To use SSL Client Certificates, the `clientCertificates` setting must be set. This contains the certificate to be used for each host. For each host either the certificate/ key or pfx/ passphrase must be maintained.

* cert: Path of public x509 certificate
* key: Path of private key
* pfx: Path of PKCS #12 or PFX certificate
* passphrase: Optional passphrase for the certificate if required

```json
{
  "clientCertificates": {
    "example.com": {
      "cert": "./client.crt",
      "key": "./client.key"
    },
    "client.badssl.com": {
      "pfx": "./badssl.com-client.p12",
      "passphrase": "badssl.com"
    }
  }
}
```

<<< @../../examples/variables/clientCertificate.http

> path should be absolute or relative to workspace root

It is also possible to attach the certificate using (X-)ClientCert header. The header will be removed.

<<< @../../examples/variables/clientCertificateHeader.http

### Basic Authentication
A support method is provided for using Basic Authentication. Just specify the username and password separated by spaces and the base64 encoding will be applied automatically


<<< @../../examples/variables/basicAuth.http

If the username or password contains spaces, a `:` can be used alternatively.

<<< @../../examples/variables/basicAuthColon.http

### Digest Authentication
A support method is provided for using Digest Authentication. Just specify the username and password separated by spaces and the digest access authentication will be applied automatically


<<< @../../examples/variables/digest.http

If the username or password contains spaces, a `:` can be used alternatively.

<<< @../../examples/variables/digestAuthColon.http


### Intellij Dynamic Variables
[Intellij dynamic variables](https://www.jetbrains.com/help/idea/exploring-http-syntax.html#dynamic-variables) are supported.

| Name | Description |
| - | - |
| $uuid | generates a universally unique identifier (UUID-v4) |
| $timestamp | generates the current UNIX timestamp |
| $randomInt| generates a random integer between 0 and 1000. |


<<< @../../examples/variables/intellij.http

### Rest Client Dynamic Variables
[Rest Client dynamic variables](https://github.com/Huachao/vscode-restclient#system-variables) are partially supported.

| Name | Description |
| - | - |
| $guid | generates a universally unique identifier (UUID-v4) |
| $randomInt min max | generates a random integer between `min` and `max`. |
| $timestamp [offset option] | generates the current UNIX timestamp |
| $datetime rfc1123\|iso8601\|"custom format"\|'custom format' [offset option] | generates a datetime string in either ISO8601, RFC1123 or a custom display format |
| $localDatetime rfc1123\|iso8601\|"custom format"\|'custom format' [offset option] | generates a local datetime string in either ISO8601, RFC1123 or a custom display format |
| $processEnv [key] | lookup key in process.env |
| $dotenv [key] | lookup key in dotenv variables |


<<< @../../examples/variables/restClient.http


### XPath Query
Variables can be extracted from XML using XPath query. 

```
$xpath(:<variableName>) <xpath>
```

> If no variableName is provided and the last response is of Mimetype XML, the last response.body is used

<<< @../../examples/variables/xpath.http


> You could provide XPath Namespaces using `@xpath_ns`

<<< @../../examples/assert/xpath_namespace.http