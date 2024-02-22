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

There are two steps to effectively disabling CSM registration, which I will go into below.

> **tl;dr:** The two steps are setting the `csm_registration` page's publication state to "Draft" and deactivating the "Registration" link in the portal menu.

## 1. Unpublish all widget instances

Like most things in CSM, user registration is controlled by a widget. In our case, the widget is called `WIDGET_NAME_HERE`. However, since there's no "Active" flag on a widget, we'll have to try something else.

We can't delete the widget, either, since it's bad practice to delete out-of-the-box widgets.

We'll have to do the next best thing: find every instance of the widget and unpublish those instances.

By default, there's only one instance of the widget on a page called `csm_registration`. Set that page's status to "Draft".
