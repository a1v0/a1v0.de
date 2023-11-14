---
title: The UPS Shipping API Returns 201! (And other quirks)
date: 2023-11-14
---

[I have a lot to say about UPS, including how to format the payload. maybe split the articles up in to a number of different bits]

The UPS Shipping API is an unwieldy beast. The documentation [INCLUDE LINK] leaves a lot to be desired and is a source of constant frustration for developers, and the tech support UPS offers is even worse. For such an enormous company with so many resources available, and such a small number of APIs, I really felt that they could do so, _so_ much better.

This page lists things I have learned while using UPS's website, its API and its documentation, in the hope that others might be spared some of the troubles I underwent.

## 1. The UPS website only works on Chrome

I was having trouble using the tech support contact form [INCLUDE LINK]. It wouldn't let me submit it properly.

Turns out that UPS's antiquated website only works properly on Google Chrome. When I spoke to a UPS tech support rep, they told me the site doesn't work on Firefox, as though it were a perfectly normal thing to say.

Personally, I find this an unforgivable oversight. A contact form, of all things, should work properly on _any_ browser. It's a website user's last resort, when all else has failed (and a _lot_ has failed on the UPS site; trust me!).

Moreover, it's not exactly a difficult thing to achieve. I've no idea what UPS has done to make its form work only on Chrome, but, whatever it is, there's a better way they could have done it!

Chrome is by far the dominant browser in the desktop world [INCLUDE LINK], but not everybody has access to Chrome. For instance, many company-issued computers restrict the software available to employees, and you may not be able to install Chrome on your machine. (I've been stuck with Edge and Internet Explorer(!) often enough.)

You really can do better, UPS!

## 2. The Shipping API returns `201`, not `200`

The docs suggest that the UPS Shipping API returns `200` when a successful request is given. In fact, the response is `201`.

Any tests that assert that the returned status is `200` will therefore fail. If you're careless (like me, alas), you might not notice for a while that your request is successful, despite a failing Jest test suite.

I attribute this error simply to carelessness on UPS's part. I'd feel less upset by it if it were a small startup or a private project, because mixing up `200` and `201` is easily done. But the fact that the error hasn't been spotted in UPS's documentation shows a lack of care.

## 3. Non-unique order number field

The Shipping API has numerous fields to store reference numbers. However, most of them expect a unique value.

This is no good if you need to re-use a reference number. For example, if order no. 1234 gets shipped, returned by the customer, then shipped again, you'll probably want to link the second shipment to order no. 1234 fpr your own bookkeeping.

The field to use in this case is `ReferenceNumber/Value`. This will link the shipment to the order number and the order number will normally display on the generated invoice.

[mention about the field to use in an international shipment]

[mention the various other order no fields on offer, and when to use them]
