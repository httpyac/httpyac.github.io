import{r as l,o as i,c as o,a as e,b as n,w as p,F as c,e as s,d as t}from"./app.2e019971.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const u={},h=e("h1",{id:"request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),s(" Request")],-1),b=e("p",null,"An HTTP request starts with a request line followed by optional header fields, message body, response handler, and previous response references.",-1),m=e("h2",{id:"request-line",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-line","aria-hidden":"true"},"#"),s(" Request-Line")],-1),g=s("A "),k={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.1",target:"_blank",rel:"noopener noreferrer"},v=s("request line"),_=s(" consists of a request method, target and the HTTP protocol version. If the request method is omitted, \u2018GET\u2019 will be used as a default. The HTTP protocol version can be also omitted."),q=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>

GET https://www.google.de
###
<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//www.google.de</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The HTTP version is optional. But in this guide I have always added it because of syntax highlighting</p></div><p>If the Http version is specified, this can be used to control the use of HTTP2</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># no version = http/1.1
GET https://www.google.de

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/2.0</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Allowed Requests Methods are:</p><table><thead><tr><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>GET</td><td>POST</td><td>PUT</td><td>DELETE</td><td>PATCH</td></tr><tr><td>OPTIONS</td><td>CONNECT</td><td>TRACE</td><td>PROPFIND</td><td>PROPPATCH</td></tr><tr><td>COPY</td><td>MOVE</td><td>LOCK</td><td>UNLOCK</td><td>CHECKOUT</td></tr><tr><td>REPORT</td><td>MERGE</td><td>MKACTIVITY</td><td>MKWORKSPACE</td><td>VERSION-CONTROL</td></tr></tbody></table><p>A request path can be added in the next line</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org
  /get
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="query-strings" tabindex="-1"><a class="header-anchor" href="#query-strings" aria-hidden="true">#</a> Query Strings</h2>`,9),y=s("A "),f={href:"https://datatracker.ietf.org/doc/html/rfc3986#section-3.4",target:"_blank",rel:"noopener noreferrer"},w=s("request query"),T=s(" may contain any unicode characters except line separators and the \u2018#\u2019 symbol."),x=t(`<p>@[code http](../../examples/request/queryString.http</p><p>It is also possible to split the query strings to different subsequent lines.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org/anything
  ?q=httpyac
  &amp;ie=UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h2>`,4),P=s("Each "),S={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.2",target:"_blank",rel:"noopener noreferrer"},C=s("header field"),I=s(" consists of a case-insensitive field name followed by a colon (\u2018:\u2019), optional leading whitespace, the field value, and optional trailing whitespace."),A=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer token</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you use the same headers several times, it is possible to store them in a variable and reuse them.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{+
  const token = &quot;test&quot;
  exports.defaultHeaders = {
    &#39;Content-Type&#39;: &#39;text/html&#39;,
    &#39;Authorization&#39;: \`Bearer \${token}\`
  };
}}
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
...defaultHeaders
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
...defaultHeaders
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2>`,4),H={href:"https://www.npmjs.com/package/tough-cookie",target:"_blank",rel:"noopener noreferrer"},Q=s("CookieJar"),R=s(" support is enabled by default. All received "),M={href:"https://datatracker.ietf.org/doc/html/rfc6265#section-5.4",target:"_blank",rel:"noopener noreferrer"},j=s("Cookies"),E=s(", previously sent by the server with the Set-Cookie header are automatically sent back. It is possible to send own cookies to the server using cookie header."),G=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/cookies</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Cookie</span><span class="token punctuation">:</span> <span class="token header-value">bar=foo</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Cookies are only stored In-Memory and are cleared in VS Code with command <code>httpyac.reset</code></p></div><p>It is possible to disable cookie support per request.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @no-cookie-jar
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body" aria-hidden="true">#</a> Request Body</h2>`,5),D=s("The "),W={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.3",target:"_blank",rel:"noopener noreferrer"},O=s("request body"),B=s(" can be represented as a simple message or a mixed type message (multipart-form-data)."),L=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/x-www-form-urlencoded</span></span>

