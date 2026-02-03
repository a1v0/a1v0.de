---
title: A comprehensive guide to cloning your ServiceNow instance
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

ServiceNow's own advice tends to assume that the cloner's aim is to destroy all config that isn't already in production which, for many organisations using ServiceNow, is not a viable approach.

This clone guide is for anybody who is cloning instances that contain in-flight configuration that has not yet been approved for release. It's intended as a starting point: your instance might contain plugins that require special treatment, for example.

If you have any suggestions or corrections, please don't hesitate to [get in touch](/contact).

> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>
> it should be possible to reduce the nesting depth of the headings by recategorising the to-dos into stuff to be done before anything, and then stuff in preparation for an actual clone. just need to find the appropriate wording for it.
>

## Pre-clone activities

### Before you do anything else

#### 1. Issue a change freeze

Ensure that a change freeze is issued across all of your instances.

Make sure that all developers and other stakeholders are aware that they need to keep any of their active config safe in the clone target. (While it's stipulated here that all users should keep their own config safe, this clone guide actually involves _you_ protecting all config.)

Make sure, in particular, that nobody migrates anything up from the development instance during the change freeze.

If any emergency changes need to be pushed through during the clone period, make sure you keep thorough track of it, because it could otherwise cause you a big headache down the line. It might be safest to migrate emergency updates via XML, rather than through the conventional means.

#### 2. Review your clone profiles

Review the clone profiles you intend to use and check whether they still make sense for your business. For example, have any new products been installed into any of the instances that come with some new tables that need excluders/preservers? Does anything currently in development depend on any data that isn't captured in update sets (e.g. dummy data)?

Asking your devs about this doesn't normally yield a helpful response, which is highly annoying! Stress to them that this is highly important, as it can otherwise disrupt their workflow post-clone.

Think about the kind of data that nobody ever thinks about, e.g. categories, subcategories etc. Losing these things would be seriously irritating.

Note, also, that, if a table exists in the dev instance but not in production, you won't always be able to apply a preserver/exclusion. This data needs to be exported as XML and then re-imported after the clone.

#### 3. Clean up useless update sets in all target instances

In each instance that will be cloned, set all empty update sets to "Ignore". This will avoid any confusion and helps clean out old, useless config.

This script will help you identify any empty update sets. Make sure that they definitely _are_ empty before ignoring.

```js
var updateSetGr = new GlideRecord("sys_update_set");

// You can amend these queries to suit your specific needs
updateSetGr.addQuery("state", "!=", "complete");
updateSetGr.addQuery("state", "!=", "ignore");
updateSetGr.addQuery("name", "!=", "Default");

updateSetGr.query();

while (updateSetGr.next()) {
    var updatesGr = new GlideRecord("sys_update_xml");
    updatesGr.addQuery("update_set", updateSetGr.getUniqueValue());
    updatesGr.query();
    if (updatesGr.getRowCount() == 0) {
        gs.info(updateSetGr.getValue("name"));
    }
}
```

#### 4. Clean up extant update sets

Ask your devs to go through all other extant update sets and see whether they're still needed.

This applies to any open update sets in your dev instance, as well as any uncommitted-but-retrieved update sets in all other instances, including production. Doing this helps reduce your overall tech debt and reduces the risk surface of the clone.

Note that, if you remove a remote update set from an instance, be sure to ignore it in all previous instances, too. This ensures it doesn't come in again.

There may also be open update sets in other non-prod instances that need to be inspected.

#### 5. Retrieve all remote update sets

Now that you've thinned out the update sets, go into each instance in dev-to-prod order and retrieve all remote update sets.

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

### 9. Schedule the clone

Now you are ready to schedule the clone.

> Make sure you select the correct instance and clone profile. (Pardon the patronising tone, but it's easily done!)

You need to be on hand at the start of the clone, just to ensure that it starts successfully. Once the clone has begun, you'll need to check in with it every 30 minutes or so.

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

### After all clones

#### 1. Check local updates sets are as they should be

Check&mdash;and ask the dev team to check&mdash;whether all in-progress update sets are as they should be. Devs need to be able to resume their development activities pretty much where they left off.

### 2. Review clone profile

Clone profiles should be reviewed after every clone. There's always something else you could add to them for a smoother experience.

Ask anybody who uses non-production instances (that'll mostly be developers and testers) to report anything unexpected, e.g. missing data or buggy pages.

Make a note of any observations and incorporate these findings into your clone profile for next time.

Make sure, especially, that production data has not made it into non-production environments. Such data often creeps into the instances via tables that you didn't know existed. Some data may be sensitive, even if it's not personal data, e.g. knowledge articles. Always check with your stakeholders if in doubt.

> It's vital to ensure you've not unintentionally cloned production data into a non-prod instance.




# Sections:
# - pre-clone activities
#   - before everything
#   - in source instance
#   - in target instance
# - post-clone activities
#   - after one clone
#   - after all clones

# do I need a bit about preparing a clone user for each clone profile?