---
title: A regex for Irish postcodes
date: 2024-05-11
category: regex
---

Ireland has one of the most&mdash;if not _the_ most&mdash;sophisticated postcode systems in the world. Unlike most postal codes and ZIP codes, which represent a geographical area, the [Eircode](https://www.eircode.ie/) pinpoints exact locations. You might not even need to put a name and address on a letter for it to arrive, so long as you put the correct Eircode on. How cool is that?

I have created a **regex** that will help you extract a valid Eircode from an address. I have also given an explanation about what it does, as well as adding a JavaScript method that builds the regex for you.

## The shape of an Eircode

Eircodes follow this pattern:

0. A prefix of one letter and two digits, e.g. W12
   - There's only one exception to this rule so far, which is D6W
1. A space (though it's theoretically optional)
2. Four characters arranged in one of seven different combinations of letters and numbers

   0. A111
   1. AA11
   2. AAA1
   3. AA1A
   4. A1AA
   5. A1A1
   6. A11A

## The Eircode regex

Before I begin, I must explain the limitation of this regex: it does not check whether a given Eircode is real. The regex for _that_ would be a mile long. All it does is check for the presence of the general pattern of an Eircode.

Here is my regex:

```js
/(?<=\s|^)[a-z]\d[\dw]\s{0,1}[a-z](\d{3}|[a-z]\d{2}|[a-z]\d[a-z]|\d[a-z]\d|[a-z]{2}\d|\d[a-z]{2}|\d{2}[a-z])(?=\s|$)/gim
```

I will explain it in more detail below so that you can tweak it to suit your needs.

> This regex doesn't check whether a given Eircode is real, only that it matches the pattern.

### Regex breakdown

### `gim`

First of all, the flags `g`, `i` and `m` mean:

- **`g` == global** (i.e. checks for _all_ instances of a postcode in a string, not just the first)**:** if an address contains more than one postcode, you'll need to know so as to flag any potential ambiguity in the address.
- **`i` == case insensitive:** this is useful when you receive user input, because people can be lazy and won't always capitalise their postcodes properly.
- **`m` == multiline:** beginning and end markers (i.e. `^` and `$`) will match the start/end of a line rather than the start/end of the whole string.

### Lookarounds

Next, let's look at the top and tail of the regex, aka the lookarounds:

- `(?<=\s|^)`: positive lookbehind. Any match will only be valid if this lookbehind also matches. In this case, we're looking either for a space or the start of a new line (this will prevent matches where a valid postcode is lodged inside a word).
  - **Warning:** these aren't supported by every browser.
- `(?=\s|$)`: positive lookahead. Any match will only be valid if this lookahead also matches. For the same reason as above, we're only accepting matches if they're followed by a space or the end of a line.

### The postcode prefix

The postcode's prefix is defined as `[a-z]\d[\dw]\s{0,1}` which, in order, is:

0. `[a-z]`: exactly one letter.
1. `\d`: exactly one digit.
2. `[\dw]`: one digit or the letter W.
3. `\s{0,1}`: exactly zero or one spaces. If you want to enforce a minimum of one space, or if you want to allow more than one space, here's the place to do it.

N.B.: I mentioned above that the only prefix that contains a W is D6W. This regex would permit other, non-existent prefixes, e.g. R8W or C0W. I chose to be a bit more relaxed about it, just in case a new prefix with W is introduced in future.

### The rest

The remainder of the regex is just a simple sequence of `OR` conditions. We begin with `[a-z]`, since every single suffix type begins with a single letter, and then we continue with `(\d{3}|[a-z]\d{2}|[a-z]\d[a-z]|\d[a-z]\d|[a-z]{2}\d|\d[a-z]{2}|\d{2}[a-z])`. Let me split them up into each individual condition:

- `\d{3}`: three digits.
- `[a-z]\d{2}`: one letter, two digits.
- `[a-z]\d[a-z]`: letter, digit, letter.
- `\d[a-z]\d`: digit, letter, digit.
- `[a-z]{2}\d`: two letters, one digit.
- `\d[a-z]{2}`: one digit, two letters.
- `\d{2}[a-z]`: two digits, one letter.

I could have simplified this bit, allowing _any_ combination of three letters and numbers, e.g. `[\da-z]{3}`. However, this would have permitted three letters, which is the one combination of three letters and digits that's not permitted in an Eircode.

If anyone can find a more elegant solution than my clunky concatenation of `OR`s, I'm all ears!

## Method to build an Eircode regex

Since this regex is long and a bit tricky to read, I created a method to build the regex for me. This means that, in future, if ever I need to edit the regex, I can easily see how it works without needing to decipher it anew. It's in JavaScript but can easily be 'translated' into any language.

```js
const getIrishRegex = () => {
    const prefix = "[a-z]\\d[\\dw]";
    const threeDigits = "\\d{3}",
        letterDigitDigit = "[a-z]\\d{2}",
        letterDigitLetter = "[a-z]\\d[a-z]",
        letterLetterDigit = "[a-z]{2}\\d",
        digitLetterDigit = "\\d[a-z]\\d",
        digitLetterLetter = "\\d[a-z]{2}",
        digitDigitLetter = "\\d{2}[a-z]";

    const orConditions = `${threeDigits}|${letterDigitDigit}|` +
            `${letterDigitLetter}|${digitLetterDigit}|` +
            `${letterLetterDigit}|${digitLetterLetter}|` +
            `${digitDigitLetter}`;
    const flags = "gim";

    const completeRegex = new RegExp(
        `(?<=\\s|^)${prefix}\\s{0,1}[a-z]` +
        `(${orConditions})(?=\\s|$)`,
        flags
    );

    return completeRegex;
};
```

I've written more elegant code in my life, but the method above is self-explanatory and fulfils its purpose of demystifying the regex.
