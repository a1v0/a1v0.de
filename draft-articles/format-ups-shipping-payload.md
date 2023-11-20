---
title: How to correctly format the payload in the UPS Shipping API
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
date: 2023-11-15
---

This is the bare-minimum object:

```js
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
          "AddressLine": [
            "2311 York Rd"
          ],
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
          "AddressLine": [
            "123 Main St"
          ],
          "City": "timonium",
          "PostalCode": "21030",
          "CountryCode": "GB"
        }
      },

"PaymentInformation":
{

    "ShipmentCharge":
[{

    "Type": "01",
    "BillShipper":

        {
            "AccountNumber": "AB0445"
        }
    }
]
},
      "Service": {
        "Code": "65"
      },
      "Package": [{
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
      }]
    }
  }
}
```
