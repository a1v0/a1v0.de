---
title: Software docs and how to write them
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

We all love coding, so we code and code and code. Then, when the project is over, our boss tells us we need to write documentation for it. We grunt in agony as we realise how annoying the next few days are going to be. "Can't someone else do it?"

Docs are crucial to any software project, so why are we so bad at writing them? We always leave them to the last minute, by which time we've forgotten about half of the features that we've coded. Is there no better way to manage things?

In this article I'll go over why docs are important, why they're annoying to write and, crucially, the way to write docs so that they're not such a chore.

- intro
  - docs super important
  - so why are we so poor at writing them?
  - we always leave them to the last minute, by which time we've forgotten about half of the features
- why are docs useful
  - training material
    - for you and your colleagues
    - for client at handover
    - for third party API users
  - handover to client
- why docs are a pain to write
  - docs are always out of date if your project is still in its "constantly in flux" phase
  - you're overworked as it is!
- how to write good docs with one simple trick
  - if you, like most people, don't have a dedicated docs-writing team working for you, follow these steps
  - make a document right at the start of the project
  - add bullet point notes of the stuff you need to document as you go along
    - no need to add too much detail, because it might lose its accuracy throughout the dev process
  - periodically review to see which bits of the program are closed off/complete and document them
  - this way, you can get as much documentation out of the way during the dev process as possible and you have a list of remaining bits of content
  - you can use tools like (what's the name of the docstrings thing?), but don't be too lazy
