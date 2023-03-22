import{_ as s,c as a,o as n,N as o}from"./chunks/framework.a087d028.js";const A=JSON.parse('{"title":"Internationalization","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/i18n.md"}'),l={name:"en-US/i18n.md"},e=o(`<h1 id="internationalization" tabindex="-1">Internationalization <a class="header-anchor" href="#internationalization" aria-label="Permalink to &quot;Internationalization&quot;">​</a></h1><p>Currently, the chart has two built-in languages, <code>en-US</code> and <code>zh-CN</code>. The default language is <code>zh-CN</code>. If you need to use another language, you need to complete the language registration for the core chart and the language registration for the pro chart.</p><h2 id="language-register-for-core-chart" tabindex="-1">Language register for core chart <a class="header-anchor" href="#language-register-for-core-chart" aria-label="Permalink to &quot;Language register for core chart&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> klinecharts </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">klinecharts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// See https://klinecharts.com/en-US/guide/i18n.html</span></span>
<span class="line"><span style="color:#A6ACCD;">klinecharts</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerLocale</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">......</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><h2 id="language-register-for-pro" tabindex="-1">Language register for pro <a class="header-anchor" href="#language-register-for-pro" aria-label="Permalink to &quot;Language register for pro&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">loadLocales</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">klinecharts-pro</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// For specific keys, see https://github.com/klinecharts/pro/blob/main/src/i18n/zh-CN.json</span></span>
<span class="line"><span style="color:#82AAFF;">loadLocales</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">}\`</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">indicator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">main_indicator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">sub_indicator</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">xxx</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">......</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">......</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,6),p=[e];function t(r,c,i,D,y,F){return n(),a("div",null,p)}const h=s(l,[["render",t]]);export{A as __pageData,h as default};
