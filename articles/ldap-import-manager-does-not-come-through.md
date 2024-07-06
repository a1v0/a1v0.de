---
title: "LDAP import: the Manager field doesn't come through"
date: 2024-06-29
category: ServiceNow
---

Often, when using LDAP user data imports in ServiceNow, the setting of the Manager field doesn't work: despite all the necessary LDAP import scripts being present out of the box, the Manager doesn't get populated after the transform is complete.

You may even find that the Manager _does_ get imported for some users, but not for all of them.

The reason for this is that, by default, the import set created by ServiceNow for your LDAP import grants a maximum text length for most (if not all) fields of 40 characters.

If the OU in the Manager field and/or in the primary OU field is longer than 40 characters (and it very often is), ServiceNow won't be able to properly identify which user is the manager.

> By default, LDAP import set fields have a **maximum length of 40 characters**. Increase this length to avoid problems with the Manager field.

To solve the problem, go into the relevant import set table and increase the length of the relevant fields: Manager and the field where the primary OU is stored. ServiceNow needs to be able to see the full OU in both fields for the coalesce to work.

While you're at it, you may as well increase the length of any other field that's likely to contain more than 40 characters. Your transform maps won't work properly if the data that gets imported is cut off at the 40th character.
