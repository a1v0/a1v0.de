---
title: "Invalid filter" error when filtering on email in SCIM
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

- <https://www.servicenow.com/docs/bundle/xanadu-api-reference/page/integrate/inbound-rest/concept/scim-api.html#title_scim-GET-Users> link to this page
- ServiceNow only supports limited SCIM filters for GET requests
- Entra can't send email addresses in correct format to match
- unclear who is at fault here. I'd guess ServiceNow for not supporting Entra's perfectly valid request syntax

This article is mostly relevant to people using Entra for SCIM user provisioning into ServiceNow, though it may be useful to others.

In short, ServiceNow only allows you to filter (i.e. match) on certain fields within the `sys_user` table. This means that filtering on custom fields is not possible, and it can cause problems even for fields that ServiceNow supports.

One of the filter fields that causes trouble is `email`, because ServiceNow doesn't recognise the format that Entra uses in its SCIM payload.

> You can see all the fields that ServiceNow supports for filtering [**here**](https://www.servicenow.com/docs/bundle/xanadu-api-reference/page/integrate/inbound-rest/concept/scim-api.html#title_scim-GET-Users). (If the link ever breaks, it's in the docs for the SCIM API, under the heading "`GET` Users".)

## What is SCIM filtering?

Filter queries in SCIM are when your provisioning tool (e.g. Entra) sends a `GET` request to ServiceNow to see if a user already exists. Filters help the provisioning tool determine whether to send a `POST` or a `PATCH` request into ServiceNow. If the filtering fails, Entra might create a duplicate user account.

These are especially useful if you are using multiple provisioning sources or if you are switching from a different provisioning method to SCIM.

For example, you may be matching users based on the `user_name` field (using the `userName` filter attribute in SCIM). Entra will run a `GET` request for all users with a `user_name` of `john.doe` and, if it receives an unambiguous result, it will send all provisioning updates as a `PATCH` request.

If it finds too many results or none at all, it will run any secondary/tertiary filter queries (if any are specified). If it still can't find anything, Entra will create a new user account in ServiceNow via a `POST` request.

## Why can't I filter on email when ServiceNow explicitly supports it?

Among the various fields supported by ServiceNow for SCIM filtering is the email address. However, ServiceNow requires the filter to be written in a specific format: "Fixed format only, such as: `[type eq "work" and value eq "emailValue"]`".

It is this fixed format that causes the filtering to fail. Entra cannot be customised (at time of writing) to send the email address in the specified format. Instead, depending on configuration, it sends something like this: `[INSERT FILTER VALUE!!!!!!!!!!!!!!!!!!!!!]`

Since Entra provides few options for customisation and ServiceNow is highly inflexible, there isn't a way to overcome this issue when provisioning with Entra.
