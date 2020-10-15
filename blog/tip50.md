---
type: post
title: "Tip 50 - Create an Azure Functions project with Visual Studio Code"
excerpt: "Learn how to write local Azure Functions with Visual Studio Code"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-13 17:00:00
---

::: tip
:bulb: Learn more : [Azure Functions Documentation](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Create an Azure Functions Project with Visual Studio Code](https://www.youtube.com/watch?v=F0dJz8LLF4Q&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=44?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Create an Azure Functions project with Visual Studio Code

Visual Studio Code is the best thing since coffee for developers and if you pair it with Azure Functions... well, more awesome happens. In this post, we'll look at adding an Azure Function project to Visual Studio Code. 

It is fairly easy as all you need to do is open VS Code, click on Extensions and search for `azure functions` and install it as shown below. 

<img :src="$withBase('/files/azfuncvscode1.png')">

Once installed, you'll need to reload the extension and you should see your subscriptions.  

<img :src="$withBase('/files/azfuncvscode2.png')">

You may need to sign in if Visual Studio Code hasn't already been authenticated. 

Now you should create a project, then a function app, and select which template that you want to use. After you select a template, then you'll need to provide a name and a authorization level. 

<img :src="$withBase('/files/azfuncvscode3.gif')">

Just hit F5 and you have a local Azure Function running in Visual Studio Code. 

