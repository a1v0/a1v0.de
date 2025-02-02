---
title: Overcoming SCIM provisioning errors in ServiceNow
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

```txt
// This is in a `code` block so that backslashes aren't overwritten
- SCIM PROVIDER - Extended attributes namespace urn:ietf:params:scim:schemas:custom:servicenow:2.0:User must be included in the schemas attribute: com.unboundid.scim2.common.exceptions.BadRequestException: Extended attributes namespace urn:ietf:params:scim:schemas:custom:servicenow:2.0:User must be included in the schemas attribute
 - Solution: create a second app. One app does POST (without custom fields) and the other does PATCH
 - Also this error: SCIM PROVIDER - Extended attributes namespace urn:ietf:params:scim:schemas:extension:servicenow:2.0:User must be included in the schemas attribute, Extended attributes namespace urn:ietf:params:scim:schemas:extension:servicenow:custom:2.0:User must be included in the schemas attribute
- SCIM advice: use the API explorer to play around, to help you work out which side of the fence is causing the problem
- SCIM PROVIDER - Invalid patch request payload: { "schemas" : [ "urn:ietf:params:scim:api:messages:2.0:PatchOp" ],  "Operations" : [ { "op" : "add",   "path" : "addresses[type eq \"home\"].country",   "value" : "GB" } ] }
 - Can sometimes be due to the use of urn:ietf:params:scim:schemas:extension:enterprise:2.0:User, which ServiceNow doesn’t really support
 - Partial solution: do “Only on object creation” rather than “Always” in Entra. This seems to do the trick. Not sure why it causes an issue in the first place.
- Value for attribute urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager must be a JSON object
 - This is due to incorrect settings in Azure: you need to specify the manager as a reference field
```

- SCIM triggers a lot of errors in ServiceNow's system log. Many of these errors ought really to be "info" or "warning" statements, rather than "errors".
- ServiceNow and SCIM don't work overly well together
  - unclear whose fault this is. can't be SCIM's fault as SCIM is just a protocol
  - most likely a combination of ServiceNow and tools like Entra
- the big issue is that neither ServiceNow nor Entra all you to see the JSON payload that is sent/received
- use API Explorer to test. this should let you see whether your ServiceNow config is right
- workaround: create two Entra apps

User provisioning with SCIM is supposed to be an easy process. Tools like Entra support it and ServiceNow has an API to facilitate it.

The problem is that it's not as easy as it ought to be. For once, ServiceNow's Robust Transform Engine is clunky, confusing and convoluted. But, more than this, SCIM provisioning can cause many errors. This article will explain some of them and will provide potential workarounds.

## Why are there so many errors?

SCIM can trigger many errors in ServiceNow's system log. For many of these, the log level really ought to be "info" or "warning", rather than "error".

However, some of the errors genuinely represent SCIM problems.

It's unclear why these errors happen: is it because of ServiceNow or because of the tool making the SCIM requests (e.g. Entra). As far as I was able to glean, ServiceNow supports SCIM properly, according to the official SCIM specifications. The devil, nonetheless, remains in the detail.

It's most likely a combination of discrepancies between ServiceNow and tools like Entra. The big problem is that neither Entra nor ServiceNow let you see the full payloads being sent/received. This makes troubleshooting very difficult.
