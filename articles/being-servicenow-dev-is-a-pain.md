---
title: Why being a ServiceNow dev can be a pain
date: 2024-02-22
category: servicenow
---

I've moaned about ServiceNow a lot, but really it's a brilliant platform. It's feature-rich, user-friendly and highly useful. It scratches an itch that a huge amount of large companies have in a way that other, similar platforms don't. Moreover, its low-code/no-code features make it enormously powerful, enabling great levels of tailored customisation.

The drawback is that it's not developer-friendly. And here I don't mean the various pet peeves we all have (e.g. why does the code editor shout at you for missing out a semicolon but doesn't tell you that you've forgotten to write `gr.query()`?!). I mean more fundamentally: coding on ServiceNow is often trickier in many respects than vanilla programming.

Vanilla programming can be quite easy to debug. If something goes terribly wrong, you'll usually get a giant stack trace telling you exactly where the program failed. Not so in ServiceNow. But what if I told you that the fact that the system is a pain to debug is actually deliberate and _positive_ (for users, that is)?

## Failing silently

I've worked on ServiceNow instances that have only about 50 regular users, but there are many out there that have thousands upon thousands of users. If something goes wrong, it won't do for the platform to scream "SyntaxError" at the top of its lungs. Instead, ServiceNow _fails silently_.

Check the system logs: you'll see tonnes of gigantic Java null-pointer errors that are triggered by some benign bug. Imagine if that incomprehensible stack trace appeared as a red info box at the top of the page. A user would be totally confused.

Failing loudly makes for awful user experience. In their confusion, users might resubmit forms or they might raise incidents. Imagine getting thousands of incidents because all of your users encountered a confusing and irrelevant error message!

Add to this the fact that many ServiceNow users are reluctant: they liked whatever ITSM tool their company used to use and have had to adopt ServiceNow "by force". A loud, confusing error message can easily add to this resentment and could trigger a lot of whingeing. Sounds petty, but organisations need to think practically.

Failing silently ensures confusion is kept to a minimum. Sure, some errors might cause confusion in a different way, but most errors are invisible to normal users. If one "before update" business rule fails, for example, the record will normally still be updated and the user will be none the wiser. Great, right?

## Developers prefer their errors to be loud and proud

While we can all agree that failing silently on a platform that potentially has tens of thousands of users is a good thing, it definitely makes developing a pain.

Many things in ServiceNow require scripting, and scripts always, _always_, ALWAYS go horribly wrong during the dev process (the fact that JavaScript isn't type-safe doesn't help...). We make stupid typos, we use methods on `GlideDateTime` that don't exist within the current scope, we provide a Boolean `true` when we meant to provide a string of `"true"`.

When the system fails silently, we don't always have a harpy screeching at us about our error. The script will run and fail and you'll have to delve into the system logs to find out why.

You'll only find a legible JavaScript error if you're lucky: not every bug triggers a JavaScript exception. And, if you're especially unlucky, you'll have some gibberish Java error because your code has somehow crashed Rhino (I've done it before!).

The developer experience is a lot more regimented on ServiceNow. We don't have the same freedoms offered by something like VS Code. Moreover, as our processes become more complex, there are a lot more places where problems could arise: Flows, Workflows, business rules, script includes, ACLs etc. With a vanilla codebase, all of your code is in one place. This makes tracing and hunting down bugs much simpler than in ServiceNow.

## Why not just stop making mistakes?

Shouldn't it be our job as professional software developers to write good code that works? After all, surgeons don't operate carelessly and iron out problems during a second attempt. Why aren't we capable of getting it right first time?

In an ideal world, of course, we'd be able to write perfect code that runs correctly the first time round. I admit that we can be a careless lot at times. But there are always complications:

- a script that depends on the latest version of another script include that hasn't yet been imported;
- a user managing to trigger a weird, niche edge case that was accidentally not considered during development;
- a critical piece of infrastructure that breaks because of an API key that has expired;
- an honest mistake, e.g. typo in one of the free-entry refqual fields that doesn't get spellchecked (you could say it's careless, but the odds are against you in these situations);
- or just something that was overlooked throughout the entire release cycle by everyone, dev and non-dev alike (it happens).

There are many places where failure can happen. Some software projects have such an extensive list of user stories that it's nigh impossible to prevent the occasional problem. _C'est la vie._

## Fit and forget

ServiceNow is mostly treated as a fit-and-forget product: you spend loads of effort setting the system up, but once it's all set up, you leave it in place without making any significant changes.

In other words, after it has passed through the development stage, testing and deployment&mdash;i.e. by the time real users touch it&mdash;it's _supposed_ to be perfect.

However, given that (small) bugs are inevitable, even in production, you need a system that can silently handle any bugs without causing confusion to the user. End-users need to have faith in the final product, with the ability to use it without running into work-blocking JavaScript errors.
