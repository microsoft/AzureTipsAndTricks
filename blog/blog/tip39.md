---
type: post
title: "Tip 39 - Setup an HTTP Request Trigger that is used in an Azure Logic Apps"
excerpt: "Learn how to setup an HTTP Request Trigger with Azure Logic Apps"
tags: [Integration]
date: 2017-10-24 17:00:00
---

::: tip
:bulb: Learn more : [Azure Logic Apps Documentation](https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-azureappsdev).

:tv: Watch the video : [How to create a HTTP Trigger with Azure Logic Apps](https://www.youtube.com/watch?v=oIwDgJPmVCg&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=32?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### Setup an HTTP Request Trigger that is used in an Azure Logic Apps

#### My Scenario - Tracking Run Data

I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of [Zappier.com](http://www.zapier.com) and [Azure](http://www.azure.com) to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this:

* [Parse Emails to be used in a Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html)
* [Create JSON Schema to be used in a Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html)
* [This post - Setup an HTTP Request Trigger that is used in an Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html)
* [Upload Files from a URL with Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip40.html)


#### Setup an HTTP Request Trigger that is used in an Azure Logic Apps

In the [this post](https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html), we used Zappier to setup a web hook that calls a POST method that provides the filename, csv, gpx and kml url that it parsed from our email.

We'll pick up by creating a new Azure Logic App. Go to the Azure Portal and create a new Logic App.

<img :src="$withBase('/files/logicappblog1.png')">

After the resource is ready, we're are going to need to trigger an action when an HTTP request comes in. Thankfully, this is one of the **Common Triggers** and we can select it to begin.

<img :src="$withBase('/files/logicappblog2.png')">

Note that the URL isn't generated until we provide the parameters.

<img :src="$withBase('/files/logicappblog3.png')">

Go ahead and press **Edit** and remember the JSON Schema from the [this post](https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html)? Well, now is the time to paste it in. I'll also include it below:

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "csv": {
      "id": "/properties/csv",
      "type": "string"
    },
    "filename": {
      "id": "/properties/filename",
      "type": "string"
    },
    "gpx": {
      "id": "/properties/gpx",
      "type": "string"
    },
    "kml": {
      "id": "/properties/kml",
      "type": "string"
    }
  },
  "type": "object"
}
```

**Note:** You can use the "Use sample payload to generate schema" option, but I prefer the additional meta data that [JSON Schema](https://jsonschema.net/#/editor) can provide.


You'll now have a GET URL that you can put in Zappier and replace the [requestb.in](https://requestb.in/) that we stubbed out earlier.

<img :src="$withBase('/files/logicappblog4.png')">

Head back over to [Zappier Editor](https://zapier.com/app/editor) and modify your Zap by editing the template and replacing the requestb.in URL with your live Azure Logic Apps ones.

<img :src="$withBase('/files/logicappblog5.png')">
