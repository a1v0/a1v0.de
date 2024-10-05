---
title: "PuppeteerSharp: Failed to launch browser—Couldn't load XPCOM"
date: 2024-10-05
category: c-sharp
---

When using PuppeteerSharp with Firefox, you may encounter this error message: "Failed to launch browser", with a subheading of "Couldn't load XPCOM".

This error seems to come about because of a missing software package called [GTK3](https://news.ycombinator.com/item?id=4215166), which is something that draws widgets on screen for Linux window managers.

You may already have GTK2 installed, but it is not compatible with Firefox. Upgrade to GTK3 and you'll be right as rain.

This is the Linux command to install it:

```sh
sudo apt-get install libgtk-3-dev
```

From a quick Google search, I can see that users on Windows as well as Linux can have this issue. I regrettably don't know whether there's an equivalent Windows fix.

(What [XPCOM](https://en.wikipedia.org/wiki/XPCOM) has to do with the whole thing is not clear to me. Not that it matters.)
