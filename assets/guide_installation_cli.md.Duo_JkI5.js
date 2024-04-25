import { _ as _export_sfc, c as createElementBlock, o as openBlock, a4 as createStaticVNode, a6 as _imports_0, a7 as _imports_1, a8 as _imports_2 } from "./chunks/framework.CL6Y9brc.js";
const __pageData = JSON.parse('{"title":"httpyac CLI","description":"","frontmatter":{},"headers":[],"relativePath":"guide/installation_cli.md","filePath":"guide/installation_cli.md"}'), _sfc_main = { name: "guide/installation_cli.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode(`<h1 id="httpyac-cli" tabindex="-1">httpyac CLI <a class="header-anchor" href="#httpyac-cli" aria-label="Permalink to &quot;httpyac CLI&quot;">​</a></h1><p>httpyac CLI provides a command line interface to execute *.http and *.rest files. This can be used to quickly execute a single *.http file, but also to execute all files in a folder.</p><p><a href="https://github.com/AnWeber/httpyac" target="_blank" rel="noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm3.163 21.783h-.093a.513.513 0 0 1-.382-.14.513.513 0 0 1-.14-.372v-1.406c.006-.467.01-.94.01-1.416a3.693 3.693 0 0 0-.151-1.028 1.832 1.832 0 0 0-.542-.875 8.014 8.014 0 0 0 2.038-.471 4.051 4.051 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.77 6.77 0 0 0 .3-2.13 4.138 4.138 0 0 0-.26-1.476 3.892 3.892 0 0 0-.795-1.284 2.81 2.81 0 0 0 .162-.582c.033-.2.05-.402.05-.604 0-.26-.03-.52-.09-.773a5.309 5.309 0 0 0-.221-.763.293.293 0 0 0-.111-.02h-.11c-.23.002-.456.04-.674.111a5.34 5.34 0 0 0-.703.26 6.503 6.503 0 0 0-.661.343c-.215.127-.405.249-.573.362a9.578 9.578 0 0 0-5.143 0 13.507 13.507 0 0 0-.572-.362 6.022 6.022 0 0 0-.672-.342 4.516 4.516 0 0 0-.705-.261 2.203 2.203 0 0 0-.662-.111h-.11a.29.29 0 0 0-.11.02 5.844 5.844 0 0 0-.23.763c-.054.254-.08.513-.081.773 0 .202.017.404.051.604.033.199.086.394.16.582A3.888 3.888 0 0 0 5.702 10a4.142 4.142 0 0 0-.263 1.476 6.871 6.871 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516.415.422.915.75 1.466.964.653.25 1.337.41 2.033.476a1.828 1.828 0 0 0-.452.633 2.99 2.99 0 0 0-.2.744 2.754 2.754 0 0 1-1.175.27 1.788 1.788 0 0 1-1.065-.3 2.904 2.904 0 0 1-.752-.824 3.1 3.1 0 0 0-.292-.382 2.693 2.693 0 0 0-.372-.343 1.841 1.841 0 0 0-.432-.24 1.2 1.2 0 0 0-.481-.101c-.04.001-.08.005-.12.01a.649.649 0 0 0-.162.02.408.408 0 0 0-.13.06.116.116 0 0 0-.06.1.33.33 0 0 0 .14.242c.093.074.17.131.232.171l.03.021c.133.103.261.214.382.333.112.098.213.209.3.33.09.119.168.246.231.381.073.134.15.288.231.463.188.474.522.875.954 1.145.453.243.961.364 1.476.351.174 0 .349-.01.522-.03.172-.028.343-.057.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0v.005z"></path></svg></a> <a href="https://www.npmjs.com/package/httpyac" target="_blank" rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="54px" height="21px" viewBox="0 0 18 7"><path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"></path><polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "></polygon><path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"></path><polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "></polygon></svg></a> <a href="https://open.vscode.dev/Anweber/httpyac" target="_blank" rel="noreferrer"><img src="https://img.shields.io/static/v1?logo=visualstudiocode&amp;label=&amp;message=Open%20in%20Visual%20Studio%20Code&amp;labelColor=2c2c32&amp;color=007acc&amp;logoColor=007acc" alt="Open in Visual Studio Code"></a></p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>httpyac can be easily downloaded from the <a href="https://www.npmjs.com/search?q=httpyac" target="_blank" rel="noreferrer">npm registry</a></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpyac</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpyac</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="upgrading" tabindex="-1">Upgrading <a class="header-anchor" href="#upgrading" aria-label="Permalink to &quot;Upgrading&quot;">​</a></h2><p>To upgrade the global httpyac package, you need to run:</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpyac</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># OR</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> global</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> upgrade</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpyac</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="arguments" tabindex="-1">Arguments <a class="header-anchor" href="#arguments" aria-label="Permalink to &quot;Arguments&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> httpyac --help</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpyac</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] [command]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">httpYac</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Quickly</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> easily</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> REST,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SOAP,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> GraphQL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gRPC</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -V,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    display</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Commands:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  oauth2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options]              generate oauth2 token</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fileName...</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  send/ execute http files</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  help</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [command]                display help </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> command</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> httpyac help send</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Usage:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> httpyac</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> send</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fileName...</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">send/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> execute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Arguments:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fileName</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  path</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glob</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pattern</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Options:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -a,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                 execute</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --bail</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    stops</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> case</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fails</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -e,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">env..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environments</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --filter</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">filte</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          filter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (only-failed)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --insecure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                allow</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> insecure</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connections</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> when</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> using</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --interactive</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          do</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> program</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> request,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> back</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> selection</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                    use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --junit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                   use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> junit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> output</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -l,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --line</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">lin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -n,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --no-color</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> color</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> support</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -o,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --output</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">outpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (short, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">body,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> headers,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> response,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exchange,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --output-failed</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">outpu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  output</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> format</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> failed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> response</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (short, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">body,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> headers,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> response,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> exchange,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> none</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --raw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                     prevent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> formatting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> response</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> body</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --quiet</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --repeat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">coun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          repeat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> count</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --repeat-mode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      repeat</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mode:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sequential,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parallel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (default)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --parallel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">coun</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        send</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parallel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -s,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --silent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">              log</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> only</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> request</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">timeou</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       maximum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allowed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connections</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  --var</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">variables..</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> variables</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -v,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --verbose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> operation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> talkative</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  -h,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                display</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="manual-selection" tabindex="-1">Manual Selection <a class="header-anchor" href="#manual-selection" aria-label="Permalink to &quot;Manual Selection&quot;">​</a></h2><p>When called without <code>--all</code> it is possible to specify a single request.</p><p><img src="` + _imports_0 + '" alt="execute one requests"></p><h2 id="execute-tests" tabindex="-1">Execute Tests <a class="header-anchor" href="#execute-tests" aria-label="Permalink to &quot;Execute Tests&quot;">​</a></h2><p>httpYac supports <a href="https://www.npmjs.com/package/globby" target="_blank" rel="noreferrer">globby</a> queries. This allows multiple files to be marked for execution at the same time.</p><p><img src="' + _imports_1 + '" alt="execute one requests"></p><h2 id="usage-in-ci-with-json-output" tabindex="-1">Usage in CI with JSON Output <a class="header-anchor" href="#usage-in-ci-with-json-output" aria-label="Permalink to &quot;Usage in CI with JSON Output&quot;">​</a></h2><p>It is possible to prevent all outputs and get a JSON object as result instead. The object corresponds to the following <a href="https://github.com/AnWeber/httpyac/blob/main/src/cli/send/jsonOutput.ts#L5-L34" target="_blank" rel="noreferrer">interface</a>.</p><p><img src="' + _imports_2 + '" alt="output json"></p>', 21), _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const installation_cli = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  installation_cli as default
};