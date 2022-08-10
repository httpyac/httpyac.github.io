import{_ as u,r as p,o as h,c as b,a as e,b as s,w as t,t as d,F as m,d as a,e as n}from"./app.9540de84.js";const g={},v=a(`<h1 id="variables" tabindex="-1"><a class="header-anchor" href="#variables" aria-hidden="true">#</a> Variables</h1><p>Variables are used for avoiding unnecessary data duplication in requests or for providing an easy way of switching between environments. They can be used inside request line, header fields, request body or in variable definitions. Each variable is represented by a case-sensitive identifier surrounded by double curly braces.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=bar
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?q={{foo}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="inline-variables" tabindex="-1"><a class="header-anchor" href="#inline-variables" aria-hidden="true">#</a> Inline Variables</h2><p>Inline Variables can be easily created with the following scheme. Variable Substitution is supported.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=bar
@fooExtended={{foo}}_Extendend
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?q={{fooExtended}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Inline Variables in global scripts are set for each request in the file</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@host=https://httpbin.org
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>For variables, a distinction is made between fixed and lazy variables. The fixed variables are evaluated directly at definition (request <code>result</code> would query <code>?foo=foobar</code>).</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@bar=bar
@foo=foo{{bar}}
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?foo={{foo}}</span> <span class="token http-version property">HTTP/1.1</span></span>

###
# @name result
@bar=bar2
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?foo={{foo}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>Lazy variables are only evaluated before a request or NodeJS execution (request <code>result</code> would query <code>?foo=foobar2</code>). .</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@bar=bar
@foo:=foo{{bar}}
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?foo={{foo}}</span> <span class="token http-version property">HTTP/1.1</span></span>

###
# @name=result
@bar=bar2
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?foo={{foo}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If a required variable is not yet defined, it will also be set lazy</p></div><h2 id="import-variables" tabindex="-1"><a class="header-anchor" href="#import-variables" aria-hidden="true">#</a> Import Variables</h2>`,14),k=n("The variables are also imported from other files using "),y=e("code",null,"@import",-1),f=n("."),T=a(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @import ./variablesInit.http
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?q={{fooExtended}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,1),_=n("You can also reference ("),q=e("code",null,"@ref",-1),x=n(") named responses ("),w=e("code",null,"@name",-1),E=n(") from other files."),P=e("div",{class:"language-http ext-http line-numbers-mode"},[e("pre",{class:"language-http"},[e("code",null,[n(`# @import ./name.http
# @ref json
`),e("span",{class:"token request-line"},[e("span",{class:"token method property"},"POST"),n(),e("span",{class:"token request-target url"},"https://httpbin.org/anything"),n(),e("span",{class:"token http-version property"},"HTTP/1.1")]),n(`
{{json.slideshow.author}}
`)])]),e("div",{class:"highlight-lines"},[e("div",{class:"highlight-line"},"\xA0"),e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br")])],-1),G=e("div",{class:"language-http ext-http line-numbers-mode"},[e("pre",{class:"language-http"},[e("code",null,[n(`# @name json
`),e("span",{class:"token request-line"},[e("span",{class:"token method property"},"GET"),n(),e("span",{class:"token request-target url"},"https://httpbin.org/json"),n(),e("span",{class:"token http-version property"},"HTTP/1.1")]),n(`

###
# @ref json
`),e("span",{class:"token request-line"},[e("span",{class:"token method property"},"POST"),n(),e("span",{class:"token request-target url"},"https://httpbin.org/anything"),n(),e("span",{class:"token http-version property"},"HTTP/1.1")]),n(`
{{json.slideshow.author}}
`)])]),e("div",{class:"highlight-lines"},[e("div",{class:"highlight-line"},"\xA0"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br"),e("span",{class:"line-number"},"3"),e("br"),e("span",{class:"line-number"},"4"),e("br"),e("span",{class:"line-number"},"5"),e("br"),e("span",{class:"line-number"},"6"),e("br"),e("span",{class:"line-number"},"7"),e("br")])],-1),H=a(`<h2 id="variable-substitution-in-request" tabindex="-1"><a class="header-anchor" href="#variable-substitution-in-request" aria-hidden="true">#</a> Variable Substitution in Request</h2><p>Before the request is sent, all variables in the request (request line, headers, request body) are replaced with the value of the variable.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the replacement is not desired, this can be prevented using <code>\\{\\{...\\}\\}</code>. This is replaced by <code>{{...}}</code></p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
{
  &quot;template&quot;: &quot;My \\{\\{someVerb\\}\\} template!!&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="nodejs-script" tabindex="-1"><a class="header-anchor" href="#nodejs-script" aria-hidden="true">#</a> NodeJs Script</h3><p>All entries of the form <span>{{...}}</span> are interpreted as NodeJS Javascript which returns exactly one value. Since all variables can be easily accessed on the global scope, this allows for simple substitution.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo = test

GET https://www.httpbin.org/anything?bar={{foo}}&amp;q={{new Date().toString()}}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>It is possible to create more complex scripts, but this is not recommended and you should use a separate script block instead.</p></div><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host" aria-hidden="true">#</a> Host</h3><p>If the url starts with / and a variable host is defined the URL of this host will be pre pended</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@host=https://httpbin.org
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/anything?q=1</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/anything?q=2</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="input-password-and-quickpick" tabindex="-1"><a class="header-anchor" href="#input-password-and-quickpick" aria-hidden="true">#</a> Input, Password and QuickPick</h3><p>Dynamic Variable Resolution with input field, password field or quick pick is supported.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
@query = {{$input input app? $value: foo}}
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json?q={{query}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
@query = {{$password input app? $value: foo}}
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/json?q={{query}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@query = {{$pick select app? $value: foo,bar}}

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?q={{query}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="oauth2-openid-connect" tabindex="-1"><a class="header-anchor" href="#oauth2-openid-connect" aria-hidden="true">#</a> OAuth2 / OpenID Connect</h3>`,17),I=n("The following "),A={href:"https://openid.net/specs/openid-connect-basic-1_0.html",target:"_blank",rel:"noopener noreferrer"},D=n("Open ID Connect"),C=n(" flows are supported."),$=a(`<ul><li>Authentication (or Basic) Flow with or without PKCE (grant_type = authorization_code)</li><li>Implicit (or Hybrid) Flow (grant_type = implicit)</li><li>Resource Owner Password Grant (grant_type = password)</li><li>Client Credentials Grant (grant_type = client_credentials)</li><li>Device Authorization Grant (grant_type = device_code)</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>GET /secured_service
Authorization: openid {{grant_type}} {{prefix}}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If no <code>grant_type</code> is provided <code>client_credentials</code> flow is used. If no <code>prefix</code> is provided value <code>oauth2</code> is used.</p></div><p>To configure the flow, the following variables must be specified</p><table><thead><tr><th>variable</th><th>description</th><th>authorization_code</th><th>implicit</th><th>password</th><th>client_credentials</th><th>device_code</th></tr></thead><tbody><tr><td><span>{{prefix}}</span>_tokenEndpoint</td><td>Token Endpoint URI</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></tr><tr><td><span>{{prefix}}</span>_clientId</td><td>OAuth 2.0 Client Identifier</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></tr><tr><td><span>{{prefix}}</span>_clientSecret</td><td>OAuth 2.0 Client Secret</td><td>x</td><td>x</td><td>x</td><td>x</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_authorizationEndpoint</td><td>Authorization Endpoint URI</td><td>x</td><td>x</td><td>-</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_redirectUri</td><td>Redirection URI to which the response is sent</td><td>x (default: localhost:3000)</td><td>x (default: localhost:3000)</td><td>-</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_scope</td><td>Scope</td><td>x (default: openid)</td><td>x (default: openid)</td><td>x</td><td>x</td><td>x</td></tr><tr><td><span>{{prefix}}</span>_resource</td><td>Resource Indicators (RFC8707)</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></tr><tr><td><span>{{prefix}}</span>_responseType</td><td>response type of auth server</td><td>-</td><td>x (default: code)</td><td>-</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_audience</td><td>audience</td><td>x</td><td>x</td><td>-</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_username</td><td>username</td><td>-</td><td>-</td><td>x</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_password</td><td>password</td><td>-</td><td>-</td><td>x</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_keepAlive</td><td>AccessToken is automatically renewed in the background, if request_token is provided (default: false)</td><td>x</td><td>-</td><td>x</td><td>x</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_useAuthorizationHeader</td><td>use Authorization Header for request (default: true)</td><td>x</td><td>x</td><td>x</td><td>x</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_usePkce</td><td>enable PKCE support</td><td>x (default: false)</td><td>-</td><td>-</td><td>-</td><td>-</td></tr><tr><td><span>{{prefix}}</span>_deviceCodeEndpoint</td><td>Device Code Endpoint URI</td><td>-</td><td>-</td><td>-</td><td>-</td><td>x</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>To get the code from the Open ID server, a http server is started for the Authorization Flow and Implicit Flow on port of the redirection Uri (default Port 3000). The server is stopped after receiving the code (delay 2 minutes). You need to configure your OpenId Provider to allow redirectUri as valid redirection uri</p></div>`,6),z={class:"custom-container tip"},S=e("p",{class:"custom-container-title"},"TIP",-1),Y=n("The http server started for the Authorization Flow and Implicit Flow listens on the port of "),j=n(". You can configure a different port for the server to listen to with variable "),F=e("code",null,"oauth2_serverPort",-1),R=n(". If the port localhost:8000 is mapped to host "),M=e("code",null,"https://port-8000.external-domain",-1),U=n(" in a reverse proxy, you can set variable "),N=n(" as "),V=e("code",null,"https://port-8000.external-domain/callback",-1),O=n(" and set variable "),B=e("code",null,"oauth2_serverPort",-1),L=n(" to 8000."),K=a(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
@keycloakHost = http://127.0.0.1:8080
@local_tokenEndpoint = {{keycloakHost}}/auth/realms/local/protocol/openid-connect/token
@local_clientId = httpyac
@local_clientSecret = 936DA01F-9ABD-4D9D-80C7-02AF85C822A8
@local_scope = openid profile

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/secured_service</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">openid client_credentials local</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@job_clientId=c003a37f-024f-462a-b36d-b001be4cd24a
@job_clientSecret=32a39620-32b3-4307-9aa1-511e3d7f48a8
@job_tokenEndpoint=https://api-con.arbeitsagentur.de/oauth/gettoken_cc
@job_useAuthorizationHeader=false

###

GET https://api-con.arbeitsagentur.de/prod/jobboerse/jobsuche-service/pc/v2/app/jobs?FCT.AKTUALITAET=100&amp;FCT.ANGEBOTSART=ARBEIT
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 client_credentials job</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2),W=n("It is possible to convert the generated token into a token of another realm using "),J={href:"https://tools.ietf.org/html/rfc8693",target:"_blank",rel:"noopener noreferrer"},X=n("Token Exchange"),Q=a(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>GET /secured_service HTTP/1.1
Authorization: openid client_credentials local token_exchange realm_auth
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h5><ul><li>.env The following examples use the following values as variables.</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>oauth2_clientId=httpyac
oauth2_clientSecret=SdGck7R97N64j1Fw07MrU2vRaHTbLnJc
oauth2_tokenEndpoint=http://localhost:8080/realms/demo/protocol/openid-connect/token
oauth2_authorizationEndpoint=http://localhost:8080/realms/demo/protocol/openid-connect/auth
oauth2_deviceCodeEndpoint=http://localhost:8080/realms/demo/protocol/openid-connect/auth/device
oauth2_username=john
oauth2_password=doe

pkce_clientId=httpyac_pkce
pkce_clientSecret=G7cC7pFBmTj2GMHhLNscQBjAx4j8WPD3
pkce_usePkce=true

device_clientId=httpyac_device
device_deviceCodeEndpoint=http://localhost:8080/realms/demo/protocol/openid-connect/auth/device
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>Authorization Code Flow</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
GET https://httpbin.org/anything
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 code</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Authorization Code Flow with PKCE</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
GET https://httpbin.org/anything
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 code pkce</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Implicit Flow</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
GET https://httpbin.org/anything
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 implicit</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Client Credentials Flow</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
GET https://httpbin.org/anything
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">openid</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>Device Code Flow</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org/anything
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 device_code device</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>Password Flow</li></ul><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
GET https://httpbin.org/anything
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 password</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="aws-signature-v4" tabindex="-1"><a class="header-anchor" href="#aws-signature-v4" aria-hidden="true">#</a> AWS Signature v4</h3><p>AWS Signature v4 authenticates requests to AWS services.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@accessId = doe
@accessKey = 12345678
@token = token
@region = eu-central-1
@service = cognito-idp

###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://cognito-idp.eu-central-1.amazonaws.com</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">AWS {{accessId}} {{accessKey}} token:{{token}} region:{{region}} service:{{service}}</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://cognito-idp.eu-central-1.amazonaws.com</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">AWS {{accessId}} {{accessKey}} token:{{token}}</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://cognito-idp.eu-central-1.amazonaws.com</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">AWS {{accessId}} {{accessKey}}</span></span>



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="ssl-client-certificate" tabindex="-1"><a class="header-anchor" href="#ssl-client-certificate" aria-hidden="true">#</a> SSL Client Certificate</h3><p>To use SSL Client Certificates, the <code>clientCertificates</code> setting must be set. This contains the certificate to be used for each host. For each host either the certificate/ key or pfx/ passphrase must be maintained.</p><ul><li>cert: Path of public x509 certificate</li><li>key: Path of private key</li><li>pfx: Path of PKCS #12 or PFX certificate</li><li>passphrase: Optional passphrase for the certificate if required</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;clientCertificates&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;example.com&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;cert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./client.crt&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./client.key&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;client.badssl.com&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;pfx&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./badssl.com-client.p12&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;passphrase&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badssl.com&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://client.badssl.com/</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>path should be absolute or relative to workspace root</p></blockquote><p>It is also possible to attach the certificate using (X-)ClientCert header. The header will be removed.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://client.badssl.com/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">ClientCert</span><span class="token punctuation">:</span> <span class="token header-value">pfx: ./badssl.com-client.p12 passphrase: badssl.com</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://client.badssl.com/</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">X-ClientCert</span><span class="token punctuation">:</span> <span class="token header-value">pfx: ./badssl.com-client.p12 passphrase: badssl.com</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="basic-authentication" tabindex="-1"><a class="header-anchor" href="#basic-authentication" aria-hidden="true">#</a> Basic Authentication</h3><p>A support method is provided for using Basic Authentication. Just specify the username and password separated by spaces and the base64 encoding will be applied automatically</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@user = doe
@password = 12345678
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/basic-auth/{{user}}/{{password}}</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Basic {{user}} {{password}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>If the username or password contains spaces, a <code>:</code> can be used alternatively.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
@user = john doe
@password = 12345678

###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/basic-auth/{{user}}/{{password}}</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Basic {{user}}:{{password}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="digest-authentication" tabindex="-1"><a class="header-anchor" href="#digest-authentication" aria-hidden="true">#</a> Digest Authentication</h3><p>A support method is provided for using Digest Authentication. Just specify the username and password separated by spaces and the digest access authentication will be applied automatically</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
@host = https://httpbin.org
@user = doe
@password = 12345678

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/digest-auth/auth/{{user}}/{{password}}</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Digest {{user}} {{password}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>If the username or password contains spaces, a <code>:</code> can be used alternatively.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
@host = https://httpbin.org
@user = john doe
@password = 12345678

GET /digest-auth/auth/{{user.replace(&#39; &#39;, &#39;+&#39;)}}/{{password}} HTTP/1.1
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Digest {{user}}:{{password}}</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="intellij-dynamic-variables" tabindex="-1"><a class="header-anchor" href="#intellij-dynamic-variables" aria-hidden="true">#</a> Intellij Dynamic Variables</h3>`,38),Z={href:"https://www.jetbrains.com/help/idea/exploring-http-syntax.html#dynamic-variables",target:"_blank",rel:"noopener noreferrer"},ee=n("Intellij dynamic variables"),ne=n(" are supported."),se=a(`<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>$uuid</td><td>generates a universally unique identifier (UUID-v4)</td></tr><tr><td>$timestamp</td><td>generates the current UNIX timestamp</td></tr><tr><td>$randomInt</td><td>generates a random integer between 0 and 1000.</td></tr></tbody></table><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything?time={{$timestamp}}&amp;uuid={{$uuid}}&amp;random={{$randomInt}}</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="rest-client-dynamic-variables" tabindex="-1"><a class="header-anchor" href="#rest-client-dynamic-variables" aria-hidden="true">#</a> Rest Client Dynamic Variables</h3>`,3),ae={href:"https://github.com/Huachao/vscode-restclient#system-variables",target:"_blank",rel:"noopener noreferrer"},te=n("Rest Client dynamic variables"),re=n(" are partially supported."),pe=a(`<table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>$guid</td><td>generates a universally unique identifier (UUID-v4)</td></tr><tr><td>$randomInt min max</td><td>generates a random integer between <code>min</code> and <code>max</code>.</td></tr><tr><td>$timestamp [offset option]</td><td>generates the current UNIX timestamp</td></tr><tr><td>$datetime rfc1123|iso8601|&quot;custom format&quot;|&#39;custom format&#39; [offset option]</td><td>generates a datetime string in either ISO8601, RFC1123 or a custom display format</td></tr><tr><td>$localDatetime rfc1123|iso8601|&quot;custom format&quot;|&#39;custom format&#39; [offset option]</td><td>generates a local datetime string in either ISO8601, RFC1123 or a custom display format</td></tr></tbody></table><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/anything?q={{$guid}}</span> <span class="token http-version property">HTTP/1.1</span></span>

GET /anything?q={{$randomInt 100 200}} HTTP/1.1

GET /anything?q={{$randomInt -100 100}} HTTP/1.1

GET /anything?q={{$randomInt -100 -50}} HTTP/1.1

GET /anything?q={{$randomInt -50 -100}} HTTP/1.1

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/anything?q={{$timestamp}}</span> <span class="token http-version property">HTTP/1.1</span></span>

GET /anything?q={{$timestamp 2 h}} HTTP/1.1

GET /anything?q={{$datetime rfc1123}} HTTP/1.1

GET /anything?q={{$datetime rfc1123 2 h}} HTTP/1.1

GET /anything?q={{$datetime iso8601}} HTTP/1.1

GET /anything?q={{$datetime iso8601 2 h}} HTTP/1.1

GET /anything?q={{$datetime &quot;DD.MM.YYYY&quot;}} HTTP/1.1

GET /anything?q={{$datetime &quot;DD.MM.YYYY&quot; 2 d}} HTTP/1.1

GET /anything?q={{$datetime &#39;DD.MM.YYYY&#39;}} HTTP/1.1

GET /anything?q={{$datetime &#39;DD.MM.YYYY&#39; 3 d}} HTTP/1.1

GET /anything?q={{$localDatetime rfc1123}} HTTP/1.1

GET /anything?q={{$localDatetime rfc1123 2 h}} HTTP/1.1

GET /anything?q={{$localDatetime iso8601}} HTTP/1.1

GET /anything?q={{$localDatetime iso8601 2 h}} HTTP/1.1

GET /anything?q={{$localDatetime &quot;DD.MM.YYYY HH:mm&quot;}} HTTP/1.1

GET /anything?q={{$datetime &quot;DD.MM.YYYY HH:mm&quot; 2 d}} HTTP/1.1

GET /anything?q={{$datetime &#39;DD.MM.YYYY HH:mm&#39;}} HTTP/1.1

GET /anything?q={{$datetime &#39;DD.MM.YYYY HH:mm&#39; 3 d}} HTTP/1.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div>`,2);function ie(l,le){const i=p("RouterLink"),o=p("CodeGroupItem"),c=p("CodeGroup"),r=p("ExternalLinkIcon");return h(),b(m,null,[v,e("p",null,[k,s(i,{to:"/guide/metaData.html#import"},{default:t(()=>[y]),_:1}),f]),T,e("p",null,[_,s(i,{to:"/guide/metaData.html#ref-and-forceref"},{default:t(()=>[q]),_:1}),x,s(i,{to:"/guide/metaData.html#name"},{default:t(()=>[w]),_:1}),E]),s(c,null,{default:t(()=>[s(o,{title:"import.http"},{default:t(()=>[P]),_:1}),s(o,{title:"name.http"},{default:t(()=>[G]),_:1})]),_:1}),H,e("p",null,[I,e("a",A,[D,s(r)]),C]),$,e("div",z,[S,e("p",null,[Y,e("code",null,d(l.prefix)+"_redirectUri",1),j,F,R,M,U,e("code",null,d(l.prefix)+"_redirectUri",1),N,V,O,B,L])]),K,e("p",null,[W,e("a",J,[X,s(r)])]),Q,e("p",null,[e("a",Z,[ee,s(r)]),ne]),se,e("p",null,[e("a",ae,[te,s(r)]),re]),pe],64)}var de=u(g,[["render",ie],["__file","variables.html.vue"]]);export{de as default};