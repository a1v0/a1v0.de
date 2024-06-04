---
title: getClientIP() returns null in ServiceNow
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
---

- outline problem: you need IP but it only returns null
- why? I'm not 100% sure, but it's probably because certain code runs asynchronously and thus doesn't have access to your current session, or because the GlideSession isn't fully built at the point getClientIP is being run
- solution:
    - IP address stored in two places: sys_user_login_history and syslog_transaction
    - give pros and cons of each approach
    - advise against using syslog_transaction

If you're running a script in which you need to know the IP address of the current session, but all you're getting is `null`, then keep reading.

This article explains why `gs.getSession().getClientIP()` returns `null` under specific circumstances. It also offers a potential workaround.

> The `getClientIP()` method basically always works, with few, specific exceptions. When it fails, it returns `null`.

## Why do we sometimes get `null`?

I'm honestly not 100% sure why `getClientIP` sometimes returns a `null` value. In every scenario that I tested, I was able to use other `GlideSession` methods, like `getRoles()`.

I have some guesses as to why, all of which could easily be wide of the mark:

0. Some scripts relating to login execute _before_ the `GlideSession` is initialised. It is possible that there is a point at which some scripts can run which is after the `GlideSession` object has been initialised but before the IP address has been entered.
    - It sounds a bit implausible, but ServiceNow can build most of the `GlideSession` on its own. The roles, for example, are taken from the `sys_user_has_role` table. The IP address, on the other hand, requires input from the client.
1. IP addresses can change, especially if using a VPN. As such, it's conceivable that there is a background process that keeps track of your current IP address and regularly updates the `GlideSession` object. However, if a script runs asynchronously, it might not have access to the most up-to-date IP, and therefore falls back on returning `null`.
    - This assumes that ServiceNow doesn't automatically terminate your session if your IP changes. I don't know if this is the case and have no way to check.

