import { _ as _export_sfc, o as openBlock, c as createElementBlock, Q as createStaticVNode } from "./chunks/framework.1082274c.js";
const __pageData = JSON.parse('{"title":"Examples","description":"","frontmatter":{},"headers":[],"relativePath":"guide/examples.md","filePath":"guide/examples.md"}'), _sfc_main = { name: "guide/examples.md" }, _hoisted_1 = /* @__PURE__ */ createStaticVNode(`<h1 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h1><p>Here is just a short list of possible use cases. The source code can be found directly in the <a href="https://github.com/httpyac/httpyac.github.io/tree/main/examples" target="_blank" rel="noreferrer">Github repository</a></p><h2 id="arbeitsagentur-jobborse" tabindex="-1">Arbeitsagentur Jobbörse <a class="header-anchor" href="#arbeitsagentur-jobborse" aria-label="Permalink to &quot;Arbeitsagentur Jobbörse&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">job_clientId=</span><span style="color:#9ECBFF;">c003a37f-024f-462a-b36d-b001be4cd24a</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">job_clientSecret=</span><span style="color:#9ECBFF;">32a39620-32b3-4307-9aa1-511e3d7f48a8</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">job_tokenEndpoint=</span><span style="color:#9ECBFF;">https://api-con.arbeitsagentur.de/oauth/gettoken_cc</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">job_useAuthorizationHeader=</span><span style="color:#9ECBFF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> https://api-con.arbeitsagentur.de/prod/jobboerse/jobsuche-service/pc/v2/app/jobs?FCT.AKTUALITAET=100&amp;FCT.ANGEBOTSART=ARBEIT</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">oauth2 client_credentials job</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">job_clientId=</span><span style="color:#032F62;">c003a37f-024f-462a-b36d-b001be4cd24a</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">job_clientSecret=</span><span style="color:#032F62;">32a39620-32b3-4307-9aa1-511e3d7f48a8</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">job_tokenEndpoint=</span><span style="color:#032F62;">https://api-con.arbeitsagentur.de/oauth/gettoken_cc</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">job_useAuthorizationHeader=</span><span style="color:#032F62;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> https://api-con.arbeitsagentur.de/prod/jobboerse/jobsuche-service/pc/v2/app/jobs?FCT.AKTUALITAET=100&amp;FCT.ANGEBOTSART=ARBEIT</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">oauth2 client_credentials job</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="argocd" tabindex="-1">ArgoCD <a class="header-anchor" href="#argocd" aria-label="Permalink to &quot;ArgoCD&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">host=</span><span style="color:#9ECBFF;">http://argocd-server:8080</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">app=</span><span style="color:#9ECBFF;">testapp</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">revision=</span><span style="color:#9ECBFF;">master</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">profile=</span><span style="color:#9ECBFF;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#6A737D;"># </span><span style="color:#B392F0;">@name</span><span style="color:#6A737D;"> </span><span style="color:#B392F0;">session</span></span>
<span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> {{host}}/argocd/api/v1/session</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;username&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;admin&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;password&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#6A737D;"># get applications</span></span>
<span class="line"><span style="color:#6A737D;"># @ref session</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> {{host}}/argocd/api/v1/applications</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Bearer {{session.token}}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#6A737D;"># create application</span></span>
<span class="line"><span style="color:#6A737D;"># @ref session</span></span>
<span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> {{host}}/argocd/api/v1/applications</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Bearer {{session.token}}</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;metadata&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;{{app}}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;namespace&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;argocd&quot;</span><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;spec&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;source&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;repoURL&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://github.com/httpyac/argocd.git&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;path&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;argocd/{{app}}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;targetRevision&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;{{revision}}&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;helm&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">                </span><span style="color:#79B8FF;">&quot;valueFiles&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;values-{{profile}}.yaml&quot;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&quot;values.yaml&quot;</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;destination&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;server&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://kubernetes.default.svc&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;namespace&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;argocd&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;project&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;default&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;syncPolicy&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;automated&quot;</span><span style="color:#E1E4E8;">:{}</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }  </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">host=</span><span style="color:#032F62;">http://argocd-server:8080</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">app=</span><span style="color:#032F62;">testapp</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">revision=</span><span style="color:#032F62;">master</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">profile=</span><span style="color:#032F62;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#6A737D;"># </span><span style="color:#6F42C1;">@name</span><span style="color:#6A737D;"> </span><span style="color:#6F42C1;">session</span></span>
<span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> {{host}}/argocd/api/v1/session</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;username&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;admin&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;password&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;password&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#6A737D;"># get applications</span></span>
<span class="line"><span style="color:#6A737D;"># @ref session</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> {{host}}/argocd/api/v1/applications</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Bearer {{session.token}}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#6A737D;"># create application</span></span>
<span class="line"><span style="color:#6A737D;"># @ref session</span></span>
<span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> {{host}}/argocd/api/v1/applications</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Bearer {{session.token}}</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;metadata&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;{{app}}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;namespace&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;argocd&quot;</span><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;spec&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;source&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;repoURL&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://github.com/httpyac/argocd.git&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;path&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;argocd/{{app}}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;targetRevision&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;{{revision}}&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;helm&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#005CC5;">&quot;valueFiles&quot;</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&quot;values-{{profile}}.yaml&quot;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&quot;values.yaml&quot;</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;destination&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;server&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://kubernetes.default.svc&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;namespace&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;argocd&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;project&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;default&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;syncPolicy&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;automated&quot;</span><span style="color:#24292E;">:{}</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }  </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><h2 id="github-graphql" tabindex="-1">Github GraphQL <a class="header-anchor" href="#github-graphql" aria-label="Permalink to &quot;Github GraphQL&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">git_api_key=</span><span style="color:#9ECBFF;">???</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#E1E4E8;">fragment IOParts on Repository {</span></span>
<span class="line"><span style="color:#E1E4E8;">  description</span></span>
<span class="line"><span style="color:#E1E4E8;">  diskUsage</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> https://api.github.com/graphql</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"><span style="color:#85E89D;">Authorization</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Bearer {{git_api_key}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">test</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$name</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">String</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">$owner</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">String</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">repository</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$name</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">owner</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$owner</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">fullName</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">nameWithOwner</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">...</span><span style="color:#FFAB70;">IOParts</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">forkCount</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">stargazers</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">first</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">totalCount</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">nodes</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">login</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#FFAB70;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">watchers</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#FFAB70;">totalCount</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">&quot;vscode-httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&quot;owner&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">&quot;AnWeber&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">POST</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">://</span><span style="color:#B392F0;">api</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">github</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">com</span><span style="color:#E1E4E8;">/</span><span style="color:#B392F0;">graphql</span></span>
<span class="line"><span style="color:#B392F0;">Content</span><span style="color:#E1E4E8;">-</span><span style="color:#B392F0;">Type</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">application</span><span style="color:#E1E4E8;">/</span><span style="color:#B392F0;">json</span></span>
<span class="line"><span style="color:#B392F0;">Authorization</span><span style="color:#E1E4E8;">: </span><span style="color:#B392F0;">Bearer</span><span style="color:#E1E4E8;"> {{</span><span style="color:#FFAB70;">git_api_key</span><span style="color:#E1E4E8;">}}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">gql</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">foo</span><span style="color:#E1E4E8;"> &lt; ./</span><span style="color:#B392F0;">graphql</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">gql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">&quot;vscode-httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&quot;owner&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;">&quot;AnWeber&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">git_api_key=</span><span style="color:#032F62;">???</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#24292E;">fragment IOParts on Repository {</span></span>
<span class="line"><span style="color:#24292E;">  description</span></span>
<span class="line"><span style="color:#24292E;">  diskUsage</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> https://api.github.com/graphql</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"><span style="color:#22863A;">Authorization</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Bearer {{git_api_key}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">query</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">test</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$name</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">String</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">, </span><span style="color:#E36209;">$owner</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">String</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">repository</span><span style="color:#24292E;">(</span><span style="color:#E36209;">name</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$name</span><span style="color:#24292E;">, </span><span style="color:#E36209;">owner</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$owner</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">fullName</span><span style="color:#24292E;">: </span><span style="color:#E36209;">nameWithOwner</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">...</span><span style="color:#E36209;">IOParts</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">forkCount</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">stargazers</span><span style="color:#24292E;">(</span><span style="color:#E36209;">first</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">totalCount</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">nodes</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">login</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#E36209;">name</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">watchers</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#E36209;">totalCount</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">&quot;vscode-httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&quot;owner&quot;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">&quot;AnWeber&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">POST</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">://</span><span style="color:#6F42C1;">api</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">github</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">com</span><span style="color:#24292E;">/</span><span style="color:#6F42C1;">graphql</span></span>
<span class="line"><span style="color:#6F42C1;">Content</span><span style="color:#24292E;">-</span><span style="color:#6F42C1;">Type</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">application</span><span style="color:#24292E;">/</span><span style="color:#6F42C1;">json</span></span>
<span class="line"><span style="color:#6F42C1;">Authorization</span><span style="color:#24292E;">: </span><span style="color:#6F42C1;">Bearer</span><span style="color:#24292E;"> {{</span><span style="color:#E36209;">git_api_key</span><span style="color:#24292E;">}}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">gql</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">foo</span><span style="color:#24292E;"> &lt; ./</span><span style="color:#6F42C1;">graphql</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">gql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">&quot;vscode-httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&quot;owner&quot;</span><span style="color:#24292E;">: </span><span style="color:#6A737D;">&quot;AnWeber&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h2 id="grpcb-in" tabindex="-1">gRPCb.in <a class="header-anchor" href="#grpcb-in" aria-label="Permalink to &quot;gRPCb.in&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">proto &lt; ./proto</span></span>
<span class="line"><span style="color:#E1E4E8;">proto &lt; ./grpcbin.proto</span></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">host=</span><span style="color:#9ECBFF;">grpc.postman-echo.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">GRPC /HelloService/sayHello</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;greeting&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">GRPC /HelloService/LotsOfReplies</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;greeting&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">GRPC /HelloService/lotsOfGreetings</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;greeting&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;world.&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#FDAEB7;font-style:italic;">{@streaming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">writeStream(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">sleep(1000);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">$requestClient.send({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">greeting</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;How</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">you?&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    await sleep(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    $requestClient.send({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">greeting</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;I</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">can</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">stream.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  exports.waitPromise = writeStream();</span></span>
<span class="line"><span style="color:#E1E4E8;">}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">GRPC /HelloService/BidiHello</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;greeting&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span><span style="color:#FDAEB7;font-style:italic;">{@streaming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FDAEB7;font-style:italic;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">writeStream(){</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">sleep(1000);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FDAEB7;font-style:italic;">$requestClient.send({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">greeting</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">how</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">are</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">you?&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">    await sleep(</span><span style="color:#79B8FF;">1000</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    $requestClient.send({</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FDAEB7;font-style:italic;">greeting</span><span style="color:#E1E4E8;">: </span><span style="color:#FDAEB7;font-style:italic;">&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#FDAEB7;font-style:italic;">I</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">can</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">stream.&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    });</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">  exports.waitPromise = writeStream();</span></span>
<span class="line"><span style="color:#E1E4E8;">}}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">proto &lt; ./proto</span></span>
<span class="line"><span style="color:#24292E;">proto &lt; ./grpcbin.proto</span></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">host=</span><span style="color:#032F62;">grpc.postman-echo.com/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">GRPC /HelloService/sayHello</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;greeting&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">GRPC /HelloService/LotsOfReplies</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;greeting&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">GRPC /HelloService/lotsOfGreetings</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;greeting&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;world.&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span><span style="color:#B31D28;font-style:italic;">{@streaming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">async</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">function</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">writeStream(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">await</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">sleep(1000);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">$requestClient.send({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">greeting</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;How</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">are</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">you?&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    await sleep(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    $requestClient.send({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">greeting</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;I</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">can</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">stream.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  exports.waitPromise = writeStream();</span></span>
<span class="line"><span style="color:#24292E;">}}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">GRPC /HelloService/BidiHello</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;greeting&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;world&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span><span style="color:#B31D28;font-style:italic;">{@streaming</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#B31D28;font-style:italic;">async</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">function</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">writeStream(){</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">await</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">sleep(1000);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#B31D28;font-style:italic;">$requestClient.send({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">greeting</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">how</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">are</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">you?&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">    await sleep(</span><span style="color:#005CC5;">1000</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    $requestClient.send({</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#B31D28;font-style:italic;">greeting</span><span style="color:#24292E;">: </span><span style="color:#B31D28;font-style:italic;">&#39;</span><span style="color:#24292E;">, </span><span style="color:#B31D28;font-style:italic;">I</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">can</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">stream.&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    });</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">  exports.waitPromise = writeStream();</span></span>
<span class="line"><span style="color:#24292E;">}}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="httpbin" tabindex="-1">Httpbin <a class="header-anchor" href="#httpbin" aria-label="Permalink to &quot;Httpbin&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">/*</span></span>
<span class="line"><span style="color:#6A737D;"># httpbin.org (0.9.2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&gt; [ Base URL: httpbin.org/ ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">A simple HTTP Request &amp; Response Service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">**Run locally:** \`$ docker run -p 80:80 kennethreitz/httpbin\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#FDAEB7;font-style:italic;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">developer</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">-</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">Website</span><span style="color:#E1E4E8;">](https:</span><span style="color:#6A737D;">//kennethreitz.org/)</span></span>
<span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#FDAEB7;font-style:italic;">Send</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">email</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">the</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">developer</span><span style="color:#E1E4E8;">](me@kennethreitz.org)</span></span>
<span class="line"><span style="color:#E1E4E8;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">## Http Methods</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">Testing different HTTP verbs</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">## Status Codes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">Generates responses with given status code</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">DELETE https:</span><span style="color:#6A737D;">//httpbin.org/delete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/</span><span style="color:#79B8FF;">1.1</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;"> - OK</span></span>
<span class="line"><span style="color:#E1E4E8;">date: Mon, </span><span style="color:#79B8FF;">21</span><span style="color:#E1E4E8;"> Jun </span><span style="color:#79B8FF;">2021</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">19</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">38</span><span style="color:#E1E4E8;">:</span><span style="color:#79B8FF;">00</span><span style="color:#E1E4E8;"> GMT</span></span>
<span class="line"><span style="color:#E1E4E8;">content-type: application/json</span></span>
<span class="line"><span style="color:#E1E4E8;">content-length: </span><span style="color:#79B8FF;">361</span></span>
<span class="line"><span style="color:#E1E4E8;">connection: close</span></span>
<span class="line"><span style="color:#E1E4E8;">server: gunicorn/</span><span style="color:#79B8FF;">19.9</span><span style="color:#E1E4E8;">.</span><span style="color:#79B8FF;">0</span></span>
<span class="line"><span style="color:#E1E4E8;">access-control-allow-origin: *</span></span>
<span class="line"><span style="color:#E1E4E8;">access-control-allow-credentials: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;form&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept-Encoding&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;gzip, deflate, br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpbin.org&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;User-Agent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Root=1-60d0ea98-6446cd5e7dfa0a805da95cad&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;json&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79.243.57.74&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://httpbin.org/delete&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> https://httpbin.org/get</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:05 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">295</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept-Encoding&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;gzip, deflate, br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpbin.org&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;User-Agent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Root=1-60d0ea9d-3dfb873f497a9e6d50b2eccc&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79.243.57.74&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">PATCH</span><span style="color:#E1E4E8;"> https://httpbin.org/patch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:07 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">388</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;form&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept-Encoding&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;gzip, deflate, br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Content-Length&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpbin.org&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;User-Agent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Root=1-60d0ea9f-7e49d0a404e13ce7386fb746&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;json&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79.243.57.74&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://httpbin.org/patch&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> https://httpbin.org/post</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:10 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">387</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;form&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept-Encoding&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;gzip, deflate, br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Content-Length&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpbin.org&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;User-Agent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Root=1-60d0eaa2-3379384b530308d96e9ade95&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;json&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79.243.57.74&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://httpbin.org/post&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">PUT</span><span style="color:#E1E4E8;"> https://httpbin.org/put</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:12 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">386</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;args&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;data&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;files&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;form&quot;</span><span style="color:#E1E4E8;">: {},</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;headers&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*/*&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Accept-Encoding&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;gzip, deflate, br&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Content-Length&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpbin.org&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;User-Agent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;httpyac&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Root=1-60d0eaa4-1a5b7a7507929e2d412e650a&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;json&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;origin&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;79.243.57.74&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://httpbin.org/put&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">DELETE</span><span style="color:#E1E4E8;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:15 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">0</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:18 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">0</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">PATCH</span><span style="color:#E1E4E8;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:24 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">0</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:22 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">0</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">PUT</span><span style="color:#E1E4E8;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#85E89D;">date</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">Mon, 21 Jun 2021 19:38:30 GMT</span></span>
<span class="line"><span style="color:#85E89D;">content-type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#85E89D;">content-length</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">0</span></span>
<span class="line"><span style="color:#85E89D;">connection</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">close</span></span>
<span class="line"><span style="color:#85E89D;">server</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-origin</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">*</span></span>
<span class="line"><span style="color:#85E89D;">access-control-allow-credentials</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">true</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#24292E;">/*</span></span>
<span class="line"><span style="color:#6A737D;"># httpbin.org (0.9.2)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&gt; [ Base URL: httpbin.org/ ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">A simple HTTP Request &amp; Response Service</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">**Run locally:** \`$ docker run -p 80:80 kennethreitz/httpbin\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#B31D28;font-style:italic;">the</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">developer</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">-</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">Website</span><span style="color:#24292E;">](https:</span><span style="color:#6A737D;">//kennethreitz.org/)</span></span>
<span class="line"><span style="color:#24292E;">[</span><span style="color:#B31D28;font-style:italic;">Send</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">email</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">to</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">the</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">developer</span><span style="color:#24292E;">](me@kennethreitz.org)</span></span>
<span class="line"><span style="color:#24292E;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">## Http Methods</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">Testing different HTTP verbs</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">/*</span></span>
<span class="line"><span style="color:#6A737D;">## Status Codes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">Generates responses with given status code</span></span>
<span class="line"><span style="color:#6A737D;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">DELETE https:</span><span style="color:#6A737D;">//httpbin.org/delete</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/</span><span style="color:#005CC5;">1.1</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;"> - OK</span></span>
<span class="line"><span style="color:#24292E;">date: Mon, </span><span style="color:#005CC5;">21</span><span style="color:#24292E;"> Jun </span><span style="color:#005CC5;">2021</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">19</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">38</span><span style="color:#24292E;">:</span><span style="color:#005CC5;">00</span><span style="color:#24292E;"> GMT</span></span>
<span class="line"><span style="color:#24292E;">content-type: application/json</span></span>
<span class="line"><span style="color:#24292E;">content-length: </span><span style="color:#005CC5;">361</span></span>
<span class="line"><span style="color:#24292E;">connection: close</span></span>
<span class="line"><span style="color:#24292E;">server: gunicorn/</span><span style="color:#005CC5;">19.9</span><span style="color:#24292E;">.</span><span style="color:#005CC5;">0</span></span>
<span class="line"><span style="color:#24292E;">access-control-allow-origin: *</span></span>
<span class="line"><span style="color:#24292E;">access-control-allow-credentials: </span><span style="color:#005CC5;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;form&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;headers&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept-Encoding&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;gzip, deflate, br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpbin.org&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;User-Agent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Root=1-60d0ea98-6446cd5e7dfa0a805da95cad&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;json&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79.243.57.74&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://httpbin.org/delete&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> https://httpbin.org/get</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:05 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">295</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;headers&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept-Encoding&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;gzip, deflate, br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpbin.org&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;User-Agent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Root=1-60d0ea9d-3dfb873f497a9e6d50b2eccc&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79.243.57.74&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://httpbin.org/get&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">PATCH</span><span style="color:#24292E;"> https://httpbin.org/patch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:07 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">388</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;form&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;headers&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept-Encoding&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;gzip, deflate, br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Content-Length&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpbin.org&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;User-Agent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Root=1-60d0ea9f-7e49d0a404e13ce7386fb746&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;json&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79.243.57.74&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://httpbin.org/patch&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> https://httpbin.org/post</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:10 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">387</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;form&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;headers&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept-Encoding&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;gzip, deflate, br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Content-Length&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpbin.org&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;User-Agent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Root=1-60d0eaa2-3379384b530308d96e9ade95&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;json&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79.243.57.74&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://httpbin.org/post&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">PUT</span><span style="color:#24292E;"> https://httpbin.org/put</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:12 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">386</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;args&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;data&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;files&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;form&quot;</span><span style="color:#24292E;">: {},</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;headers&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;*/*&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Accept-Encoding&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;gzip, deflate, br&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Content-Length&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpbin.org&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;User-Agent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;httpyac&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;X-Amzn-Trace-Id&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Root=1-60d0eaa4-1a5b7a7507929e2d412e650a&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;json&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">null</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;origin&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;79.243.57.74&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://httpbin.org/put&quot;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">DELETE</span><span style="color:#24292E;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:15 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">0</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:18 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">0</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">PATCH</span><span style="color:#24292E;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:24 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">0</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:22 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">0</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">PUT</span><span style="color:#24292E;"> https://httpbin.org/status/200</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">HTTP/1.1 200 - OK</span></span>
<span class="line"><span style="color:#22863A;">date</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">Mon, 21 Jun 2021 19:38:30 GMT</span></span>
<span class="line"><span style="color:#22863A;">content-type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">text/html; charset=utf-8</span></span>
<span class="line"><span style="color:#22863A;">content-length</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">0</span></span>
<span class="line"><span style="color:#22863A;">connection</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">close</span></span>
<span class="line"><span style="color:#22863A;">server</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">gunicorn/19.9.0</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-origin</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">*</span></span>
<span class="line"><span style="color:#22863A;">access-control-allow-credentials</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">true</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br></div></div><h2 id="learn-webservices" tabindex="-1">Learn Webservices <a class="header-anchor" href="#learn-webservices" aria-label="Permalink to &quot;Learn Webservices&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> https://apps.learnwebservices.com/services/hello</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">soapenv:Envelope</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns:soapenv</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">soapenv:Header</span><span style="color:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">soapenv:Body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       &lt;</span><span style="color:#85E89D;">HelloRequest</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">xmlns</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;http://learnwebservices.com/services/hello&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">Name</span><span style="color:#E1E4E8;">&gt;John Doe&lt;/</span><span style="color:#85E89D;">Name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">       &lt;/</span><span style="color:#85E89D;">HelloRequest</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;/</span><span style="color:#85E89D;">soapenv:Body</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">soapenv:Envelope</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> https://apps.learnwebservices.com/services/hello</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">soapenv:Envelope</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns:soapenv</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://schemas.xmlsoap.org/soap/envelope/&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">soapenv:Header</span><span style="color:#24292E;">/&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">soapenv:Body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">       &lt;</span><span style="color:#22863A;">HelloRequest</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">xmlns</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;http://learnwebservices.com/services/hello&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">Name</span><span style="color:#24292E;">&gt;John Doe&lt;/</span><span style="color:#22863A;">Name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">       &lt;/</span><span style="color:#22863A;">HelloRequest</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;/</span><span style="color:#22863A;">soapenv:Body</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">soapenv:Envelope</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="spacex" tabindex="-1">SpaceX <a class="header-anchor" href="#spacex" aria-label="Permalink to &quot;SpaceX&quot;">​</a></h2><h3 id="rest-api" tabindex="-1">Rest API <a class="header-anchor" href="#rest-api" aria-label="Permalink to &quot;Rest API&quot;">​</a></h3><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">host=</span><span style="color:#9ECBFF;">https://api.spacexdata.com/v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /launches/latest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /capsules</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">host=</span><span style="color:#032F62;">https://api.spacexdata.com/v4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /launches/latest</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /capsules</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="graphql-api" tabindex="-1">GraphQL API <a class="header-anchor" href="#graphql-api" aria-label="Permalink to &quot;GraphQL API&quot;">​</a></h3><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">POST</span><span style="color:#E1E4E8;"> https://api.spacex.land/graphql</span></span>
<span class="line"><span style="color:#85E89D;">Content-Type</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">application/json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">query</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">launchesQuery</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">$limit</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">Int</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">){</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">launchesPast</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">limit</span><span style="color:#E1E4E8;">: </span><span style="color:#FFAB70;">$limit</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">mission_name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">launch_date_local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">launch_site</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">site_name_long</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">rocket</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">rocket_name</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">rocket_type</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">ships</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">name</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">home_port</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#FFAB70;">image</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&quot;limit&quot;</span><span style="color:#E1E4E8;">: 10</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">POST</span><span style="color:#24292E;"> https://api.spacex.land/graphql</span></span>
<span class="line"><span style="color:#22863A;">Content-Type</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">application/json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">query</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">launchesQuery</span><span style="color:#24292E;">(</span><span style="color:#E36209;">$limit</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">Int</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">){</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">launchesPast</span><span style="color:#24292E;">(</span><span style="color:#E36209;">limit</span><span style="color:#24292E;">: </span><span style="color:#E36209;">$limit</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">mission_name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">launch_date_local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">launch_site</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">site_name_long</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">rocket</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">rocket_name</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">rocket_type</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">ships</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">name</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">home_port</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#E36209;">image</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&quot;limit&quot;</span><span style="color:#24292E;">: 10</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="spring-boot-actuator" tabindex="-1">Spring Boot Actuator <a class="header-anchor" href="#spring-boot-actuator" aria-label="Permalink to &quot;Spring Boot Actuator&quot;">​</a></h2><div class="language-http vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">http</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">@</span><span style="color:#E1E4E8;">host=</span><span style="color:#9ECBFF;">http://localhost:8080</span></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/info</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/env</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/health</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/health/liveness</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/conditions</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/scheduledtasks</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/threaddump</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/beans</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/metrics</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/configprops</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/httptrace</span></span>
<span class="line"><span style="color:#F97583;">GET</span><span style="color:#E1E4E8;"> /actuator/mappings</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">@</span><span style="color:#24292E;">host=</span><span style="color:#032F62;">http://localhost:8080</span></span>
<span class="line"><span style="color:#6A737D;">###</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/info</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/env</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/health</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/health/liveness</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/conditions</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/scheduledtasks</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/threaddump</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/beans</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/metrics</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/configprops</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/httptrace</span></span>
<span class="line"><span style="color:#D73A49;">GET</span><span style="color:#24292E;"> /actuator/mappings</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`, 21), _hoisted_22 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_22);
}
const examples = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  examples as default
};
