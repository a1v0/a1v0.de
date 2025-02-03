---
title: ServiceNow returns 401 "access_denied" when trying to generate an OAuth bearer token
date: 2025-02-01
category: servicenow
---

This article presents a potential solution to a `401` response when you attempt to generate an OAuth bearer token in ServiceNow.

Specifically, my solution works for when you are using the Authorization Code grant type.

Here's what you're experiencing:

0. You're generating an authorization code and you're sure that this is working correctly.
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

By default, the `auth_code_lifespan` field in the Application Registry record is set to 60 seconds.

Sometimes, because Curl can be clunky and because of other constraints, it can take longer than 60 seconds to prepare and send the request. This means that your code expires before sending.

To solve the issue, set the `auth_code_lifespan` to something longer to give you more time to make the request.
