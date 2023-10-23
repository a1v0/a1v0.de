# a1v0.de Website

A simple blog site where I intend to add occasional help articles/notes/explainers about coding problems that don't readily have an answer on Google.

It's not much, but it's my attempt to contribute to the world of programming, sparing others the trouble of figuring out certain issues for themselves.

## Structure

The frontend is made with Next and TypeScript. For now, I intend to store articles as local text/HTML files in this repo, but I may in future create a NoSQL API to serve these articles. A 'database' of articles is stored in `app/articles.ts`. The database contains various data about the articles (title, slug etc.) but the article's content itself is loaded via an asynchronous Axios `GET` request. To ensure server-side rendering works, therefore, I am using Next's `getStaticProps`.

## Colour scheme

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

[^1]: Cambridge blue

[^2]: While Cambridge blue is basically an open-source colour, this shade is taken from the Cambridge University Boat Club's [branding](https://cubc.org.uk/app/uploads/2020/08/CUBC-Brand-Guidelines.pdf). Cambridge blue is difficult to match, so I took an existing colour scheme. Please contact me if this is not OK.
