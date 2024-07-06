---
title: What is a "display only" subscription in ServiceNow?
date: 2024-04-30
category: ServiceNow
---

In your list of subscriptions, you may have encountered a subscription type of "display only". What on earth is it?

It's not a very well named subscription type. Sounds like it might mean "We can _show_ you the subscription but you're not allowed to use it unless you pay extra". Thankfully, it doesn't mean that.

"Display only" simply means that ServiceNow doesn't offer "measurement support" or allocation, but you _are_ entitled to use the subscription.

## Measurement support and allocation

Some subscriptions allow you to allocate usage in certain ways, e.g. on a per-user basis. For instance, if you purchase 100 licences for the `itil` role, you need to allocate them to specific users. More info on that [here](https://docs.servicenow.com/bundle/vancouver-platform-administration/page/administer/subscription-management/reference/types-subscription-v2.html).

A display-only subscription simply means that it can't be allocated. You buy it and that's all there is to it. In other words, it's a one-off purchase.

A good example is the Agile 2.0 module. It's a module that everybody on a project team will need to use, so ServiceNow just gives every user access to it (so long as they have the right roles, of course). Agile users aren't licensed individually.

The subscription table, which ordinarily shows you subscription allocations, puts display-only subscriptions there for informational purposes only, à la "You can't measure this one, but it _is_ a subscription, so we'll put it here anyway".

> It's a far too confusing name for what it is. The fact that this article has to exist is testimony to that fact.
