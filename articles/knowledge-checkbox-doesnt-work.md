---
title: The Knowledge checkbox doesn't work on Problem
date: 2024-05-31
category: servicenow
---

In theory, if the Knowledge checkbox in a ServiceNow Problem record is set to `true`, then a draft knowledge article will be created on resolution of the problem.

In practice, this doesn't happen out of the box, due to a bug (true as of the Washington release).

## The solution

The cause is simply an incorrect trigger condition on a business rule on the Problem table called "Problem Create Knowledge".

Out of the box, the condition on which the script runs is:

```js
current.problem_state.changesTo(4) && current.knowledge == true
```

This condition will never evaluate to `true`, because there is no problem state with the value of `4`. Instead, the correct problem state value is `107`:

```js
current.problem_state.changesTo(107) && current.knowledge == true
```
