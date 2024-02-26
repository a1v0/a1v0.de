---
title: Local login fails after removing dummy data
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
date: 2023-11-15
---

Are you unable to use local login on your ServiceNow instance? Is your organisation's logo missing from the login screen? Then you've come to the right place.

> **Nice to know:** This problem doesn't affect web service users or SSO login, only users logging in locally.

## When does it happen?

Broken local login typically occurs following the removal of dummy data from your instance. Dummy data can be purged via a service request on the NOW Support portal.

Here are the usual "ingredients" that lead to this issue:

- dummy data has been removed
- your theme is customised (I haven't been able to conclusively link this problem to the Theme Builder plugin, but it might be linked)
- MFA is enabled

You will know that your issue is being caused by the above concoction of factors because **the logo on your login page won't be displaying**.

- when does it happen?
  - removal of dummy data (via Support portal)
  - theme is customised (possibly linked to Theme Builder but I'm not sure)
  - MFA is enabled
  - you will know it is happening because the logo you've configured is appearing as a broken link in the login screen
- what actually happens?
  - logo is missing
  - absent logo causes a redirect to fail, leading to a loop
- how to solve
  - if you have SSO enabled, login via SSO
    - if you're completely locked out of the instance, contact NOW support for assistance
  - re-upload the logo file to the system, then copy sys_id of that file
  - open system Properties and search for `glide.product.image`. In this property should be a file name of `[sys_id].iix`
  - Replace the value of that sys_id with `[copied sys_id].iix`
  - Now all should be working
- more info
  - supposedly it's a bug frmo San Dieago
  - given that, it seems surprising that it's been happening to me (Vancouver user)
