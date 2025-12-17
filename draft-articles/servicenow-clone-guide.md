---
title: TITLE GOES HERE
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
category: servicenow
---

I am always perturbed that ServiceNow has never published any real guidance on cloning. In theory, it's an easy process, but reality typically gets in the way.

This clone guide is for anybody who is cloning instances that contain in-flight configuration that has not yet been approved for release. It's intended as a starting point: your instance might contain plugins that require special treatment, for example.

If you have any suggestions or corrections, please don't hesitate to [get in touch](/contact).

## Pre-clone activities

### Before you do anything else

> **NOTE TO SELF: THIS BULLET-POINT LAYOUT WILL LIKELY LOOK CRAP IN THE ARTICLE. TURN IT INTO A NUMBER LIST WITH SUBHEADINGS, RATHER THAN AN ORDINARY `<ol>`**
> **ALSO GO THROUGH ALL BITS OF CODE AND ADD COMMENTS WHERE SENSIBLE ETC.**

1. Ensure that a change freeze is issued across all of your instances. Make sure that all developers and other stakeholders are made aware that they need to keep any of their active config safe in the clone target. Make sure, in particular, that nobody migrates anything up from the development instance during the change freeze.
  - While it's stipulated above that all users should keep their own config safe, this clone guide actually involves _you_ protecting all config.
  - If any emergency changes need to be pushed through during the clone period, make sure you keep thorough track of it, because it could otherwise cause you a big headache down the line. Crucially, it might be safest to migrate emergency updates via XML, rather than through the conventional means.
2. Review the clone profiles you intend to use and check whether they still make sense for your business. For example, have any new products been installed into any of the instances that come with some new tables that need excluders/preservers? Does anything currently in development depend on any data that isn't captured in update sets (e.g. dummy data)?
  - Normally, you won't get a good response from your devs, which is highly annoying! Stress to them that this is highly important, as it can otherwise disrupt their workflow post-clone.
  - Think about the kind of data that nobody ever thinks about, e.g. categories, subcategories etc. Losing these things would be seriously irritating.
  - If a table exists in the dev instance but not in production, you won't always be able to apply a preserver/exclusion. This data needs to be exported as XML and then re-imported after the clone.
3. In each instance that will be cloned, set all empty update sets to "Ignore". This will avoid any confusion and helps clean out old, useless config.
  - This script will help you identify any empty update sets. Make sure that they definitely _are_ empty before ignoring.
  - var updateSetGr = new GlideRecord("sys_update_set");
  - updateSetGr.addEncodedQuery("state!=complete^ORstate=NULL^name!=Default^ORname=NULL^state!=ignore^ORstate=NULL^name!=Default 1^ORname=NULL^name!=Default 2^ORname=NULL");
  - updateSetGr.query();
  - while (updateSetGr.next()) {
  - var updatesGr = new GlideRecord("sys_update_xml");
  - updatesGr.addQuery("update_set", updateSetGr.getUniqueValue());
  - updatesGr.query();
  - if (updatesGr.getRowCount() == 0) {
  - gs.info(updateSetGr.getValue("name"));
  - }
  - }
4. Ask your devs to go through all other extant update sets and see whether they're still needed. This applies to any open update sets in dev, as well as any uncommitted retrieved update sets in all other instances, including production. Doing this helps reduce your overall tech debt and reduces the risk surface of the clone.
  - If you remove a remote update set from an instance, be sure to ignore it in all previous instances, too. This ensures it doesn't come in again.
5. Now that you've thinned out the update sets, go into each instance in dev-to-prod order and retrieve all remote update sets.

### In the source instance

1. In the source instance (typically production), make sure _all_ local update sets that aren't named Default are set to "Ignore". If not, they'll have to be re-imported up all instances and it'll become unmanageable.
  - If a local update set is batched, then only the parent needs to be marked as "Ignore".
  - This script will do the work for you. However, check the query before running the script, to make sure there aren't any update sets that get incorrectly ignored, like sets called "Default 2":
  - var gr = new GlideRecord("sys_update_set");
  - gr.addEncodedQuery("state!=ignore^ORstate=NULL^parentISEMPTY^name!=Default^ORname=NULL");
  - gr.query();
  - counter = 0; // Counter to verify that the correct amount of update sets are updated
  - while (gr.next()) {
  - gs.info(++counter);
  - gr.state = "ignore";
  - gr.update();
  - }
2. Go to the Remote Update Sets **[ADD PAGE ROUTE]** page and export all uncommitted remote update sets as well as all of their contents in the form of XML **[ADD TABLE NAMES FOR BOTH OF THESE]**. Yes, all this stuff would be copied down during the cloning process, but it's very helpful to have some files handy.
  - This won't be the last time you export XML during the clone process. Make sure you give the files clear names, referring to the instance that they've been extracted from, so that you can easily identify the file later on.







Sections:
- pre-clone activities
  - before everything
  - in source instance
  - in target instance
- post-clone activities
  - after one clone
  - after all clones
Make sure it's all zero-indexed
