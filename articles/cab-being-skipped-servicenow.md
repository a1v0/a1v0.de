---
title: CAB being skipped in ServiceNow, despite correct config
date: 2024-06-05
---

Organisations like to customise the hell out of the Change process in ServiceNow, which can cause all sorts of bugs. However, this article is specifically for the weird case where CAB is being skipped, _in spite of_ correct config.

This means that your Change model is correctly configured and a designated CAB group is specified.

The reason why CAB would be skipped despite a correctly configured change process is that **the CAB group is inactive**.

Activating and deactivating groups is something that can be done often during the development process for various reasons. It's easy to forget to reactivate a group, hence the problem.

Really, I think ServiceNow needs to log this fact in a work note, e.g. "CAB approval skipped to due inactive CAB group". After all, skipping CAB unintentionally is quite serious. However, there doesn't seem to be much specific error handling inside the OOB code that controls the Change process; all existing error messages are fairly generic.

> **Useful note:** CAB approval might be triggering for admin users, while not for regular users, even though it's the same inactive CAB group being asked to approve.
