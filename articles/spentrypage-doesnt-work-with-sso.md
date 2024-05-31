---
title: SPEntryPage doesn't work with SSO
date: 2024-05-31
---

You want a custom login redirect on your platform. You have customised the `SPEntryPage` script and have added appropriate system properties to make it run. But it's _not_ running!

Are you trying to login with SSO? Then keep reading!

> The `SPEntryPage` script doesn't run when a user logs into a ServiceNow instance via SSO.

The reason your beautifully crafted login script isn't executing is that SSO login overrides all sorts of ordinary login behaviours, including our beloved `SPEntryPage`.

(Other non-normal login methods, e.g. LDAP login, aren't affected and `SPEntryPage` should behave as normal there.)

## Installation exits: the culprit and the solution

The cause of your sorrows is something called an [installation exit](https://docs.servicenow.com/bundle/washingtondc-platform-security/page/script/server-scripting/reference/r_InstallationExits.html), which ServiceNow bewilderingly describes as "customisations that exit from Java to call a script before returning back to Java."

It's a confusing definition, since ServiceNow devs never really interact with Java and don't get to see what Java methods are run during login. Suffice it to say that an installation exit is a deviation from the ordinary procedure; it's essentially an override.

Installation exits are used by the SSO module to override regular login behaviours. This isn't quite the same thing as `SPEntryPage`, which supplements login config with simple customisations, but it's the closest thing we have to an SSO equivalent of `SPEntryPage`.

The **solution to our original problem**, therefore, is as follows:

0. Identify the relevant installation exit script from the list within the **Multi-SSO** module in your ServiceNow navigation menu.
    - If you don't know which script is being run, narrow it down by filtering out all inactive scripts from the list, along with any scripts that handle anything other than login. Then add a `gs.info()` into the `initialize` method of each script.
    - If your message appears in the System Logs after SSO login, you've found the correct script.
    - Out of the box, there should be only one script that runs during SSO login.
1. Find a suitable place for your custom logic within the script and see if you can get it to work. **But be careful:** messing around with SSO scripts could potentially cause problems, including security issues. Only do these things if you're confident in your scripting ability.

> Be careful. Edits to the installation exit login script could go wrong in any number of ways.

I realise that the instructions above are very light on detail. The reason is that any modifications you make depend entirely on what you would like to achieve.

I haven't run many experiments with this and so don't know the best way to handle, say, post-login redirects. However, if all you need to do in your script is set a few `GlideSession` variables, then you'll have an easy time. _Fuggedaboudit!_
