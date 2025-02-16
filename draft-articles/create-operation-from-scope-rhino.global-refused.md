---
title: How to fix "Create operation against 'table name' from scope 'rhino.global' has been refused due to the table's cross-scope access policy"
date: 2025-02-16
category: servicenow
---

We've all been there! "Create operation against 'table name' from scope 'rhino.global' has been refused due to the table's cross-scope access policy" is an error that has irritated generations of ServiceNow developers and will continue to do so for aeons to come.

This article will explain how to overcome it.

> **tl;dr:** You'll need to update your table access settings.

This problem usually arises not from a missing cross-scope access policy but simply from incorrect table config.

This is why you're most likely to experience this problem if you've just created a brand new table.

The solution is as follows:

0. Open the table settings, for example by going to **Configure > Table** in the context menu within one of the records of that table.
1. Open the Application Access tab.
2. Make sure that the accessibility settings match what you want to achieve: should it be accessible from all scopes? Should there be read/write/update/delete access from those scopes?

Once you've updated these settings, the bug should be fixed.
