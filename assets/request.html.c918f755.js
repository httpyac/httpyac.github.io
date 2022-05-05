import{_ as i,r as l,o,c,a as s,b as n,w as p,F as d,e,d as t}from"./app.9f6b8c0c.js";const u={},h=s("h1",{id:"request",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),e(" Request")],-1),b=s("p",null,"An HTTP request starts with a request line followed by optional header fields, message body, response handler, and previous response references.",-1),m=s("h2",{id:"request-line",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-line","aria-hidden":"true"},"#"),e(" Request-Line")],-1),g=e("A "),k={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.1",target:"_blank",rel:"noopener noreferrer"},v=e("request line"),_=e(" consists of a request method, target and the HTTP protocol version. If the request method is omitted, \u2018GET\u2019 will be used as a default. The HTTP protocol version can be also omitted."),q=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>

GET https://www.google.de
###
<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//www.google.de</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The HTTP version is optional. But in this guide I have always added it because of syntax highlighting</p></div><p>If the Http version is specified, this can be used to control the use of HTTP2</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># no version = http/1.1
GET https://www.google.de

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/2.0</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Allowed Requests Methods are:</p><table><thead><tr><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>GET</td><td>POST</td><td>PUT</td><td>DELETE</td><td>PATCH</td></tr><tr><td>OPTIONS</td><td>CONNECT</td><td>TRACE</td><td>PROPFIND</td><td>PROPPATCH</td></tr><tr><td>COPY</td><td>MOVE</td><td>LOCK</td><td>UNLOCK</td><td>CHECKOUT</td></tr><tr><td>REPORT</td><td>MERGE</td><td>MKACTIVITY</td><td>MKWORKSPACE</td><td>VERSION-CONTROL</td></tr></tbody></table><p>A request path can be added in the next line</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org
  /get
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="query-strings" tabindex="-1"><a class="header-anchor" href="#query-strings" aria-hidden="true">#</a> Query Strings</h2>`,9),y=e("A "),f={href:"https://datatracker.ietf.org/doc/html/rfc3986#section-3.4",target:"_blank",rel:"noopener noreferrer"},w=e("request query"),T=e(" may contain any unicode characters except line separators and the \u2018#\u2019 symbol."),x=t(`<p>@[code http](../../examples/request/queryString.http</p><p>It is also possible to split the query strings to different subsequent lines.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org/anything
  ?q=httpyac
  &amp;ie=UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h2>`,4),P=e("Each "),S={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.2",target:"_blank",rel:"noopener noreferrer"},C=e("header field"),I=e(" consists of a case-insensitive field name followed by a colon (\u2018:\u2019), optional leading whitespace, the field value, and optional trailing whitespace."),A=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer token</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>If you use the same headers several times, it is possible to store them in a variable and reuse them.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>{{+
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2>`,4),H={href:"https://www.npmjs.com/package/tough-cookie",target:"_blank",rel:"noopener noreferrer"},R=e("CookieJar"),Q=e(" support is enabled by default. All received "),M={href:"https://datatracker.ietf.org/doc/html/rfc6265#section-5.4",target:"_blank",rel:"noopener noreferrer"},j=e("Cookies"),E=e(", previously sent by the server with the Set-Cookie header are automatically sent back. It is possible to send own cookies to the server using cookie header."),G=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/cookies</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Cookie</span><span class="token punctuation">:</span> <span class="token header-value">bar=foo</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Cookies are only stored In-Memory and are cleared in VS Code with command <code>httpyac.reset</code></p></div><p>It is possible to disable cookie support per request.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @no-cookie-jar
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body" aria-hidden="true">#</a> Request Body</h2>`,5),D=e("The "),W={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.3",target:"_blank",rel:"noopener noreferrer"},O=e("request body"),B=e(" can be represented as a simple message or a mixed type message (multipart-form-data)."),L=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/x-www-form-urlencoded</span></span>

