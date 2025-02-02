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

0. Check `sys_scim_user` table. If it finds a record with a matching `external_id` value, then send it back to Entra.
1. If not, check the `sys_user` for someone whose `user_name` matches the given `externalId`.
2. If not, check for a matching email address.
3. If nothing is found, inform Entra that no matches are found.

(N.B.: The above has been ascertained as best as possible via experience, rather than any documentation.)

As you can see, it leaves some scenarios uncovered. For example, what happens if you're not using either email or username as `externalId`? Unless such a person is already within `sys_scim_user` (because they've been provisioned via SCIM already), you'll end up with a duplicate.

## How to overcome the duplication problem

There's one workaround that I was able to use on my project, where we were using a custom field to store the value passed in via the `externalId` field. It's a workaround that is useful when there's only one source of user provisioning in the system.

0. Copy every single existing user into the `sys_scim_user` table, specifying their `external_id` field as appropriate. This prevents duplication for all existing users.
1. Add secondary field matching to Entra as a fail-safe, in case some user accounts are created manually before being properly provisioned via SCIM. This will help prevent duplication for the users not already in `sys_scim_user`.
2. Ensure the custom field you're using to store the `externalId` within `sys_user` enforces uniqueness. This means that, even if the matching fails, SCIM won't be able to create a duplicate user because the `sys_user` table already contains that particular `externalId`.

The combination of these actions and fail-safes made provisioning nearly perfect.

We occasionally had users whose provisioning failed because of unique key violations (through point 2 above). These were rare, but also they caused obvious issues for users. Because the problems were noticeable to the end user, they raised a service request, which alerted the team in charge of provision that a specific case had to be taken care of manually.
