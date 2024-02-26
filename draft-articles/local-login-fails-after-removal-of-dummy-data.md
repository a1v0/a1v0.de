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

Broken local login typically occurs following the removal of dummy data from your instance. Dummy data can be purged via a service request on the NowSupport portal.

Here are the usual "ingredients" that lead to this issue:

- dummy data has been removed
- your theme is customised (I haven't been able to conclusively link this problem to the Theme Builder plugin, but it might be linked)
- MFA is enabled for some users (by default, admins are enrolled into MFA)

You will know that your issue is being caused by the above concoction of factors because **the logo on your login page won't be displaying**.

## What actually happens?

You will notice that the logo is missing from the login screen.

The broken link to the logo file leads to a redirection failure, leading to an endless loop during the login process. You will never make it into the platform as a result.

## How do I restore local login?

First, you'll need access to your instance. If you're lucky, you might have SSO set up, giving you an option to gain access that way.

Alternatively, you'll need to raise a case with NowSupport. They'll be able to get you in by disabling MFA.

Once you're in, re-upload the missing logo to the `sys_attachment` table. Then copy the `sys_id` of that record.

Open System Properties and look for `glide.product.image` and `glide.product.image.light`. The value of these properties should be `some_sys_id.iix`.

Replace the value of those properties to `sys_id_of_new_logo.iix` (if your normal and light logos are different, make sure you reupload both images and copy both `sys_id`s).

That's all you need to do. Bear in mind that the system needs to accept and cache the solution, too. The first couple of login attempts might yield some funky redirection behaviour, but after that, all will be perfect.

## Future outlook

This is a bug that was first reported in San Diego. I first experienced the problem in Vancouver. So far as I have been able to find, there is currently no schedule for a bug fix.

I find it surprising, since ServiceNow is aware of this bug. Maybe I'm being a na&iuml;ve back-seat driver, but is it _that_ hard to prevent the deletion of the non-dummy `sys_attachment` record?
