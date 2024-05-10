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
