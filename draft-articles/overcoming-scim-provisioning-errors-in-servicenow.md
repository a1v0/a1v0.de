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
