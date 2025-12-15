---
title: Empty table of contents in LaTeX
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
date: 2024-01-01
category: general
---

\tableofcontents not showing in latex

Contents shows but the contents of the Contents doesn't
make sure you use the 
\addcontentsline{toc}{section}{1.2 Research questions}

syntax if you're using \section*{}

Otherwise, it's often a package that prevents it from working. comment out packages one by one to see what happens (this can be really annoying to do, because you end up with a bunch of compilation errors each time if you don't comment out other bits of content, too)




If your `\tableofcontents` command in LaTeX is producing an empty table of contents, then here are two potential solutions.

To be clear about the symptoms, the `\tableofcontents` command isn't producing a compiler error or anything like that, but your document simply shows the default heading of "Contents" with nothing underneath.


## Using `\addcontentsline`

If your headings use the asterisk (`*`) modifier to prevent section numbers (e.g. `\section*{Section title}`), then these won't automatically show in the TOC. You'll have to add them explicitly using the `\addcontentsline` command, as follows:

```latex
\section*{Section title}                      % This shows the title within the body of the text
\addcontentsline{toc}{section}{Section title} % This adds a line to the table of contents
```

To explain a bit more, `\addcontentsline` adds a line to the TOC corresponding to the text you put in it. You can change the `{section}` property to `{chapter}` or otherwise, depending on your needs.
