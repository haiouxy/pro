import{_ as s,c as a,o as l,O as e}from"./chunks/framework.fe655854.js";const C=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md"}'),n={name:"api.md"},p=e(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><h2 id="创建图表对象" tabindex="-1">创建图表对象 <a class="header-anchor" href="#创建图表对象" aria-label="Permalink to &quot;创建图表对象&quot;">​</a></h2><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">KLineChartPro</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  options: </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> string </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> HTMLElement;</span></span>
<span class="line"><span style="color:#A6ACCD;">    styles</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> DeepPartial</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Styles</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    watermark</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> Node;</span></span>
<span class="line"><span style="color:#A6ACCD;">    theme</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    locale</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    drawingBarVisible</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> boolean;</span></span>
<span class="line"><span style="color:#A6ACCD;">    symbol: SymbolInfo;</span></span>
<span class="line"><span style="color:#A6ACCD;">    period: Period;</span></span>
<span class="line"><span style="color:#A6ACCD;">    periods</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> Period[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    timezone</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string;</span></span>
<span class="line"><span style="color:#A6ACCD;">    mainIndicators</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    subIndicators</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> string[];</span></span>
<span class="line"><span style="color:#A6ACCD;">    datafeed: Datafeed;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">) </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> KLineChartPro</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">KLineChartPro</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  options: {</span></span>
<span class="line"><span style="color:#24292E;">    container: string </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> HTMLElement;</span></span>
<span class="line"><span style="color:#24292E;">    styles</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> DeepPartial</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">Styles</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    watermark</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> Node;</span></span>
<span class="line"><span style="color:#24292E;">    theme</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string;</span></span>
<span class="line"><span style="color:#24292E;">    locale</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string;</span></span>
<span class="line"><span style="color:#24292E;">    drawingBarVisible</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> boolean;</span></span>
<span class="line"><span style="color:#24292E;">    symbol: SymbolInfo;</span></span>
<span class="line"><span style="color:#24292E;">    period: Period;</span></span>
<span class="line"><span style="color:#24292E;">    periods</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> Period[];</span></span>
<span class="line"><span style="color:#24292E;">    timezone</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string;</span></span>
<span class="line"><span style="color:#24292E;">    mainIndicators</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string[];</span></span>
<span class="line"><span style="color:#24292E;">    subIndicators</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> string[];</span></span>
<span class="line"><span style="color:#24292E;">    datafeed: Datafeed;</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> KLineChartPro</span></span></code></pre></div><ul><li><code>container</code> 容器id或者容器</li><li><code>styles</code> 核心图表样式</li><li><code>watermark</code> 水印</li><li><code>theme</code> 主题</li><li><code>locale</code> 语言类型</li><li><code>drawingBarVisible</code> 是否显示画线工具栏</li><li><code>symbol</code> 标的</li><li><code>period</code> 当前周期</li><li><code>periods</code> 所以周期</li><li><code>timezone</code> 时区</li><li><code>mainIndicators</code> 主图指标</li><li><code>subIndicators</code> 副图指标</li><li><code>datafeed</code> 数据接入api实现</li></ul><h2 id="图表api" tabindex="-1">图表API <a class="header-anchor" href="#图表api" aria-label="Permalink to &quot;图表API&quot;">​</a></h2><h3 id="settheme-theme" tabindex="-1">setTheme(theme) <a class="header-anchor" href="#settheme-theme" aria-label="Permalink to &quot;setTheme(theme)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">theme</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">theme</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span></span></code></pre></div><p>设置主题</p><h3 id="gettheme" tabindex="-1">getTheme() <a class="header-anchor" href="#gettheme" aria-label="Permalink to &quot;getTheme()&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> string</span></span></code></pre></div><p>获取主题</p><h3 id="setstyles-styles" tabindex="-1">setStyles(styles) <a class="header-anchor" href="#setstyles-styles" aria-label="Permalink to &quot;setStyles(styles)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">styles</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DeepPartial</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Styles</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">styles</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">DeepPartial</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">Styles</span><span style="color:#24292E;">&gt;) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span></span></code></pre></div><p>设置核心图表样式</p><h3 id="getstyles" tabindex="-1">getStyles() <a class="header-anchor" href="#getstyles" aria-label="Permalink to &quot;getStyles()&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Styles</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> Styles</span></span></code></pre></div><p>获取核心图表样式</p><h3 id="setlocale-locale" tabindex="-1">setLocale(locale) <a class="header-anchor" href="#setlocale-locale" aria-label="Permalink to &quot;setLocale(locale)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">locale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">locale</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span></span></code></pre></div><p>设置语言</p><h3 id="getlocale" tabindex="-1">getLocale() <a class="header-anchor" href="#getlocale" aria-label="Permalink to &quot;getLocale()&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> string</span></span></code></pre></div><p>获取语言</p><h3 id="settimezone-timezone" tabindex="-1">setTimezone(timezone) <a class="header-anchor" href="#settimezone-timezone" aria-label="Permalink to &quot;setTimezone(timezone)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">timezone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">timezone</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">string</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span></span></code></pre></div><p>设置时区</p><h3 id="gettimezone" tabindex="-1">getTimezone() <a class="header-anchor" href="#gettimezone" aria-label="Permalink to &quot;getTimezone()&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> string</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> string</span></span></code></pre></div><p>获取时区</p><h3 id="setsymbol-symbol" tabindex="-1">setSymbol(symbol) <a class="header-anchor" href="#setsymbol-symbol" aria-label="Permalink to &quot;setSymbol(symbol)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">symbol</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SymbolInfo</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">symbol</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SymbolInfo</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span></span></code></pre></div><p>设置标的</p><h3 id="getsymbol" tabindex="-1">getSymbol() <a class="header-anchor" href="#getsymbol" aria-label="Permalink to &quot;getSymbol()&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> SymbolInfo</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> SymbolInfo</span></span></code></pre></div><p>获取标的</p><h3 id="setperiod-period" tabindex="-1">setPeriod(period) <a class="header-anchor" href="#setperiod-period" aria-label="Permalink to &quot;setPeriod(period)&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">period</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Period</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">(</span><span style="color:#E36209;">period</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Period</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">void</span></span></code></pre></div><p>设置周期</p><h3 id="getperiod" tabindex="-1">getPeriod() <a class="header-anchor" href="#getperiod" aria-label="Permalink to &quot;getPeriod()&quot;">​</a></h3><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight vp-code-dark"><code><span class="line"><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> Period</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> Period</span></span></code></pre></div><p>获取周期</p>`,41),o=[p];function t(c,r,i,y,d,D){return l(),a("div",null,o)}const A=s(n,[["render",t]]);export{C as __pageData,A as default};
