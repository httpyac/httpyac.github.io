import{r as l,o,c as i,a as n,b as e,w as p,F as c,e as s,d as t}from"./app.5ea7b5dc.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const u={},b=n("h1",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),s(" Request")],-1),h=n("p",null,"An HTTP request starts with a request line followed by optional header fields, message body, response handler, and previous response references.",-1),m=n("h2",{id:"request-line",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request-line","aria-hidden":"true"},"#"),s(" Request-Line")],-1),g=s("A "),v={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.1.1",target:"_blank",rel:"noopener noreferrer"},k=s("request line"),_=s(" consists of a request method, target and the HTTP protocol version. If the request method is omitted, \u2018GET\u2019 will be used as a default. The HTTP protocol version can be also omitted."),f=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>

GET https://www.google.de
###
<span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//www.google.de</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The HTTP version is optional. But in this guide I have always added it because of syntax highlighting</p></div><p>If the Http version is specified, this can be used to control the use of HTTP2</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># no version = http/1.1
GET https://www.google.de

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/2.0</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Allowed Requests Methods are:</p><table><thead><tr><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody><tr><td>GET</td><td>POST</td><td>PUT</td><td>DELETE</td><td>PATCH</td></tr><tr><td>OPTIONS</td><td>CONNECT</td><td>TRACE</td><td>PROPFIND</td><td>PROPPATCH</td></tr><tr><td>COPY</td><td>MOVE</td><td>LOCK</td><td>UNLOCK</td><td>CHECKOUT</td></tr><tr><td>REPORT</td><td>MERGE</td><td>MKACTIVITY</td><td>MKWORKSPACE</td><td>VERSION-CONTROL</td></tr></tbody></table><p>A request path can be added in the next line</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org
  /get
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="query-strings" tabindex="-1"><a class="header-anchor" href="#query-strings" aria-hidden="true">#</a> Query Strings</h2>`,9),y=s("A "),q={href:"https://datatracker.ietf.org/doc/html/rfc3986#section-3.4",target:"_blank",rel:"noopener noreferrer"},T=s("request query"),w=s(" may contain any unicode characters except line separators and the \u2018#\u2019 symbol."),x=t(`<p>@[code http](../../examples/request/queryString.http</p><p>It is also possible to split the query strings to different subsequent lines.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>GET https://httpbin.org/anything
  ?q=httpyac
  &amp;ie=UTF-8
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="headers" tabindex="-1"><a class="header-anchor" href="#headers" aria-hidden="true">#</a> Headers</h2>`,4),P=s("Each "),S={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.2",target:"_blank",rel:"noopener noreferrer"},C=s("header field"),I=s(" consists of a case-insensitive field name followed by a colon (\u2018:\u2019), optional leading whitespace, the field value, and optional trailing whitespace."),H=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
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
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h2>`,4),R={href:"https://www.npmjs.com/package/tough-cookie",target:"_blank",rel:"noopener noreferrer"},j=s("CookieJar"),E=s(" support is enabled by default. All received "),A={href:"https://datatracker.ietf.org/doc/html/rfc6265#section-5.4",target:"_blank",rel:"noopener noreferrer"},G=s("Cookies"),Q=s(", previously sent by the server with the Set-Cookie header are automatically sent back. It is possible to send own cookies to the server using cookie header."),M=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://httpbin.org/cookies</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Cookie</span><span class="token punctuation">:</span> <span class="token header-value">bar=foo</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Cookies are only stored In-Memory and are cleared in VS Code with command <code>httpyac.reset</code></p></div><p>It is possible to disable cookie support per request.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @no-cookie-jar
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">https://www.google.de</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="request-body" tabindex="-1"><a class="header-anchor" href="#request-body" aria-hidden="true">#</a> Request Body</h2>`,5),W=s("The "),O={href:"https://datatracker.ietf.org/doc/html/rfc7230#section-3.3",target:"_blank",rel:"noopener noreferrer"},L=s("request body"),B=s(" can be represented as a simple message or a mixed type message (multipart-form-data)."),N=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://httpbin.org/anything</span> <span class="token http-version property">HTTP/1.1</span></span>
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
</span></code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,7),D=s("All files are read with UTF-8 encoding. If a different encoding is desired, provide it. All "),z={href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings",target:"_blank",rel:"noopener noreferrer"},U=s("encodings"),F=s(" supported by NodeJS are available."),K=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@foo=&quot;bar&quot;
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,1),Z=s("Using "),ss=n("code",null,"###",-1),ns=s(" Regions without a request can be defined. These global regions are executed and interpreted for all requests within the file. This way "),es=s("meta data"),as=s(", "),ts=s("variables"),rs=s(" and "),ps=s("scripts"),ls=s(" can be set for each request."),os=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>@host=https://httpbin.org
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/post</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="grpc" tabindex="-1"><a class="header-anchor" href="#grpc" aria-hidden="true">#</a> gRPC</h2><p>It is also possible to send gRPC requests. The same request line format is used as for Http requests, but <code>GRPC</code> must be specified as the request method.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="protobuf-loader" tabindex="-1"><a class="header-anchor" href="#protobuf-loader" aria-hidden="true">#</a> Protobuf Loader</h3>`,5),is=s("To use the gRPC call, the proto file associated with the call must first be loaded. This is loaded using "),cs={href:"https://www.npmjs.com/package/@grpc/proto-loader",target:"_blank",rel:"noopener noreferrer"},ds=s("@grpc/proto-loader"),us=s(". This can be configured using options in the header format"),bs=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
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
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>::: warn IncludeDirs of @grpc/proto-loader currently supports only absolute paths. :::</p><h3 id="unary-rpc" tabindex="-1"><a class="header-anchor" href="#unary-rpc" aria-hidden="true">#</a> Unary RPC</h3>`,7),hs={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc",target:"_blank",rel:"noopener noreferrer"},ms=s("Unary RPC"),gs=s(" behaves identically to Http requests. The url need to be in the following format"),vs=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GRPC {{server}}/{{service}}/{{method}}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

