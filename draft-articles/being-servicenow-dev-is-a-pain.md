---
title: Why being a ServiceNow dev can be a pain
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

article about failing silently

- intro: ServiceNow is great platform. feature-rich, useful, user-friendly
  - not dev-friendly, though
  - I mean more than the little bugbears we all have (e.g. why does the code editor shout at you when you're missing a semicolon but doesn't tell you that you've forgotten to write gr.query()?!)
  - what if I told you that the fact that the system is a pain to debug is actually deliberate and positive (for users, that is)?
- Failing Silently
  - to provide a good UX for the many users of an instance (some instances have only 50-odd regular users, but many have thousands upon thousands), you can't be blurting out "SyntaxError" all over the place
    - check the system logs: you'll see countless Java errors caused by some bug inside ServiceNow. Huge stacjk traces
  - if something like that happened, you'd instantly get a billion support cases raised
  - there may also be a lot of reluctant users, who resent their company's decision to change its ITSM product and who haven't yet been won over by ServiceNow. a loud failure, as petty as it sounds, could cause unrest within an organisation
  - instead, you fail silently. this way, no user's faith in the system is compromised and nobody is confused...
- ...except the devs
  - we can agree that failing silently on a platform that potentially has tens of thousands of users is good
  - but it makes developing a pain
  - many things in ServiceNow require scripting, and scripts always always ALWAYS go horribly wrong during the dev process (the fact that JavaScript isn't type-safe doesn't help...)
    - we make stupid typos
    - we use methods on GlideDateTime that don't exist within the current scope
    - we provide a Boolean `true` when we meant to provide a string of `"true"`
  - when the system fails silently, we don't always have a harpy screeching at us about our error. The script will run and fail and you'll have to delve into the system logs to find out why
    - you'll only find a legible JavaScript error if you're lucky
    - if unlucky you'll have nothing or some gibberish Java error
- conclusion: servicenow is mostly a fit-and-forget product
  - you do the development, the testing and then the deployment
  - by the time it reaches users, it's supposed to be perfect
    - there will always be bugs here and there the creep in, however slight (the major ones ought to have been ironed out by now)
  - the upshot of it all is that you need people to have faith in the final product, to accept it, and to be able to use it without running into work-blocking syntax errors etc.
