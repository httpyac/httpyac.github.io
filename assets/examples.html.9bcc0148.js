import{_ as e,r as t,o as p,c as o,a as n,e as s,b as l,d as i}from"./app.c2eb04d6.js";const c={},r=n("h1",{id:"examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#examples","aria-hidden":"true"},"#"),s(" Examples")],-1),u={href:"https://github.com/httpyac/httpyac.github.io/tree/main/examples",target:"_blank",rel:"noopener noreferrer"},d=i(`<h2 id="arbeitsagentur-jobborse" tabindex="-1"><a class="header-anchor" href="#arbeitsagentur-jobborse" aria-hidden="true">#</a> Arbeitsagentur Jobbörse</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>@job_clientId=c003a37f-024f-462a-b36d-b001be4cd24a
@job_clientSecret=32a39620-32b3-4307-9aa1-511e3d7f48a8
@job_tokenEndpoint=https://api-con.arbeitsagentur.de/oauth/gettoken_cc
@job_useAuthorizationHeader=false

###

GET https://api-con.arbeitsagentur.de/prod/jobboerse/jobsuche-service/pc/v2/app/jobs?FCT.AKTUALITAET=100&amp;FCT.ANGEBOTSART=ARBEIT
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">oauth2 client_credentials job</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="argocd" tabindex="-1"><a class="header-anchor" href="#argocd" aria-hidden="true">#</a> ArgoCD</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>@host=http://argocd-server:8080
@app=testapp
@revision=master
@profile=dev

###
# @name session
POST {{host}}/argocd/api/v1/session
{
    &quot;username&quot;: &quot;admin&quot;,
    &quot;password&quot;: &quot;password&quot;
}

###
# get applications
# @ref session
GET {{host}}/argocd/api/v1/applications
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {{session.token}}</span></span>


###
# create application
# @ref session
POST {{host}}/argocd/api/v1/applications
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {{session.token}}</span></span>
{
    &quot;metadata&quot;: {
        &quot;name&quot;: &quot;{{app}}&quot;,
        &quot;namespace&quot;: &quot;argocd&quot;  
    },
    &quot;spec&quot;: {
        &quot;source&quot;: {
            &quot;repoURL&quot;: &quot;https://github.com/httpyac/argocd.git&quot;,
            &quot;path&quot;: &quot;argocd/{{app}}&quot;,
            &quot;targetRevision&quot;: &quot;{{revision}}&quot;,
            &quot;helm&quot;: {
                &quot;valueFiles&quot;: [&quot;values-{{profile}}.yaml&quot;,&quot;values.yaml&quot;]
            }
        },
        &quot;destination&quot;: {
            &quot;server&quot;: &quot;https://kubernetes.default.svc&quot;,
            &quot;namespace&quot;: &quot;argocd&quot;
        },
        &quot;project&quot;: &quot;default&quot;,
        &quot;syncPolicy&quot;: {
            &quot;automated&quot;:{}
        }
    }  
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="github-graphql" tabindex="-1"><a class="header-anchor" href="#github-graphql" aria-hidden="true">#</a> Github GraphQL</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>@git_api_key=???

###
fragment IOParts on Repository {
  description
  diskUsage
}

<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.github.com/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {{git_api_key}}</span></span>
<span class="token application-json">
query test($name<span class="token operator">:</span> String!<span class="token punctuation">,</span> $owner<span class="token operator">:</span> String!) <span class="token punctuation">{</span>
  repository(name<span class="token operator">:</span> $name<span class="token punctuation">,</span> owner<span class="token operator">:</span> $owner) <span class="token punctuation">{</span>
    name
    fullName<span class="token operator">:</span> nameWithOwner
    ...IOParts
    forkCount
    stargazers(first<span class="token operator">:</span> <span class="token number">5</span>) <span class="token punctuation">{</span>
        totalCount
        nodes <span class="token punctuation">{</span>
            login
            name
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    watchers <span class="token punctuation">{</span>
        totalCount
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;owner&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AnWeber&quot;</span>
<span class="token punctuation">}</span>


</span><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.github.com/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token header"><span class="token header-name keyword">Authorization</span><span class="token punctuation">:</span> <span class="token header-value">Bearer {{git_api_key}}</span></span>
<span class="token application-json">

gql foo &lt; ./graphql.gql

<span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-httpyac&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;owner&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AnWeber&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="grpcb-in" tabindex="-1"><a class="header-anchor" href="#grpcb-in" aria-hidden="true">#</a> gRPCb.in</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>proto &lt; ./hello.proto
proto &lt; ./grpcbin.proto
@host=grpcb.in:9000

###

GRPC /hello.HelloService/sayHello
{
  &quot;greeting&quot;: &quot;world&quot;
}

GRPC /hello.HelloService/LotsOfReplies
{
  &quot;greeting&quot;: &quot;world&quot;
}


GRPC /hello.HelloService/lotsOfGreetings
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

GRPC /hello.HelloService/BidiHello
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



###

GRPC /grpcbin.GRPCBin/SpecificError
{
  &quot;code&quot;: 4,
  &quot;reason&quot;: &quot;Meaning of life&quot;
}
GRPC /grpcbin.GRPCBin/RandomError
{
  &quot;fString&quot;: &quot;bar&quot;
}
GRPC /grpcbin.GRPCBin/HeadersUnary


GRPC /grpcbin.GRPCBin/NoResponseUnary
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="httpbin" tabindex="-1"><a class="header-anchor" href="#httpbin" aria-hidden="true">#</a> Httpbin</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="learn-webservices" tabindex="-1"><a class="header-anchor" href="#learn-webservices" aria-hidden="true">#</a> Learn Webservices</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>
<span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">http://www.learnwebservices.com/services/hello</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/xml</span></span>
<span class="token application-xml">
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Envelope</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>soapenv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://schemas.xmlsoap.org/soap/envelope/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Header</span> <span class="token punctuation">/&gt;</span></span> \\
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SayHello</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://learnwebservices.com/services/hello<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> \\
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloRequest</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Name</span><span class="token punctuation">&gt;</span></span>John Doe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Name</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>HelloRequest</span><span class="token punctuation">&gt;</span></span> \\
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SayHello</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">soapenv:</span>Envelope</span><span class="token punctuation">&gt;</span></span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spacex" tabindex="-1"><a class="header-anchor" href="#spacex" aria-hidden="true">#</a> SpaceX</h2><h3 id="rest-api" tabindex="-1"><a class="header-anchor" href="#rest-api" aria-hidden="true">#</a> Rest API</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>
@host=https://api.spacexdata.com/v4

###

<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/launches/latest</span> <span class="token http-version property">HTTP/1.1</span></span>


<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/capsules</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="graphql-api" tabindex="-1"><a class="header-anchor" href="#graphql-api" aria-hidden="true">#</a> GraphQL API</h3><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">POST</span> <span class="token request-target url">https://api.spacex.land/graphql</span> <span class="token http-version property">HTTP/1.1</span></span>
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
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spring-boot-actuator" tabindex="-1"><a class="header-anchor" href="#spring-boot-actuator" aria-hidden="true">#</a> Spring Boot Actuator</h2><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>@host=http://localhost:8080
###
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/info</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/env</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/health</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/health/liveness</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/conditions</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/scheduledtasks</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/threaddump</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/beans</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/metrics</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/configprops</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/httptrace</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/actuator/mappings</span> <span class="token http-version property">HTTP/1.1</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function v(k,m){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,n("p",null,[s("Here is just a short list of possible use cases. The source code can be found directly in the "),n("a",u,[s("Github repository"),l(a)])]),d])}const h=e(c,[["render",v],["__file","examples.html.vue"]]);export{h as default};
