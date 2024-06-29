---
title: Fields missing from SSO identity provider transform map in ServiceNow
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

- explain problem
- solution: ensure relevant fields are being sent in SAML response as Attributes
- not good enough that the claim comes through in the NameID tag. Must be an Attribute

If you are implementing SSO user provisioning via an identity provider (IdP) in ServiceNow, but not all fields are present in the transform map, this article is for you.

Before you begin, it's a good idea to enable SSO debug logging. (It's best practice to enable debug logging in a non-production instance.)

Go to **Multi-Provider SSO > Properties** and check **Enable debug logging for the multiple provider SSO integration**. Remember to uncheck this box when you're done.

## The SAML response

Every time you log in via SSO, your IdP sends ServiceNow a SAML response, which is a chunk of XML that contains all sorts of information about the login attempt, including a certificate.

ServiceNow takes this response and creates an import set from the data contained in it. Specifically, it looks for any attributes (contained within an `<Attribute>` tag).

Enable SSO debugging (see above for instructions), login with SSO, check the logs and look for the SAML response. To help you find it, if your logs are particularly cluttered, you can search for a string containing `NameID`, which is something present in every SAML response.

Once you've found the response, look for all the data within the `<Attribute>` tag(s). If the data you'd like to pull in isn't there, then speak to whoever is in charge of your IdP (e.g. your organisation's Azure team) and get them to ensure all necessary attributes are sent over with the SAML response.

> SAML responses don't necessarily contain every single possible user attribute listed in your IdP. Check the response to see which attributes are coming through.

## "The data I need is in the `<NameID>` tag"

The script include that creates the import set for your SSO user data can't see the `<NameID>` tag in the SAML response.

As such, if a value is in the `<NameID>` tag but _not_ also listed as an attribute, it won't end up in the import set.

Make sure your IdP adds every value you require as an attribute, even if it's already coming through as data in a different tag.
