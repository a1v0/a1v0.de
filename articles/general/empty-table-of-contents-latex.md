---
title: Empty table of contents in LaTeX
date: 2025-12-15
category: general
---

If your `\tableofcontents` command in LaTeX is producing an empty table of contents, then here are two potential solutions.

To be clear about the symptoms, the `\tableofcontents` command isn't producing a compiler error, but your document simply shows the default heading of "Contents" with nothing underneath.


## Using `\addcontentsline`

If your headings use the asterisk (`*`) modifier to prevent section numbers (e.g. `\section*{Section title}`), then these sections won't automatically show in the TOC. You'll have to add them explicitly using the `\addcontentsline` command, as follows:

```tex
\section*{Section title} % This shows the title within the body of the text
\addcontentsline{toc}{section}{Section title} % This adds a line to the table of contents
```

To explain a bit more, `\addcontentsline` adds a line to the TOC corresponding to the text you give it. You can change the `{section}` property to `{chapter}` or otherwise, depending on your needs.

## Check your packages

Sometimes, it's a package that prevents the TOC from populating. I don't know enough about LaTeX to know why some packages cause trouble, though, or what's needed to rectify the problem without having simply to remove the offending package from the document...

To identify the offending package is a little bit cumbersome. I normally comment out packages one by one and compile the document, to see if the TOC populates without that package.

Depending on the amount of packages you're using, this can be a long and annoying process. Nonetheless, once you've found the offending package, you can make a decision on the next step: do you remove the package? Do you use your newfound knowledge to refine your troubleshooting search terms? Do you seek an alternative package?

If you know why packages sometimes conflict with the `\tableofcontents` command, or if you know a better way to troubleshoot, please [do let me know](/contact). I would be grateful to learn.
