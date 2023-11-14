---
title: The UPS Shipping API Returns 200! (And other quirks)
date: 2023-11-14
---

The UPS Shipping API is an unwieldy beast. The documentation [INCLUDE LINK] leaves a lot to be desired and is a source of constant frustration for developers, and the tech support UPS offers is even worse. For such an enormous company with so many resources available, and such a small number of APIs, I really felt that they could do so, _so_ much better.

This page lists things I have learned while using UPS's website, its API and its documentation, in the hope that others might be spared some of the troubles I underwent.

## 1. The UPS website only works on Chrome

I was having trouble using the tech support contact form [INCLUDE LINK]. Turns out that UPS's antiquated website only works properly on Chrome.

Personally, I find this an unforgivable oversight. A contact form, of all things, should work properly on any browser.

Moreover, it's not exactly a difficult thing to achieve. I've no idea what UPS has done to make its form work only on Chrome, but, whatever it is, there's another, better way they could have done it!

Chrome is by far the dominant browser in the desktop world [INCLUDE LINK], but not everybody has access to Chrome. For instance, many companies restrict the software on employees' computers, and you may not be able to install Chrome on your machine.

You really can do better, UPS!

## 2. The Shipping API returns 201, not 200

The docs suggest that the UPS Shipping API returns 200 when a successful request is given. In fact, the response is 201.

Any tests that assert that the returned status is 200 will therefore fail. If you're careless (like me, alas), you might not notice for a while that your request is successful, despite a failing Jest test suite.

## 3. Non-unique order number field

The Shipping API has numerous fields to store reference numbers. However, most of them expect a unique value.

This is no good if you need to re-use a reference number. For example, if order no. 1234 gets shipped, returned, then shipped again, you'll probably want to link the second shipment to order no. 1234.

The field to use in this case is `ReferenceNumber/Value`. This will link the shipment to the order number and the order number will normally display on the generated invoice.
