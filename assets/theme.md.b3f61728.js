import{_ as s,c as a,o as n,N as o}from"./chunks/framework.a087d028.js";const i=JSON.parse('{"title":"主题定制","description":"","frontmatter":{},"headers":[],"relativePath":"theme.md"}'),l={name:"theme.md"},p=o(`<h1 id="主题定制" tabindex="-1">主题定制 <a class="header-anchor" href="#主题定制" aria-label="Permalink to &quot;主题定制&quot;">​</a></h1><p>图表内置了<code>dark</code>和<code>light</code>两种主题，默认是<code>light</code>。如果需要定制其它主题，需要完成核心图表的样式定制和css的定制。</p><h2 id="核心图表的定制" tabindex="-1">核心图表的定制 <a class="header-anchor" href="#核心图表的定制" aria-label="Permalink to &quot;核心图表的定制&quot;">​</a></h2><p>通过api <code>setStyles(styles)</code>设置。</p><h2 id="css相关样式" tabindex="-1">css相关样式 <a class="header-anchor" href="#css相关样式" aria-label="Permalink to &quot;css相关样式&quot;">​</a></h2><p>css样式采用css变量控制颜色，具体如下，</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">klinecharts-pro</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">/* 亮色主题颜色 */</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-primary-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1677ff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-hover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">119</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FFFFFF</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-popover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">FFFFFF</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">051441</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-second-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">76808F</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">ebedf1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-selected-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">119</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* 暗色主题颜色 */</span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">klinecharts-pro</span><span style="color:#89DDFF;">[</span><span style="color:#C792EA;">data-theme</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dark</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-hover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">22</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">119</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.15</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">151517</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-popover-background-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">1c1c1f</span><span style="color:#89DDFF;">;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">F8F8F8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-text-second-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">929AA5</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  --klinecharts-pro-border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">292929</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function c(r,t,D,F,y,C){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{i as __pageData,d as default};
