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

There are three steps to effectively disabling CSM registration, which I will go into below. Each step takes place in the Global application, so that's where to make your update set.

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
