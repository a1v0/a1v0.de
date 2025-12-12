---
title: TITLE GOES HERE
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
category: linux
---

> *Affected distros:* Ubuntu, Fedora, Mint, possibly others
> *Affected desktop environments:* KDE Plasma, GNOME, Cinnamon, possibly others

/* This one might need a better title */
https://forums.linuxmint.com/viewtopic.php?t=446837
you need to inspect element on the button to get the correct URL
ich musste viele Versionen zurueckgehen, aber es funktioniert.

A common problem with Zoom on Linux is that you install it, but you somehow can't join a meeting. No meeting room is showing once you click a meeting link. However, when you close the application, you're asked whether you want to leave the meeting.

On top of this, every time you open the app, you're asked to accept Zoom Workplace's terms of service.

This problem affects users on a variety of distros and desktop environments. I haven't worked out what causes it, but I know how to solve it!

## The solution

The problem can be fixed by installing an older version of Zoom. Here are the steps to follow:

### Retrieve the download link

Go to the official (https://zoom.us/download)[Zoom download site]. Select your Linux type and OS architecture.

The next step is either easy or a little tricky. If you're lucky, you can right-click the Download button and you'll have an option to copy link the URL.

If you're unlucky, it's a bit messier: right-click the button and select "Inspect element" (this might be called something slightly different, depending on your browser). This will open the dev tools in your browser.

In the dev tools, you should be auto-focussed onto the `<button>` tag, or a `<span>` tag inside the button tag. (If you're not overly technical, please don't worry too much&mdash;it'll be fine, I promise!)

The `<button>` tag contains a property called `href`. Mine, at time of writing, says `href="/client/6.6.11.6052/zoom_x86_64.rpm"`. Make a note of the contents of the `href` property.
