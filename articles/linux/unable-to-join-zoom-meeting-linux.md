---
title: Unable to join Zoom meetings on Linux
date: 2025-12-12
category: linux
---

> **Affected distros:** Ubuntu, Fedora, Mint, possibly others.
> 
> **Affected desktop environments:** KDE Plasma, GNOME, Cinnamon, possibly others.

A common problem with Zoom on Linux is that you somehow can't join meetings. You click a meeting link, but no meeting room ever appears. However, when you close the application, you're asked whether you want to leave the meeting that never even started in the first place.

On top of this, every time you open the app, you're asked to accept Zoom Workplace's terms of service.

This problem affects users on a variety of distros and desktop environments. I haven't worked out what causes it, but I know how to solve it!

## The solution

The problem can be fixed by installing an older version of Zoom. Here are the steps to follow:

### Uninstall Zoom

This step is self-explanatory: just uninstall Zoom, either from your software centre or via the command line. A full uninstall, including all files, is best.

### Retrieve the generic download link

Go to the official [Zoom download site](https://zoom.us/download). Select your Linux type and OS architecture.

The next step is either easy or a little tricky. If you're lucky, you can right-click the Download button and you'll have an option to copy link the URL.

If you're unlucky, it's a bit messier: right-click the button and select "Inspect element" (this might be called something slightly different, depending on your browser). This will open the browser's dev tools.

In the dev tools, you should be auto-focussed onto the `<button>` tag, or a `<span>` tag inside the button tag. (If you're not overly technical, please don't panic&mdash;it'll be fine, I promise!)

The `<button>` tag contains a property called `href`. Mine, at time of writing, says `href="/client/6.6.11.6052/zoom_x86_64.rpm"`. Make a note of the contents of the `href` property.

The information we have just retrieved is the download path for the latest release of Zoom.

### Choose an older version of Zoom

Now that you have a generic download link for the latest version of Zoom, it's fairly easy to download an older version.

To begin, go to the [Zoom release notes page](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0061222). This page lists all recent releases.

The next bit requires a bit of trial-and-error. You may need to uninstall and repeat this step a few times before you succeed.

Go through the list of releases and choose a Linux release. If you don't care about the latest features, you may as well just cut to the chase and choose the oldest Linux release, since this is the most likely one to work. If you're keen on the newest updates, you'll have to work your way back from the top.

For example, the September 15, 2025 release applies to Linux. The website gives a release name/number like so: "6.6.0 (4410)". Make a note of this number.

### Download and install older version

Now that you have chosen a version, you can download it. This is done by combining the download URL from earlier and the release number.

The URL `/client/6.6.11.6052/zoom_x86_64.rpm` contains an encoded release number, `6.6.11.6052`, which corresponds to "6.6.11 (6052)". Therefore, if your chosen release is 6.6.0 (4410), you can simply replace the version portion of the URL with `6.6.0.4410`.

> **Before:** `/client/6.6.11.6052/zoom_x86_64.rpm`
>
> **After:** `/client/6.6.0.4410/zoom_x86_64.rpm`

That's the download path for your Zoom version.

To download the package, just add that path onto the base URL `https://zoom.us`, i.e. `https://zoom.us/client/6.6.0.4410/zoom_x86_64.rpm`.

Once downloaded, you'll be able to use your ordinary software manager to install.

If it doesn't work, uninstall and try an older release. I had to go back nearly as far as I could go before I found one that works for me.
