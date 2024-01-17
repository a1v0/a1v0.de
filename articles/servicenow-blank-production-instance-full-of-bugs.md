---
title: ServiceNow's blank production instances are full of bugs 
date: 2024-01-17
---

After many months, our project finally wound to a close&mdash;it was time, at last, to go live. I logged into our as yet unused production instance for the first time and was migrating all of our update sets.

The migration went smoothly enough. Sure, we had a couple of merge conflicts, but they were quickly resolved. Nevertheless, when we got to testing, we found that **loads of things were broken**. After much investigation, I came to the conclusion that ServiceNow seeds its production instances differently to its non-prod instances.

> ServiceNow's seed file for production is full of bugs.

(This article naturally carries the caveat that ServiceNow fixes the bugs in question by the time you read this. I was using Utah and Vancouver when I encountered these issues.)

## The problem in a nutshell

Basically, a whole bunch of config is **missing** from prod environments that are there by default in sub-prod instances.

On two separate projects, the fresh production instance didn't contain the config to allow it to run Flows! Not only is that an absolutely enormous oversight, it's also a flaw that's incredibly hard to debug. Moreover, to fix it, you need to go really deep into the nitty-gritty elements of the platform, entering tables whose names you've never heard of and never will hear of again.

> We found that, sometimes, the config that enables you to run Flows doesn't make it into the production instance and needs to be enabled manually.

It's a lot of manual config that you need to do, just to fix something that should be working in the first place. Add to that the fact that you're probably fighting any number of go-live fires already, and your client is breathing down your neck. You don't really want to be finding ways to make something as fundamental as Flows work.

Beyond Flows, there were a few more minor things here and there that were easy to fix, but still created unnecessary problems for someone who's trying to live a peaceful life.

## Why use a different seeding process for production?

I haven't worked out why exactly ServiceNow has made a different seeding process for prod environments. Sure, there need to be some differences here and there, but it feels like those differences are comparatively minor and don't warrant a separate seed.

I don't know ServiceNow's processes, obviously, but it seems like they've got a fully separate seed, rather than, for example, seeding all environments in the same way, then making the necessary changes afterwards for production environments.

Perhaps I'm being na&iuml;ve, not least because people much cleverer than me are designing this stuff. Nonetheless, it wouldn't be the first time that there have been eyebrow-raising design decisions made by ServiceNow...
