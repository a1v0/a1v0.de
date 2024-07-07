---
title: SQL errors in ServiceNow
date: 2024-05-21
category: servicenow
---

ServiceNow runs on SQL. Everybody knows that. But nobody should ever see any SQL on the platform. After all, isn't the entire purpose of ServiceNow to prevent us from using SQL?

So why do we sometimes get SQL errors in the ServiceNow system logs, and what can be done to prevent them?

## Why do we get SQL errors?

ServiceNow is a clever front-end to a database. As such, it should be battle-tested enough to prevent any SQL errors from happening. The good news is that it _is_ good enough for that, in general. Basically any nefarious or erroneous dealings are blocked, including injection and inserting the wrong data types.

The problem is that ServiceNow is also a highly configurable platform, giving us all manner of freedoms. The SQL errors are usually caused by bits of logic added by customers.

In practice, SQL errors happen when database operations run in parallel and create some sort of conflict. For example, you may have a business rule doing one thing and a Flow or Workflow in the background is also running against the same table or record.

Your business rule script might be perfectly sound, but if there's some out-of-the-box Flow that runs in parallel, you may find you're out of luck.

> SQL errors often happen when multiple bits of logic run at the same time, e.g. Flows, Workflows and business rules. Check for any such conflicts when you encounter SQL errors.

### Example error: unique key violations

The most common type of SQL error you will encounter in ServiceNow is a unique key violation, i.e. when an operation attempts to give a record a non-unique sys ID.

```txt
FAILED TRYING TO EXECUTE ON CONNECTION glide.13 (connpid=123456): INSERT INTO table_name...
...
Unique Key violation detected by database ((conn=123456) Duplicate entry 'blablabla...' for key 'column_name')
```

As you can see, the error message is surprisingly helpful: it tells you what the problem is and what is causing it. All you need to figure out is why the error is being triggered. It is most likely a Flow or Workflow.

## How to prevent SQL errors in ServiceNow

True prevention is impossible, unfortunately, because it's not possible to predict the exact scenarios where SQL errors can arise.

It is nonetheless useful to act upon SQL errors when you see them in the logs. Even if you cannot see any consequence of the error beyond the existence of a log message, e.g. if your `gr.insert()` works exactly as anticipated despite the log, you never know what other nonsense could happen under different circumstances.

As mentioned above, the platform shouldn't be allowing SQL errors, so the fact that an error has made it through the cracks is cause for legitimate concern.
