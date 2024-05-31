---
title: ServiceNow OAuth connections require third-party login
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
date: 2024-01-01
---

- problem: need to log in to generate a token
- can be impossible if security settings on third party don't allow
- solution: there isn't one, aside from using basic auth. This article is simply there to confirm that, at time of writing, there's no workaround and ServiceNow doesn't recognise it as a problem. they consider it a security feature.
    - while it does double down on security, it is inconvenient when you're trying to connect securely to a trusted third party

When setting up a connection to a third-party ServiceNow instance via OAuth, you will need to generate a token. This process requires you to log into the third party instance from your local instance.

In many cases, this causes no issues. However, many larger corporate clients have thick layers of cyber-security wedged in between their IT estate and the outside world. This can make token generation difficult.

## A scenario

Company A wants to send data to Company B. Both companies use SSO, both companies use IP whitelisting, and both companies allow access to their instances only from their own machines.

In practice, this means that it's impossible to access Company B's instance from your Company A laptop: your IP address will be wrong, as will the laptop you're using.

Without this access, you won't be able to generate a token, and therefore can't use OAuth.

## The solution

## Shouldn't the client secret be enough?
