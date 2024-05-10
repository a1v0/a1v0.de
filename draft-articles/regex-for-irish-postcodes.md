---
title: A regex for Irish postcodes
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
---

Ireland has one of the most&mdash;if not _the_ most&mdash;sophisticated postcode systems in the world. Unlike most postal codes and ZIP codes, which represent a geographical area, the [Eircode](https://www.eircode.ie/) pinpoints exact locations. You might not even need to put a name and address on a letter for it to arrive, so long as you put the correct Eircode on. How cool is that?

I have created a **regex** that will help you extract a valid Eircode from an address. I have also given an explanation about what it does, as well as adding a JavaScript method that builds the regex for you.

- explain how Eircode works
- link to website etc.
- regex itself
- explanation of regex
- method to build it to make it more readable

 /[?<=\s|^](a-z)\d[\dw]\s{0,1}[a-z](\d{3}|[a-z]\d{2}|[a-z]\d[a-z]|\d[a-z]\d|[a-z]{2}\d|\d[a-z]{2}|\d{2}[a-z])(?=s|$)/gim
 const getIrishRegex = () => {
    const prefix = "[a-z]\\d[\\dw]";
    const threeDigits = "\\d{3}",
        letterDigitDigit = "[a-z]\\d{2}",
        letterDigitLetter = "[a-z]\\d[a-z]",
        letterLetterDigit = "[a-z]{2}\\d",
        digitLetterDigit = "\\d[a-z]\\d",
        digitLetterLetter = "\\d[a-z]{2}",
        digitDigitLetter = "\\d{2}[a-z]";

    const completeRegex = new RegExp(
        `(?<=\\s|^)${prefix}\\s{0,1}[a-z](${threeDigits}|${letterDigitDigit}|${letterDigitLetter}|${digitLetterDigit}|${letterLetterDigit}|${digitLetterLetter}|${digitDigitLetter})(?=\s|$)`,
        "gim"
    );

    return completeRegex;
};
