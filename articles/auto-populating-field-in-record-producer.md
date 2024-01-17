---
title: Auto-populating a field in a record producer not working
date: 2024-01-17
---

In Utah, ServiceNow introduced an **auto-populate** feature for record producers, enabling you to automatically set the value of a form field, based on the user's input for a different field.

For instance, you could auto-populate an Email Address field in a form based on the user's input for Requested For. ServiceNow simply dot-walks from A to B, dynamically filling in the field.

This is incredibly handy and saves you from having to use catalog client scripts with client-callable script includes. (I usually cry into my coffee every time I have to use GlideAjax for something trivial.) Well done, ServiceNow!

However, the way the feature has been implemented means that it cannot work on the CSM portal. An ACL is specifically blocking users who have `snc_external` from reaping the benefits.

> Auto-populate will always fail when users with `snc_external` interact with a record producer.

## Why is this happening?

Currently, the auto-populate feature calls an API to retrieve a dynamic value. An ACL prevents external users from calling scripted REST endpoints by default (see ACL called "Scripted REST External Default").

```js
// Script inside "Scripted REST External Default" ACL
answer = !gs.hasRole("snc_external");
```

Since auto-populate only works with access to this REST endpoint, anyone external using the form will receive an error message saying, "Something went wrong, and your request could not be submitted. Please contact your system administrator."

## How do I fix it?

You could always delete the code in the ACL, but that creates a cyber-security risk.

For now, your only good option is to create a catalog client script, like we used to do in the good old days.

However, [on the grapevine](https://www.servicenow.com/community/presession?client_id=0oawkyhdomINvSrdm0x7&redirect_uri=https%3A%2F%2Fwww.servicenow.com%2Fcommunity%2Fs%2Fauth%2Foauth2callback%2Fproviderid%2Fbounce&response_type=code&state=6HUSGgwEYB09N8AQh-XiEd7TDTfyt1tBd04tsbg8TDglTxdzRrZufLP0PPcqCUJkz9Gs2plT_Y1okKxUuQvMbBUYTlTbcB_220pCJaNi5smNmJOyTDbJzBQ9D0yPdIBqANIsc4NHf_QEQqlrWCgWOxBs71RXLfgAa-0cL8C6eW0iEsYYOr4I4t_OzHqZ57J5qg3JH_Comh8i8QEki22pQlvIWCgDwK1pknBvsOeXsBeli8tLHaBHRT8885-hEtoSGTp6k0eoTek1UwPS1ZRqHFYGLAG_MbBtmgnuKsvc1yNvC37UFoUDFkGPG2-iuZEN&scope=openid&source_id=community&referer=https%3A%2F%2Fwww.servicenow.com%2Fcommunity%2Fdeveloper-articles%2Fauto-populate-a-variable-based-on-a-reference-type-variable-utah%2Fta-p%2F2475511) I've heard that this bug will be fixed in Washington. Watch this space and cross your fingers!
