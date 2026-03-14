---
title: Empty table of contents in LaTeX
date: 2025-12-15
category: general
# 
# 
# 
# 
# 
# UPDATE PUBLICATION DATE
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
---

# 
# 
# 
# THIS ARTICLE NEEDS TO BE UPDATED TO REFLECT THE DOUBLE-COMPILE PROBLEM I ENCOUNTERED DURING "RESEARCH METHODS" MODULE
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 
# 

If your `\tableofcontents` command in LaTeX is producing an empty table of contents, then here are three potential solutions.

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

## If you're using LaTeX Workshop in Visual Studio Code

[LaTeX Workshop](https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop) is an excellent extension for using LaTeX in VS Code. However, it can have its quirks.

Normally, when you build a PDF in LaTeX Workshop, the compilation process is run twice. By this, I don't mean the ordinary two-compile LaTeX, which is necessary for computing BibTeX citations and TOCs. Instead, it seems to run the whole process twice.

What this means is that, sometimes, the TOC compiles fine the first time but disappears the second time,

You might not notice that this is happening. Here's how you can check:

1. Open the PDF file in a web browser, not in an ordinary PDF viewer.
2. Compile with LaTeX Workshop.
3. As the compilation job is running, refresh the browser window.
4. If, at any point, a TOC appears, stop refreshing. Save this PDF using Ctrl+S. Now you have a copy with a TOC.

The original document will continue to compile and, eventually, your TOC will be overwritten. However, your copy will be perfect.

This workaround is a little inconvenient, but it works. Hopefully, this bug will be ironed out in LaTeX Workshop soon.