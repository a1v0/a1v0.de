---
title: How to debug ACLs inside a ServiceNow portal
date: 2024-02-27
---

Most of the time, when something isn't showing up in a ServiceNow portal, it's not due to ACLs but due to the Available For and Not Available For settings on a catalog item or record producer.

However, sometimes we need to debug ACLs inside a portal. When that day comes, you will realise to your horror that the ACL debugger doesn't dump its usual output at the bottom of the portal page.

It looks like your only option is to try to debug the ACLs in that unpleasant popup window that contains the debugger itself... right? Wrong!

## Never fear: there's a hack

Fortunately, there's a hack to spare you all that ghastliness:

0. Open the ACL debugger (look for Debug Security Rules in the left navigation menu)
1. (Optional) Impersonate the person whose ACLs you're looking to debug
2. Open a new tab and go to `http://<instance-name>.service-now.com/ui_page.do`

You'll be shown a virtually blank page that's useless at first, but, as you start to play around inside the portal, this tab will fill up with the conventional ACL debugger output.

Happy debugging!
