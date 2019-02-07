---
type: post
title: "Azure Tips and Tricks Part 21 - Adding Extensions to Web Apps in Azure App Service"
excerpt: "Learn how to work with extensions in Azure App Service"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-23 17:00:00
---


## Adding Extensions to Web Apps in Azure App Service

We've recently created a [web app](http://www.michaelcrump.net/azure-tips-and-tricks19/) and uploaded it to Azure App Service. We also took a look at [multiple ways](http://www.michaelcrump.net/azure-tips-and-tricks19/) to examine those files through the Azure portal interface. In this post, we'll take a look at extensions that you can add to Azure app services to add additional functionality. 

### Back in the Azure Portal

I can go to the Azure Portal and select my App Service and click on **Extensions** under **Development Tools** to get started. Then click on the **Add** button. 

<img :src="$withBase('/files/webappext1.png')">

In the choose extension screen, you have a vast variety of extensions to select from. Some are from MS and others are from independent authors. 

<img :src="$withBase('/files/webappext2.gif')">

Select `Azure Web Apps Disk Usage` by Rajrang Rapuri and agree to the terms and press OK. It should only take a moment to install and then navigate back to Extensions. 

**What does this thing do?** Azure Web Apps Disk Usage is a web based File Explorer which lists all folders for your website with size. It provides  detailed information about files and folders name, size, number of files, last date modified and percentage of disk usage. This tool provides a tree like folder view for easier parsing.
{: .notice--info}

If you right-click on the item that you just installed, then you'll see that you can pin, browse, update or delete it. 

<img :src="$withBase('/files/webappext3.png')">

We'll select browse and it will redirect us to the extension that we installed. 

<img :src="$withBase('/files/webappext4.png')">

Cool! We're able to see the extension working.

### Exploring the Extension in the File System

You may be wondering what happened when we clicked on the Extension. Well, if we click on the *Kudu Advanced Tools** option in the Azure Portal, then navigate inside `SiteExtensions` and then `DiskUsage`, then we'll see that here is where the extension was installed into.  

<img :src="$withBase('/files/webappext5.png')">

**Source Code** The source code to the extension that we installed can be found [here](https://github.com/rajkumar-rangaraj/MAWSFileExplorer)
{: .notice--info}
