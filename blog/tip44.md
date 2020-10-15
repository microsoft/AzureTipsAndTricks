---
type: post
title: "Tip 44 - Deploying Azure Logic App through Visual Studio 2017"
excerpt: "Learn how to use Visual Studio 2017 to deploy an Azure Logic App"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-01 17:00:00
---

::: tip
:bulb: Learn more : [Azure Logic Apps Documentation](https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Deploy Azure Logic Apps through Visual Studio 2017](https://www.youtube.com/watch?v=sK26e6JIBao&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=40?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Deploying Azure Logic App through Visual Studio 2017

Now that you know [how to setup your Visual Studio environment](https://microsoft.github.io/AzureTipsAndTricks/blog/tip43.html), you probably wrote some code and it is time to deploy it. 

Fire up Visual Studio 2017 Logic App project. In my case, I created an app that would monitor tweets and post them to OneDrive, but you can do whatever you want.

<img :src="$withBase('/files/vs2017deploylogicapp1.png')">

Right click on the name of your project and select **Deploy** and then either **New** or an existing resource group. 

<img :src="$withBase('/files/vs2017deploylogicapp2.png')">

It will prompt you to login, so do so now. 

<img :src="$withBase('/files/vs2017deploylogicapp3.png')">

If there are any fields that you missed, then it will prompt you to enter them now. In my case, I had not set the name and it prompted me to do so. 

<img :src="$withBase('/files/vs2017deploylogicapp4.png')">

Now you'll see in the output window that it calls the PowerShell script to deploy the resources for your Logic App. 

<img :src="$withBase('/files/deploylogicapp5.png')">

Once it finishes deploying, log into the Azure Portal to see your new resource. 