grant_type=client_credentials
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>The first content that is not recognized as a header or query string is interpreted as a request body. After that, no more header or query string can be specified.</p></div><h2 id="imported-request-body" tabindex="-1"><a class="header-anchor" href="#imported-request-body" aria-hidden="true">#</a> Imported Request Body</h2><p>A body can also be imported by using <code>&lt; ...</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt; ./requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If you want to replace variables in the file please import it with <code>&lt;@</code></p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=&quot;bar&quot;
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt;@ ./requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),N=e("All files are read with UTF-8 encoding. If a different encoding is desired, provide it. All "),z={href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",target:"_blank",rel:"noopener noreferrer"},U=e("encodings"),F=e(" supported by NodeJS are available."),K=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=&quot;bar&quot;
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt;@latin1 ./requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If the request body is configured in-place, whitespace around it will be trimmed. To send leading or trailing whitespace as part of the request body, send it from a separate file.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use Variable Substitution in file import.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@assetsDir=./
###

<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
&lt; <span class="token punctuation">{</span><span class="token punctuation">{</span>assetsDir<span class="token punctuation">}</span><span class="token punctuation">}</span>requestBodyImport.json
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="multipart-form-data" tabindex="-1"><a class="header-anchor" href="#multipart-form-data" aria-hidden="true">#</a> multipart/form-data</h2><p>It is possible to mix inline text with file imports</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="graphql" tabindex="-1"><a class="header-anchor" href="#graphql" aria-hidden="true">#</a> GraphQL</h2><p>GraphQL queries are supported. Parsing Logic will automatically generate a GraphQL request body from the query and the optional variables.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
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
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>GraphQL fragments are also supported and are included in the body by name.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>fragment RocketParts on LaunchRocket {
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
</span></code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>To import GraphQL File you need to use special GraphQL Import Directive.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">

gql launchesQuery &lt; ./graphql.gql

<span class="token punctuation">{</span>
    <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use Variable Substitution in file import.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@assetsDir=./
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">

gql launchesQuery &lt; <span class="token punctuation">{</span><span class="token punctuation">{</span>assetsDir<span class="token punctuation">}</span><span class="token punctuation">}</span>graphql.gql

<span class="token punctuation">{</span>
    <span class="token property">&quot;limit&quot;</span><span class="token operator">:</span> <span class="token number">10</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="request-separators" tabindex="-1"><a class="header-anchor" href="#request-separators" aria-hidden="true">#</a> Request Separators</h2><p>Multiple requests defined in a single file must be separated from each other with a request separator symbol. A separator may contain comments.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//httpbin.org/post</span></span>
### separator
<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//httpbin.org/post</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,19),V=e("Alternatively, the request can also be specified in "),J={href:"https://tools.ietf.org/html/rfc7230#section-3.1.1",target:"_blank",rel:"noopener noreferrer"},$=e("RFC 7230"),Y=e(" Request line format, which also triggers a separation."),X=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/post</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),Z=e("Using "),ee=s("code",null,"###",-1),se=e(" Regions without a request can be defined. These global regions are executed and interpreted for all requests within the file. This way "),ne=e("meta data"),ae=e(", "),te=e("variables"),re=e(" and "),pe=e("scripts"),le=e(" can be set for each request."),ie=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@host=https://httpbin.org
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h2><p>It is also possible to send gRPC requests. The same request line format is used as for Http requests, but <code>GRPC</code> must be specified as the request method.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Own ChannelCredentials can be set simply using header <code>channelCredentials</code>.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

{{@request
const grpc = require(&#39;@grpc/grpc-js&#39;);
request.headers.channelcredentials = grpc.ChannelCredentials.createSsl();
}}
GRPC grpcb.in:9001/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="protobuf-loader" tabindex="-1"><a class="header-anchor" href="#protobuf-loader" aria-hidden="true">#</a> Protobuf Loader</h3>`,7),oe=e("To use the gRPC call, the proto file associated with the call must first be loaded. This is loaded using "),ce={href:"https://www.npmjs.com/package/@grpc/proto-loader",target:"_blank",rel:"noopener noreferrer"},de=e("@grpc/proto-loader"),ue=e(". This can be configured using options in the header format"),he=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>The import of the proto file can also be done globally</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

###
GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}


GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;john&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>You can use Variable Substitution in file import and in proto-loader options.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@assetsDir=./

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
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>::: warn IncludeDirs of @grpc/proto-loader currently supports only absolute paths. :::</p><h3 id="unary-rpc" tabindex="-1"><a class="header-anchor" href="#unary-rpc" aria-hidden="true">#</a> Unary RPC</h3>`,7),be={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc",target:"_blank",rel:"noopener noreferrer"},me=e("Unary RPC"),ge=e(" behaves identically to Http requests. The url need to be in the following format"),ke=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GRPC {{server}}/{{service}}/{{method}}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2),ve=e("Using "),_e=e("header notation"),qe=e(" it is also possible to send meta data."),ye=e("Header "),fe=s("code",null,"ChannelCredentials",-1),we=e(" or "),Te=s("code",null,"Authorization",-1),xe=e("are special and defines the "),Pe={href:"https://grpc.io/docs/guides/auth/#nodejs",target:"_blank",rel:"noopener noreferrer"},Se=e("authentication"),Ce=e(" used by gRPC. If no such header is specified, "),Ie=s("code",null,"grpc.credentials.createInsecure()",-1),Ae=e(" is used automatically"),He=s("h3",{id:"server-streaming-rpc",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#server-streaming-rpc","aria-hidden":"true"},"#"),e(" Server Streaming RPC")],-1),Re={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Qe=e("Server Streaming RPC"),Me=e(" is similar to a unary RPC, except that the server returns a stream of messages in response to a client\u2019s request."),je=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/LotsOfReplies
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>All responses are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

# @noStreamingLog

GRPC grpcb.in:9000/hello.HelloService/LotsOfReplies
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="client-streaming-rpc" tabindex="-1"><a class="header-anchor" href="#client-streaming-rpc" aria-hidden="true">#</a> Client Streaming RPC</h3>`,4),Ee={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Ge=e("Client Streaming RPC"),De=e(" is similar to a unary RPC, except that the client sends a stream of messages to the server instead of a single message. To enable this, a custom script can be used that registers for the @streaming hook. This script must export a Promise at the end of which the client stream is terminated."),We=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To control the wait time more easily, a method <code>sleep</code> is provided that waits the number of milliseconds.</p></div><h3 id="bidirectional-streaming-rpc" tabindex="-1"><a class="header-anchor" href="#bidirectional-streaming-rpc" aria-hidden="true">#</a> Bidirectional Streaming RPC</h3>`,3),Oe={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Be=e("Bidirectional Streaming RPC"),Le=e(" is a combination of client streaming and server streaming."),Ne=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="server-sent-events-eventsource" tabindex="-1"><a class="header-anchor" href="#server-sent-events-eventsource" aria-hidden="true">#</a> Server-Sent Events / EventSource</h2>`,2),ze=e("By using method "),Ue=s("code",null,"SSE",-1),Fe=e(" an "),Ke={href:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource",target:"_blank",rel:"noopener noreferrer"},Ve=e("EventSource"),Je=e(" instance can be created. This opens a persistent connection to an HTTP server, which sends events in text/event-stream format. Adding the header "),$e=s("code",null,"event",-1),Ye=e(" the list of events to be output is specified"),Xe=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,1),Ze=e("The events of the server can be waited for by using "),es=e("streaming event"),ss=e(". As soon as this hook has been successfully processed, the connection is terminated."),ns=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to respond to events until manually aborted.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2>`,4),as=e("By using method "),ts=s("code",null,"WS",-1),rs=e(" a "),ps={href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",target:"_blank",rel:"noopener noreferrer"},ls=e("WebSocket connection"),is=e(" to a server can be opened. If a body is included in the request, it is sent immediately after the connection is established."),os=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
{&quot;foo&quot;: &quot;bar&quot;}

{{@streaming
  async function writeStream(){
    await sleep(10000);
    websocketClient.send(&#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),cs=e("The events of the server can be waited for by using "),ds=e("streaming event"),us=e(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),hs=s("code",null,"streaming",-1),bs=e(" block it is possible to send further message using "),ms={href:"https://www.npmjs.com/package/ws#sending-and-receiving-text-data",target:"_blank",rel:"noopener noreferrer"},gs=s("code",null,"websocketClient",-1),ks=e("."),vs=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
{&quot;foo&quot;: &quot;bar&quot;}

{{@streaming
  async function writeStream(){
    await sleep(10000);
    websocketClient.send(&#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to respond to events until manually aborted.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div>`,4),_s={class:"custom-container tip"},qs=s("p",{class:"custom-container-title"},"TIP",-1),ys=e("If special options are needed for initialization, they can be configured in a NodeJS script using "),fs={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L26",target:"_blank",rel:"noopener noreferrer"},ws=s("code",null,"request.options",-1),Ts=e("."),xs=s("h2",{id:"mqtt",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#mqtt","aria-hidden":"true"},"#"),e(" MQTT")],-1),Ps=e("By using method "),Ss=s("code",null,"MQTT",-1),Cs=e(" a MQTT Client can be created. "),Is={href:"https://github.com/mqttjs/MQTT.js",target:"_blank",rel:"noopener noreferrer"},As=e("MQTT.js"),Hs=e(" opens a TCP or WebSocket Connection to a MQTT Broker. The header "),Rs=s("code",null,"Topic",-1),Qs=e(" specifies the topic to be registered (multiple specification allowed)"),Ms=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If a body is specified, it will be published immediately after connecting.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

Hello, World

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the topic used for publishing is different from the topic used for replying, the headers <code>subscribe</code> and <code>publish</code> can be used instead.</p></div>`,4),js=e("The messages of the server can be waited for using "),Es=e("streaming event"),Gs=e(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),Ds=s("code",null,"streaming",-1),Ws=e(" block it is possible to publish further message using "),Os={href:"https://github.com/mqttjs/MQTT.js#publish",target:"_blank",rel:"noopener noreferrer"},Bs=s("code",null,"mqttClient",-1),Ls=e("."),Ns=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

{{@streaming
  async function writeStream(){
    await sleep(1000);
    mqttClient.publish(&#39;testtopic/1&#39;, &#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to respond to events until manually aborted.</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/2</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div>`,4),zs={href:"https://github.com/mqttjs/MQTT.js#qos",target:"_blank",rel:"noopener noreferrer"},Us=e("QoS"),Fs=e(", "),Ks={href:"https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options",target:"_blank",rel:"noopener noreferrer"},Vs=e("retain, username, password, keepAlive (10seconds default) and clean"),Js=e(" can be configured using header notation."),$s=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Qos</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">username</span><span class="token punctuation">:</span> <span class="token header-value">foo</span></span>
<span class="token header"><span class="token header-name keyword">password</span><span class="token punctuation">:</span> <span class="token header-value">bar</span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1),Ys={class:"custom-container tip"},Xs=s("p",{class:"custom-container-title"},"TIP",-1),Zs=e("If more options are needed for the initialization, they could be configured in a NodeJS script using "),en={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L36",target:"_blank",rel:"noopener noreferrer"},sn=s("code",null,"request.options",-1),nn=e("."),an=t(`<p>As long as the connection of the MQTT instance to the MessageQueue exists, messages can also be published from other NodeJS blocks.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

###
# @name test
{{
  mqttClient.publish(&#39;testtopic/1&#39;, &#39;hello johnny&#39;)
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="amqp-rabbitmq" tabindex="-1"><a class="header-anchor" href="#amqp-rabbitmq" aria-hidden="true">#</a> AMQP/ RabbitMQ</h2>`,3),tn=e("By using method "),rn=s("code",null,"AMQP",-1),pn=e(" a AMQP Client can be created. "),ln={href:"https://github.com/cloudamqp/amqp-client.js",target:"_blank",rel:"noopener noreferrer"},on=e("@cloudamqp/amqp-client"),cn=e(" opens a AMQP Connection to RabbitMQ Server. Following Methods can be used"),dn=t(`<h3 id="publish" tabindex="-1"><a class="header-anchor" href="#publish" aria-hidden="true">#</a> Publish</h3><p>Publish a new message to an exchange. Header <code>amqp_exchange</code> defines the used exchange. <code>amqp_routing_key</code> is optional and sets the used routing key</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">publish</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>

{
  &quot;test&quot;: &quot;{{$uuid}}&quot;
}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>A direct publish to a queue is available using <code>amqp_queue</code>.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>

{
  &quot;test&quot;: &quot;test&quot;
}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If no amqp_method header is present and a body is provided. publish is used as default</p></div><p>The following headers can also be defined</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_contentType</td><td>content type of body, eg. application/json</td></tr><tr><td>amqp_contentEncoding</td><td>content encoding of body, eg. gzip</td></tr><tr><td>amqp_delivery_mode</td><td>1 for transient messages, 2 for persistent messages</td></tr><tr><td>amqp_priority</td><td>between 0 and 255</td></tr><tr><td>amqp_correlation_id</td><td>for RPC requests</td></tr><tr><td>amqp_replyTo</td><td>for RPC requests</td></tr><tr><td>amqp_expiration</td><td>Message TTL, in milliseconds, as string</td></tr><tr><td>amqp_message_id</td><td>messageId</td></tr><tr><td>amqp_user_id</td><td>userId</td></tr><tr><td>amqp_type</td><td>type</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All other headers that do not start with <code>amqp_</code> are appended to the message as headers</p></div><h3 id="consume-subscribe" tabindex="-1"><a class="header-anchor" href="#consume-subscribe" aria-hidden="true">#</a> Consume/ Subscribe</h3>`,10),un=e("Consume messages from a queue. Messages will be delivered asynchronously. The messages of the server can be waited for by using "),hn=e("streaming event"),bn=e(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),mn=s("code",null,"streaming",-1),gn=e(" block it is possible to access additional methods of a "),kn={href:"https://cloudamqp.github.io/amqp-client.js/classes/AMQPChannel.html",target:"_blank",rel:"noopener noreferrer"},vn=e("AMQPChannel using "),_n=s("code",null,"amqpChannel",-1),qn=e("."),yn=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">consume</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Meta Data <code>keepStreaming</code> can be used to consume message until manually aborted.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If no amqp_method header is present and no body is provided. consume is used as default</p></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div><p>The following headers can also be defined</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_tag</td><td>tag of the consumer, will be server generated if left empty</td></tr><tr><td>amqp_no_ack</td><td>f messages are removed from the server upon delivery, or have to be acknowledged</td></tr><tr><td>amqp_exclusive</td><td>if this can be the only consumer of the queue, will return an Error if there are other consumers to the queue already</td></tr></tbody></table><h3 id="ack-nack-cancel" tabindex="-1"><a class="header-anchor" href="#ack-nack-cancel" aria-hidden="true">#</a> Ack/ Nack/ Cancel</h3><p>Consumed messages are not acked/ nacked automatically. If a message needs to get acked/ nacked automatically a manual ack/ nack needs to be called. You need to declare the same channelId (<code>amqp_channel_id</code>) and deliveryTag (<code>amqp_tag</code>) as the consumer.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">ack</span></span>
<span class="token header"><span class="token header-name keyword">amqp_channel_id</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">amqp_tag</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">nack</span></span>
<span class="token header"><span class="token header-name keyword">amqp_channel_id</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">amqp_tag</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">cancel</span></span>
<span class="token header"><span class="token header-name keyword">amqp_channel_id</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">amqp_tag</span><span class="token punctuation">:</span> <span class="token header-value">2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The following headers can also be defined</p><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_requeue</td><td>if the message should be requeued or removed</td></tr><tr><td>amqp_multiple</td><td>batch confirm all messages up to this delivery tag</td></tr></tbody></table><h3 id="purge" tabindex="-1"><a class="header-anchor" href="#purge" aria-hidden="true">#</a> Purge</h3><p>Purge all messages of a queue</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">purge</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="declare-exchange" tabindex="-1"><a class="header-anchor" href="#declare-exchange" aria-hidden="true">#</a> Declare exchange</h3><p>Declare a queue or exchange</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">declare</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">declare</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_passive</td><td>if the exchange name doesn&#39;t exists the channel will be closed with an error, fulfilled if the exchange name does exists</td></tr><tr><td>amqp_durable</td><td>if the exchange should survive server restarts</td></tr><tr><td>amqp_auto_delete</td><td>if the exchange should be deleted when the last binding from it is deleted</td></tr><tr><td>amqp_exclusive</td><td>if the queue should be deleted when the channel is closed</td></tr></tbody></table><h3 id="bind-unbind-queue-to-exchange" tabindex="-1"><a class="header-anchor" href="#bind-unbind-queue-to-exchange" aria-hidden="true">#</a> Bind/ Unbind queue to exchange</h3><p>Bind and unbind queue of a exchange</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">bind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">unbind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="bind-unbind-exchange-to-exchange" tabindex="-1"><a class="header-anchor" href="#bind-unbind-exchange-to-exchange" aria-hidden="true">#</a> Bind/ Unbind exchange to exchange</h3><p>Create or delete an Exchange to exchange binding</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">bind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange_destination</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange2</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">unbind</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
<span class="token header"><span class="token header-name keyword">amqp_routing_key</span><span class="token punctuation">:</span> <span class="token header-value">command.send</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> Delete</h3><p>Delete an exchange or queue</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">delete</span></span>
<span class="token header"><span class="token header-name keyword">amqp_exchange</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_exchange</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>AMQP amqp://guest:guest@localhost
<span class="token header"><span class="token header-name keyword">amqp_method</span><span class="token punctuation">:</span> <span class="token header-value">delete</span></span>
<span class="token header"><span class="token header-name keyword">amqp_queue</span><span class="token punctuation">:</span> <span class="token header-value">httpyac_queue</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><table><thead><tr><th>Header</th><th>Description</th></tr></thead><tbody><tr><td>amqp_if_unused</td><td>only delete if the exchange doesn&#39;t have any bindings</td></tr><tr><td>amqp_if_empty</td><td>only delete if the queue is empty</td></tr></tbody></table>`,35);function fn(wn,Tn){const a=l("ExternalLinkIcon"),r=l("RouterLink");return o(),c(d,null,[h,b,m,s("p",null,[g,s("a",k,[v,n(a)]),_]),q,s("p",null,[y,s("a",f,[w,n(a)]),T]),x,s("p",null,[P,s("a",S,[C,n(a)]),I]),A,s("p",null,[s("a",H,[R,n(a)]),Q,s("a",M,[j,n(a)]),E]),G,s("p",null,[D,s("a",W,[O,n(a)]),B]),L,s("p",null,[N,s("a",z,[U,n(a)]),F]),K,s("p",null,[V,s("a",J,[$,n(a)]),Y]),X,s("p",null,[Z,ee,se,n(r,{to:"/guide/metaData.html"},{default:p(()=>[ne]),_:1}),ae,n(r,{to:"/guide/variables.html"},{default:p(()=>[te]),_:1}),re,n(r,{to:"/guide/scripting.html"},{default:p(()=>[pe]),_:1}),le]),ie,s("p",null,[oe,s("a",ce,[de,n(a)]),ue]),he,s("p",null,[s("a",be,[me,n(a)]),ge]),ke,s("p",null,[ve,n(r,{to:"/guide/request.html#headers"},{default:p(()=>[_e]),_:1}),qe]),s("p",null,[ye,fe,we,Te,xe,s("a",Pe,[Se,n(a)]),Ce,Ie,Ae]),He,s("p",null,[s("a",Re,[Qe,n(a)]),Me]),je,s("p",null,[s("a",Ee,[Ge,n(a)]),De]),We,s("p",null,[s("a",Oe,[Be,n(a)]),Le]),Ne,s("p",null,[ze,Ue,Fe,s("a",Ke,[Ve,n(a)]),Je,$e,Ye]),Xe,s("p",null,[Ze,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[es]),_:1}),ss]),ns,s("p",null,[as,ts,rs,s("a",ps,[ls,n(a)]),is]),os,s("p",null,[cs,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[ds]),_:1}),us,hs,bs,s("a",ms,[gs,n(a)]),ks]),vs,s("div",_s,[qs,s("p",null,[ys,s("a",fs,[ws,n(a)]),Ts])]),xs,s("p",null,[Ps,Ss,Cs,s("a",Is,[As,n(a)]),Hs,Rs,Qs]),Ms,s("p",null,[js,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[Es]),_:1}),Gs,Ds,Ws,s("a",Os,[Bs,n(a)]),Ls]),Ns,s("p",null,[s("a",zs,[Us,n(a)]),Fs,s("a",Ks,[Vs,n(a)]),Js]),$s,s("div",Ys,[Xs,s("p",null,[Zs,s("a",en,[sn,n(a)]),nn])]),an,s("p",null,[tn,rn,pn,s("a",ln,[on,n(a)]),cn]),dn,s("p",null,[un,n(r,{to:"/guide/scripting.html#events"},{default:p(()=>[hn]),_:1}),bn,mn,gn,s("a",kn,[vn,_n,n(a)]),qn]),yn],64)}var Pn=i(u,[["render",fn],["__file","request.html.vue"]]);export{Pn as default};
