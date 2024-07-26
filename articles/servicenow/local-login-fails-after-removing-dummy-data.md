---
title: Local login fails after removing instance dummy data
date: 2024-02-26
category: servicenow
---

Are you unable to use local login on your ServiceNow instance? Is your organisation's logo missing from the login screen? Then you've come to the right place.

In this article, we provide an explanation as to what's happening, why, and how to fix it.

> **Nice to know:** This problem doesn't affect web service users or SSO login, only users logging in locally.

## When does it happen?

Broken local login typically occurs following the removal of dummy data from your instance. Dummy data can be purged via a service request on the NowSupport portal. (If you're unsure, sign in to NowSupport and check your recent requests/cases.)

Here are the usual "ingredients" that lead to this login issue:

- Dummy data has been removed
- Your instance uses a custom or customised theme (e.g. one made using the Theme Builder plugin)
- MFA is enabled

You will know that your issue is being caused by the above concoction of factors because **the logo on your login page won't be displaying**.

## What actually happens?

You will notice that the logo is missing from the login screen.

The broken link to the logo file leads to a redirection failure, leading to an endless loop during the MFA process. You will never make it into the platform as a result.

## How do I restore local login?

First, you'll need access to your instance. If you're lucky, you might have SSO set up, giving you an alternative option to gain access.

Alternatively, you'll need to raise a case with NowSupport. They'll be able to get you in by disabling MFA.

Once you're in, re-upload the missing logo to the `sys_attachment` table. Then, copy the `sys_id` of that record.

Open System Properties and look for `glide.product.image` and `glide.product.image.light`. The value of these properties should be `some_sys_id.iix`.

Replace the value of those properties to `sys_id_of_new_logo.iix`. If your normal and light logos are different, make sure you re-upload both images and update both system properties accordingly.

That's all you need to do. Bear in mind that the system needs to accept and cache the solution; the first couple of login attempts might yield some funky redirection behaviour, and the logo might still be missing, but after that, all will be perfect.

## Future outlook

This is a bug that was first reported in San Diego. (I, personally, experienced the problem in Vancouver.) So far as I have been able to ascertain, there is currently no schedule for a bug fix.

I find it surprising, since ServiceNow is aware of this bug. Maybe I'm being a na&iuml;ve back-seat driver, but is it _that_ hard to prevent the deletion of the non-dummy `sys_attachment` record?

Given the huge inconvenience of this bug&mdash;being locked out is a major problem, after all!&mdash;I would have hoped they'd take it more seriously and respond more quickly.
