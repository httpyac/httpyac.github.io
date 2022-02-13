import{r as p,o as r,c as i,a as n,b as e,w as c,F as l,d as t,e as s}from"./app.7b49943d.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},h=t(`<h1 id="configuration-reference" tabindex="-1"><a class="header-anchor" href="#configuration-reference" aria-hidden="true">#</a> Configuration Reference</h1><p>Basic settings for all requests, logging and general application behavior can be configured via application argument (CLI arguments or VS Code settings). It is also possible to store these centrally in the project root in an <code>httpyac.config.js</code> file, which is observed by both CLI and VS Code Extension.</p><h2 id="project-root" tabindex="-1"><a class="header-anchor" href="#project-root" aria-hidden="true">#</a> Project Root</h2><p>The project root directory is determined by finding closest directory depending on the current file with one of the following files:</p><ul><li><code>package.json</code></li><li><code>httpyac.config.js</code></li><li><code>.httpyac.js</code></li><li><code>.httpyac.json</code></li><li><code>env</code> directory</li></ul><p>If no suitable folder can be determined, the default settings are used.</p><h2 id="httpyac-config-js" tabindex="-1"><a class="header-anchor" href="#httpyac-config-js" aria-hidden="true">#</a> httpyac.config.js</h2><p><code>httpyac.config.js</code> (or <code>.httpyac.js</code>, <code>.httpyac.json</code>) is an optional config file that will be automatically loaded by httpYac if it&#39;s present in your project root (next to <code>package.json</code>). You can also use the <code>httpyac</code> field in <code>package.json</code>, but do note in that case you will be limited to JSON-compatible values only.</p><p>The file should export an object containing options:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// httpyac.config.js</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// options...</span>
  <span class="token literal-property property">log</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level</span><span class="token operator">:</span> models<span class="token punctuation">.</span>LogLevel<span class="token punctuation">.</span>warn<span class="token punctuation">,</span>
    <span class="token literal-property property">supportAnsiColors</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cookieJarEnabled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">envDirName</span><span class="token operator">:</span> <span class="token string">&#39;env&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,10),b=s("The content of the httpyac.config.js file should correspond to the "),k={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts",target:"_blank",rel:"noopener noreferrer"},m=s("interface "),f=n("code",null,"environmentConfig",-1),g=s("."),_=n("h3",{id:"log-level",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#log-level","aria-hidden":"true"},"#"),s(" log.level")],-1),y=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"number")]),n("li",null,[s("Default: "),n("code",null,"warn")])],-1),v={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/logHandler.ts#L4-L11",target:"_blank",rel:"noopener noreferrer"},j=s("log level"),q=s(" of outputs."),x=t(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">enum</span> LogLevel <span class="token punctuation">{</span>
  trace <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
  debug <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
  warn <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>
  info <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>
  error <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>
  none <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="log-supportansicolors" tabindex="-1"><a class="header-anchor" href="#log-supportansicolors" aria-hidden="true">#</a> log.supportAnsiColors</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul>`,3),w=s("enable ansi color support (using "),T={href:"https://github.com/chalk/chalk",target:"_blank",rel:"noopener noreferrer"},C=s("chalk"),L=s(")"),N=t('<h3 id="envdirname" tabindex="-1"><a class="header-anchor" href="#envdirname" aria-hidden="true">#</a> envDirName</h3><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;env&#39;</code></li></ul><p>relative or absolute path to env dir</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>A changed value is not used in the Project Root determination</p></div><h3 id="environments" tabindex="-1"><a class="header-anchor" href="#environments" aria-hidden="true">#</a> environments</h3><ul><li>Type: <code>object</code></li><li>Default: <code>undefined</code></li></ul>',6),D=s("This setting is used for environment detection using "),A=s("JSON"),I=s(". Each key of first level of the object is used as environment. Value of the Object is used as Variables."),E=n("h3",{id:"request",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),s(" request")],-1),H=n("ul",null,[n("li",null,[s("Type: "),n("code",null,"Object")]),n("li",null,[s("Default: "),n("code",null,"undefined")])],-1),O=s("default configuration for each http request. httpYac uses "),R={href:"https://github.com/sindresorhus/got",target:"_blank",rel:"noopener noreferrer"},V=s("got"),S=s(" as Http Request Library. "),W={href:"https://github.com/sindresorhus/got/blob/main/documentation/2-options.md",target:"_blank",rel:"noopener noreferrer"},B=s("Here"),J=s(" all options of "),U={href:"https://github.com/sindresorhus/got",target:"_blank",rel:"noopener noreferrer"},P=s("got"),Y=s(" are described."),z=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;https&quot;</span><span class="token operator">:</span>  <span class="token punctuation">{</span>
    <span class="token property">&quot;rejectUnauthorized&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This configuration is passed directly to <code>got</code> without further adjustment. No files are loaded and no variable substitution takes place.</p></div><h3 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> proxy</h3><ul><li>Type: <code>string</code></li><li>Default: <code>undefined</code></li></ul><p>Proxy url for which an HttpProxyAgent is created</p><h3 id="requestbodyinjectvariablesextensions" tabindex="-1"><a class="header-anchor" href="#requestbodyinjectvariablesextensions" aria-hidden="true">#</a> requestBodyInjectVariablesExtensions</h3><ul><li>Type: <code>Array&lt;String&gt;</code></li><li>Default: <code>undefined</code></li></ul><p>List of file extensions for which <a href="/guide/request/request-body">request body variable replacement</a> is always activated automatically</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>This setting was introduced because of better compatibility with Intellij. It is recommended to specify it explicitly per file, otherwise files will be loaded into memory unnecessarily.</p></div><h3 id="clientcertificates" tabindex="-1"><a class="header-anchor" href="#clientcertificates" aria-hidden="true">#</a> clientCertificates</h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul>`,11),F={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/clientCertifcateOptions.ts",target:"_blank",rel:"noopener noreferrer"},G=s("Object"),K=s(" with all client certificates. Each key is interpreted as host. When a call is made to this host, the certificate is automatically appended to the request."),M=t(`<div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;clientCertificates&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;localhost:8081&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/demo/Certificates/client.crt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/demo/Keys/client.key&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;example.com&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;cert&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/demo/Certificates/client.crt&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/Users/demo/Keys/client.key&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="defaultheaders" tabindex="-1"><a class="header-anchor" href="#defaultheaders" aria-hidden="true">#</a> defaultHeaders</h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul><p>Object with default headers used for every request.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;defaultHeaders&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;Authorization&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Bearer {{token}}&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="cookiejarenabled" tabindex="-1"><a class="header-anchor" href="#cookiejarenabled" aria-hidden="true">#</a> cookieJarEnabled</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Enable cookieJar support for every request</p><h3 id="configurehooks" tabindex="-1"><a class="header-anchor" href="#configurehooks" aria-hidden="true">#</a> configureHooks</h3><ul><li>Type: <code>Function</code></li></ul>`,10),Q=s("By means of the function "),X={href:"https://github.com/AnWeber/httpyac/blob/main/src/models/environmentConfig.ts#L35",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"configureHooks",-1),$=s(" the "),nn=s("plugin api"),sn=s(" can be accessed easily. So without creating a plugin, the same interface can be used to make further adjustments to httpYac."),en=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token function-variable function">configureHooks</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">api</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		api<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>responseLogging<span class="token punctuation">.</span><span class="token function">addHook</span><span class="token punctuation">(</span><span class="token string">&#39;removeSensitiveData&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">delete</span> response<span class="token punctuation">.</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">[</span><span class="token string">&#39;authorization&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3><ul><li>Type: <code>Object</code></li><li>Default: <code>undefined</code></li></ul><p>This is an object that doesn&#39;t go through any schema validation, so it can be used to pass arbitrary options to 3rd party plugins.</p>`,4);function an(tn,on){const a=p("ExternalLinkIcon"),o=p("RouterLink");return r(),i(l,null,[h,n("p",null,[b,n("a",k,[m,f,e(a)]),g]),_,y,n("p",null,[n("a",v,[j,e(a)]),q]),x,n("p",null,[w,n("a",T,[C,e(a)]),L]),N,n("p",null,[D,e(o,{to:"/guide/environments.html#json"},{default:c(()=>[A]),_:1}),I]),E,H,n("p",null,[O,n("a",R,[V,e(a)]),S,n("a",W,[B,e(a)]),J,n("a",U,[P,e(a)]),Y]),z,n("p",null,[n("a",F,[G,e(a)]),K]),M,n("p",null,[Q,n("a",X,[Z,e(a)]),$,e(o,{to:"/plugins/plugin-api/"},{default:c(()=>[nn]),_:1}),sn]),en],64)}var rn=u(d,[["render",an]]);export{rn as default};