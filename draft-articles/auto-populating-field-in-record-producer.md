---
title: Auto-populating a field in a record producer not working
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

In Utah, ServiceNow introduced an _auto-populate_ feature for record producers, enabling you to automatically set the value of a field in a record producer, based on the user's input for a different field.

This is incredibly handy and saves you having to use client scripts with client-callable script includes. (I usually cry into my coffee every time I have to use GlideAjax for something trivial.) Well done ServiceNow!

However, the way the feature has been implemented means that it cannot work on the CSM portal.

> Auto-populate will always fail when users with `snc_external` interect with a record producer.

Artikel Something went wrong, and your request could not be submitted. Please contact your system administrator

<https://www.servicenow.com/community/presession?client_id=0oawkyhdomINvSrdm0x7&redirect_uri=https%3A%2F%2Fwww.servicenow.com%2Fcommunity%2Fs%2Fauth%2Foauth2callback%2Fproviderid%2Fbounce&response_type=code&state=6HUSGgwEYB09N8AQh-XiEd7TDTfyt1tBd04tsbg8TDglTxdzRrZufLP0PPcqCUJkz9Gs2plT_Y1okKxUuQvMbBUYTlTbcB_220pCJaNi5smNmJOyTDbJzBQ9D0yPdIBqANIsc4NHf_QEQqlrWCgWOxBs71RXLfgAa-0cL8C6eW0iEsYYOr4I4t_OzHqZ57J5qg3JH_Comh8i8QEki22pQlvIWCgDwK1pknBvsOeXsBeli8tLHaBHRT8885-hEtoSGTp6k0eoTek1UwPS1ZRqHFYGLAG_MbBtmgnuKsvc1yNvC37UFoUDFkGPG2-iuZEN&scope=openid&source_id=community&referer=https%3A%2F%2Fwww.servicenow.com%2Fcommunity%2Fdeveloper-articles%2Fauto-populate-a-variable-based-on-a-reference-type-variable-utah%2Fta-p%2F2475511>

    CSM
    Auto-populate record producer
    Snc_external users can’t access API
    Will be fixed in Washington, supposedly
