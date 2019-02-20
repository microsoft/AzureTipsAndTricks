---
type: post
title: "Azure Tips and Tricks Part 18 - Use Tags to quickly organize Azure Resources"
excerpt: "Learn how to take advantage of tags to organize your Azure resources"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-19 17:00:00
---

## Use Tags to quickly organize Azure Resources

Head over to the Azure Portal and select service. In my example, I'm going to select a Web App that I want to tag as a production app. Select the **Tags** menu and provide a Name and Value as shown below.  

<img :src="$withBase('/files/azuretag1.png')">

**Remember this!** Tags are user-defined key/value pairs which can be placed directly on a resource or a resource group.


I selected "Environment" and gave it the value of "Production". I then clicked "Save". I could also do this for other Production resources and even tag the appropriate ones with "Dev".

I can now take advantage of this by going to **More Services** and typing **Tags** and click on the Environment: Production as shown below. 

<img :src="$withBase('/files/azuretag2.png')">

1. Results from searching "Tags"
2. Our Production Environment we just setup
3. List all the Web Apps with the Production Environment Tag
4. Pin the Blade to our Azure Portal Main Page

If you pin the blade (by pressing the pin in step 4.), then you'll see the following on your Azure Portal dashboard

<img :src="$withBase('/files/azuretag3.png')">

You can even interact with **Tags** using Azure CLI 2.0. For example, I can type `az tag list -o json` to list all the tags associated with an account.

``` shell
michael@Azure:~$ az tag list
[
  {
    "count": {
      "type": "Total",
      "value": 2
    },
    "id": "/subscriptions/c0e5fb0f-7461-4b04-9720-63fe407b1bdb/tagNames/Environment",
    "tagName": "Environment",
    "values": [
      {
        "count": {
          "type": "Total",
          "value": 1
        },
        "id": "/subscriptions/c0e5fb0f-7461-4b04-9720-63fe407b1bdb/tagNames/Environment/tagValues/Dev",
        "tagValue": "Dev"
      },
      {
        "count": {
          "type": "Total",
          "value": 1
        },
        "id": "/subscriptions/c0e5fb0f-7461-4b04-9720-63fe407b1bdb/tagNames/Environment/tagValues/Production",
        "tagValue": "Production"
      }
    ]
  }
]
```
