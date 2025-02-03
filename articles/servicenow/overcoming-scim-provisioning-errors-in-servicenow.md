---
title: Overcoming SCIM provisioning errors in ServiceNow
date: 2025-02-03
category: servicenow
---

User provisioning with SCIM is supposed to be an easy process. Tools like Entra support it and ServiceNow has an API to facilitate it.

The problem is that it's not as easy as it ought to be. For once, ServiceNow's Robust Transform Engine is clunky, confusing and convoluted. But, more than this, SCIM provisioning can cause many errors. This article will explain some of them and will provide potential workarounds.

## Why are there so many errors?

SCIM can trigger many errors in ServiceNow's system log. For many of these, the log level really ought to be "info" or "warning", rather than "error".

However, some of the errors genuinely represent SCIM problems.

It's unclear why these errors happen: is it because of ServiceNow or because of the tool making the SCIM requests (e.g. Entra). As far as I was able to glean, ServiceNow supports SCIM properly, according to the official SCIM specifications. The devil, nonetheless, remains in the detail.

It's most likely a combination of discrepancies between ServiceNow and tools like Entra. The big problem is that neither Entra nor ServiceNow let you see the full payloads being sent/received. This makes troubleshooting very difficult.

## Troubleshooting SCIM errors

Unfortunately, much of the troubleshooting you can do with SCIM is trial and error. However, one useful thing you can do is to play around with the **ServiceNow API Explorer** (accessible in the navigation menu by searching for "API Explorer").

Here, you can build correctly formatted requests without a third-party tool like Entra and see how ServiceNow responds.

This might help you determine whether an issue is being cause by Entra or by your internal ServiceNow config. Sometimes, invalid/incorrect field mapping in ServiceNow might be the culprit.

## Examples of SCIM errors in ServiceNow

### SCIM PROVIDER - Extended attributes namespace urn:ietf:params:scim:schemas:custom:servicenow:2.0:User must be included in the schemas attribute

- **Full error message:** "SCIM PROVIDER - Extended attributes namespace urn:ietf:params:scim:schemas:custom:servicenow:2.0:User must be included in the schemas attribute: com.unboundid.scim2.common.exceptions.BadRequestException: Extended attributes namespace urn:ietf:params:scim:schemas:custom:servicenow:2.0:User must be included in the schemas attribute"
- **Common variant:** "SCIM PROVIDER - Extended attributes namespace urn:ietf:params:scim:schemas:extension:servicenow:2.0:User must be included in the schemas attribute, Extended attributes namespace urn:ietf:params:scim:schemas:extension:servicenow:custom:2.0:User must be included in the schemas attribute"

#### What causes the error?

This error comes when the name of the schema you are using for SCIM provisioning isn't present in the `schemas` array within the payload.

```json
{
    "schemas": [
        "urn:ietf:params:scim:schemas:core:2.0:User",
        "YOUR SCHEMA NAME BELONGS HERE",
    ]
}
```

This happens when you try to provision data in a custom schema (e.g. `urn:ietf:params:scim:schemas:custom:servicenow:2.0:User`, which isn't native to SCIM) within a `POST` request (i.e. a request that creates a new user account in ServiceNow).

It seems that Entra sends its `POST` requests without correctly populating the `schemas` array with any custom schemas you are using. It is unclear why; perhaps it will be rectified in future.

#### Workaround

Before trying out a workaround, it is worth trying out the ServiceNow API Explorer to send some dummy SCIM `POST` requests without using Entra. This will help you ascertain whether it's an issue on the Entra side or the ServiceNow side. In my case, it was an Entra issue so I proceeded as below.

My workaround seems awfully clunky, but it solved our problem: create two SCIM provisioning apps in Entra.

The first app is for sending `POST` requests. This app only provisions fields that live inside the default SCIM schema and therefore can't cause problems when `POST` requests are sent. (They can also send error-free `PATCH` requests.)

The second app handles all the `PATCH` requests. `PATCH` requests are formatted differently to `POST` requests and don't have a `schemas` array in the JSON, so you can use this app to provision all the fields that the first app can't.

Then set your provisioning jobs to run so that the first app always runs before the second, so that any new user accounts will always be created with the simple `POST` app and enhanced with additional fields via the `PATCH` app.

### SCIM PROVIDER - Invalid patch request payload: { "schemas" : [ "urn:ietf:params:scim:api:messages:2.0:PatchOp" ],  "Operations" : [ { "op" : "add",   "path" : "addresses[type eq \"home\"].country",   "value" : "GB" } ] }

- **Full error message:** "SCIM PROVIDER - Invalid patch request payload: { "schemas" : [ "urn:ietf:params:scim:api:messages:2.0:PatchOp" ],  "Operations" : [ { "op" : "add",   "path" : "addresses[type eq \"home\"].country",   "value" : "GB" } ] }"
- **Common variant:** "SCIM PROVIDER - Invalid patch request payload: { "schemas" : [ "urn:ietf:params:scim:api:messages:2.0:PatchOp" ],  "Operations" : [ { "op" : "add",   "path" : "urn:ietf:params:scim:schemas:extension:enterprise:2.0:User",   "value" : "GB" } ] }"

#### What causes the error?

I honestly don't know what causes this error. As far as I can glean, there's nothing wrong with this `PATCH` request. However, it only occurred when Entra was set up to provision the culprit field (in this case `addresses[type eq "home"].country`) with every single provisioning job.

On some occasions, it can be due to the use of the `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User` schema, which isn't fully supported by ServiceNow.

#### Workaround

If the mapping that's causing trouble uses the `urn:ietf:params:scim:schemas:extension:enterprise:2.0:User` schema, then create a custom mapping using one of the ServiceNow schemas (e.g. `urn:ietf:params:scim:schemas:custom:servicenow:2.0:User`) instead.

Otherwise, in the Entra provisioning config, ensure that the culprit field is not set to provision "Always" but "Only on object creation". As far as I understand, "Only on object creation" will send the value only once when the user is provisioned for the first time, and then only when the value changes in Entra.

This workaround is therefore not suitable for everyone (since sometimes you need field values to be sent every time), but it was good enough for the purposes of my project.

### SCIM PROVIDER - Patch op[0]: Value for attribute urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager must be a JSON object, Applying patch ops results in an invalid resource

- **Full error message:** "SCIM PROVIDER - Patch op[0]: Value for attribute urn:ietf:params:scim:schemas:extension:enterprise:2.0:User:manager must be a JSON object, Applying patch ops results in an invalid resource"

#### What causes the error?

The Manager field in Entra is an object, rather than a string. ServiceNow is set up to be able to handle an incoming object Manager from Entra, even though simple string mappings are the more usual fare.

This particular error is caused when Entra is configured to send the Manager field as a string rather than a reference. ServiceNow expects a JSON object but is getting a string in its stead.

#### Workaround

To fix this error, specify the correct data type ("Reference") in the Manager mapping attribute within Entra. This will cause the Manager attribute to be sent as a JSON object rather than as a string.
