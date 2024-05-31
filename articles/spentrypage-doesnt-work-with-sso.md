---
title: "`SPEntryPage` doesn't work with SSO"
date: 2024-05-31
---

You want a custom redirect on your platform. You have configured `SPEntryPage` and have added appropriate system properties to make it work. But it's not working! Are you trying to login with SSO? Then keep reading!

> The `SPEntryPage` script doesn't run when a user logs into a ServiceNow instance via SSO.

The reason your beautifully crafted login script isn't executing is that SSO login overrides all sorts of ordinary login behaviours.

(Other non-normal login methods, e.g. LDAP login, aren't affected and `SPEntryPage` should behave as normal there.)

## The culprit and the solution: installation exits

The cause of your sorrows is something called an [installation exit](https://docs.servicenow.com/bundle/washingtondc-platform-security/page/script/server-scripting/reference/r_InstallationExits.html), which ServiceNow describes as "customisations that exit from Java to call a script before returning back to Java."

It's a confusing definition, since ServiceNow devs never really interact with Java and don't get to see what Java methods are run during login. Suffice it to say that an installation exit is a deviation from the ordinary procedure; it's essentially an override.

The solution to your problem is as follows:

0. Identify the relevant installation exit script from the list within the **Multi-SSO** module in your ServiceNow navigation menu.
    - If you don't know which script is being run, narrow it down by filtering out all inactive scripts from the list, along with any scripts that handle anything other than login. Then add a `gs.info()` into the `initialize` method of each script.
    - Out of the box, there should be only one login script that runs during a conventional SSO setup.
1. Find a logical place for your custom logic within the script and see if you can get it to work. **But be careful:** messing around with SSO scripts could potentially cause problems, including security issues. Only do these things if you're confident in your scripting ability.

> Be careful. Edits to the installation exit login script could go wrong in any number of ways.

I realise that the instructions above are very light on detail. The reason is that any modifications you make depend entirely on what you would like to achieve.

I haven't run many experiments with this and so don't know the best way to handle redirects. However, if all you need to do is set a few `GlideSession` variables, then you'll have an easy time.
