---
title: Cloning: Laying the foundations for cloning
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

1. Intro: before you can even think about cloning your instances, you need to lay some groundwork
   2. these are activities you need to perform before you clone anything. Setting up and preparing for individual clones is given in [LINK TO NEXT ARTICLE]
   1. Some parts of this article will take longer or shorter, depending on how experienced you are and whether this is your instance's first-ever clone
2. think about what you're trying to achieve
   1. does this section actually belong in the first article?
   2. making all instances perfectly identical isn't usually a desirable outcome
   3. you need to think about what data is OK to exist in DEV, for example. And how much data do you want? Keeping old dummy data may be nice, but do you want years' worth of the stuff? Or are the last six months sufficient?
   4. you want to remove obsolete/abandoned config from lower environments to de-risk stuff
3. create a clone user in all target instances
4. Set up or review your clone profile(s)
   1. One for each instance (whether they're identical or not)
   2. need to consider what you want the instance to be like
   3. explain preservers and exclusions
   4. reviewing the profile should be an ongoing task in the back of the sysadmin's mind at all times, so that all sorts of random stuff can be added as it's identified
   5. reference the clone-profile article
5. issue a change freeze
   1. for simplicity's sake, this should include a moratorium on moving update sets between non-prod instances, too. (If strictly necessary, you can break this rule, but you need to be careful that you don't confuse yourself)
6. Clean up local update sets in all instances
   1. remove empty ones
   2. ignore any open-but-obsolete ones
7. clean up remote update sets in all instances
   1. retrieve remote update sets in each instance
   2. check if anything is OK to delete
   3. make sure that you do not retrieve remote update sets again after this

Before you even think about cloning, you'll need to lay some groundwork.

This article lists activities you need to perform before you clone _anything_. Setting up individual clones is explained in [LINK TO ARTICLE].

Some parts of this article will take longer or shorter, depending on how experienced you are and whether this is your instance's first-ever clone. You may find you can skip some sections, too.

## Create a clone user in all target instances

The clone runs "as" a user in the target instance. While you _can_ run a clone as yourself, it's usually better to create a dedicated clone user.

You'll need a user with a username (e.g. `clone_user`), a password, and the `clone_admin` and `soap` roles. For simplicity's sake, it's best to retain the same username and password across all target instances.















































































## Before you even _think_ about cloning

> instructions on determining the objective of the clone. who are the stakeholders? what liabilities are there? Is a clone actually necessary?

It's important to know what you're trying to achieve with the clone, and what challenges the clone will pose for you. Let's start by thinking about what a clone does.

It sounds obvious, but cloning is all about making all of your instances _identical_. This isn't always a desirable outcome, so beware.

> The idea behind cloning is to make all instances identical.

- what is cloning good for?
  - removing obsolete/abandoned config from sub-prod instances
  - making lower envs match prod as closely as possible
- when do we normally clone
  - depends on client. ServiceNow recommends at least quarterly (get citation)
  - clone before an upgrade
- when is cloning easy?
  - when there's not much config to preserve
  - when there's already not too myuch divergence between prod and non-prod
- when is it awkward?
  - lots of divergence
  - lots of open workstreams
  - lots of devs working on stuff
  - when PROD contains not just sensitive data (like most PRODs do) but extra-sensitive data, e.g. SecOps or HR
- **maybe all of the above belongs in its own article. it's plenty of content**

## Before all clones

There are many things you must do before any cloning can happen. If it's your first ever clone, then these steps may take ages. Fortunately, they get easier as you and your instances mature.

### Create a clone user account in all target instances

- can a web-service only account work?
- why you shouldn't use a real user
- what roles are required?
- create web-service only user in each instance to be cloned, called e.g. clone_admin.
- user needs admin and clone_admin role
- set up a password
- link that instance to PROD by creating a clone profile record (see next step)

### Set up your clone profile(s)

- you need one for each instance
- explain all the settings in the clone profile record

### Populate clone profile(s) with preservers and exclusions

- your aim is not only to prevent prod data from entering non-prod, but also preventing valuable dummy data from being destroyed
- explain that default profile is rubbish
- explain confusing related lists
  - make it clear how to make sure that the stuff that _looks_ like it's in the profile actually is in the profile
- explain that, even if you have a lovely clone profile, it's important to review it before every clone, to make sure it encompasses any new changes that were put in since the last clone
  - you may have installed an application that has a raft of new tables that need to be protected/preserved

**[DO I NEED TO MENTION CHANGE FREEZES HERE?]**



## Pre-clone activities

### Before you do anything else

#### Set up clone users in target instances

#### Set up clone profile

#### Populate clone profile with preservers and exclusions

#### 1. Issue a change freeze

Ensure that a change freeze is issued across all of your instances.

Make sure that all developers and other stakeholders are aware that they need to keep any of their active config safe in the clone target. (While it's stipulated here that all users should keep their own config safe, this clone guide actually involves _you_ protecting all config.)

Make sure, in particular, that nobody migrates anything up from the development instance during the change freeze.

If any emergency changes need to be pushed through during the clone period, make sure you keep thorough track of it, because it could otherwise cause you a big headache down the line. It might be safest to migrate emergency updates via XML, rather than through the conventional means.

#### 2. Review your clone profiles

Review the clone profiles you intend to use and check whether they still make sense for your business. For example, have any new products been installed into any of the instances that come with some new tables that need excluders/preservers? Does anything currently in development depend on any data that isn't captured in update sets (e.g. dummy data)?

Asking your devs about this doesn't normally yield a helpful response, which is highly annoying! Stress to them that this is highly important, as it can otherwise disrupt their workflow post-clone.

Think about the kind of data that nobody ever thinks about, e.g. categories, subcategories etc. Losing these things would be seriously irritating.

Note, also, that, if a table or field exists in the dev instance but not in production, you won't always be able to apply a preserver/exclusion. This data needs to be exported as XML and then re-imported after the clone.

#### 3. Clean up useless update sets in all target instances

In each instance that will be cloned, set all empty update sets to "Ignore". This will avoid any confusion and helps clean out old, useless config.

This script will help you identify any empty update sets. Make sure that they definitely _are_ empty before ignoring.

```js
var updateSetGr = new GlideRecord("sys_update_set");

// You can amend these queries to suit your specific needs
updateSetGr.addQuery("state", "!=", "complete");
updateSetGr.addQuery("state", "!=", "ignore");
updateSetGr.addQuery("name", "!=", "Default");

// 
// 
// 
// this script will return empty batch parents, which is not good
// adjust this script to exclude any update set that's in a batch, since batches never get in anyone's way
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