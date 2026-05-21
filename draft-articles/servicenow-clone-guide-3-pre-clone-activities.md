---
title: Cloning: Pre-clone activities
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

1. intro: this article is about preparing for an indivisual clone. if you haven't lain the groundwork yet, go to [LINK TO PREVIOUS ARTICLE]
2. in source instance (usually PROD)
   1. (this section only needs to be completed once per set of clones)
   2. ignore all local update sets
   3. export any uncommitted remote update sets and store them in a safe place
3. in target instance
   1. back up the instance
   2. retrieve any remote update sets from lower instance (but don't commit anything)
      1. you should already have done this, per the previous article, but better safe than sorry
   3. preserve custom applications
   4. preserve non-default local update sets
   5. export any uncommitted remote uipdate sets and their contents as XML
   6. export list of installed plugins
   7. additional data exports
   8. identify things to test

### Issue a change freeze

## Preparing for an individual clone

### In the source instance

#### 1. Ignore all update sets

In the source instance (typically production), make sure _all_ local update sets that aren't named Default are set to "Ignore". If not, they'll have to be re-imported up all instances and it'll become unmanageable.

If a local update set is batched, then only the parent needs to be marked as "Ignore".

This script will do the work for you. However, check the query before running the script, to make sure there aren't any update sets that get incorrectly ignored, like sets called "Default 2":

```js
var updateSetGr = new GlideRecord("sys_update_set");
updateSetGr.addQuery("state", "!=", "ignore");
updateSetGr.addNullQuery("parent");
updateSetGr.addQuery("name", "!=", "Default");
// 
// 
// 
// 
// 
// make sure this script works. I've changed it from using an encoded query to an addQuery one
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
updateSetGr.query();
counter = 0; // Counter to verify that the correct amount of update sets are updated
while (updateSetGr.next()) {
    gs.info(++counter);
    updateSetGr.state = "ignore";
    updateSetGr.update();
}
```

#### 2. Export uncommitted config from PROD

Go to the Remote Update Sets **[ADD PAGE ROUTE]** page and export all uncommitted remote update sets as well as all of their contents in the form of XML **[ADD TABLE NAMES FOR BOTH OF THESE]**.

Yes, all this stuff will normally be copied down during the cloning process, but it's very helpful to have some files handy.

This won't be the last time you export XML during the clone process. Make sure you give the files clear names, referring to the instance that they've been extracted from, so that you can easily identify the file later on.

### In the target instance

#### 1. Back up the instance

Make sure that there's a recent backup of your instance, just in case. You can check this on [Now Support](https://support.servicenow.com/).

#### 2. Retrieve any remote update sets from lower instances, but don't commit

Go to the relevent Remote Instance **(get the proper name or a way to access the page)** and press Retrieve Remote Update Sets **(check that this is the correct wording)**.

Do not commit any of the update sets, though.

#### 3. Preserve any custom applications

Preserve any custom applications, as these aren't always captured in update sets. Ask your dev team to support you here. You can usually export an entire application via Studio or App Engine Studio.

[This article](https://www.servicenow.com/docs/bundle/yokohama-application-development/page/build/applications/task/preserve-applications-during-clone.html) provides some more info. **(check this link and see if there's any way to get a permalink)**

#### 4. Preserve non-default update sets

Preserve any open local update sets that aren't named "Default".

The easiest way to do this is to create a batch inside the Global scope for all of these.

Make sure you use the "Export to XML" UI Action (it's in the Related Links section of the page). You can only do this if you mark the batch as Complete.

Before you batch, check the open update sets for any that you no longer need, and ignore them.

#### 5. Export any uncommitted remote update sets and their contents as XML

Go into the `sys_remote_update_set` table and find any uncommitted sets that you would like to preserve. Export these as XML using the Export XML context-menu item.

Then go to the `sys_update_xml` table and find all records whose Remote Update Set is one of the sets you would like to export. Export these as XML, too.

#### 6. Export a list of all installed plugins

Export a list of all plugins installed since the last clone or upgrade.

The best way is to go to the `sys_plugins` table. Ensure that the ID and installation date columns are visible. The parent field is also useful sometimes. Export to Excel.

> It's a little clunky, but ServiceNow, at point of writing, doesn't have a better way to do this.

#### 7. Additional data exports

Export the following data, if applicable, and if not already covered by your clone profile:

- MID server config
- Data sources
- Integration endpoints and other parameters specific to your environment

Note that the way ServiceNow handles these items changes with every release. As such, it may not be necessary separately to export these items&mdash;you may be able to exclude and preserve them in the conventional way, instead.

#### 8. Identify things to test

Make a list of anything that you consider worth testing explicitly following the clone.

This will vary from instance to instance and from organisation to organisation, but instance branding, portal pages and custom apps are usually a good place to begin.