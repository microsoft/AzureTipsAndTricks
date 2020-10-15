---
type: post
title: "Tip 25 - Use the Azure Resource Explorer to quickly explore REST APIs"
excerpt: "Learn how to use the Azure Resource Explorer to quickly explore REST APIs"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-01 17:00:00
---

::: tip
:bulb: Learn more : [Azure Resource Manager](https://docs.microsoft.com/azure/azure-resource-manager?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to use the Azure Resource Explorer](https://www.youtube.com/watch?v=hBl_2iaqIDs&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=20?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Intro

We've recently created a [web app](https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html) and uploaded it to Azure App Service. We also took a look at [multiple ways](https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html) to examine those files through the Azure portal interface and how we'd add [extensions](https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html) and [deployment slots](https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html) for our web app. We also took a look at a feature called [Testing in Production](https://microsoft.github.io/AzureTipsAndTricks/blog/tip23.html) which allows us to distribute traffic between our production and other slots. We also looked at using [PowerShell](https://microsoft.github.io/AzureTipsAndTricks/blog/tip24.html) to automatically distribute the load between your Production and deployment slot sites with the Testing in Production feature. In this post, we'll continue exploring our web app with a feature called Azure Resource Explorer which will allow us to quickly explore REST APIs.  

#### Use the Azure Resource Explorer to quickly explore REST APIs

The Azure Resource Manager allows you to explore (and learn) REST APIs in your Azure Subscription in a friendly fashion. If you log into your Azure account and go to your App Service that you created and look under **Development Tools** then you will see it. 

<img :src="$withBase('/files/azureresourceexplorer1.png')">

Inside the blade, it will redirect you to [https://resources.azure.com](https://resources.azure.com) and you'll see your current app. You can also go back to the url without entering the portal, but will have to manually browse to your app.

<img :src="$withBase('/files/azureresourceexplorer2.png')">

There is a navigation tree that you can click on to drill into the current web app. As you click the URL and JSON returned will update. You'll also notice that there is an **Edit** button that you can use to call a PUT to update an item as shown below. 

<img :src="$withBase('/files/azureresourceexplorer3.gif')">

**Note:** Keep in mind that you'll need to be in `Read\Write` mode to do this which can be found in the top panel by your name. 


You can also perform a POST or DELETE on some resources as well as Create. There is documentation, but what is very interesting to me is the **PowerShell** and **CLI 2.0** options. If you click on **CLI 2.0** for a resource then you'll see the following. 

<img :src="$withBase('/files/azureresourceexplorer4.png')">

Awesome! That is the CLI 2.0 commands we could use in BASH or wherever the CLI 2.0 is supported. 

If we were looking in the following node of our web app and say for example that we want to update the `logsDirectorySizeLimit` property, then we could start taking advantage of this feature. 

<img :src="$withBase('/files/azureresourceexplorer5.png')">

In this example, I clicked on the `CLI 2.0` link and it provided the following code: 

```bash
az resource show --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01

az resource update --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01 --set properties.key=value
```

The only value that we'd need to update is on the last line with the `--set properties.key=value`. Since we want to just update the `logsDirectorySizeLimit` property then we can do so with `--set properties.logsDirectorySizeLimit=40`. 

The complete command is shown below. 

```bash
az resource show --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01

az resource update --id /subscriptions/d1ecc7ac-c1d8-40dc-97d6-2507597e7404/resourceGroups/StaticResourceGroup/providers/Microsoft.Web/sites/MyQuizApplication/config/web --api-version 2016-08-01 --set properties.logsDirectorySizeLimit=40
```
I could now switch back over to my browser and press the **GET** button to see that the `logsDirectorySizeLimit` has now been updated to 40. 

