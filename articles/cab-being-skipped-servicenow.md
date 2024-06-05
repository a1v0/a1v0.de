---
title: CAB being skipped in ServiceNow, despite correct config
date: 2024-06-05
---

Organisations like to customise the hell out of the Change process in ServiceNow, which can cause all sorts of bugs. This article is specifically for the weird case where CAB is being skipped, in spite of correct config.

This means that your Change model is correct, and a designated CAB group is specified.

The reason why CAB would be skipped despite a correctly configured change process is that the CAB group is inactive.

Activating and deactivating groups is something that can be done often during the development process for various reasons. It's easy to forget to reactivate a group, hence the problem.

Really, I think ServiceNow needs to log this fact somewhere, e.g. in a worknote. However, there doesn't seem to be much specific error handling inside the OOB code that controls the Change process.

> **Useful note:** CAB approval might be triggering for admin users, while not for regular users.
