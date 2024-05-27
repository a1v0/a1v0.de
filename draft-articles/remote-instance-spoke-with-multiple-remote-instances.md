---
title: How to connect the Remote Instance Spoke to multiple remote instances
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

- problem: RIS can only handle one remote connection
  - this is hard-coded into the Flow Actions, annoyingly
  - caveat: the solution here is a generic EXPORT action (Export record using import set) and doesn't necessarily work with other actions
    - also doesn't work for generic import action
      - to get it to work, you need Integration Hub Pro or Enterprise and access to Data Streams. Otherwise you'll not be able to a) see what the Action actually does and b) to edit the action
    - Spoke is inconsistently designed
    - add consolation that the Spoke is pretty darned simple and can easily be made from scratch
- solution:
  - preface: make sure you do everything in the correct scope
  - clone flow actions, add in a variable for Connection Alias
  - update any reference to the flow action

ServiceNow's Remote Instance Spoke is a great, user-friendly tool for allowing two systems to keep each other's records harmonised.

There's one huge flaw, though: **it only supports one single remote instance.** ServiceNow has hard-coded one specific connection alias into the Flow Actions. This is an inconvenient fact, because there are many use-cases for wanting to sync with multiple instances.

This article will explain how to enable multiple remote connections.

> The Remote Instance Spoke supports exactly one remote instance out of the box.

## Sending local records to the remote instance (outbound synchronisation)

## Retrieving remote records (inbound synchronisation)
