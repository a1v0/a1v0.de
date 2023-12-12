---
title: Record producers not showing up in ServiceNow portal search
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
date: 2023-11-15
---

- intro: explain problem, use as many keywords as you can
  - put non-obvious solution before obvious
  - explain that this is because you're unlikely to find this humble little site if you're having an obvious problem
- not obvious solution
  - No search results in CSM
  - Go to Text Indexes
  - Check that sc_cat_item has been indexed
- obvious solution:
  - available for and not available for
  - roles of user trying to access

Here's the scenario: you've just created a record producer in ServiceNow. You go into your portal's home page, type the necessary words into the search bar, but no results are found.

Where the heck is your record producer?

There are two reasons for this problem. One is obvious, the other much less so. I will start with the less obvious one, on the assumption that you're unlikely to stumble upon this humble website unless you're at your wits' end.

## ServiceNow's text indexes

All search engines have an index. It makes searching much faster and more efficient. ServiceNow, too, has text indexes (indices?) to catalogue any content you create on your portal, be it a record producer, a knowledge article, or anything else.

If you can't find content in your portal, it could be that there's a problem with a table's text index. This is especially true on a fresh instance: bugs can often appear during ServiceNow's setup, meaning things don't necessarily get initialised properly.

The solution is to look for **Text Indexes** in your left nav. Once there, look for the relevant text index. If you're looking for a record producer, then the index is for the table `sc_cat_item`. If the State is "Not Started", then you've found the source of your problem!

Enter the text index record and click on the UI action at the bottom of the form called "Regenerate Text Index".

Voilà, the problem should now be fixed!
