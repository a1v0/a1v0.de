---
title: What does the 'at' symbol mean in C#
date: 2023-11-19
category: c-sharp
---

The use of the `@` sign (aka 'at' symbol) in C# is pretty well documented all over the internet. The problem is, search engines don't like the `@` character. They ignore it, and, as far as I could find, there's no good way to escape the character when typing stuff into their search bars.

In order for this page to be easily findable, I'll have to add my own explanation to flesh out the text. However, if you want, you can go direct to [Microsoft's own page](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/verbatim) on this topic.

## What does `@` do in C#?

The `@` symbol is what's technically known as a _verbatim identifier_ in C#. You use it to identify something that should be interpreted literally, exactly as written. Below are some examples to illustrate.

### 0. Strings with special characters

There are many ways to print special characters in strings. If you want to print a line break, you can use `\n`, e.g.:

```cs
Console.WriteLine("line1\nline2");
// output:
// line1
// line2
```

But what if you wanted to print `\n` without it being rendered as a line break? A realistic use case is if you're printing a regular expression. Printing `/\n/` would ordinarily print two lines with one forward slash on each. You could escape the `\` character in the normal way by adding another `\` in front, but that can be hard and confusing to read: `/\\n/`.

This is where the verbatim identifier comes in. Add a `@` before your string and the `\n` will _not_ be escaped:

```cs
Console.WriteLine("/\n/");
// output:
// /
// /

Console.WriteLine(@"/\n/");
// output:
// /\n/
```

#### Verbatim string vs. string literal

Isn't a verbatim string the same as a string literal, then?

Basically yes, though you mustn't forget that C# has a [second type of string literal](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/reference-types#string-literals), too, using the `"""` syntax.

### 1. Variables with reserved names

Like all languages, C# has a bunch of reserved words, like `for`, `while`, `return`, `string`, `var` and so on. You can't name a variable `var`, for instance, without your compiler shouting at you.

This is where the magic `@` comes along. Prefixing your variable with the 'at' symbol will let you give it a name like `string`, e.g.:

```cs
string string = "hello"; // causes an error

string @string = "hello"; // no error

Console.WriteLine(@string); // the @ is part of the variable's name
                            // so you need to use it when referring to it
```

The question is: why on earth would you want to give your variable a reserved name? That's surely a recipe for confusion, right? At any rate, I've not been able to divine a use case for it and would advise against it if at all possible.

### 2. Avoiding confusion in certain naming conflicts

The Microsoft docs give a third use case for the 'at' symbol in C#, though I will hold up my hand and say that I'm too much of a beginner at C# to understand what on earth it's about. Feel free to [read for yourself](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/tokens/verbatim).

## What about Blazor?

Finally, it's worth mentioning that `@` has its own meaning within Blazor. This is something I know virtually nothing about, but here's a [Stack Overflow thread](https://stackoverflow.com/questions/71161139/why-do-some-blazor-component-properties-start-with-an-at-symbol) on the subject.
