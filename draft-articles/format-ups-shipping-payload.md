---
title: How to format the payload in the UPS Shipping API
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
date: 2024-01-01
---

The UPS documentation page [INSERT LINK!] is pretty unwieldy at times. Not only does it not work properly on browsers other than Chrome [INSERT LINK!], but it's also generally user-unfriendly:

They've overridden the standard Ctrl+F, in favour of an inferior custom "find" utility; there's no "expand all" or "collapse all" button to show/hide the full contents of the API's payload descriptions; and their indication of what is and isn't mandatory isn't quite right.

## Minimum viable payload for UPS Shipping API

To make your life easier, here's the bare minimum JSON payload for a shipment. It's a little more than the docs would have you believe.

[THE BELOW ISN'T QUITE THE BARE MINIMUM. USE METRO API AS A GUIDE]
[ADD PROPER 4-SPACE INDENTATION TO BELOW]

```json
{
    "ShipmentRequest": {
        "Request": {
            "RequestOption": "nonvalidate"
        },
        "Shipment": {
            "Description": "Ship WS test",
            "Shipper": {
                "Name": "ShipperName",
                "AttentionName": "ShipperZs Attn Name",
                "Phone": {
                    "Number": "1115554758",
                    "Extension": " "
                },
                "ShipperNumber": "AB0445",
                "FaxNumber": "8002222222",
                "Address": {
                    "AddressLine": ["2311 York Rd"],
                    "City": "Timonium",
                    "PostalCode": "21093",
                    "CountryCode": "GB"
                }
            },
            "ShipTo": {
                "Name": "Happy Dog Pet Supply",
                "AttentionName": "1160b_74",
                "Phone": {
                    "Number": "9225377171"
                },
                "Address": {
                    "AddressLine": ["123 Main St"],
                    "City": "timonium",
                    "PostalCode": "21030",
                    "CountryCode": "GB"
                }
            },

            "PaymentInformation": {
                "ShipmentCharge": [
                    {
                        "Type": "01",
                        "BillShipper": {
                            "AccountNumber": "AB0445"
                        }
                    }
                ]
            },
            "Service": {
                "Code": "65"
            },
            "Package": [
                {
                    "Description": " ",
                    "Packaging": {
                        "Code": "02",
                        "Description": "Nails"
                    },
                    "Dimensions": {
                        "UnitOfMeasurement": {
                            "Code": "CM"
                        },
                        "Length": "10",
                        "Width": "30",
                        "Height": "45"
                    },
                    "PackageWeight": {
                        "UnitOfMeasurement": {
                            "Code": "KGS"
                        },
                        "Weight": "5"
                    }
                }
            ]
        }
    }
}
```