GRPC grpcb.in:9000/hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,2),ks=s("Using "),_s=s("header notation"),fs=s(" it is also possible to send meta data."),ys=s("Header "),qs=n("code",null,"ChannelCredentials",-1),Ts=s(" or "),ws=n("code",null,"Authorization",-1),xs=s("are special and defines the "),Ps={href:"https://grpc.io/docs/guides/auth/#nodejs",target:"_blank",rel:"noopener noreferrer"},Ss=s("authentication"),Cs=s(" used by gRPC. If no such header is specified, "),Is=n("code",null,"grpc.credentials.createInsecure()",-1),Hs=s(" is used automatically"),Rs=n("h3",{id:"server-streaming-rpc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#server-streaming-rpc","aria-hidden":"true"},"#"),s(" Server Streaming RPC")],-1),js={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Es=s("Server Streaming RPC"),As=s(" is similar to a unary RPC, except that the server returns a stream of messages in response to a client\u2019s request."),Gs=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto

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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="client-streaming-rpc" tabindex="-1"><a class="header-anchor" href="#client-streaming-rpc" aria-hidden="true">#</a> Client Streaming RPC</h3>`,4),Qs={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#client-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Ms=s("Client Streaming RPC"),Ws=s(" is similar to a unary RPC, except that the client sends a stream of messages to the server instead of a single message. To enable this, a custom script can be used that registers for the @streaming hook. This script must export a Promise at the end of which the client stream is terminated."),Os=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To control the wait time more easily, a method <code>sleep</code> is provided that waits the number of milliseconds.</p></div><h3 id="bidirectional-streaming-rpc" tabindex="-1"><a class="header-anchor" href="#bidirectional-streaming-rpc" aria-hidden="true">#</a> Bidirectional Streaming RPC</h3>`,3),Ls={href:"https://grpc.io/docs/what-is-grpc/core-concepts/#bidirectional-streaming-rpc",target:"_blank",rel:"noopener noreferrer"},Bs=s("Bidirectional Streaming RPC"),Ns=s(" is a combination of client streaming and server streaming."),Ds=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>proto &lt; ./hello.proto
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="server-sent-events-eventsource" tabindex="-1"><a class="header-anchor" href="#server-sent-events-eventsource" aria-hidden="true">#</a> Server-Sent Events / EventSource</h2>`,2),zs=s("By means of the method "),Us=n("code",null,"SSE",-1),Fs=s(" an "),Ks={href:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource",target:"_blank",rel:"noopener noreferrer"},Vs=s("EventSource"),Js=s(" instance can be created. This opens a persistent connection to an HTTP server, which sends events in text/event-stream format. By means of the header "),$s=n("code",null,"event",-1),Ys=s(" the list of events to be output is specified"),Xs=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>SSE https://express-eventsource.herokuapp.com/events
<span class="token header"><span class="token header-name keyword">Event</span><span class="token punctuation">:</span> <span class="token header-value">data</span></span>

{{@streaming
  async function writeStream(){
    await sleep(10000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,1),Zs=s("The events of the server can be waited for by means of "),sn=s("streaming event"),nn=s(". As soon as this hook has been successfully processed, the connection is terminated."),en=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>SSE https://express-eventsource.herokuapp.com/events
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
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket" aria-hidden="true">#</a> WebSocket</h2>`,4),an=s("By means of the method "),tn=n("code",null,"WS",-1),rn=s(" a "),pn={href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket",target:"_blank",rel:"noopener noreferrer"},ln=s("WebSocket connection"),on=s(" to a server can be opened. If a body is included in the request, it is sent immediately after the connection is established."),cn=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
{&quot;foo&quot;: &quot;bar&quot;}

{{@streaming
  async function writeStream(){
    await sleep(10000);
    websocketClient.send(&#39;Hello World&#39;);
    await sleep(1000);
  }
  exports.waitPromise = writeStream();
}}
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,1),dn=s("The events of the server can be waited for by means of "),un=s("streaming event"),bn=s(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),hn=n("code",null,"streaming",-1),mn=s(" block it is possible to send further message using "),gn={href:"https://www.npmjs.com/package/ws#sending-and-receiving-text-data",target:"_blank",rel:"noopener noreferrer"},vn=n("code",null,"websocketClient",-1),kn=s("."),_n=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>WS wss://demo.piesocket.com/v3/channel_1?api_key=oCdCMcMPQpbvNjUIzqtvF1d2X2okWpDQj4AwARJuAgtjhzKxVEjQU6IdCjwm&amp;notify_self
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
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div>`,4),fn={class:"custom-container tip"},yn=n("p",{class:"custom-container-title"},"TIP",-1),qn=s("If special options are needed for initialization, they can be configured in a NodeJS script using "),Tn={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L26",target:"_blank",rel:"noopener noreferrer"},wn=n("code",null,"request.options",-1),xn=s("."),Pn=n("h2",{id:"mqtt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mqtt","aria-hidden":"true"},"#"),s(" MQTT")],-1),Sn=s("By means of the method "),Cn=n("code",null,"MQTT",-1),In=s(" a MQTT Client can be created. "),Hn={href:"https://github.com/mqttjs/MQTT.js",target:"_blank",rel:"noopener noreferrer"},Rn=s("MQTT.js"),jn=s(" opens a TCP or WebSocket Connection to a MQTT Broker. The header "),En=n("code",null,"Topic",-1),An=s(" specifies the topic to be registered (multiple specification allowed)"),Gn=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/2</span></span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If a body is specified, it will be published immediately after connecting.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

Hello, World

</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the topic used for publishing is different from the topic used for replying, the headers <code>subscribe</code> and <code>publish</code> can be used instead.</p></div>`,4),Qn=s("The messages of the server can be waited for by means of "),Mn=s("streaming event"),Wn=s(". As soon as this hook has been successfully processed, the connection is terminated. Within the "),On=n("code",null,"streaming",-1),Ln=s(" block it is possible to publish further message using "),Bn={href:"https://github.com/mqttjs/MQTT.js#publish",target:"_blank",rel:"noopener noreferrer"},Nn=n("code",null,"mqttClient",-1),Dn=s("."),zn=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code>MQTT tcp://broker.hivemq.com
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
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>All received messages are output as an intermediate result and summarized at the end as one overall response. If the intermediate results are not needed, they can be deactivated using <code># @noStreamingLog</code>.</p></div>`,4),Un={href:"https://github.com/mqttjs/MQTT.js#qos",target:"_blank",rel:"noopener noreferrer"},Fn=s("QoS"),Kn=s(", "),Vn={href:"https://github.com/mqttjs/MQTT.js#mqttclientstreambuilder-options",target:"_blank",rel:"noopener noreferrer"},Jn=s("retain, username, password, keepAlive (10seconds default) and clean"),$n=s(" can be configured using header notation."),Yn=t(`<div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>
<span class="token header"><span class="token header-name keyword">Qos</span><span class="token punctuation">:</span> <span class="token header-value">1</span></span>
<span class="token header"><span class="token header-name keyword">username</span><span class="token punctuation">:</span> <span class="token header-value">foo</span></span>
<span class="token header"><span class="token header-name keyword">password</span><span class="token punctuation">:</span> <span class="token header-value">bar</span></span>
</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,1),Xn={class:"custom-container tip"},Zn=n("p",{class:"custom-container-title"},"TIP",-1),se=s("If more options are needed for the initialization, they could be configured in a NodeJS script using "),ne={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/httpRequest.ts#L36",target:"_blank",rel:"noopener noreferrer"},ee=n("code",null,"request.options",-1),ae=s("."),te=t(`<p>As long as the connection of the MQTT instance to the MessageQueue exists, messages can also be published from other NodeJS blocks.</p><div class="language-http ext-http line-numbers-mode"><pre class="language-http"><code># @keepStreaming
MQTT tcp://broker.hivemq.com
<span class="token header"><span class="token header-name keyword">Topic</span><span class="token punctuation">:</span> <span class="token header-value">testtopic/1</span></span>

###
# @name test
{{
  mqttClient.publish(&#39;testtopic/1&#39;, &#39;hello johnny&#39;)
}}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,2);function re(pe,le){const a=l("ExternalLinkIcon"),r=l("RouterLink");return o(),i(c,null,[b,h,m,n("p",null,[g,n("a",v,[k,e(a)]),_]),f,n("p",null,[y,n("a",q,[T,e(a)]),w]),x,n("p",null,[P,n("a",S,[C,e(a)]),I]),H,n("p",null,[n("a",R,[j,e(a)]),E,n("a",A,[G,e(a)]),Q]),M,n("p",null,[W,n("a",O,[L,e(a)]),B]),N,n("p",null,[D,n("a",z,[U,e(a)]),F]),K,n("p",null,[V,n("a",J,[$,e(a)]),Y]),X,n("p",null,[Z,ss,ns,e(r,{to:"/guide/metaData.html"},{default:p(()=>[es]),_:1}),as,e(r,{to:"/guide/variables.html"},{default:p(()=>[ts]),_:1}),rs,e(r,{to:"/guide/scripting.html"},{default:p(()=>[ps]),_:1}),ls]),os,n("p",null,[is,n("a",cs,[ds,e(a)]),us]),bs,n("p",null,[n("a",hs,[ms,e(a)]),gs]),vs,n("p",null,[ks,e(r,{to:"/guide/request.html#headers"},{default:p(()=>[_s]),_:1}),fs]),n("p",null,[ys,qs,Ts,ws,xs,n("a",Ps,[Ss,e(a)]),Cs,Is,Hs]),Rs,n("p",null,[n("a",js,[Es,e(a)]),As]),Gs,n("p",null,[n("a",Qs,[Ms,e(a)]),Ws]),Os,n("p",null,[n("a",Ls,[Bs,e(a)]),Ns]),Ds,n("p",null,[zs,Us,Fs,n("a",Ks,[Vs,e(a)]),Js,$s,Ys]),Xs,n("p",null,[Zs,e(r,{to:"/guide/scripting.html#events"},{default:p(()=>[sn]),_:1}),nn]),en,n("p",null,[an,tn,rn,n("a",pn,[ln,e(a)]),on]),cn,n("p",null,[dn,e(r,{to:"/guide/scripting.html#events"},{default:p(()=>[un]),_:1}),bn,hn,mn,n("a",gn,[vn,e(a)]),kn]),_n,n("div",fn,[yn,n("p",null,[qn,n("a",Tn,[wn,e(a)]),xn])]),Pn,n("p",null,[Sn,Cn,In,n("a",Hn,[Rn,e(a)]),jn,En,An]),Gn,n("p",null,[Qn,e(r,{to:"/guide/scripting.html#events"},{default:p(()=>[Mn]),_:1}),Wn,On,Ln,n("a",Bn,[Nn,e(a)]),Dn]),zn,n("p",null,[n("a",Un,[Fn,e(a)]),Kn,n("a",Vn,[Jn,e(a)]),$n]),Yn,n("div",Xn,[Zn,n("p",null,[se,n("a",ne,[ee,e(a)]),ae])]),te],64)}var ce=d(u,[["render",re]]);export{ce as default};
