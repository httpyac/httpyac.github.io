import{_ as n}from"./httpbook.6d721ee1.js";import{_ as s,o as a,c as e,d as t}from"./app.bfb4c07e.js";const p={},o=t(`<h1 id="comments" tabindex="-1"><a class="header-anchor" href="#comments" aria-hidden="true">#</a> Comments</h1><p>Comments are supported in HTTP Requests.</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code># comment type 1
// comment type 2

/*
  multi line comment
*/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Comments used within the request body must start from the beginning of the line (only whitespace before comment start).</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The first comment is automatically used as description for this request.</p></div><p><a href="/guide/installation_httpbook">httpBook</a> uses comments to inject markdown documentation</p><p><img src="`+n+`" alt="httpbook"></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[o];function c(r,i){return a(),e("div",null,l)}const k=s(p,[["render",c],["__file","comment.html.vue"]]);export{k as default};
