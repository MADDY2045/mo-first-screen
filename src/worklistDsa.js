const dsa = {
  "vendors": [
    {
      "vendorId": "V001",
      "vendorName": "Vendor A",
      "rdcs": [
        {
          "rdcId": "RDC001",
          "rdcName": "RDC One",
          "trucks": [
            {
              "truckId": "T001",
              "earliestShipDate": "2023-01-10",
              "latestArrivalDate": "2023-01-15",
              "totalQuantityOrdered": 5000,
              "totalPriceOrdered": 30000,
              "totalCube": 400,
              "totalWeight": 10000,
              "totalPallets": 20,
              "totalPoints": 50,
              "stores": [
                {
                  "storeId": "S001",
                  "items": [
                    {
                      "itemId": "I001",
                      "itemDescription": "Item One",
                      "orderQuantity": 500,
                      "cost": 2500,
                      "spoq": 5,
                      "lpom": 2,
                      "multipleSpoqs": true,
                      "spoqLists": [
                        { "location": "Location A", "spoq": 3 },
                        { "location": "Location B", "spoq": 2 }
                      ]
                    },
                    {
                      "itemId": "I002",
                      "itemDescription": "Item Two",
                      "orderQuantity": 750,
                      "cost": 3750,
                      "spoq": 7,
                      "lpom": 3,
                      "multipleSpoqs": false
                    }
                  ]
                },
                {
                  "storeId": "S002",
                  "items": [
                    {
                      "itemId": "I001",
                      "itemDescription": "Item One",
                      "orderQuantity": 500,
                      "cost": 2500,
                      "spoq": 5,
                      "lpom": 3,
                      "multipleSpoqs": true,
                      "spoqLists": [
                        { "location": "Location A", "spoq": 2 },
                        { "location": "Location B", "spoq": 3 }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "truckId": "T002",
              "earliestShipDate": "2023-01-12",
              "latestArrivalDate": "2023-01-17",
              "totalQuantityOrdered": 6000,
              "totalPriceOrdered": 36000,
              "totalCube": 500,
              "totalWeight": 12000,
              "totalPallets": 25,
              "totalPoints": 60,
              "stores": [
                {
                  "storeId": "S003",
                  "items": [
                    {
                      "itemId": "I003",
                      "itemDescription": "Item Three",
                      "orderQuantity": 2000,
                      "cost": 10000,
                      "spoq": 10,
                      "lpom": 5,
                      "multipleSpoqs": true,
                      "spoqLists": [
                        { "location": "Location C", "spoq": 5 },
                        { "location": "Location D", "spoq": 5 }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "rdcId": "RDC002",
          "rdcName": "RDC Two",
          "trucks": [
            {
              "truckId": "T003",
              "earliestShipDate": "2023-01-14",
              "latestArrivalDate": "2023-01-19",
              "totalQuantityOrdered": 7000,
              "totalPriceOrdered": 42000,
              "totalCube": 600,
              "totalWeight": 14000,
              "totalPallets": 30,
              "totalPoints": 70,
              "stores": [
                {
                  "storeId": "S004",
                  "items": [
                    {
                      "itemId": "I004",
                      "itemDescription": "Item Four",
                      "orderQuantity": 1500,
                      "cost": 7500,
                      "spoq": 7,
                      "lpom": 4,
                      "multipleSpoqs": false
                    }
                  ]
                },
                {
                  "storeId": "S005",
                  "items": [
                    {
                      "itemId": "I004",
                      "itemDescription": "Item Four",
                      "orderQuantity": 1000,
                      "cost": 5000,
                      "spoq": 5,
                      "lpom": 2,
                      "multipleSpoqs": false
                    }
                  ]
                }
              ]
            },
            {
              "truckId": "T004",
              "earliestShipDate": "2023-01-16",
              "latestArrivalDate": "2023-01-21",
              "totalQuantityOrdered": 8000,
              "totalPriceOrdered": 48000,
              "totalCube": 700,
              "totalWeight": 16000,
              "totalPallets": 35,
              "totalPoints": 80,
              "stores": [
                {
                  "storeId": "S006",
                  "items": [
                    {
                      "itemId": "I005",
                      "itemDescription": "Item Five",
                      "orderQuantity": 3000,
                      "cost": 15000,
                      "spoq": 15,
                      "lpom": 5,
                      "multipleSpoqs": true,
                      "spoqLists": [
                        { "location": "Location F", "spoq": 15 }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "stores": [
    {
      "storeId": "S001",
      "storeName": "Store One",
      "location": "Location A"
    },
    {
      "storeId": "S002",
      "storeName": "Store Two",
      "location": "Location B"
    },
    {
      "storeId": "S003",
      "storeName": "Store Three",
      "location": "Location C"
    },
    {
      "storeId": "S004",
      "storeName": "Store Four",
      "location": "Location D"
    },
    {
      "storeId": "S005",
      "storeName": "Store Five",
      "location": "Location E"
    },
    {
      "storeId": "S006",
      "storeName": "Store Six",
      "location": "Location F"
    }
  ]
}

