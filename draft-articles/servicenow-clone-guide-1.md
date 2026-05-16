---
title: Cloning: A comprehensive guide to cloning your ServiceNow instance
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

## New plan

1. in this article, write an intro and give a list of sections. Like in GOV.UK, add a link with a right-arrow that takes you to the next item in the list
2. Split clone guide into separate documents, all with a title that means they show up in the correct order when listed

Headings:

1. intro
   1. why you might clone (and why you might not clone)
   2. different types of clone
   3. list of clone-guide pages
2. before your first ever clone (this title isn't so good. Maybe something like "Laying the foundations"?)
   1. make clear that this section is hopefully a one-off and you'll not need to do it every time
   2. identify sequence of clones and what each clone should achieve etc.
3. Preparing for one clone aka pre-clone activities
4. Scheduling the clone
   1. also include stuff that happens during the clone
5. After one clone aka post-clone activities
6. After all clones

<!-- heading depth doesn't actually matter so much, after all. Maybe it's best to start this article from scratch -->

I am always perturbed that ServiceNow has never published any real guidance on cloning. In theory, it's an easy process, but reality typically gets in the way.

ServiceNow's own advice tends to assume that the cloner's aim is to destroy all config that isn't already in production which, for many organisations using ServiceNow, is not a viable approach.

This clone guide is for anybody who is cloning instances that contain in-flight configuration that has not yet been approved for release. It's intended as a starting point: your instance might contain plugins that require special treatment, for example.

If you have any suggestions or corrections, please don't hesitate to [get in touch](/contact).

Skip to the guide's [table of contents](#clone-guide-sections).

## Reasons to clone

There are several reasons you might want to clone over your ServiceNow instances. The reasons fall into these categories:

**Clearing out experimental/unused configuration:** over time, our sub-prod instances (especially development and sandbox environments) diverge from production. They contain a lot of experimental changes that never make it to prod. These things can get in the way of your development work, can cause problems during UAT, and can cause big trouble on go-live days.

A clone helps to clear out all this unused stuff, so that your development environment matches prod as closely as possible.

**De-risking updates/upgrades:** updates and upgrades can have major impacts on our instances. A typical upgrade process involves upgrading the development environment first and assessing the results. If all is well, you would proceed to higher instances. If dev and prod are not well aligned, this process becomes risky.

Cloning makes sure that the post-upgrade checks you do in the dev environment are as representative of prod as they can reasonably be.

**Creating a blank slate:** sometimes, we want an exact copy of prod (with or without all the data) for testing purposes. This applies chiefly to pre-prod environments (wherein we wan't to simulate real prod work) and sandbox environments (in which we want to experiment on a clean slate).

## How often should I clone?

Clone frequency is a subjective issue and can be a cause of tension between sysadmins and clients.

Some people clone weekly, others quarterly. It mostly depends on your development pipeline: do you release new features every single week? Is the level of in-flight config at a level where frequent cloning isn't inconvenient and won't slow you down?

Clients often think that frequent cloning is amazing, because it "destroys tech debt," but it can definitely be a burden. It takes time, it requires a change freeze, it can be risky.

Not to mention the fact that the benefits a clone provides aren't always very big. You might do very little dev work, overall, so that dev and prod aren't particularly divergent. A clone will hardly benefit you here, no matter whether the client wants it.

## Clone guide sections

<!-- Make sure these titles match the article titles -->

1. **A comprehensive guide to cloning your ServiceNow instance**
2. [Link to other article](/)
3. [Link to other article](/)
4. [Link to other article](/)
5. [Link to other article](/)
6. [Link to other article](/)

# add to clone article: the script to identify empty update sets needs either to check for empty batch parents, or add a comment to show that it'll return empty batch parents
# clone script to ignore update sets in prod: gs.info(++counter + " " + gr.name); (can't remember what I meant when I wrote this...)
# explain how to export remote update set contents by going to sys_update_xml
# do I need a bit about preparing a clone user for each clone profile?
