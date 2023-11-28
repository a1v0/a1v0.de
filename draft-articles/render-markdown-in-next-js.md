---
title: How to render Markdown in Next.js
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
date: 2023-11-15
---

Markdown is a wonderful markup language. It is human readable even without being rendered and its limited set of formatting options makes it easy to work with. Its linting rules, moreover, make it a very accessible format. Why wouldn't you, therefore, use Markdown as the backbone of your website's content?

All articles on this website are stored in Markdown format. The trouble is that Markdown needs to be converted into HTML by a renderer. That renderer, in turn, needs to be compatible with Next.js, on which this site is built.

## Which renderer is the right one?

We have a fair few Markdown packages at our disposal to use in Next.js, but they're not all ideal. I went on a journey to find the right one for this site.

### `marked`

`marked` **[INCLUDE LINK!]** is a blunt instrument that does the job, but has two big flaws (among some smaller drawbacks):

1. The HTML output isn't sanitised which poses a security risk
2. You're required to use Next's `dangerouslySetInnerHTML` property, which is another security risk

While there are packages you can install that can sanitise `marked`'s output, it makes things more confusing overall. As to the use of `dangerouslySetInnerHTML`, the name of that property, while passive aggressive, places a responsibility on your shoulders, as a dev, to be cautious and aware of the pitfalls.

I don't want write potentially unsafe code unless I can be sure that there's no way anything can go wrong. A setting where I'm forced to render unsanitised HTML output is not a good idea in my book.

- marked doesn't sanitise and forces you to use DangerouslySetHTML
- remark-rehypem react-remark etc. don't work well with app routing
- markdown-to-jsx works fine but doesn't support `<Link>`
- Contentlayer easy to use and does all the heavy lifting.
  - has good docs, too
  - uses DangerouslySet... itself
