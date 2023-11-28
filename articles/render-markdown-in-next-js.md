---
title: How to render Markdown in Next.js
date: 2023-11-28
---

Markdown is a wonderful rich-text markup language. It is human readable even without being rendered and its limited set of formatting options makes it easy to work with. Its linting rules, moreover, make it a very screen-reader-friendly format. Why wouldn't you, therefore, use Markdown as the medium for storing and rendering your website's content?

All the articles on this website are stored as Markdown. The trouble is that Markdown needs to be converted into HTML by a parser before it can be loaded onto a web page. That parser, in turn, needs to be compatible with Next.js, on which this site is built.

## Which parser is the right one?

We have a fair few Markdown packages at our disposal to use in Next.js, but they're not all ideal. I went on a journey to find the right one for this site and have detailed my findings below.

### `marked`

[`marked`](https://github.com/markedjs/marked) is a blunt instrument that does the job, but has two big flaws (among some smaller drawbacks):

1. The HTML output isn't sanitised, which poses a security risk
2. You're required to use Next's `dangerouslySetInnerHTML` property to render the output, which is another security risk

While there are packages you can install that can sanitise `marked`'s output, it makes the dev experience more confusing overall.

As to the use of `dangerouslySetInnerHTML`, the name of that property, while passive&ndash;aggressive, places a responsibility on your shoulders, as a dev, to be cautious and aware of possible pitfalls.

I don't want write potentially unsafe code unless I can be sure that there's no way anything can go wrong. Rendering `marked`'s unsanitised HTML output is not a good idea for this reason.

### `remark-rehype` with `react-remark`

Having rejected `marked`, I investigated the combination of [`remark-rehype`](https://github.com/remarkjs/remark-rehype) with `react-remark`.

I actually quite liked this option, but it was not suitable to my repo, because it hasn't yet been adapted for Next's new `app` router. Soon enough, I'm sure, it'll be a viable option.

### `markdown-to-jsx`

This was another one that I rather liked but sadly had to ditch. [`markdown-to-jsx`](https://www.npmjs.com/package/markdown-to-jsx) is a nice package that converts Markdown into JSX, rather than HTML. This means you don't need to use anything like `dangerouslySetInnerHTML` to display your output.

The problem I had was that `markdown-to-jsx` does not convert links to Next's `<Link>` tag. Instead, it turns them into bog-standard `<a>` tags. This means that any links within your Markdown content cause the page to fully reload, instead of just partially reloading. Since the ability to rerender individual components is one of Next's raisons d'&ecirc;tre, I found myself having to reject this otherwise nice package.

## And the winner is... Contentlayer

I was growing frustrated with my failure to find a good Markdown parser when along comes [Contentlayer](https://contentlayer.dev/). This is a professionally managed package that handles the entire show for you. It has none of the drawbacks that the aforementioned packages have, and it has some pretty great documentation.

Contentlayer does more than just render Markdown, too. It can handle content metadata, such as publish dates and article titles. It works very well in conjunction with Next.js.

It turns links into `<Link>` tags (you can check this by using the React or Next dev tools), it works properly in conjunction with the `app` router and it sanitises the HTML output.

Interestingly, Contentlayer _does_ use `dangerouslySetInnerHTML` under the hood, but I don't consider this a drawback. Unlike with `marked`, I can be sure that nothing unsafe will happen when Markdown is rendered.

As a product, Contentlayer really impressed me. It's flexible, too, allowing you to render local Markdown files or retrieve them from a database.

I hope you have as much fun using it as I have!
