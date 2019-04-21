---
type: post
title: "Tip 69 - Access and embed Azure Cloud Shell Anywhere"
excerpt: "Learn how to access Azure Cloud Shell anywhere"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-17 17:00:00
---


#### Access and embed Azure Cloud Shell Anywhere

I've discussed at great lengths many aspects of Azure Cloud Shell. Some of my recent posts include : 

* [Access Cloud Shell from within Microsoft Docs](https://microsoft.github.io/AzureTipsAndTricks/blog/tip11.html?WT.mc_id=github-azuredevtips-micrum)
* [Demystifying storage in Cloud Shell](https://microsoft.github.io/AzureTipsAndTricks/blog/tip13.html?WT.mc_id=github-azuredevtips-micrum)
* [Generate SSH public key to log into Linux VM with Cloud Shell](https://microsoft.github.io/AzureTipsAndTricks/blog/tip14.html?WT.mc_id=github-azuredevtips-micrum)
* [Underlying Software in Azure Cloud Shell](https://microsoft.github.io/AzureTipsAndTricks/blog/tip15.html?WT.mc_id=github-azuredevtips-micrum)
* [Use PowerShell with Azure Cloud Shell](https://microsoft.github.io/AzureTipsAndTricks/blog/tip17.html?WT.mc_id=github-azuredevtips-micrum)

Today, I'd like to discuss the new functionality with Azure Cloud Shell, which allows you to spin up a shell in your browser by simply going to [shell.azure.com](http://shell.azure.com). 

<img :src="$withBase('/files/cloudshellbrowser1.png')">

Keep in mind that this is the same Cloud Shell you know and love, it is just easily accessible anywhere you have a browser. 

#### Jump to the PowerShell or BASH instance

You can also specify which instance of Cloud Shell you wish to launch (ex. PowerShell or BASH) by modifying the URL.

* [shell.azure.com/powershell](https://shell.azure.com/powershell) which will launch a PowerShell instance
* [shell.azure.com/bash](https://shell.azure.com/bash) which will launch a BASH instance

#### Embed Cloud Shell

According to the [docs](https://docs.microsoft.com/en-us/azure/cloud-shell/embed-cloud-shell?WT.mc_id=docs-azuredevtips-micrum), you can easily embed this into Markdown or a Pop-up. 

For instance, this button [![Launch Cloud Shell](https://shell.azure.com/images/launchcloudshell.png "Launch Cloud Shell")](https://shell.azure.com) was created using the Markdown the docs team provided. They also have a sample for a pop-up. 
