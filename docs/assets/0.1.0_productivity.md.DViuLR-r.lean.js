import{_ as i,c as a,a1 as e,o as t}from"./chunks/framework.CNY3Wz3S.js";const c=JSON.parse('{"title":"Productivity","description":"","frontmatter":{},"headers":[],"relativePath":"0.1.0/productivity.md","filePath":"0.1.0/productivity.md"}'),n={name:"0.1.0/productivity.md"};function l(p,s,h,r,o,d){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="productivity" tabindex="-1">Productivity <a class="header-anchor" href="#productivity" aria-label="Permalink to &quot;Productivity&quot;">​</a></h1><p>Here is some quick aliases to run <a href="https://vlang.io/" target="_blank" rel="noreferrer">V</a> without Docker Compose prefixes.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OvDYt" id="tab-tFsRs7x" checked><label data-title="Linux" for="tab-tFsRs7x">Linux</label><input type="radio" name="group-OvDYt" id="tab-cOr92v2"><label data-title="Mac" for="tab-cOr92v2">Mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.bash_aliases</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker compose run --rm v&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker compose run --rm --service-ports v&quot;</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ~/.zshrc</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker compose run --rm v&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">alias</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vs</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docker compose run --rm --service-ports v&quot;</span></span></code></pre></div></div></div><h2 id="running-v-in-development" tabindex="-1">Running V in development <a class="header-anchor" href="#running-v-in-development" aria-label="Permalink to &quot;Running V in development&quot;">​</a></h2><p><a href="https://vlang.io/" target="_blank" rel="noreferrer">V</a> can watch your files when you save. It will recompile your files and let you know of any errors.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.v</span></span></code></pre></div><h2 id="running-v-in-production-mode" tabindex="-1">Running V in production mode <a class="header-anchor" href="#running-v-in-production-mode" aria-label="Permalink to &quot;Running V in production mode&quot;">​</a></h2><p><a href="https://vlang.io/" target="_blank" rel="noreferrer">V</a> will compile your whole web app into a single executable.</p><p>You need to target the OS where your executable will be run using the <code>-os</code> flag.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -N</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -W</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -prod</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -compress</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -os</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -obfuscate</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -skip-unused</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -o</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main.v</span></span></code></pre></div>`,10)]))}const u=i(n,[["render",l]]);export{c as __pageData,u as default};
