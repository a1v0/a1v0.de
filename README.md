# a1v0.de Website

A simple blog site where I intend to add occasional help articles/notes/explainers about coding problems that don't readily have an answer on Google.

It's not much, but it's my attempt to contribute to the world of programming, sparing others the trouble of figuring out certain issues for themselves.

## Structure

The frontend is made with Next and TypeScript. Articles are currently stored in Markdown format inside my repo and are being served and rendered using [Contentlayer](https://contentlayer.dev/). This brilliant tool handles pretty much everything for me. I think (though don't understand Next enough to verify at present) that it even creates static HTML files for these during the build process. This means, I presume, that the content pages will be loaded statically rather than dynamically. Pretty neat!

## Deployment

This site is deployed by Netlify and runs on a custom domain, [a1v0.de](https://a1v0.de). `main` is the production branch.

Development is done in `dev`. Articles, too, are written in `dev`, just to keep things simple. However, while an article is still in a draft state, they are kept in the `draft-articles` directory.

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
[^2]: While Cambridge blue is basically an open-source colour, this shade is taken from the Cambridge University Boat Club's [branding](https://cubc.org.uk/app/uploads/2020/08/CUBC-Brand-Guidelines.pdf). Cambridge blue is difficult to match, so I took an existing colour scheme. Please contact me if this is not OK&mdash;I've no wish to upset anybody.
[^3]: Taken from GOV.UK.

## To-do

1. Make site a11y-friendly
    - Semantic HTML
    - Skip link
    - Anything else (see WCAG)
    - Axe Dev Tools comments:
      - Colour contrast isn't good enough in some HLJS `<code>` tags. This isn't great, admittedly, but I don't know if there is an HLJS colour scheme that's a11y-friendly
      - `<code>` tags with a horizontal scrollbar need to be accessible via `tabindex="0"`. Contentlayer doesn't give me a way to set a tab index for `<code>` tags; my only solution would be to run a script on every page to set one automatically. Not sure quite how to implement that in a non-clunky way
2. Add linting to repo
3. Create Articles page to show list of all content
    - Could also make a page for various categories, e.g. UPS, ServiceNow etc. (<https://contentlayer.dev/docs/reference/source-files/field-types-defe41e9>)
4. Find a way to do breadcrumbs with static content
5. Attempt to use content tags. The below proposal might not be the optimal way of doing it, but it's A way...
    - Create new property at the top of every article
    - If Contentlayer allows, make it an array or CSV of tags
    - Failing all that, consider instead categorising content into topics by splitting content into folders
6. Add TOC to articles?
   - <https://webtech-note.com/posts/tocbot-contentlayer> This is a good guide on how to do it
7. The logo flashes really big sometimes when the page loads. Presumably that can be fixed by scaling down the SVG
