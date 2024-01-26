---
title: Why being a ServiceNow dev can be a pain
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
date: 2023-11-15
---

I've moaned about ServiceNow a lot, but really it's a brilliant platform. It's feature-rich, user-friendly and highly useful. It scratches an itch that a huge amount of large companies have in a way that other, similar platforms don't. Moreover, its low-code/no-code features make it enormously powerful, enabling great levels of tailored customisation.

The drawback is that it's not developer-friendly. And here I don't mean the various pet peeves we all have (e.g. why does the code editor shout at you for missing out a semicolon but doesn't tell you that you've forgotten to write `gr.query()`?!). I mean more fundamentally: coding on ServiceNow is often trickier in many respects that vanilla programming.

Vanilla programming can be quite easy to debug. If something goes terribly wrong, you'll usually get a giant stack trace telling you exactly where the program failed. Not so in ServiceNow. But what if I told you that the fact that the system is a pain to debug is actually deliberate and _positive_ (for users, that is)?

## Failing silently

I've worked on ServiceNow instances that have only about 50 regular users, but there are many out there that have thousands upon thousands of users. If something goes wrong, it won't do for the platform to scream "SyntaxError" at the top of its lungs. Instead, ServiceNow _fails silently_.

Check the system logs: you'll see tonnes of gigantic Java null-pointer errors that are triggered by some benign bug. Imagine if that incomprehensible stack trace appear as a red info box at the top of the page. A user would be totally confused.

Failing loudly is awful user experience. In their confusion, users might resubmit forms or they might raise incidents. Imagine getting thousands of incidents because all of your users encountered a confusing and irrelevant error message!

Add to this the fact that many ServiceNow users are reluctant: they liked whatever ITSM tool their company used to use and have had to adopt ServiceNow "by force". A loud, confusing error message can easily add to this resentment and could trigger a lot of whingeing. Sounds petty, but organisations need to think practically.

Failing silently ensures confusion is kept to a minimum. Sure, some errors might cause confusion in a different way, but most errors are invisible to normal users. If one "before update" business rule fails, for example, the record will normally still be updated and the user will be none the wiser. Great, right?

## Developers prefer their errors to be loud and proud

While we can all agree that failing silently on a platform that potentially has tens of thousands of users is a good thing, it definitely makes developing a pain.

Many things in ServiceNow require scripting, and scripts always, _always_, ALWAYS go horribly wrong during the dev process (the fact that JavaScript isn't type-safe doesn't help...). We make stupid typos, we use methods on `GlideDateTime` that don't exist within the current scope, we provide a Boolean `true` when we meant to provide a string of `"true"`.

When the system fails silently, we don't always have a harpy screeching at us about our error. The script will run and fail and you'll have to delve into the system logs to find out why.

You'll only find a legible JavaScript error if you're lucky: not every bug triggers a JavaScript exception. And, if you're especially unlucky, you'll have some gibberish Java error because your code has somehow crashed Rhino (I've done it before!).

The developer experience is a lot more regimented on ServiceNow. We don't have the same freedoms offered by something like VS Code. Moreover, as our processes become more complex, there are a lot more places where problems could arise: Flows, Workflows, business rules, script includes, ACLs etc. With a vanilla codebase, all of your code is in one place. This makes tracing and hunting down bugs much simpler than in ServiceNow.

- shouldn't devs just be better at their job and ensure no errors get raised?
  - ideally yes, but there are always problems:
    - a script depends on the latest version of a script include that hasn't yet been imported
    - a weird, niche edge case happens that was accidentally not considered
    - a critical piece of infrastructure breaks because of an API key that has expired
    - an honest mistake is made, e.g. typo in one of the refqual fields that doesn't get spellchecked
    - or just something that was overlooked throughout the entire dev cycle through the instances (it happens)
- conclusion: servicenow is mostly a fit-and-forget product
  - you do the development, the testing and then the deployment
  - by the time it reaches users, it's supposed to be perfect
    - there will always be bugs here and there the creep in, however slight (the major ones ought to have been ironed out by now)
  - the upshot of it all is that you need people to have faith in the final product, to accept it, and to be able to use it without running into work-blocking syntax errors etc.
