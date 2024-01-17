---
title: Auto-populating a field in a record producer not working
date: 2024-01-17
---

In Utah, ServiceNow introduced an **auto-populate** feature for reference fields in record producers, enabling you to automatically set the value of a form field, based on the user's input for a different field.

For instance, you could auto-populate an "Email Address" field in a form based on the user's input for "Requested For". ServiceNow simply dot-walks from A to B, dynamically filling in the value.

This is incredibly handy and saves you from having to use catalog client scripts with client-callable script includes. (I usually cry into my coffee every time I have to use GlideAjax for something trivial.) Well done, ServiceNow!

However, the way the feature has been implemented means that it cannot work on the CSM portal. An ACL is specifically blocking users who have `snc_external` from reaping the benefits.

> Auto-populate will always fail when users with `snc_external` interact with a record producer.
>
> You will get an error: "Something went wrong, and your request could not be submitted. Please contact your system administrator."

## Why is this happening?

Currently, the auto-populate feature calls an API to retrieve a dynamic value from the backend. An ACL prevents external users from calling scripted REST endpoints by default (see ACL called "Scripted REST External Default").

```js
// Script inside "Scripted REST External Default" ACL
answer = !gs.hasRole("snc_external");
```

Since auto-populate only works with access to this REST endpoint, anyone external using the form will receive an error message saying, "Something went wrong, and your request could not be submitted. Please contact your system administrator."

If you look inside your browser console, you'll probably see an HTTP error appear, too, with status code [`403 Forbidden`](https://http.cat/status/403), because your user account doesn't pass the ACL.

## How do I fix it?

You could always delete the code in the ACL, but that introduces a big, fat cyber-security risk. If a client caught you doing this, your credibility would jump right out of the window!

For now, your only good option is to create a catalog client script, like we used to do in the good old days. Since these don't depend on an API call, you won't run into any nasty HTTP errors.

On the grapevine, I've heard that this bug will be [fixed in Washington](https://www.servicenow.com/community/developer-articles/auto-populate-a-variable-based-on-a-reference-type-variable-utah/ta-p/2475511). Watch this space and cross your fingers!
