import{r as t,o as i,c as o,a,b as r,w as p,F as l,d as n,e}from"./app.dadbde36.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";var d="/assets/parse_flow.3426f319.svg",u="/assets/send_flow.e379ca24.svg",h="/assets/execute_flow.7ea97810.svg";const g={},m=n(`<h1 id="plugin-development-guide" tabindex="-1"><a class="header-anchor" href="#plugin-development-guide" aria-hidden="true">#</a> Plugin Development Guide</h1><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><p>A httpYac plugin is an npm package that can add additional features to the project using httpYac. These features can include:</p><ul><li>provide additional environments</li><li>remove sensitive information from logging</li><li>provide additional variable substitution</li><li>add new parser logic and actions</li></ul><p>As an npm package, CLI plugin must have a <code>package.json</code> file. It&#39;s also recommended to have a plugin description in <code>README.md</code> to help others find your plugin on npm.</p><p>So, typical CLI plugin folder structure looks like the following:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500\u2500 README.md
\u251C\u2500\u2500 index.js      <span class="token comment"># service plugin</span>
\u251C\u2500\u2500 package.json
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="naming-and-discoverability" tabindex="-1"><a class="header-anchor" href="#naming-and-discoverability" aria-hidden="true">#</a> Naming and Discoverability</h2><p>For a plugin to be usable in a httpYac project, it must follow the name convention <code>httpyac-plugin-&lt;name&gt;</code> or <code>@scope/httpyac-plugin-&lt;name&gt;</code>. It allows your plugin to be:</p><ul><li>Discoverable by httpYac;</li><li>Discoverable by other developers via searching;</li></ul><div class="custom-container warning"><p class="custom-container-title">Warning</p><p>Make sure to name the plugin correctly, otherwise it will be impossible to find it with httpYac plugins search!</p></div><p>For better discoverability when a user searches for your plugin, put keywords describing your plugin in the <code>description</code> field of the plugin <code>package.json</code> file.</p><p>Example:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac-plugin-keystore&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.7.7&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;httpyac plugin to add keystore support to variables&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\`</p><h2 id="service-plugin" tabindex="-1"><a class="header-anchor" href="#service-plugin" aria-hidden="true">#</a> Service Plugin</h2><p>Service plugin serves for extending hooks on every httpyac execution.</p><p>Service plugins are loaded automatically when a Service instance is created - i.e. every time the <code>httpyac</code> command is invoked inside a project. It&#39;s located in the <code>index.js</code> file in httpyac plugin root folder.</p><p>A service plugin should export a function which receives one arguments:</p>`,19),v=e("A "),b=e("PluginAPI"),f=e(" instance"),k=n(`<p>The minimal required code in the service plugin file is the following:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="parsing-flowchart" tabindex="-1"><a class="header-anchor" href="#parsing-flowchart" aria-hidden="true">#</a> Parsing FlowChart</h2><p><img src="`+d+'" alt="parse flow"></p><h2 id="sending-flowchart" tabindex="-1"><a class="header-anchor" href="#sending-flowchart" aria-hidden="true">#</a> Sending FlowChart</h2><p><img src="'+u+'" alt="send flow"></p><h2 id="execute-http-region-flowchart" tabindex="-1"><a class="header-anchor" href="#execute-http-region-flowchart" aria-hidden="true">#</a> Execute Http Region FlowChart</h2><p><img src="'+h+'" alt="execute flow"></p>',8);function _(w,x){const s=t("RouterLink");return i(),o(l,null,[m,a("ul",null,[a("li",null,[v,r(s,{to:"/plugins/plugin-api.html"},{default:p(()=>[b]),_:1}),f])]),k],64)}var q=c(g,[["render",_]]);export{q as default};