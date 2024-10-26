---
title: 'Next.js: "Deploy directory ''build'' does not exist" error in Netlify'
date: 2024-04-30
category: next.js
---

I was recently deploying a Next.js website on [Netlify](https://www.netlify.com) and I kept getting an error message during deployment: "Deploy directory 'build' does not exist".

I tried all sorts of stuff to fix this, including adding a directory called `build` into my GitHub repo, but it didn't work. There is a very easy way to fix it, though.

> **tl;dr:** Make sure your build settings in Netlify make sense for a Next repo, and not for a React repo.

## Netlify build settings

The problem was caused because the repo originated as a React repo. I changed it to a Next repo _after_ my original deployment on Netlify.

In a nutshell, when you deploy a website on Netlify, it adds some default build settings based on the type of project you're deploying. As it happens, React deploys using a directory named `build`, whereas Next uses a directory called `.next`.

The solution was to update my build settings on Netlify:

0. Go to your website's settings on Netlify.
1. Open the **Site Configuration** section.
2. From there go to **Build &amp; deploy > Continuous deployment > Build settings**.
3. Make sure these settings are in place:
    - Runtime: Next.js
    - Build command: `npm run build`
    - Publish directory: `.next`

Once these settings are in place, you'll be able to deploy!
