---
type: post
title: "Tip 52 - Deploy Azure Functions with Visual Studio Code"
excerpt: "Learn how to deploy Azure Functions with Visual Studio Code"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-15 17:00:00
---


#### Deploy Azure Functions with Visual Studio Code

We previously looked at adding an Azure Function project to Visual Studio Code in this [post](tip50.html) and then we looked at [debugging it locally](tip51.html). In this post, we'll wrap up this mini-series by deploying Azure Functions to Azure directly.

Select the Azure subscription that you'd like to use and select "Create Function App in Azure." You'll need to select a name and then a resource group (or create a new one). Finally, you'll need a storage account which you can also create a new one or select an existing one. Once that is complete, the Azure Function has been created in Azure.

<img :src="$withBase('/files/azfuncdeploy.gif')">

Now we'll push some code to the newly created Azure Function. Select your Azure Subscription and click deploy. You'll be asked to select the folder to deploy (which it creates a zip), then a subscription, the Function App. Press Yes when asked to overwrite and it will begin deploying. 

<img :src="$withBase('/files/azfuncdeploy1.gif')">

You can switch over to your browser to verify if you want. 

<img :src="$withBase('/files/azfuncdeploy2.png')">
