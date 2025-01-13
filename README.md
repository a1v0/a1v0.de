# a1v0.de Website

A simple blog site where I intend to add occasional help articles/notes/explainers about coding problems that don't readily have an answer on Google.

It's not much, but it's my attempt to contribute to the world of programming, sparing others the trouble of figuring out certain issues for themselves.

## Structure

The frontend is made with Next and TypeScript. Articles are currently stored in Markdown format inside my repo and are being served and rendered using `remark-rehype`. There isn't really a backend. It's a pretty basic affair, with very few images and special features; just good, old-fashioned text.

## Deployment

This site is deployed by Netlify and runs on a custom domain, [a1v0.de](https://a1v0.de). `main` is the production branch.

Development is done in `dev`. Articles, too, are written in `dev`, just to keep things simple. While an article is still in a draft state, it is kept in the `draft-articles` directory.

## Content structure

Articles live within a category. Each article can have only one category.

The URL structure is `/[category-name]/[article-name]`. This matches the file structure of the `articles` folder, where each category has its own directory.

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

The colours in my Highlight.JS theme were incredibly hard to pick well, so I ended up choosing colours almost at random. They're not worth putting into the above table because they don't really fit with the overall brand; they're chosen to ensure some level of accessibility (mostly WCAG AA).

The dark-mode brand colours are variations on the above. I tweaked them to meet WCAG standards and to create a softer effect.

[^1]: Cambridge blue.
[^2]: While Cambridge blue is basically an open-source colour, this shade is taken from the Cambridge University Boat Club's [branding](https://cubc.org.uk/wp-content/uploads/2024/01/CUBC-BRAND-GUIDE-01112020.pdf). Cambridge blue is difficult to match, so I used an existing colour scheme. Please contact me if this is not OK&mdash;I've no wish to upset anybody.
[^3]: Taken from GOV.UK.

## To-do

1. Implement a dark mode (value added to the user is small, but it's good frontend experience):
     - Maybe create a dark-mode toggle button. I assume this'll need to use cookies or similar. <https://blog.logrocket.com/dark-mode-react-in-depth-guide/#accessibility-dark-mode>
     - 404 page needs dark mode.
     - Check all UI pages to ensure they have a dark mode.
2. Dark mode footer links have wrong colour when active.
3. Cambridge blue looks a little weak in dark mode. Needs stylistic decision.
    - The logo looks quite good in white, so we can remove the Cambridge blue from there.
    - When used as an accent colour (e.g. blockquotes and when one hovers over the menu button), it looks quite grey. Perhaps a bolder shade is needed.
    - Replacing it entirely with yellow is, I think, going too far.
4. Lighthouse improvements:
     - "Remove unused JavaScript"
     - Legacy JavaScript in use
       - Not sure if this can be fixed by anything other than upgrading packages frequently
5. `<code>` elements (` `` ` in markdown) don't wrap, leading to overflow issues on page edges on mobile, e.g. <https://a1v0.de/servicenow/disable-customer-registration-csm-portal-servicenow>
6. Replace boring bullet list of articles in categories with some sort of tile layout.
7. Make all URLs case insensitive
     - Currently, you can type a category or slug in any case you want and it renders the page.
     - The same is not true for static pages like `disclaimer`, where `disclaiMer` returns a 404.
     - <https://www.linkedin.com/pulse/solving-case-sensitivity-issues-nextjs-routes-middleware-islam-cavic/>
8. Add TOC to articles.
    - `rehype-slug` already creates IDs for all headings, which is a start.
9. See if there's a way to render `<a>` tags as `<Link>` components when rendering markdown. (It doesn't look like there is, unless I replace Markdown entirely with TSX. Don't know if that's a good idea.)
10. Fix word wrapping: <http://localhost:3000/c-sharp/puppeteersharp-failed-to-launch-browser-could-not-load-xpcom>
    - You need to add `&shy;` to the title.
    - You might need to create a fake HTML element in the DOM, set the string as `innerHTML` and then return its `innerText` to display.
    - This is convoluted but might be the only way to get it done.
    - Check all articles to see if full HTML could be useful in their titles.
