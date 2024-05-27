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

## Some context before you begin

The Remote Instance Spoke has been designed very inconsistently. Some Actions use Flow Data Streams, others ingest data in a different way. This can make unpicking it a little confusing at times. Moreover, you need Integration Hub Professional or Enterprise to see and use Data Streams, which means you may never be able to see precisely how a specific Action works.

The Spoke contains so many Actions that I can't cover them all in this article. If you run into questions that I've not covered, you might need to improvise.

The good news is that the Spoke doesn't really do anything particularly adventurous: it makes a REST call to another instance, runs a `GET` or `POST` with a single record as a payload and stuffs it into an import set.

In other words, if worst absolutely came to worst, you could build the logic from scratch without too much fuss.

## Sending local records to the remote instance (outbound synchronisation)

The solution for outbound connections is quite straightforward.

1. Find the Flow Action that you would like to modify, e.g. Update Remote Records Using Import Set **[VALIDATE THE NAME OF THE ACTION]**
2. Create a copy of the Action (the OOB Action won't be editable in any case)
3. Add a new input: reference field, referring to the Connection & Credential Alias table
4. In the Script Step of the Flow Action, instead of hard-coding the endpoint, put in your new input

You must also follow the above steps for any dependent Actions, e.g. the action that retrieves remote import sets.

## Retrieving remote records (inbound synchronisation)
