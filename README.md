# a1v0.de Website

A simple blog site where I intend to add occasional help articles/notes/explainers about coding problems that don't readily have an answer on Google.

It's not much, but it's my attempt to contribute to the world of programming, sparing others the trouble of figuring out certain issues for themselves.

## Structure

The frontend is made with Next and TypeScript. Articles are currently stored in Markdown format inside my repo and are being served and rendered using [Contentlayer](https://contentlayer.dev/). This brilliant tool handles pretty much everything for me. I think (though don't understand Next enough to verify at present) that it even creates static HTML files for these during the build process. This means that the content pages will be loaded statically rather than dynamically. Pretty neat!

## Deployment

This site is deployed by Netlify and runs on a custom domain, [a1v0.de](https://a1v0.de). `main` is the production branch.

Development is done in `dev`. Articles, too, are written in `dev`, just to keep things simple. While an article is still in a draft state, it is kept in the `draft-articles` directory.

## Colour scheme and design

I'm modelling my design on simple UK government websites like [GOV.UK](https://www.gov.uk/) and [NHS.UK](https://www.nhs.uk/). This is in part because I find the designs beautiful in their simplicity and in part because I am not much of a designer myself.

| **Item**           | **Colour (hex)** |
| ------------------ | ---------------- |
| Text (dark)        | `#000000`        |
| Text (light)       | `#ffffff`        |
| Background (white) | `#ffffff`        |
| Background (grey)  | `#f0f4f5`        |
| Brand colour       | `#85b09a`[^1]    |
| Accent colour      | `#ffc72c`[^2]    |
| Softer black       | `#2c2a29`[^2]    |
| Link               | `#1d70b8`[^3]    |
| Link (hover)       | `#003078`[^3]    |
| Link (visited)     | `#4c2c92`[^3]    |

The colours in my Highlight.JS theme were incredibly hard to pick well, so I ended up choosing colours almost at random. They're not worth putting into the above table because they don't really fit with the overall brand.

[^1]: Cambridge blue.
[^2]: While Cambridge blue is basically an open-source colour, this shade is taken from the Cambridge University Boat Club's [branding](https://cubc.org.uk/app/uploads/2020/08/CUBC-Brand-Guidelines.pdf). Cambridge blue is difficult to match, so I used an existing colour scheme. Please contact me if this is not OK&mdash;I've no wish to upset anybody.
[^3]: Taken from GOV.UK.

## To-do

1. Replace `markdown-to-jsx` with `remark-rehype`
    - Make sure syntax highlighting works properly
2. Make site a11y-friendly
    - Semantic HTML (I already pass the automated Lighthouse and Axe checks, but I will read up on semantic HTML to be confident about this site)
      - Investigate the use of the `<dl>` tag for lists (is this more a11y-friendly?)
    - Anything else (see WCAG)
    - Axe Dev Tools comments:
        - `<code>` tags with a horizontal scrollbar need to be accessible via `tabindex="0"`. Contentlayer doesn't give me a way to set a tab index for `<code>` tags; my only solution would be to run a script on every page to set one automatically. Not sure quite how to implement that in a non-clunky way
3. Add linting to repo (future Alvo: what did I mean by this? Did I mean to enforce well linted code before publication?)
4. Add breadcrumbs to articles. Given that there is just one layer between root and article (the category), all that's necessary is to add a link to the parent category on each article page
5. Add TOC to articles
    - <https://webtech-note.com/posts/tocbot-contentlayer> This is a good guide on how to do it
6. Make some sort of contact page, whether it's a link to a LinkedIn profile or something else
7. See what happens when you vertically centre the text in the footer (it might look daft)
8. Investigate whether there is a quicker or more efficient way to load articles and their respective categories
    - could the factory pattern be helpful here?
9. Move oft-repeated methods into util functions (e.g. anything that loops through all articles, which looks like it's pretty repetitive)
10. Find what needs to be done to ensure better indexing by search engines. Do I need to increase loading speeds etc.? Or do I need to use SEO? Should I install Google Analytics?
11. Speed up site. Lighthouse comments:
    - JavaScript takes too long to load
    - First paint takes too long
    - Custom font takes ages to load (there's a warning about this at the build stage, but that might just be a bug from the deprecated `pages` router of Next)
