---
title: ServiceNow's blank production instances are full of bugs 
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

article about how servicenow prod environments aren't seeded like non-prod

- intro
  - what is a seed file
  - prod instance seem to get seeded differently to non-prod
  - caveat: any issues mentioned in this article might be fixed by the time you read it
- problem
  - basically, a bunch of important OOB config is missing
  - major example: Flows are unable to run by default in fresh prod instances
    - a flaw that's incredibly hard to debug
    - requires you to do a bunch of manual stuff
    - especially unhelpful since a) not being able to run flows is a pretty major flaw and b) go-lives are very stressful as it is
- add link to article about text indices

After many months, our project finally wound to a close. It was time, at last, to go live. I logged into our as yet unused production instance for the first time and was migrating all of our update sets across.

The migration went smoothly enough. Sure, we had a couple of merge conflicts, but they were quickly resolved. Nevertheless, **loads of things were broken**. After a lot of investigation, I came to the conclusion that ServiceNow seeds its production instances differently to its non-prod instances.

> ServiceNow's seed file for production is full of bugs.

(This article naturally carries the caveat that ServiceNow fixes the bugs in question by the time you read this.)

## Why use a different seeding process for production?

I haven't worked out why exactly ServiceNow has made a different seeding process for prod environments. Sure, there'll be some differences here and there, but there's an awful lot of divergence.

I don't know ServiceNow's processes, obviously, but it seems like they've got a fully separate seed, rather than, for example, seeding all environments in the same way, then making the necessary changes afterwards for production environments.

Perhaps I'm being na&iuml;ve, not least because people much cleverer than me are designing this stuff. Nonetheless, it wouldn't be the first time that there have been eyebrow-raising design decisions made by ServiceNow...
