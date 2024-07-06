---
title: How to trigger a full rerender of a Vue component
date: 2023-11-15
category: Vue
---

I was working on WYSIWYG content editor website at work recently. It runs on [Vue](https://vuejs.org/) and [Bootstrap](https://getbootstrap.com/) and has two main elements:

0. An off-canvas config panel, where users can modify the content, CSS and functionality of their page's content
1. A full, working preview of what the page will look like once published

The problem is that some HTML elements have properties/attributes that can only be set when the page loads. For instance, the `autoplay` attribute on Bootstrap's carousel component doesn't work if you set `autoplay` to `true` _after_ the carousel has loaded.

The solution? Trigger a full rerender of the component.

## How does it work?

In short: give the parent element of the component a `key` attribute, and then change it! Vue always rerenders content once its key has changed.

> **tl;dr:** Changing the key of an element within your `<template>` will force a full rerender, including all children.

In the below code sample, the `<div>` that contains the template's content has been given a `key` attribute of `changingKey`. When we run `triggerReload()`, the value of `changingKey` changes, triggering a full reload of the `<div>` and all its child content.

```html
<script setup>
    const changingKey = ref(1);

    const triggerReload = () => {
        ++changingKey;
    };
</script>
<template>
    <div :key="changingKey">
        <!-- content goes here -->
    </div>
</template>
```

## When should I use this trick?

There are three use cases (that I know of!) for rerendering an entire component.

### 0. To get something to behave 'like new'

As I intimated at the beginning, I was in a position where my component wouldn't work as intended unless I reloaded it from scratch.

There will be plenty of times when you need a fresh start. Rerendering a full component can be a helpful hard reset.

### 1. Triggering a transition

The [`<Transition>` component](https://vuejs.org/guide/built-ins/transition.html#the-transition-component) is built in to Vue and allows you to create transition effects, e.g. when a component loads.

If you want to force that transition to happen after the component has already loaded, you can update the element's `key` attribute.

### 2. Triggering lifecycle hooks

Related to the `<Transition>` component, you can also force Vue's [lifecycle hooks](https://vuejs.org/guide/essentials/lifecycle.html) to run by changing the key of an element.

## When shouldn't I use it?

If you're not doing one of the things listed above, then it's probably not worth triggering a full rerender.

Vue's implementation of its state model is extremely efficient. When you change the value of a `ref`, for instance, it only rerenders the bare minimum. This keeps your website running nice and fast, without unnecessary browser work.

Running a full rerender might, in some cases, make your code shorter. It might be easier than keeping track of a bunch of different `ref`s, perhaps. But it's not great practice and, without proper justification, might look a little lazy, unprofessional or&mdash;God forbid!&mdash;n00by.

But why am I making such a big fuss over a bit of superfluous rerendering? It's not like a modern laptop can't handle it, right?

It's true: in the grand scheme of things, a lazy full rerender won't cause too many problems for anybody, even if it's technically bad practice. But, to paraphrase a famous economist, in the grand scheme of things, [we are all dead](https://blogs.worldbank.org/impactevaluations/how-long-long-run). Better do it properly.
