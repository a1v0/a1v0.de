---
title: Error 9170026 "Invalid shipment identifier." in UPS Shipping API
date: 2024-12-03
category: ups-api
---

While building an integration with the UPS Shipping API, we encountered error **9170026 "Invalid shipment identifier."**, which is not documented anywhere on the internet.

Moreover, there's no field within the API that stands out as something that could be called a "shipment identifier". There's `PackageID`, I suppose, but that doesn't seem right.

I contacted UPS and engaged in a long exchange, until we finally got to the bottom of the problem.

## Customs forms on international shipments

The error is triggered, to my knowledge, only when making international shipments. Shipping abroad, in most cases, requires some sort of customs declaration.

UPS's customs forms are confusing and deviate (as far as I know!) from the norm. Ordinarily, all international shipments require some sort of CN22 form.

However, here's the reply from UPS: **"the CN22 form type can only be used with Mail Innovations and SurePost services."**

The inclusion of a CN22 object in your Shipping API payload triggers the error. UPS recommends using the **Commercial Invoice** form instead.

> For UPS, the CN22 form is valid only for Mail Innovations and SurePost services. For most other things, Commercial Invoice is the form to choose.