grant_type=client_credentials
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The first content that is not recognized as a header or query string is interpreted as a request body. After that, no more header or query string can be specified.</p></div><h2 id="imported-request-body" tabindex="-1"><a class="header-anchor" href="#imported-request-body" aria-hidden="true">#</a> Imported Request Body</h2><p>A body can also be imported by using <code>&lt; ...</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt; ./requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If you want to replace variables in the file please import it with <code>&lt;@</code></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=&quot;bar&quot;
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt;@ ./requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),N=s("All files are read with UTF-8 encoding. If a different encoding is desired, provide it. All "),z={href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",target:"_blank",rel:"noopener noreferrer"},U=s("encodings"),F=s(" supported by NodeJS are available."),K=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=&quot;bar&quot;
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt;@latin1 ./requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If the request body is configured in-place, whitespace around it will be trimmed. To send leading or trailing whitespace as part of the request body, send it from a separate file.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use Variable Substitution in file import.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@assetsDir=./
###

<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt; <span class="token punctuation">{</span><span class="token punctuation">{</span>assetsDir<span class="token punctuation">}</span><span class="token punctuation">}</span>requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="multipart-form-data" tabindex="-1"><a class="header-anchor" href="#multipart-form-data" aria-hidden="true">#</a> multipart/form-data</h2><p>It is possible to mix inline text with file imports</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">multipart/form-data; boundary=WebKitFormBoundary</span></span>

--WebKitFormBoundary
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;text&quot;</span></span>

invoice_text
--WebKitFormBoundary
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;title&quot;</span></span>

invoice_title
--WebKitFormBoundary
<span class="token header"><span class="token header-name keyword">Content-Disposition</span><span class="token punctuation">:</span> <span class="token header-value">form-data; name=&quot;invoice&quot;; filename=&quot;invoice.pdf&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/pdf</span></span>

&lt; ./dummy.pdf
--WebKitFormBoundary--
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="graphql" tabindex="-1"><a class="header-anchor" href="#graphql" aria-hidden="true">#</a> GraphQL</h2><p>GraphQL queries are supported. Parsing Logic will automatically generate a GraphQL request body from the query and the optional variables.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">

query launchesQuery($limit<span class="token operator">:</span> Int!)<span class="token punctuation">{</span>
  launchesPast(limit<span class="token operator">:</span> $limit) <span class="token punctuation">{</span>
    mission_name
    launch_date_local
    launch_site <span class="token punctuation">{</span>
      site_name_long
    <span class="token punctuation">}</span>
    rocket <span class="token punctuation">{</span>
      rocket_name
      rocket_type
    <span class="token punctuation">}</span>
    ships <span class="token punctuation">{</span>
      name
      home_port
      image
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>GraphQL fragments are also supported and are included in the body by name.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>fragment RocketParts on LaunchRocket {
  rocket_name
  first_stage {
    cores {
      flight
      core {
        reuse_count
        status
      }
    }
  }
}

<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">

query launchesQuery($limit<span class="token operator">:</span> Int!)<span class="token punctuation">{</span>
  launchesPast(limit<span class="token operator">:</span> $limit) <span class="token punctuation">{</span>
    mission_name
    launch_date_local
    launch_site <span class="token punctuation">{</span>
      site_name_long
    <span class="token punctuation">}</span>
    rocket <span class="token punctuation">{</span>
      ...RocketParts
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>To import GraphQL File you need to use special GraphQL Import Directive.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">

gql launchesQuery &lt; ./graphql.gql

<span class="token punctuation">{</span>
    <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use Variable Substitution in file import.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@assetsDir=./
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">

gql launchesQuery &lt; <span class="token punctuation">{</span><span class="token punctuation">{</span>assetsDir<span class="token punctuation">}</span><span class="token punctuation">}</span>graphql.gql

<span class="token punctuation">{</span>
    <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="request-separators" tabindex="-1"><a class="header-anchor" href="#request-separators" aria-hidden="true">#</a> Request Separators</h2><p>Multiple requests defined in a single file must be separated from each other with a request separator symbol. A separator may contain comments.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//httpbin.org/post</span></span>
### separator
<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//httpbin.org/post</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,19),V=s("Alternatively, the request can also be specified in "),J={href:"https://tools.ietf.org/html/rfc7230#section-3.1.1",target:"_blank",rel:"noopener noreferrer"},$=s("RFC 7230"),Y=s(" Request line format, which also triggers a separation."),X=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),Z=s("Using "),ss=e("code",null,"###",-1),es=s(" Regions without a request can be defined. These global regions are executed and interpreted for all requests within the file. This way "),ns=s("meta data"),as=s(", "),ts=s("variables"),rs=s(" and "),ps=s("scripts"),ls=s(" can be set for each request."),is=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@host=https://httpbin.org
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h2><p>It is also possible to send gRPC requests. The same request line format is used as for Http requests, but <code>GRPC</code> must be specified as the request method.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="protobuf-loader" tabindex="-1"><a class="header-anchor" href="#protobuf-loader" aria-hidden="true">#</a> Protobuf Loader</h3>`,5),os=s("To use the gRPC call, the proto file associated with the call must first be loaded. This is loaded using "),cs={href:"https://www.npmjs.com/package/@grpc/proto-loader",target:"_blank",rel:"noopener noreferrer"},ds=s("@grpc/proto-loader"),us=s(". This can be configured using options in the header format"),hs=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
<span class="token header"><span class="token header-name keyword">keepCase</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">longs</span><span class="token punctuation">:</span> <span class="token header-value">String</span></span>
<span class="token header"><span class="token header-name keyword">enums</span><span class="token punctuation">:</span> <span class="token header-value">String</span></span>
<span class="token header"><span class="token header-name keyword">defaults</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">oneofs</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">includeDirs</span><span class="token punctuation">:</span> <span class="token header-value">[\`\${__dirname}/request\`]</span></span>

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The import of the proto file can also be done globally</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

###
GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}


GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;john&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use Variable Substitution in file import and in proto-loader options.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@assetsDir=./

proto &lt; {{assetsDir}}hello.proto
<span class="token header"><span class="token header-name keyword">keepCase</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">longs</span><span class="token punctuation">:</span> <span class="token header-value">String</span></span>
<span class="token header"><span class="token header-name keyword">enums</span><span class="token punctuation">:</span> <span class="token header-value">String</span></span>
<span class="token header"><span class="token header-name keyword">defaults</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">oneofs</span><span class="token punctuation">:</span> <span class="token header-value">true</span></span>
<span class="token header"><span class="token header-name keyword">includeDirs</span><span class="token punctuation">:</span> <span class="token header-value">[\`\${assetsDir}/request\`]</span></span>

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>::: warn IncludeDirs of @grpc/proto-loader currently supports only absolute paths. :::</p><h3 id="unary-rpc" tabindex="-1"><a class="header-anchor" href="#unary-rpc" aria-hidden="true">#</a> Unary RPC</h3>`,7),bs={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc",target:"_blank",rel:"noopener noreferrer"},ms=s("Unary RPC"),gs=s(" behaves identically to Http requests. The url need to be in the following format"),ks=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GRPC {{server}}/{{service}}/{{method}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2),vs=s("Using "),_s=s("header notation"),qs=s(" it is also possible to send meta data."),ys=s("Header "),fs=e("code",null,"ChannelCredentials",-1),ws=s(" or "),Ts=e("code",null,"Authorization",-1),xs=s("are special and defines the "),Ps={href:"https://grpc.io/docs/guides/auth/#nodejs",target:"_blank",rel:"noopener noreferrer"},Ss=s("authentication"),Cs=s(" used by gRPC. If no such header is specified, "),Is=e("code",null,"grpc.credentials.createInsecure()",-1),As=s(" is used automatically"),Hs=e("h3",{id:"server-streaming-rpc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#server-streaming-rpc","aria-hidden":"true"},"#"),s(" Server Streaming RPC")],-1),Qs={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Rs=s("Server Streaming RPC"),Ms=s(" is similar to a unary RPC, except that the server returns a stream of messages in response to a client\u2019s request."),js=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/LotsOfReplies
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>All responses are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

# @noStreamingLog

GRPC grpcb.in:9000/hello.HelloService/LotsOfReplies
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="client-streaming-rpc" tabindex="-1"><a class="header-anchor" href="#client-streaming-rpc" aria-hidden="true">#</a> Client Streaming RPC</h3>`,4),Es={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Gs=s("Client Streaming RPC"),Ds=s(" is similar to a unary RPC, except that the client sends a stream of messages to the server instead of a single message. To enable this, a custom script can be used that registers for the @streaming hook. This script must export a Promise at the end of which the client stream is terminated."),Ws=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
GRPC grpcb.in:9000/hello.HelloService/lotsOfGreetings
{
  &quot;greeting&quot;: &quot;world.&quot;
}

{{@streaming

  async function writeStream(){
    await sleep(1000);
    grpcStream.write({
      greeting: &#39;How are you?&#39;,
    });
    await sleep(1000);
    grpcStream.write({
      greeting: &#39;I can stream.&#39;,
    });
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To control the wait time more easily, a method <code>sleep</code> is provided that waits the number of milliseconds.</p></div><h3 id="bidirectional-streaming-rpc" tabindex="-1"><a class="header-anchor" href="#bidirectional-streaming-rpc" aria-hidden="true">#</a> Bidirectional Streaming RPC</h3>`,3),Os={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Bs=s("Bidirectional Streaming RPC"),Ls=s(" is a combination of client streaming and server streaming."),Ns=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
GRPC grpcb.in:9000/hello.HelloService/BidiHello
{
  &quot;greeting&quot;: &quot;world&quot;
}

{{@streaming

  async function writeStream(){
    await sleep(1000);
    grpcStream.write({
      greeting: &#39;, how are you?&#39;,
    });
    await sleep(1000);
    grpcStream.write({
      greeting: &#39;, I can stream.&#39;,
    });
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="server-sent-events-eventsource" tabindex="-1"><a class="header-anchor" href="#server-sent-events-eventsource" aria-hidden="true">#</a> Server-Sent Events / EventSource</h2>`,2),zs=s("By using method "),Us=e("code",null,"SSE",-1),Fs=s(" an "),Ks={href:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource",target:"_blank",rel:"noopener noreferrer"},Vs=s("EventSource"),Js=s(" instance can be created. This opens a persistent connection to an HTTP server, which sends events in text/event-stream format. Adding the header "),$s=e("code",null,"event",-1),Ys=s(" the list of events to be output is specified"),Xs=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,1),Zs=s("The events of the server can be waited for by using "),se=s("streaming event"),ee=s(". As soon as this hook has been successfully processed, the connection is terminated."),ne=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to respond to events until manually aborted.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2>`,4),ae=s("By using method "),te=e("code",null,"WS",-1),re=s(" a "),pe={href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",target:"_blank",rel:"noopener noreferrer"},le=s("WebSocket connection"),ie=s(" to a server can be opened. If a body is included in the request, it is sent immediately after the connection is established."),oe=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
{&quot;foo&quot;: &quot;bar&quot;}

{{@streaming
  async function writeStream(){
    await sleep(10000);
    websocketClient.send(&#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),ce=s("The events of the server can be waited for by using "),de=s("streaming event"),ue=s(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),he=e("code",null,"streaming",-1),be=s(" block it is possible to send further message using "),me={href:"https://www.npmjs.com/package/ws#sending-and-receiving-text-data",target:"_blank",rel:"noopener noreferrer"},ge=e("code",null,"websocketClient",-1),ke=s("."),ve=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
{&quot;foo&quot;: &quot;bar&quot;}

{{@streaming
  async function writeStream(){
    await sleep(10000);
    websocketClient.send(&#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to respond to events until manually aborted.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div>`,4),_e={class:"custom-container tip"},qe=e("p",{class:"custom-container-title"},"TIP",-1),ye=s("If special options are needed for initialization, they can be configured in a NodeJS script using "),fe={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L26",target:"_blank",rel:"noopener noreferrer"},we=e("code",null,"request.options",-1),Te=s("."),xe=e("h2",{id:"mqtt",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mqtt","aria-hidden":"true"},"#"),s(" MQTT")],-1),Pe=s("By using method "),Se=e("code",null,"MQTT",-1),Ce=s(" a MQTT Client can be created. "),Ie={href:"https://github.com/mqttjs/MQTT.js",target:"_blank",rel:"noopener noreferrer"},Ae=s("MQTT.js"),He=s(" opens a TCP or WebSocket Connection to a MQTT Broker. The header "),Qe=e("code",null,"Topic",-1),Re=s(" specifies the topic to be registered (multiple specification allowed)"),Me=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If a body is specified, it will be published immediately after connecting.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

Hello, World

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the topic used for publishing is different from the topic used for replying, the headers <code>subscribe</code> and <code>publish</code> can be used instead.</p></div>`,4),je=s("The messages of the server can be waited for using "),Ee=s("streaming event"),Ge=s(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),De=e("code",null,"streaming",-1),We=s(" block it is possible to publish further message using "),Oe={href:"https://github.com/mqttjs/MQTT.js#publish",target:"_blank",rel:"noopener noreferrer"},Be=e("code",null,"mqttClient",-1),Le=s("."),Ne=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

{{@streaming
  async function writeStream(){
    await sleep(1000);
    mqttClient.publish(&#39;testtopic/1&#39;, &#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to respond to events until manually aborted.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/2</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div>`,4),ze={href:"https://github.com/mqttjs/MQTT.js#qos",target:"_blank",rel:"noopener noreferrer"},Ue=s("QoS"),Fe=s(", "),Ke={href:"https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options",target:"_blank",rel:"noopener noreferrer"},Ve=s("retain, username, password, keepAlive (10seconds default) and clean"),Je=s(" can be configured using header notation."),$e=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Qos</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">username</span><span class="token punctuation">:</span> <span class="token header-value">foo</span></span>
<span class="token header"><span class="token header-name keyword">password</span><span class="token punctuation">:</span> <span class="token header-value">bar</span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1),Ye={class:"custom-container tip"},Xe=e("p",{class:"custom-container-title"},"TIP",-1),Ze=s("If more options are needed for the initialization, they could be configured in a NodeJS script using "),sn={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L36",target:"_blank",rel:"noopener noreferrer"},en=e("code",null,"request.options",-1),nn=s("."),an=t(`<p>As long as the connection of the MQTT instance to the MessageQueue exists, messages can also be published from other NodeJS blocks.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

###
# @name test
{{
  mqttClient.publish(&#39;testtopic/1&#39;, &#39;hello johnny&#39;)
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="amqp-rabbitmq" tabindex="-1"><a class="header-anchor" href="#amqp-rabbitmq" aria-hidden="true">#</a> AMQP/ RabbitMQ</h2>`,3),tn=s("By using method "),rn=e("code",null,"AMQP",-1),pn=s(" a AMQP Client can be created. "),ln={href:"https://github.com/cloudamqp/amqp-client.js",target:"_blank",rel:"noopener noreferrer"},on=s("@cloudamqp/amqp-client"),cn=s(" opens a AMQP Connection to RabbitMQ Server. Following Methods can be used"),dn=t(`<h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> Publish</h3><p>Publish a new message to an exchange. Header <code>amqp_exchange</code> defines the used exchange. <code>amqp_routing_key</code> is optional and sets the used routing key</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">publish</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>

{
  &quot;test&quot;: &quot;{{$uuid}}&quot;
}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>A direct publish to a queue is available using <code>amqp_queue</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>

{
  &quot;test&quot;: &quot;test&quot;
}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If no amqp_method header is present and a body is provided. publish is used as default</p></div><p>The following headers can also be defined</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_contentType</td><td>content type of body, eg. application/json</td></tr><tr><td>amqp_contentEncoding</td><td>content encoding of body, eg. gzip</td></tr><tr><td>amqp_delivery_mode</td><td>1 for transient messages, 2 for persistent messages</td></tr><tr><td>amqp_priority</td><td>between 0 and 255</td></tr><tr><td>amqp_correlation_id</td><td>for RPC requests</td></tr><tr><td>amqp_replyTo</td><td>for RPC requests</td></tr><tr><td>amqp_expiration</td><td>Message TTL, in milliseconds, as string</td></tr><tr><td>amqp_message_id</td><td>messageId</td></tr><tr><td>amqp_user_id</td><td>userId</td></tr><tr><td>amqp_type</td><td>type</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All other headers that do not start with <code>amqp_</code> are appended to the message as headers</p></div><h3 id="consume-subscribe" tabindex="-1"><a class="header-anchor" href="#consume-subscribe" aria-hidden="true">#</a> Consume/ Subscribe</h3>`,10),un=s("Consume messages from a queue. Messages will be delivered asynchronously. The messages of the server can be waited for by using "),hn=s("streaming event"),bn=s(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),mn=e("code",null,"streaming",-1),gn=s(" block it is possible to access additional methods of a "),kn={href:"https://cloudamqp.github.io/amqp-client.js/classes/AMQPChannel.html",target:"_blank",rel:"noopener noreferrer"},vn=s("AMQPChannel using "),_n=e("code",null,"amqpChannel",-1),qn=s("."),yn=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">consume</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to consume message until manually aborted.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If no amqp_method header is present and no body is provided. consume is used as default</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div><p>The following headers can also be defined</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_tag</td><td>tag of the consumer, will be server generated if left empty</td></tr><tr><td>amqp_no_ack</td><td>f messages are removed from the server upon delivery, or have to be acknowledged</td></tr><tr><td>amqp_exclusive</td><td>if this can be the only consumer of the queue, will return an Error if there are other consumers to the queue already</td></tr></tbody></table><h3 id="ack-nack-cancel" tabindex="-1"><a class="header-anchor" href="#ack-nack-cancel" aria-hidden="true">#</a> Ack/ Nack/ Cancel</h3><p>Consumed messages are not acked/ nacked automatically. If a message needs to get acked/ nacked automatically a manual ack/ nack needs to be called. You need to declare the same channelId (<code>amqp_channel_id</code>) and deliveryTag (<code>amqp_tag</code>) as the consumer.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">ack</span></span>
<span class="token header"><span class="token header-name keyword">amqp_channel_id</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">amqp_tag</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">nack</span></span>
<span class="token header"><span class="token header-name keyword">amqp_channel_id</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">amqp_tag</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">cancel</span></span>
<span class="token header"><span class="token header-name keyword">amqp_channel_id</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">amqp_tag</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The following headers can also be defined</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_requeue</td><td>if the message should be requeued or removed</td></tr><tr><td>amqp_multiple</td><td>batch confirm all messages up to this delivery tag</td></tr></tbody></table><h3 id="purge" tabindex="-1"><a class="header-anchor" href="#purge" aria-hidden="true">#</a> Purge</h3><p>Purge all messages of a queue</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">purge</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="declare-exchange" tabindex="-1"><a class="header-anchor" href="#declare-exchange" aria-hidden="true">#</a> Declare exchange</h3><p>Declare a queue or exchange</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">declare</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">declare</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_passive</td><td>if the exchange name doesn&#39;t exists the channel will be closed with an error, fulfilled if the exchange name does exists</td></tr><tr><td>amqp_durable</td><td>if the exchange should survive server restarts</td></tr><tr><td>amqp_auto_delete</td><td>if the exchange should be deleted when the last binding from it is deleted</td></tr><tr><td>amqp_exclusive</td><td>if the queue should be deleted when the channel is closed</td></tr></tbody></table><h3 id="bind-unbind-queue-to-exchange" tabindex="-1"><a class="header-anchor" href="#bind-unbind-queue-to-exchange" aria-hidden="true">#</a> Bind/ Unbind queue to exchange</h3><p>Bind and unbind queue of a exchange</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">bind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">unbind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="bind-unbind-exchange-to-exchange" tabindex="-1"><a class="header-anchor" href="#bind-unbind-exchange-to-exchange" aria-hidden="true">#</a> Bind/ Unbind exchange to exchange</h3><p>Create or delete an Exchange to exchange binding</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">bind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange_destination</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange2</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">unbind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h3><p>Delete an exchange or queue</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">delete</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">delete</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_if_unused</td><td>only delete if the exchange doesn&#39;t have any bindings</td></tr><tr><td>amqp_if_empty</td><td>only delete if the queue is empty</td></tr></tbody></table>`,35);function fn(wn,Tn){const a=l("ExternalLinkIcon"),r=l("RouterLink");return i(),o(c,null,[h,b,m,e("p",null,[g,e("a",k,[v,n(a)]),_]),q,e("p",null,[y,e("a",f,[w,n(a)]),T]),x,e("p",null,[P,e("a",S,[C,n(a)]),I]),A,e("p",null,[e("a",H,[Q,n(a)]),R,e("a",M,[j,n(a)]),E]),G,e("p",null,[D,e("a",W,[O,n(a)]),B]),L,e("p",null,[N,e("a",z,[U,n(a)]),F]),K,e("p",null,[V,e("a",J,[$,n(a)]),Y]),X,e("p",null,[Z,ss,es,n(r,{to:"/guide/metaData.html"},{default:p(()=>[ns]),_:1}),as,n(r,{to:"/guide/variables.html"},{default:p(()=>[ts]),_:1}),rs,n(r,{to:"/guide/scripting.html"},{default:p(()=>[ps]),_:1}),ls]),is,e("p",null,[os,e("a",cs,[ds,n(a)]),us]),hs,e("p",null,[e("a",bs,[ms,n(a)]),gs]),ks,e("p",null,[vs,n(r,{to:"/guide/request.html#headers"},{default:p(()=>[_s]),_:1}),qs]),e("p",null,[ys,fs,ws,Ts,xs,e("a",Ps,[Ss,n(a)]),Cs,Is,As]),Hs,e("p",null,[e("a",Qs,[Rs,n(a)]),Ms]),js,e("p",null,[e("a",Es,[Gs,n(a)]),Ds]),Ws,e("p",null,[e("a",Os,[Bs,n(a)]),Ls]),Ns,e("p",null,[zs,Us,Fs,e("a",Ks,[Vs,n(a)]),Js,$s,Ys]),Xs,e("p",null,[Zs,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[se]),_:1}),ee]),ne,e("p",null,[ae,te,re,e("a",pe,[le,n(a)]),ie]),oe,e("p",null,[ce,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[de]),_:1}),ue,he,be,e("a",me,[ge,n(a)]),ke]),ve,e("div",_e,[qe,e("p",null,[ye,e("a",fe,[we,n(a)]),Te])]),xe,e("p",null,[Pe,Se,Ce,e("a",Ie,[Ae,n(a)]),He,Qe,Re]),Me,e("p",null,[je,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[Ee]),_:1}),Ge,De,We,e("a",Oe,[Be,n(a)]),Le]),Ne,e("p",null,[e("a",ze,[Ue,n(a)]),Fe,e("a",Ke,[Ve,n(a)]),Je]),$e,e("div",Ye,[Xe,e("p",null,[Ze,e("a",sn,[en,n(a)]),nn])]),an,e("p",null,[tn,rn,pn,e("a",ln,[on,n(a)]),cn]),dn,e("p",null,[un,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[hn]),_:1}),bn,mn,gn,e("a",kn,[vn,_n,n(a)]),qn]),yn],64)}var Sn=d(u,[["render",fn]]);export{Sn as default};
