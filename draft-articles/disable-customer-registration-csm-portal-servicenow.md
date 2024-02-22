---
title: Disable customer registration in the CSM portal in ServiceNow
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

You're here because the person in charge of security on your project has asked you to disable customer self-registration on the CSM portal in ServiceNow, but you can't find any obvious way to do it, right?

That's because there isn't an obvious way, as such. You'd expect there to be a system property that will enable or disable it, but no such thing exists.

There are four steps to effectively disabling CSM registration, which I will go into below. Each step takes place in the Global application, so that's where to make your update set.

## 1. Set the widget to `public=false`

Like most things in CSM, user registration is controlled by a widget. In our case, the widget is called Customer Registration (ID `customer-registration`). However, since there's no "Active" flag on a widget, we'll have to try something else.

We can't delete the widget, either, since it's bad practice to delete out-of-the-box widgets. We'll have to do the next best thing: set its visibility to `public=false`.

Navigate to **Service Portal > Widgets** and select Customer Registration from the list.

Within this record, update the `public` field.

Stay on that page, though! We need it for the next step.

## 2. Unpublish all pages containing the widget

Now that we've set the visibility, we can also unpublish any pages that contain the widget.

At the bottom of the widget form (see step 1) there's a related list called "Included in Pages". By default, there is just one record in that list called `csm_registration`. Set the fields `public=false` and `draft=true`.

## 3. Remove "Registration" link from CSM menu

In the left menu, navigate to **Service Portal > Portals**. In the list, select Customer Support (URL suffix `csm`).

In the form, open the record in the Main Menu field (by default it's "CSM Header Menu").

In the Menu Items list, set the Register link to `active=false` and you're all set.

## 4. Create an email domain allowlist

It sounds counter-intuitive: why should we create an allowlist for emails when we're trying to stop people from registering?

The reason is that, should the world turn upside-down and somehow CSM registration is enabled again, you can limit the users who can register.

Navigate to the System Properties table and search for `sn_ext_usr_reg.allowed_email_domains`. If no such property exists, create a new one of type `string`.

Set the value as a comma-separated list (no spaces) of acceptable email domains. Since we're trying to stop people registering, it's best to keep this list as short as possible (without leaving it empty). One domain is sufficient, e.g. `a1v0.de` (don't include the @ symbol).

## Is that enough?

It feels a bit thin, doesn't it? The widget is still in the system and the "Pending Registration Requests" module is still in the filter navigator. We've had to patch up the cracks with an allowlist, for goodness' sake!

There's nothing we can do about that, but this might reassure you:

- setting `public=false` means that unauthenticated users won't be able to see the widget, even if someone creates a page that contains the widget
- setting `draft=true` hides the pages even from authenticated users

Without being able to access the pages or the widget, there's not really anything that could go wrong aside from a malicious admin.

Even if the system broke and someone were able to access the registration widget, they'd need access to an internal email address to register. Sure, they could type in `hacker@a1v0.de` and submit the form but a) they'd still be subject to all the approvals on the inside; and b) even if approved, without access to an `a1v0.de` inbox, they'd never be able to receive a password.

> Yes, it feels odd that there's no system property to switch external registration off. I wish there were. But the steps given above cover all bases nicely.
