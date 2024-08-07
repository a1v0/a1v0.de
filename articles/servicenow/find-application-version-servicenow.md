---
title: Find current application version in ServiceNow
date: 2024-03-03
category: servicenow
---

I was recently faced with a user story that required me to ensure that a certain application was installed on our ServiceNow instance.

That seems easy enough. However, the story specified a minimum application version.

I went to the Plugins module and saw that the application was installed, but I couldn't see which version I had.

The App Store was no help either.

I was a bit forlorn, but eventually I found a solution:

0. Go to the Plugins module
1. In the top right of the page, click "Switch to Classic App Manager"
2. Search for your application there
3. At the right of the search result, you'll see a version number. Be careful, though! The version number shown there is usually the number of the _latest available_ version of the app, not of the currently installed version
4. Click the version number and a bunch of versions will appear in a drop-down list. Your version is the one with "[installed]" written next to it, e.g. "3.0.0 [installed]"

> **Useful tip:** If ServiceNow offers multiple UIs to achieve the same thing (e.g. Classic UI vs Workspace; Plugins module vs Classic App Manager; Form Designer vs Form Layout), it's rarely correct to assume that one version has all the functionality that the other has.
>
> Just as we found here, the functionality we need is located in only one of the two available UIs.
