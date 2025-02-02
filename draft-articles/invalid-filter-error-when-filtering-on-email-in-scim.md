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

> You can see all the fields that ServiceNow supports for filtering [**here**](https://www.servicenow.com/docs/bundle/xanadu-api-reference/page/integrate/inbound-rest/concept/scim-api.html#title_scim-GET-Users). (If the link ever breaks, it's in the docs for the SCIM API, under the heading "GET Users".)
