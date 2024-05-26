---
title: 'Fixed: "Help! `SPEntryPage` doesn''t work with SSO"'
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

- problem:
  - you've enabled SPEntryPage and it's working just fine during local login but it doesn't work when users log in via SSO
- unclear what solution is for now but it's looking like it's to do with the SSO redirect
  - default IdP redirect is to `navpage.do` when it might be better as `nav_to.do`

You want a custom redirect on your platform. You have configured `SPEntryPage` and have added appropriate system properties to make it work. But it's not working! This might be a problem with your SSO config.

The `SPEntryPage` script is easy to get wrong and there are many articles about how to do it right. This article assumes that you _are_ using it correctly and that the relevant system properties are in place.

## Checking that the script isn't running

Before you begin, make sure that the script definitely _isn't_ being called upon login.

To do this, set the *[INSERT BOOLEAN DEBUG FLAG HERE]* to `true`. If the system calls the `SPEntryPage` script upon SSO login, you should be seeing debug log messages in the system logs.

If you can see any logs, it means that the script is running. If the redirect isn't happening the way you want, you need to validate your code.

However, if you _can't_ see any logs, keep reading. I have answers in store!
