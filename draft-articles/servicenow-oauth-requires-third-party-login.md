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

When setting up a connection to a third-party ServiceNow instance via OAuth, you will need to generate a token. This process requires you to log into the third party instance from your local instance.

In many cases, this causes no issues. However, many larger corporate clients have thick layers of cyber-security wedged in between their IT estate and the outside world. This can make token generation difficult.

## A scenario

Company A wants to send data to Company B. Both companies use SSO, both companies use IP whitelisting, and both companies allow access to their instances only from their own machines.

In practice, this means that it's impossible to access Company B's instance from your Company A laptop: your IP address will be wrong, as will the laptop you're using.

Without this access, you won't be able to generate a token, and therefore can't use OAuth.

## The solution

Sadly, there's not really a solution to this. This article exists mainly to confirm that this OAuth problem is a simple fact of life. Your solution is to deliver the bad news to the security people in charge of each instance, telling them you'll be using Basic Auth instead.

ServiceNow doesn't recognise this as a problem. Instead, they seem to consider it a security feature: it's an extra layer of security on top of all the security already provided by OAuth.

Ironically, the most security-conscious organisations will be the ones unable to use OAuth, being instead reduced to using Basic Auth, which has no fancy security requirements in place.

I regret that there is currently no way for a third party to specify a trusted instance in advance, saying, "If a1v0's instance comes knocking on my door with a valid client secret in his hand, give him a token."

## Shouldn't the client secret be enough?
