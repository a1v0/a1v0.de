---
title: Contextual search not showing all results
date: 2024-11-13
category: servicenow
---


You've configured your Contextual Search functionality in ServiceNow and it seems to be working. But something's not quite right: "Why is it only showing me _some_ of the results I'm expecting," you ask yourself.

There are two main reasons for this, assuming that you have configured the Contextual Search feature correctly.

## Available For and Not Available For

Contextual Search respects all visibility rules for knowledge articles and catalog items. If a user is not allowed to see or access certain cat items or articles, they will not appear in the Contextual Search.

Make sure that the thing you are expecting to see in the search is visible to the users who are affected by the issue.

Check for potentially contradictory Available For and Not Available For values on the catalog items.

## Your text indexes need updating

You may have fallen foul of an out-of-date text index. I'm not sure why text indexes in ServiceNow aren't always up to date, but sometimes one finds oneself in that situation.

If the text index is outdated or empty, then the Contextual Search cannot provide accurate results.

To remedy this, go to **System Definition > Text Indexes**. You will be confronted with a table of various text indexes.

Filter the list to show only those where the state is Not Started.

Open any whose name looks relevant. For example, if you're having trouble with knowledge-related search results, open any in the list that look like they may have something to do with the knowledge base.

Inside the record, click the Regenerate Text Index UI action. This will trigger the indexing process and, within moments, your Contextual Search will be working again.
