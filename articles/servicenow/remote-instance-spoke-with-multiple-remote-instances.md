---
title: How to connect the Remote Instance Spoke to multiple remote instances
date: 2024-05-29
category: servicenow
---

ServiceNow's Remote Instance Spoke is a great, user-friendly tool for allowing two systems to keep each other's records harmonised.

There's one huge flaw, though: **it only supports one single remote instance**.

ServiceNow has hard-coded one specific connection alias into the Spoke's Flow Actions (true as of Washington). This is an inconvenient fact, because there are many use-cases for wanting to sync with _multiple_ instances.

This article will explain how to enable multiple remote connections.

> The Remote Instance Spoke supports exactly one remote instance out of the box.

## In a nutshell

The gist of the solution, no matter which Action you'd like to edit, is to set the connection alias for the Spoke dynamically.

The way to do this is to take a connection alias as an input for your Action and to plug it into the relevant REST step.

## Some context before you begin

The Remote Instance Spoke has been designed very inconsistently. Some Actions use Flow Data Streams, others process data in a different way. This can make unpicking it a little confusing at times.

Moreover, you need Integration Hub Professional or Enterprise to see and use Data Streams; if you only have a basic subscription, you may never be able to see precisely how a specific Action works under the hood.

The Spoke contains so many Actions that I can't cover them all in this article. If you run into questions or problems that I've not covered, you may need to improvise.

The good news is that the Spoke doesn't really do anything particularly adventurous: it makes a REST call to another instance, runs a `GET` or `POST` with a single record as a payload, and stuffs it into an import set.

In other words, if worst absolutely came to worst, you could build the logic from scratch without too much fuss.

## Sending local records to the remote instance (outbound synchronisation)

The solution for allowing multiple remote connections outbound is quite straightforward:

0. Make sure you're in the right scope, i.e. "ServiceNow Remote Instance Spoke". It doesn't work very well when you mix and match scopes.
1. Find the Flow Action that you would like to modify, e.g. "Export Record Using Import Set".
2. Create a copy of the Action (the OOB Action won't be editable).
3. Add a new input: a reference field that refers to the Connection & Credential Alias table.
4. In the REST Step of the Flow Action, instead of hard-coding the endpoint, put in your new input.

You must also follow the above steps for any dependent Actions, e.g. the Action that retrieves remote import sets.

## Retrieving remote records (inbound synchronisation)

The inbound actions are trickier, since they tend to use Data Streams.

I have never had access to Integration Hub Pro and so could never see the contents of the Data Stream used by the Spoke.

Without knowing what exactly a Data Stream Action is doing under the hood, I can't say for sure whether it's safe to clone the Action as we did for outbound connections. _Caveat lector._

If you're fortunate enough to have a Pro subscription, have a look to see what the Data Stream Action does and act accordingly.

For anyone else, the solution is fairly straightforward:

0. Make sure you're in the right scope, i.e. "ServiceNow Remote Instance Spoke". It doesn't work very well when you mix and match scopes.
1. Create a new Flow Action (don't copy the existing Action).
2. Create variables and a REST step similar to the outbound Actions. You'll need to change some bits of config, because we're retrieving, rather than sending.
3. Add logic to send the retrieved data into a local (not remote) import set.

It's not hugely complicated, though you'll need to write much of this code yourself, instead of relying on OOB code like we did for outbound connections.

In essence, all you are doing is making a REST call to the remote instance to retrieve a specific record.

### Potential pitfall for inbound sync: journal entries

The one thing that's not handled properly when running an inbound sync is journal fields (work notes and comments).

I couldn't find anything in the Spoke that suggests that this is handled at all. However, this might be where the Data Stream Action that I can't see does something clever.

If you can't download all un-synced comments via the Spoke, you might want to consider using ServiceNow's [Table API](https://docs.servicenow.com/bundle/washingtondc-api-reference/page/integrate/inbound-rest/concept/c_TableAPI.html) in your REST step. With it, you can query the `sys_journal_field` table.

Be careful about what you do with your retrieved journal fields, though: simply dumping them into the local `sys_journal_field` table won't properly associate a comment with its parent record. You'll have to transform it in some suitable way.

(Querying `sys_journal_field` has always struck me as bad practice, given that it's such an enormous table, but ServiceNow recommends it as a way to tackle the issue of journal fields.)
