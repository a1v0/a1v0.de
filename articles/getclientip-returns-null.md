---
title: getClientIP returns null in ServiceNow
date: 2024-06-04
category: ServiceNow
---

If you're running a script in which you need to know the IP address of the current session, but all you're getting is `null`, then keep reading.

This article explains why `gs.getSession().getClientIP()` returns `null` in some circumstances. It also offers a potential workaround.

> The `getClientIP()` method basically always works, with few, specific exceptions. When it fails, it returns `null`.

## Why do we sometimes get `null`?

I'm honestly not 100% sure why `getClientIP()` sometimes returns a `null` value. In every scenario that I tested, I was able to use other `GlideSession` methods, like `getRoles()`, so why did `getClientIP()` cause trouble?

I have some guesses as to why, all of which could easily be wide of the mark:

0. Some scripts relating to login (e.g. installation exits) execute before the `GlideSession` is initialised. It is possible that there is a point at which some scripts run which is _after_ the `GlideSession` object has been initialised but _before_ the IP address has been entered.
    - It sounds a bit implausible, but ServiceNow can build most of the `GlideSession` on its own. The roles, for example, are taken from the `sys_user_has_role` table. The IP address, on the other hand, requires input from the client and could, in theory, be added by a separate process at a later date.
1. IP addresses can change, especially if using a VPN. As such, it's conceivable that there is a background process that keeps track of your current IP address and regularly updates the `GlideSession` object accordingly. However, if a script runs asynchronously, it might not have access to the most up-to-date IP, and therefore falls back on returning `null`.
    - This assumes that ServiceNow doesn't automatically terminate your session if your IP changes. I don't know if this is the case and have no way to check.

## Alternatives to `getClientIP()`

I was able to find two locations which store the IP address of a logged in user.

### `sys_user_login_history`

The `sys_user_login_history` table stores details of every login, including times, details of success or failure, login methods and, crucially, IP addresses.

Pros:

- The size of this table can vary, depending on your organisation, but it's at least an order of magnitude smaller than the alternative below.
- Its normal size allows you to create business rules which won't impact system performance.
- It's simple to use and unequivocal. It's easy to find precisely the right record.

Cons:

- The table's records get updated by the system. My assumption is that the updates happen only when a session ends, but I don't know for sure. Would this record get updated if an IP address changes in the middle of a session?

On balance, I'd say `sys_user_login_history` is reliable as a source of truth. It is up to you to decide how seriously to take the edge case of the variable IP.

### `syslog_transaction`

It is perhaps my least favourite ServiceNow table, but `syslog_transaction` _does_ log the IP address of each transaction.

The table, instead of logging transactions against specific `sys_user` records, lists transactions against session IDs. These can be obtained using `gs.getSessionID()`.

Pros:

- The IP address is logged against individual transactions, meaning that, should the IP change mid-session, you'll be able to see it.

Cons:

- It's a gigantic table. Querying it, especially if you query it regularly, will impact system performance.
- It receives a tonne of inserts per second. Any business rule that runs here will be executed an absurd number of times and will impact performance.
- It logs all transactions, even invisible, behind-the-scenes ones. Any query you run will return plenty of results; it's pretty wasteful, in that regard.

Basically, try to avoid using `syslog_transaction` if you can avoid it.
