---
title: Where can I store a non-unique order number in the UPS Shipping API?
date: 2025-01-04
category: ups-api
---

The UPS Shipping API is an unwieldy beast. I've written [a few things about it](/ups-api) already, so I'll keep this one short. It's about where you can store a **non-unique order number**.

The Shipping API has numerous fields to store reference numbers. However, most of them expect a unique value, i.e. a value that can't be re-used on another shipment.

This is no good if you need to re-use a reference number. For example, if order no. 1234 gets shipped, returned by the customer, then shipped again, you'll probably want to link the second shipment to order no. 1234 for your own bookkeeping.

The field to use in this case is `ReferenceNumber.Value`. This will link the shipment to the order number and the order number will normally display on the generated invoice. The full path is **`ShipmentRequest.Shipment.ReferenceNumber.Value`**.

> `ReferenceNumber.Value` is the field to use for a non-unique reference number.
