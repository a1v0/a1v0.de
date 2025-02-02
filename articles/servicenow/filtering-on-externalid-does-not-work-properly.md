---
title: Filtering on externalId does not work properly in SCIM
date: 2025-02-02
category: servicenow
---

By default, whenever you provision anything with SCIM, an `externalId` value is sent. This helps the recipient of SCIM data (e.g. ServiceNow) coalesce incoming user data with existing user accounts.

Before any other filtering is done, ServiceNow always checks to see whether a user exists with the same `externalId`. If it finds someone, it returns that user's `sys_id` and other data to the requesting platform (e.g. Entra).

Here's ServiceNow's process (roughly):

0. Check `sys_scim_user` table. If it finds a record with a matching `external_id` value, then send it back to Entra.
1. If not, check the `sys_user` table for someone whose `user_name` matches the given `externalId`.
2. If not, check for a matching email address.
3. If nothing is found, inform Entra that no matches are found.

(N.B.: The above has been ascertained as best as possible via experience, rather than any documentation.)

As you can see, it leaves some scenarios uncovered. For example, what happens if you're not using either email or username as the `externalId` coalesce field?

Unless a person is already within `sys_scim_user` (because they've been provisioned via SCIM already), ServiceNow wouldn't be able to find a matching user and would give Entra the all-clear to create a new account. You would therefore end up with a duplicate account.

## How to overcome the duplication problem

There's one workaround that I was able to use on my recent project, where we were using a custom field to store the value passed in via the `externalId` field. It's a workaround that is most useful when there's only one source of user provisioning in the system.

0. Copy every single existing user into the `sys_scim_user` table, specifying their `external_id` field as appropriate. This prevents duplication for all existing users once you start using SCIM. (You can also run this step as a scheduled job or business rule, depending on your circumstances.)
1. Add secondary field-matching to Entra as a fail-safe, in case some user accounts are created manually before being properly provisioned via SCIM. This will help prevent duplication for the users not already in `sys_scim_user`.
2. Ensure the custom field you're using to store the `externalId` within `sys_user` enforces uniqueness. This means that, even if the matching fails, SCIM won't be able to create a duplicate user because the `sys_user` table already contains that particular `externalId`.

The combination of these actions and fail-safes made our SCIM provisioning nearly perfect.

We occasionally had users whose provisioning failed because of unique key violations (through Step 2 above). These were rare, but were also easy to spot and to deal with.

And even if you accidentally overlook any non-provisioned accounts, it won't go unnoticed by the end-user: if there's a unique key violation, it means that the user already has an account and can therefore use the platform. If the lack of provisioning is causing them trouble (e.g. because their Manager field is empty), they can raise an incident about it, which gives you visibility over the problem and you can handle it on a case-by-case basis.
