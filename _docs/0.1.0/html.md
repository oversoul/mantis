# HTML

Mantis provides type-safe HTML generation through V functions.

## Elements

Create HTML elements using Mantis's typed functions:

```v
module main

import khalyomede.mantis.html { div, p, a }

fn main() {
  // Simple element
  content := div({}, ['Hello world'])

  // Nested elements
  content := div({}, [
    p({}, ['A paragraph']),
    a({'href': '/'}, ['Home'])
  ])

  println(content) // <div><p>A paragraph</p><a href="/">Home</a></div>
}
```

## Anonymous element

If your HTML element is not included in the [available elements](#available-elements), you can create a custom one.

```v
module main

import khalyomede.mantis.html { anon }

fn main() {
  content := anon("x-searchable-dropdown", {}, [
    "Search by name"
  ] false)

  println(content) // <x-searchable-dropdown>Search by name</x-searchable-dropdown>
}
```

If your custom element is not accepting content (an orphan), pass the last parameter to `true`.

```v
module main

import khalyomede.mantis.html { anon }

fn main() {
  content := anon("x-alert", {}, [] true)

  println(content) // <x-alert />
}
```

## Attributes

Every element accepts an attributes map as its first parameter:

```v
module main

import khalyomede.mantis.html { div, a }

fn main() {
  // Single attribute
  content := div({
    'class': 'container'
  }, ['content'])

  println(content) // <div class="container">content</div>

  // Multiple attributes
  link := a({
    'href': '/login',
    'class': 'btn btn-primary',
    'id': 'login-button'
  }, ['Log in'])

  println(link) // <a href="/login" class="btn btn-primary" id="login-button">Log in</a>
}
```

## Component functions

Break down your views into reusable functions:

```v
module main

import khalyomede.mantis.html { button, div }

// A reusable button component
fn primary_button(text string) string {
  return button({
    'class': 'btn btn-primary',
    'type': 'button'
  }, [text])
}

// A card component that accepts content
fn card(content string) string {
  return div({
      'class': 'card'
    }, [
    div({
      'class': 'card-body'
    }, [content])
  ])
}

fn main() {
  // Using components
  content := div({}, [
    card('Welcome!'),
    primary_button('Click me')
  ])
}
```

## Iterating

Loop through your items to create list of HTML elements:

```v
module main

import khalyomede.mantis.html { ul, li }

struct User {
  name string
}

fn main() {
  users := [
    User{'John'},
    User{'Jane'}
  ]

  // Create list items from data
  list := ul({}, users.map(
      li({}, [it.name])
    )
  )

  println(list) // <ul><li>John</li><li>Jane</li></ul>
}
```

## Available elements

- [a](#a)
- [body](#body)
- [button](#button)
- [code](#code)
- [div](#div)
- [footer](#footer)
- [h1](#h1)
- [head](#head)
- [header](#header)
- [html](#html)
- [li](#li)
- [link](#link)
- [main](#main)
- [nav](#nav)
- [p](#p)
- [pre](#pre)
- [script](#script)
- [small](#small)
- [span](#span)
- [style](#style)
- [title](#title)
- [ul](#ul)

### a

Hyperlinks.

```v
module main

import khalyomede.mantis.html { a }

fn main() {
  content := a({
    'href': 'https://example.com'
  }, ['Visit site'])

  println(content) // <a href="https://example.com">Visit site</a>
}
```

### body

Contains the visible content of the document.

```v
module main

import khalyomede.mantis.html { body, div }

fn main() {
  content := body({}, [
    div({}, ['Page content'])
  ])

  println(content) // <body><div>Page content</div></body>
}
```

### button

Clickable element.

```v
module main

import khalyomede.mantis.html { button }

fn main() {
  content := button({
    'type': 'submit'
  }, ['Save'])

  println(content) // <button type="submit">Save</button>
}
```

### code

Code snippets.

```v
module main

import khalyomede.mantis.html { code }

fn main() {
  content := code({}, ['v run main.v'])

  println(content) // <code>v run main.v</code>
}
```

### div

A generic container for flow content.

```v
module main

import khalyomede.mantis.html { div }

fn main() {
  content := div({
    'class': 'container'
  }, ['Content here'])

  println(content) // <div class="container">Content here</div>
}
```

### footer

The lower section of the docuemnt.

```v
module main

import khalyomede.mantis.html { footer }

fn main() {
  content := footer({}, [
    '© 2024 My Website'
  ])

  println(content) // <footer>© 2024 My Website</footer>
}
```

### h1

Level 1 title.

```v
module main

import khalyomede.mantis.html { h1 }

fn main() {
  content := h1({}, ['Main Title'])

  println(content) // <h1>Main Title</h1>
}
```

### head

Contains metadata about the document.

```v
module main

import khalyomede.mantis.html { head, title }

fn main() {
  content := head({}, [
    title({}, ['My Page'])
  ])

  println(content) // <head><title>My Page</title></head>
}
```

### header

Introductory content or navigation.

```v
module main

import khalyomede.mantis.html { header, h1 }

fn main() {
  content := header({}, [
    h1({}, ['Page Title'])
  ])

  println(content) // <header><h1>Page Title</h1></header>
}
```

### html

The root element of an HTML document.

```v
module main

import khalyomede.mantis.html { html, head, body }

fn main() {
  content := html({}, [
    head({}, []),
    body({}, ['Hello world'])
  ])

  println(content) // <html><head></head><body>Hello world</body></html>
}
```

### li

List item.

```v
module main

import khalyomede.mantis.html { li }

fn main() {
  content := li({}, ['List item'])

  println(content) // <li>List item</li>
}
```

### link

Links to external resources like CSS files.

```v
module main

import khalyomede.mantis.html { link }

fn main() {
  content := link({
    'rel': 'stylesheet',
    'href': '/css/app.css'
  })

  println(content) // <link rel="stylesheet" href="/css/app.css" />
}
```

### main

The dominant content of the document.

```v
module main

import khalyomede.mantis.html { main }

fn main() {
  content := main({}, ['Primary content'])

  println(content) // <main>Primary content</main>
}
```

### nav

Section with navigation links.

```v
module main

import khalyomede.mantis.html { nav, a }

fn main() {
  content := nav({}, [
    a({'href': '/'}, ['Home']),
    a({'href': '/about'}, ['About'])
  ])

  println(content) // <nav><a href="/">Home</a><a href="/about">About</a></nav>
}
```

### p

```v
module main

import khalyomede.mantis.html { p }

fn main() {
  content := p({}, ['Some text content.'])

  println(content) // <p>Some text content.</p>
}
```

### pre

Preformatted text.

```v
module main

import khalyomede.mantis.html { pre, code }

fn main() {
  content := pre({}, [
    code({}, ['fn main() {\n  println("Hello")\n}'])
  ])

  println(content) // <pre><code>fn main() {\n    println("Hello")\n}</code></pre>
}
```

### script

Adds JavaScript to the page.

```v
module main

import khalyomede.mantis.html { script }

fn main() {
  content := script({
    'src': '/js/app.js'
  }, [])

  println(content) // <script src="/js/app.js"></script>
}
```

### small

Side comments or small print.

```v
module main

import khalyomede.mantis.html { small }

fn main() {
  content := small({}, ['Terms apply'])

  println(content) // <small>Terms apply</small>
}
```

### span

Inline container.

```v
module main

import khalyomede.mantis.html { span }

fn main() {
  content := span({
    'class': 'highlight'
  }, ['Important text'])

  println(content) // <span class="highlight">Important text</span>
}
```

### style

Adds CSS styles to the page.

```v
module main

import khalyomede.mantis.html { style }

fn main() {
  content := style({}, [
    '.container { max-width: 1200px; }'
  ])

  println(content) // <style>.container { max-width: 1200px; }</style>
}
```

### title

Defines the document's title shown in browser tab.

```v
module main

import khalyomede.mantis.html { title }

fn main() {
  content := title({}, ['My Website'])

  println(content) // <title>My Website</title>
}
```

### ul

Unordered list.

```v
module main

import khalyomede.mantis.html { ul, li }

fn main() {
  content := ul({}, [
    li({}, ['First item']),
    li({}, ['Second item'])
  ])

  println(content) // <ul><li>First item</li><li>Second item</li></ul>
}
```