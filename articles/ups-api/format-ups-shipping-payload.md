---
title: How to format the payload in the UPS Shipping API
date: 2026-03-15
category: ups-api
---

The UPS API documentation pages are pretty unwieldy at times. Not only do they not work properly on browsers [other than Chrome](/ups-api/ups-website-only-works-on-chrome), but they're also generally user-unfriendly.

For instance, there's no "expand all" or "collapse all" button to show/hide the full contents of the API's payload descriptions; and their indication of what is and isn't mandatory isn't quite right.

## Minimum viable payload for UPS Shipping API

To make your life easier, here's the bare minimum JSON payload for a shipment using the [Shipping API](https://developer.ups.com/tag/Shipping?loc=en_US). It's a little more than the docs would have you believe.

Not all values in the fields are desirable for every user, so don't just copy and paste. Make sure you use the option values that apply to your company.

Also, there are additional requirements if you're shipping abroad. The minimum requirements for this are incredibly varied and depend on where you're based. These details have therefore not been included below.

```json
{
    "ShipmentRequest": {
        "Request": {
            "RequestOption": "validate"
        },
        "Shipment": {
            "ShipTo": {
                "Name": "Thomas & French Ltd",
                "AttentionName": "Lord Wilmore",
                "Address": {
                    "AddressLine": ["34, rue du Château d'If"],
                    "City": "Marseille",
                    "PostalCode": "13001",
                    "CountryCode": "FR"
                }
            },
            "ReferenceNumber": {
                "Value": "#12345"
            },
            "Service": {
                "Code": "65"
            },
            "Shipper": {
                "Name": "Morrel & Sons",
                "AttentionName": "Luigi Vampa",
                "Phone": {
                    "Number": "123456789"
                },
                "Address": {
                    "AddressLine": ["12 rue Sinbad-le-marin"],
                    "City": "Paris",
                    "PostalCode": "12345",
                    "CountryCode": "FR"
                },
                "ShipperNumber": "XY12345", // This is your UPS account name
            },
            "PaymentInformation": {
                "ShipmentCharge": {
                    "Type": "01",
                    "BillShipper": {
                        "AccountNumber": "XY12345"
                    }
                }
            },
            "Package": [
                {
                    "Packaging": {
                        "Code": "Packaging code"
                    },
                    "PackageWeight": {
                        "UnitOfMeasurement": {
                            "Code": "KGS"
                        },
                        "Weight": "Package weight"
                    }
                }
            ],
            "ShipmentRatingOptions": {
                // This isn't strictly a minimum requirement,
                // but it is needed to ensure you get the
                // discount that you probably have on your account.
                "NegotiatedRatesIndicator": "Y"
            }
        }
    }
}
```

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
