import{_ as n,d as s}from"./app.a669a802.js";import{_ as a}from"./httpbook.e371b2d5.js";const e={},p=s(`<h1 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h1><p>Comments are supported in HTTP Requests.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code># comment type 1
// comment type 2

/*
  multi line comment
*/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Comments used within the request body must start from the beginning of the line (only whitespace before comment start).</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The first comment is automatically used as description for this request.</p></div><p><a href="/guide/installation_httpbook">httpBook</a> uses comments to inject markdown documentation</p><p><img src="`+a+`" alt="httpbook"></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>
/*
# httpbin.org (0.9.2)

&gt; [ Base URL: httpbin.org/ ]

A simple HTTP Request &amp; Response Service

**Run locally:** \`$ docker run -p 80:80 kennethreitz/httpbin\`

[the developer - Website](https://kennethreitz.org/)
[Send email to the developer](me@kennethreitz.org)
*/


/*
## Http Methods

Testing different HTTP verbs
*/


/*
## Status Codes

Generates responses with given status code
*/

<span class="token request-line"><span class="token method property">DELETE</span> <span class="token request-target url">https://httpbin.org/delete</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:00 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">361</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;form&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Accept-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip, deflate, br&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpbin.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;X-Amzn-Trace-Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Root=1-60d0ea98-6446cd5e7dfa0a805da95cad&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;json&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;79.243.57.74&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://httpbin.org/delete&quot;</span>
<span class="token punctuation">}</span>

###

</span><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/get</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:05 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">295</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Accept-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip, deflate, br&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpbin.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;X-Amzn-Trace-Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Root=1-60d0ea9d-3dfb873f497a9e6d50b2eccc&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;79.243.57.74&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://httpbin.org/get&quot;</span>
<span class="token punctuation">}</span>

###

</span><span class="token request-line"><span class="token method property">PATCH</span> <span class="token request-target url">https://httpbin.org/patch</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:07 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">388</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;form&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Accept-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip, deflate, br&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Content-Length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpbin.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;X-Amzn-Trace-Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Root=1-60d0ea9f-7e49d0a404e13ce7386fb746&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;json&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;79.243.57.74&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://httpbin.org/patch&quot;</span>
<span class="token punctuation">}</span>

###

</span><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:10 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">387</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;form&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Accept-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip, deflate, br&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Content-Length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpbin.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;X-Amzn-Trace-Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Root=1-60d0eaa2-3379384b530308d96e9ade95&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;json&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;79.243.57.74&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://httpbin.org/post&quot;</span>
<span class="token punctuation">}</span>

###

</span><span class="token request-line"><span class="token method property">PUT</span> <span class="token request-target url">https://httpbin.org/put</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:12 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">386</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;form&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;headers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token string">&quot;*/*&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Accept-Encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gzip, deflate, br&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Content-Length&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpbin.org&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;X-Amzn-Trace-Id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Root=1-60d0eaa4-1a5b7a7507929e2d412e650a&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;json&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">&quot;origin&quot;</span><span class="token operator">:</span> <span class="token string">&quot;79.243.57.74&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://httpbin.org/put&quot;</span>
<span class="token punctuation">}</span>

###

</span><span class="token request-line"><span class="token method property">DELETE</span> <span class="token request-target url">https://httpbin.org/status/200</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:15 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>

###

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/status/200</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:18 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>

###

<span class="token request-line"><span class="token method property">PATCH</span> <span class="token request-target url">https://httpbin.org/status/200</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:24 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>

###

<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/status/200</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:22 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>

###

<span class="token request-line"><span class="token method property">PUT</span> <span class="token request-target url">https://httpbin.org/status/200</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">- OK</span></span>
<span class="token header"><span class="token header-name keyword">date</span><span class="token punctuation">:</span> <span class="token header-value">Mon, 21 Jun 2021 19:38:30 GMT</span></span>
<span class="token header"><span class="token header-name keyword">content-type</span><span class="token punctuation">:</span> <span class="token header-value">text/html; charset=utf-8</span></span>
<span class="token header"><span class="token header-name keyword">content-length</span><span class="token punctuation">:</span> <span class="token header-value">0</span></span>
<span class="token header"><span class="token header-name keyword">connection</span><span class="token punctuation">:</span> <span class="token header-value">close</span></span>
<span class="token header"><span class="token header-name keyword">server</span><span class="token punctuation">:</span> <span class="token header-value">gunicorn/19.9.0</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-origin</span><span class="token punctuation">:</span> <span class="token header-value">*</span></span>
<span class="token header"><span class="token header-name keyword">access-control-allow-credentials</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br></div></div>`,8);function t(o,r){return p}var u=n(e,[["render",t],["__file","comment.html.vue"]]);export{u as default};
