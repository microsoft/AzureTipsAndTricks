---
type: post
title: "Tip 62 - Force HTTPS in Azure Functions"
excerpt: "Learn how to force HTTPS in Azure Functions"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-04 17:00:00
---

::: tip
:bulb: Learn more : [Azure Functions Documentation](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

### Force HTTPS in Azure Functions

I was looking into adding HTTPS to an existing Azure Function that I had and was pleasantly surprised that you can easily do this now through the Azure Portal (and I assume CLI). Simply log into the portal and select your Azure Function, go to **Platform Features** and then click on **Custom Domains** as shown below: 

<img :src="$withBase('/files/azhttpsblog1.png')">

This will bring you to the **Custom Domains** page and here you can switch HTTPS to On and either add a hostname or domain name. Keep in mind that you don't have to actually add a new hostname/domain to use this feature. 

<img :src="$withBase('/files/azhttpsblog2.png')">

<img :src="$withBase('/files/azhttpsblog3.png')">

**What if users are accessing my HTTP version?** They will receive a 301 Status code and be redirected to the HTTPS site.

