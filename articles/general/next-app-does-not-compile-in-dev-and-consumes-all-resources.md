---
title: Next.js app won't compile in dev and consumes all CPU resources
date: 2026-03-13
category: general
---

Is one of your Next.js pages not compiling after you run `npm run dev`?

Is Next consuming all of your CPU resources?

This issue has an unknown cause&mdash;at least not one that I've found&mdash;but I suspect it's caused, like so many things, by a breaking change introduced by running `npm update`...

The solution is nice and simple: delete the `.next` folder. Then run `npm install` and you'll be right as rain.

If that doesn't fix it, then also remove `node_modules` and `package-lock.json`. Reinstall and all will be well.

> **tl;dr:** Delete the `.next` folder and, if needed, `node_modules` and `package-lock.json`. Then run `npm install`.