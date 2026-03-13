---
title: TITLE GOES HERE
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
category: servicenow
---

Warning:
com.glide.script.RhinoEcmaError: Cannot set property "personaId" of undefined to "<sys_id>"sys_script_include.0396f51e5b0322007223286411f91a44.script : Line(375) column(0)

Error:
Cannot set property "personaId" of undefined to "<sys_id>": com.glide.rest.domain.ServiceException: Cannot set property "personaId" of undefined to "<sys_id>": com.glide.rest.service.custom.CustomServiceExceptionResolver.throwServiceException(CustomServiceExceptionResolver.java:82)com.glide.rest.service.custom.CustomServiceExceptionResolver.throwServiceException(CustomServiceExceptionResolver.java:77)com.glide.rest.service.custom.CustomServiceExceptionResolver.resolveForException(CustomServiceExceptionResolver.java:45)com.glide.rest.service.custom.CustomServiceResultHandler.handle(CustomServiceResultHandler.java:22)com.glide.rest.service.custom.CustomService.execute(CustomService.java:78)com.glide.rest.handler.impl.ServiceHandlerImpl.invokeService(ServiceHandlerImpl.java:37)com.glide.rest.processors.RESTAPIProcessor.process(RESTAPIProcessor.java:345)com.glide.processors.AProcessor.runProcessor(AProcessor.java:762)com.glide.processors.AProcessor.processTran

From this we checked further and noticed that the Profile column in the sn_communities_content table had multiple empty values.

This was due to testing your internal data retention policies which involved deleting user profiles. As mentioned deleting users can cause unexpected behaviours in applications across the instance. ServiceNow don't recommend deleting users. Instead, we recommend making the users inactive by unchecking the 'Active' flag. Doing this, the issue on the Community Portal will not occur.

See KB0963051 for more insight into this and for guidance on best practices -
--> https://support.servicenow.com/kb?id=kb_article_view&sysparm_article=KB0963051#:~:text=Deleting%20the%20user%20will%20cause,and%20Locked%20out%20as%20True.

