---
type: post
title: "Tip 41 - Quickly Roll Back to a Previous Version of an Azure Logic App"
excerpt: "Learn how to quickly roll back to a Previous version of an Azure Logic App"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-29 17:00:00
---


#### Quickly Roll Back to a Previous Version of an Azure Logic App

This one seems to come up a lot, so I'll add it here. If you have created an Azure Logic App and would like to go back to a previous version, then you can do so very easily. Go ahead and open your logic app and look under **Development Tools** then **Versions** and select a previous version. 

<img :src="$withBase('/files/versionlogic1.png')">

Once you select a previous version, you'll see **History**.

<img :src="$withBase('/files/versionlogic2.png')">

From here you can hit the **Promote** button and **Save** to use this version in production. 

