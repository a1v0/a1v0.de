---
title: What does the 'at' symbol mean in C#
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
 # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # 
date: 2023-11-04
---

The use of the `@` sign (aka 'at' symbol) in C# is pretty well documented all over the internet. The problem is, search engines don't like the `@` character. They ignore it, and, as far as I could find, there's no good way to escape the character in search strings.

In order for this page to be easily findable, I'll have to add my own explanation to flesh out the text. However, if you want, you can go direct to [Microsoft's own page](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/verbatim) on this topic.

## What does `@` do in regular C#?

<!-- 
- explain what verbatim identifier is
- give use cases:
  - printing regex (e.g. /\n/)
    - equivalent in HTML is giving you ability to write < rather than &lt;
  - giving variables names that are otherwise reserved keywords, e.g. @var
    - though I can't think why you'd really want to do that. seems like awful practice
    - the fact that this is possible is simply a side-effect, I THINK, of...
  - ...the third use case in the MS docs, which I haven't fully understood
 -->

### Verbatim vs. string literal

<!-- 
- explain why verbatim isn't necessarily the same thing as a string literal
 -->

## What about ASP.NET Razor?

<!-- 
- primary source is https://weblogs.asp.net/scottgu/asp-net-mvc-3-razor-s-and-lt-text-gt-syntax
- https://haacked.com/archive/2011/01/06/razor-syntax-quick-reference.aspx/
 -->
