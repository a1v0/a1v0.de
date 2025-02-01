---
title: ServiceNow returns 401 `access_denied` when trying to generate an OAuth bearer token
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

- this article uses Authorization Code grant type
- you're sure that the auth code is correct
- the token auth_code_lifespan field is set to 60 by default within the app registry
- it's possible that you're taking longer than 60 seconds to create the curl request, leading to access_denied

This article presents a potential solution to a `401` response when you attempt to generate an OAuth bearer token in ServiceNow.

Specifically, my solution works for when you are using the Authorization Code grant type.

Here's what's happening:

0. You're generating your authorization code correctly.
1. You're making a request via Curl or through a tool like Postman.
2. You receive a `401` error and a JSON payload that looks like this:

```json
{
    "error_description": "access_denied",
    "error": "server_error"
}
```

## How to resolve the error

If you're certain that your Curl request is correctly formatted and that your authorization code is correct, then here's what's probably happening:

By default, the `auth_code_lifespan` field in the Application Registry record is set to 60 seconds. Sometimes, because Curl can be clunky and because of other constraints, it can take longer than 60 seconds to prepare and send the request.

To solve the issue, set the `auth_code_lifespan` to something longer to give you more time to make the request.
