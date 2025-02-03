---
title: "Invalid filter" error when filtering on email in SCIM
date: 2025-02-03
category: servicenow
---

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

It is this fixed format that causes the filtering to fail. Entra cannot be customised (at time of writing) to send the email address in the specified format. Instead, depending on configuration, it sends this: `[emails[type eq "work"].value eq someone@example.com]`

Since Entra provides few options for customisation and ServiceNow is highly inflexible, there isn't a way to overcome this issue when provisioning with Entra.

There are two error messages you are likely to receive:

```txt
SCIM PROVIDER - Invalid filter:[emails[type eq "work"].value eq someone@example.com]: com.unboundid.scim2.common.exceptions.BadRequestException: Invalid filter:[emails[type eq "work"].value eq someone@example.com]
```

and

```txt
SCIM PROVIDER - Unexpected character '.value' at position 22: com.unboundid.scim2.common.exceptions.BadRequestException: Unexpected character '.value' at position 22
```

The latter error is a consequence of the former.

## Workaround for some scenarios

When I encountered this issue, I used a workaround that did the trick for me. However, depending on your circumstances, it might not resolve your problem.

My issue was that we had thousands of users who had been provisioned by an old provisioning tool and we were migrating to SCIM. We needed to avoid duplication during the initial provisioning jobs. (Once all users have been provisioned at least once through SCIM, the matching problems disappear.)

The email address was the only field we could use to avoid duplication of users, but ServiceNow wasn't playing ball.

The solution was to do the following before the initial provisioning job:

0. Set the `externalId` field in Entra to be the primary matcher, not email.
1. Set the value of `externalId` in Entra to be the user's email address.
2. Copy every user account into the `sys_scim_user` table via script and set the value of `external_id` to be the email address.
3. Run the provisioning job (use a small number of users at first, to make sure it works!).

Under the hood, ServiceNow checks for users within the `sys_scim_user` table before it does any further matching. By copying everybody into this table and by matching on the `externalId` field, you circumvent ServiceNow's inflexibility with the email field.

Any users who are provisioned from scratch via SCIM are entered into this table automatically.

> The above workaround is viable, too, for fields other than "email".
