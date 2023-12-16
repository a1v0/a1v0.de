---
title: Software docs and how to write them
date: 2023-12-16
---

We all love coding, so we code and code and code. Then, when the project is over, our boss tells us we need to write documentation for it. We grunt in agony as we realise how annoying the next few days are going to be. "Can't someone else do it?"

Docs are crucial to any software project, so why are we so bad at writing them? We always leave them to the last minute, by which time we've forgotten about half of the features that we've coded. Is there no better way to manage things?

In this article I'll go over why docs are important, why they're annoying to write and, crucially, the way to write docs so that they're not such a chore.

## Why documentation is useful

Docs are useful for one primary reason: training. Most of the time, the creators aren't the end-user, so there needs to be some guide explaining how the code works. That applies no matter who the end-user is: a company, some random teenager working on a hobby project using your package, or someone within your organisation.

However, docs are more than just a deliverable when handing over a project to the client. They're also beneficial for _you_ and your colleagues. Many companies use their own docs as training materials for new starters. Additionally, as a project grows in size, you might forget how your own project handles things that you coded two years ago. The docs are there to support you through that.

Bad or absent docs make life difficult for all manner of folks, including a down-the-line you. Trawling through source code to figure things out for yourself is an enormous drain on time; far better to guide users with docs.

## Why docs are a pain to write

Don't get me wrong: I'm greatly pro-doc. But they _are_ a huge nuisance to write, especially during phases where your project is in flux.

We're often overworked and short on time, and adding the writing of documentation into the mix feels like an own goal. If you've drafted some docs but then decide to take your code in a different direction, your docs have become obsolete before they ever got published. That's rubbish! You'll have to go back and rewrite the damned things!

But have courage, because there's an easier way that will make everyone happy: you won't have to work too hard and your end-user gets their docs on time.

## How to write good docs in three simple steps

If you, like most people, don't have a dedicated docs-writing team working for you, then follow these steps:

1. **Create a blank document right at the start of the project.** Word; Notepad; [Obsidian](https://obsidian.md/); pen and paper; or whatever floats your boat.
2. **Add bullet-point notes as you go along.** No need to add too much detail, since the specific content will likely change as the project progresses. Add the bare minimum, e.g. the names of features and what their purpose. Just enough to remind you what you need to write about when the time comes.
3. **Fill in the blanks when possible.** Periodically review the file and, when a feature is closed/complete, you can write the documentation for it. This way, you can get as much documentation done during the project as possible, reducing the workload right at the end.

Feel free to use nifty features like [docstrings](https://en.wikipedia.org/wiki/Docstring) from which certain docs can be auto-generated, but don't be too lazy! Docs are important and need to be taken seriously.

Following the above three steps, you'll be able to deliver on your documentation requirements without all the painful drawbacks. Happy writing!
