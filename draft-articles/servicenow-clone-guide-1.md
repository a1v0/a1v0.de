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

I am always perturbed that ServiceNow has never really published any thorough guidance on cloning. In theory, it's an easy process, but reality typically gets in the way.

ServiceNow's own advice tends to assume that the cloner's aim is to destroy all config that isn't already in production which, for many organisations using ServiceNow, is not a viable approach.

This clone guide is for anybody who is cloning instances that contain in-flight configuration that has not yet been approved for release. It's intended as a starting point: your instance might contain plugins that require special treatment, for example.

If you have any suggestions or corrections, please don't hesitate to [get in touch](/contact).

[Skip to the guide's [table of contents](#clone-guide-sections).]

## Reasons to clone

There are several reasons you might want to clone over your ServiceNow instances. The reasons fall into these categories:

### Clearing out experimental/unused configuration

Over time, our sub-prod instances (especially development and sandbox environments) diverge from production. They contain a lot of experimental changes that never make it to prod, not to mention applications you may have speculatively installed.

These things can get in the way of your development work, can cause problems during UAT, and can cause big trouble on go-live days.

A clone helps to clear out all this unused stuff, so that your development environment matches prod as closely as possible.

### De-risking updates/upgrades

Updates and upgrades can have major impacts on our instances. A typical upgrade process involves upgrading the development environment first and assessing the results. If all is well, you would proceed to higher instances. If dev and prod are not well aligned, this process becomes risky.

Cloning makes sure that the post-upgrade checks you do in the dev environment are as representative of prod as they can reasonably be.

### Creating a blank slate

Sometimes, we want an exact copy of prod (with or without all the data) for testing purposes. This applies chiefly to pre-prod environments (wherein we wan't to simulate real prod work) and sandbox environments (in which we want to experiment on a clean slate).

## How often should I clone?

Ideal clone frequency is a subjective issue and can be a cause of tension between sysadmins and clients.

Some people clone weekly, others quarterly. It mostly depends on your development pipeline: do you release new features every single week? Is the level of in-flight config at a level where frequent cloning isn't inconvenient and won't slow you down?

Clients often think that frequent cloning is amazing, because it "destroys tech debt," but it can definitely be a burden. It takes time, it requires a change freeze, it can be risky.

Not to mention the fact that the benefits a clone provides aren't always very big. You might do very little dev work, overall, so that dev and prod aren't particularly divergent. A clone will hardly benefit you here, no matter how badly the client wants it.

## Is cloning easy?

The simplicity of a clone really depends on your organisation. Some instances are chaotic, full of in-flight work and tech debt, others are quite clean.

**When is cloning easy?** When there isn't much unreleased configuration to preserve and/or when prod and non-prod don't diverge by a lot.

**When is cloning awkward?** Lots of divergence between instances, many open workstreams, many people working on many different things. These things all cause headaches for cloners.

Additionally, cloning can be tricky when production contains extra-sensitive data (e.g. HR or SecOps), because making sure that none of that sensitive data has been cloned down by mistake can be challenging.

> Regular release cycles make cloning much easier, because you need to support less tech debt.

## Clone guide sections

<!-- Make sure these titles match the article titles -->

1. **A comprehensive guide to cloning your ServiceNow instance**
2. [Link to other article](/)
3. [Link to other article](/)
4. [Link to other article](/)
5. [Link to other article](/)
6. [Link to other article](/)

# ADD ONE OF THOSE RIGHT-ARROW BUTTONS LIKE IN GOV.UK TO GUIDE THE USER TO THE NEXT ARTICLE

