---
title: Filtering on externalId does not work properly in SCIM
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
date: 2025-01-01
category: servicenow
---

- explain what is meant by filtering on externalid
- explain that this would normally work fine if you're using somethinig like user_name or email as externalId
- if you're using a custom field, this causes problems
- workaround, which is suitable for some circumstances, is to prepopulate sys_scim_user table before provisioning
  - obvs not a good long-term solution, just good for one-off pre-provisioning

By default, whenever you provision anything with SCIM, an `externalId` value is sent. This helps the recipient of SCIM data (e.g. ServiceNow) coalesce incoming data with existing user accounts.

Before any other filtering is done, ServiceNow always checks to see whether a user exists with the same `externalId`. If it finds someone, it returns that user's `sys_id` and other data to the requesting platform (e.g. Entra).

Here's how ServiceNow does it:

1. Check `sys_scim_user` table. If it finds a record with a matching `external_id` value, then send it back to Entra.
2. If not, check the `sys_user` for someone whose `user_name` matches the given `externalId`.
3. If not, check for a matching email address.
4. If nothing is found, inform Entra that no matches are found.

(N.B.: The above has been ascertained as best as possible via experience, rather than any documentation.)

As you can see, it leaves some scenarios uncovered. For example, what happens if you're not using either email or username as `externalId`? Unless such a person is already within `sys_scim_user` (because they've been provisioned via SCIM already), you'll end up with a duplicate.
