import{_ as n,c as a,a0 as p,o as e}from"./chunks/framework.D61YeJP3.js";const v=JSON.parse('{"title":"Folder structure","description":"","frontmatter":{},"headers":[],"relativePath":"folder-structure.md","filePath":"folder-structure.md"}'),l={name:"folder-structure.md"};function i(t,s,c,o,r,u){return e(),a("div",null,s[0]||(s[0]=[p(`<h1 id="folder-structure" tabindex="-1">Folder structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder structure&quot;">​</a></h1><p>Here is an opiniated view of how your app can scale.</p><p>This is just a suggested approach to help you project yourself.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>your-app</span></span>
<span class="line"><span>├── app</span></span>
<span class="line"><span>│   ├── assets</span></span>
<span class="line"><span>│   │   ├── ts</span></span>
<span class="line"><span>│   │   │   └── main.ts</span></span>
<span class="line"><span>│   │   ├── sass</span></span>
<span class="line"><span>│   │   │   └── main.sass</span></span>
<span class="line"><span>│   │   └── img</span></span>
<span class="line"><span>│   │       └── logo.png</span></span>
<span class="line"><span>│   ├── controllers</span></span>
<span class="line"><span>│   │   ├── post</span></span>
<span class="line"><span>│   │   │   ├── create.v</span></span>
<span class="line"><span>│   │   │   ├── edit.v</span></span>
<span class="line"><span>│   │   │   ├── store.v</span></span>
<span class="line"><span>│   │   │   └── update.v</span></span>
<span class="line"><span>│   │   └── login</span></span>
<span class="line"><span>│   │       ├── create.v</span></span>
<span class="line"><span>│   │       └── store.v</span></span>
<span class="line"><span>│   ├── routes</span></span>
<span class="line"><span>│   │   ├── guest.v</span></span>
<span class="line"><span>│   │   └── authenticated.v</span></span>
<span class="line"><span>│   ├── tests</span></span>
<span class="line"><span>│   │   └── controllers</span></span>
<span class="line"><span>│   │       └── post</span></span>
<span class="line"><span>│   │           ├── create_test.v</span></span>
<span class="line"><span>│   │           ├── edit_test.v</span></span>
<span class="line"><span>│   │           ├── store_test.v</span></span>
<span class="line"><span>│   │           └── update_test.v</span></span>
<span class="line"><span>│   ├── views</span></span>
<span class="line"><span>│   │   ├── components</span></span>
<span class="line"><span>│   │   │   ├── footer.v</span></span>
<span class="line"><span>│   │   │   └── navbar.v</span></span>
<span class="line"><span>│   │   ├── layouts</span></span>
<span class="line"><span>│   │   │   ├── guest.v</span></span>
<span class="line"><span>│   │   │   └── authenticated.v</span></span>
<span class="line"><span>│   │   └── pages</span></span>
<span class="line"><span>│   │       ├── login</span></span>
<span class="line"><span>│   │       │   └── create.v</span></span>
<span class="line"><span>│   │       └── post</span></span>
<span class="line"><span>│   │           ├── create.v</span></span>
<span class="line"><span>│   │           └── edit.v</span></span>
<span class="line"><span>│   └── main.v</span></span>
<span class="line"><span>├── build</span></span>
<span class="line"><span>│   ├── js</span></span>
<span class="line"><span>│   │   └── main.js</span></span>
<span class="line"><span>│   ├── css</span></span>
<span class="line"><span>│   │   └── main.css</span></span>
<span class="line"><span>│   ├── img</span></span>
<span class="line"><span>│   │   ├── logo-sm.png</span></span>
<span class="line"><span>│   │   └── logo-xl.png</span></span>
<span class="line"><span>│   └── main</span></span>
<span class="line"><span>├── .browserslistrc</span></span>
<span class="line"><span>├── .editorconfig</span></span>
<span class="line"><span>├── .env</span></span>
<span class="line"><span>├── .env.prod</span></span>
<span class="line"><span>├── .gitignore</span></span>
<span class="line"><span>├── docker-compose.yml</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── package-lock.json</span></span>
<span class="line"><span>├── tsconfig.json</span></span>
<span class="line"><span>├── v.mod</span></span>
<span class="line"><span>└── vite.config.js</span></span></code></pre></div><ul><li><strong>app</strong>: Contains all your source files.</li><li><strong>build</strong>: Built version of your source files (to be deployed to your server). <ul><li><strong>main</strong>: The executable of your server.</li></ul></li></ul>`,5)]))}const g=n(l,[["render",i]]);export{v as __pageData,g as default};
