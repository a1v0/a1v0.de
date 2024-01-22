---
title: Record producers not showing up in ServiceNow portal search
date: 2023-12-12
---

Here's the scenario: you've just created a record producer in ServiceNow. You go into your portal's home page, type the necessary words into the search bar, but no results are found.

Where the heck is your record producer?

There are two reasons why the search result might be hiding. One is common, the other much less so. I will start with the less common one, on the assumption that you're unlikely to stumble upon this humble website unless you're at your wits' end with the rare problem.

## ServiceNow's text indexes

All search engines have an index; they make searching much faster and more efficient. ServiceNow, too, has text indexes (indices?) to catalogue any content you create on your portal, be it a record producer, a knowledge article, or anything else.

If you can't find content in your portal, it could be that there's a problem with a table's text index. This is especially true on a fresh instance: bugs can often appear during ServiceNow's seeding process, meaning things don't necessarily get initialised properly.

The solution is to look for **Text Indexes** in your left navigation menu. Once there, look for the relevant text index. If you're looking for a record producer, then the index is for the table `sc_cat_item`. If the index's State is "Not Started", then you've found the source of your problem!

Enter the text index record and click on the UI action at the bottom of the form called "Regenerate Text Index".

Voilà, the problem should now be fixed!

## Available For roles

The more likely cause of your problem has nothing to do with indexing. It's rather more banal: availability settings.

Have you made your record producer available for the right sort of user? Check the **Available For** and **Not Available For** related lists at the bottom of your record producer. Are the tables populated at all? Do the entries conflict with one another (e.g. is the same role in both related lists)?

Annoyingly, the Available For records don't work like ACLs. Instead of it giving you a list of roles to choose from, like you would in an ACL, you get a list of preconfigured types of user, called things like "Users with snc_internal". Make sure that that record truly does contain the role(s) you think it does.
