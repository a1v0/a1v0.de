---
title: Cloning: Post-clone activities
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

1. intro: this article is about what to do after one clone. next article (ADD LINK) is for cleaning up after one clone
2. identify missing plugins
3. install missing plyugins
   1. don't bother with any that you no longer need
4. insert remote updates from higher instance
5. install local update sets
6. ignore local batch
7. import in-progress update sets
8. insert uncommitted remote update sets
9. post-clone checks (i.e. testing the stuff you identified before the clone)
10. "if something went wrong"? something about rolling back?

## After an individual clone

## Post-clone activities

### After one close

#### 1. Identify missing plugins

Find out which plugins are missing since the clone. This can be done by exporting a list of installed plugins from `sys_plugins`, as you did before.

Depending on the amount of plugins, you may be able to see which plugins are missing very easily. Otherwise, take the following steps:

1. Copy the list of plugins from the pre-clone instance into the spreadsheet.
2. Add a `COUNTIF` function in Excel to check how often each plugin ID exists in your combined list. If something appears only once, then this is part of the delta.

#### 2. Install missing plugins

Install any plugins as necessary. Your list might contain plugins that you don't need anymore, so use this as an opportunity to purge old config.

The list may contain plugins that you can't find in the Plugin Manager. This is normal and stems from the fact that ServiceNow doesn't really have a good way to get a user-friendly overview of installed plugins. It's unlikely to be the end of the world if you can't installed all plugins at this stage.

#### 3. Insert remote update sets from higher instances

Insert all remote update sets that you exported from all higher instances, and their contents. Put them all into one big batch.

This script will automate the process for you, so that you don't need to switch scope all the time:

```js
// Script to create parent
var parentGr = new GlideRecord("sys_remote_update_set");
parentGr.initialize();
parentGr.name = "Post-clone batch";
parentGr.description = "Post-clone batch";
var PARENT = parentGr.insert();

var batchedUpdateSetGr = new GlideRecord("sys_remote_update_set");
batchedUpdateSetGr.addQuery("state", "!=", "committed");
batchedUpdateSetGr.addNullQuery("parent");
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
batchedUpdateSetGr.query();

var counter = 0; // Counter to verify that the correct amount of update sets are updated
while (batchedUpdateSetGr.next()) {
    gs.info(++counter);
    batchedUpdateSetGr.parent = PARENT;
    batchedUpdateSetGr.update();
}
```

Your batch might have a mountain of preview errors. It's often a tricky process to work through these. However, if many of the errors relate to one particular thing, then it could be that you are missing a plugin. Install it, re-preview the batch, and then, hopefully, you'll have far fewer errors to resolve.

> Make sure you install all plugins _before_ skipping/accepting updates.

Work through all the preview errors and then commit. This will make your instance behave similar to the way it did prior to the clone, minus any purged config.

#### 4. Ignore local batch

Once you've committed the batch, find the local update set that corresponds to that batch. Set its state to "Ignore".

This will prevent all those updates from being re-imported up the chain of instances. Since they exist in all higher instances, there's no need to migrate them upwards.

#### 5. Import in-progress update sets

Import all open update sets from before the clone. You can import by loading the exported XML file into the instance, then visiting the Remote Update Sets table **(check that this is correct and/or well phrase)**.

Find the newly created local update sets for the imported ones and mark them as In Progress, so that you can continue to work on them.

#### 6. Insert uncommitted remote update sets

Insert all uncommitted remote update sets and all their contents. Don't commit them into the system.

**Do not** press "Retrieve Remote Update Sets", whatever you do! Doing so can cause you a major headache.

#### 7. Post-clone checks

Perform all post-clone checks that you identified before the clone, e.g. branding and portals.

Your client can also support you here. They may be able to spot things that you've not noticed, especially if you're a jaded, ivory-tower system adminisatrator who seldom uses the instance to perform everyday tasks.
