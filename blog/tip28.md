---
type: post
title: "Tip 28 - Configure a Backup for your Azure App Service and Database"
excerpt: "Learn how to configure a Backup for your Azure App Service and Database"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-04 17:00:00
---

::: tip
:bulb: Learn more : [App Service Documentation](https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum). 

:tv: Watch the video : [How to Configure a Backup for Your Azure App Service](https://www.youtube.com/watch?v=uQXDkW1pCzs&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=23?WT.mc_id=youtube-azuredevtips-micrum).
:::

#### Configure a Backup for your Azure App Service and Database

Most folks don't realize how easy it is to configure a backup copy of your Azure App Service to ensure you have restorable archive copies of your app and database. In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under **Settings** then you will see **Backup**. 

<img :src="$withBase('/files/backupazure1.png')">

Open it and select **Configure** and you'll see the following screen. 

<img :src="$withBase('/files/backupazure2.png')">

You'll want to configure the **Backup Storage** first as that sets the container that you'll use to store your backup. 

<img :src="$withBase('/files/backupazure3.png')">

I simply gave it a name, used stardard performance and setup replication and location. 

Now you'll need to configure a container to store your backup. 

<img :src="$withBase('/files/backupazure4.png')">

Next, you'll want to make sure that **Scheduled backup** is set to **On**. You'll want to configure the Days and Hours and then the current schedule that it should backup from. I set mine to backup every **7** days and starting from now. You'll also want to set the retention and by default it will keep as least one backup. If you have a database, then you can also add it with just a checkmark. 

Once everything is set, you can see whatn the next backup is configured and can either force it manually or restore from an existing backup with just a visit to the Azure Portal. 

<img :src="$withBase('/files/backupazure5.png')">

Once it completed, you can click on the backup and see a feature called **Snapshot** which automatically create periodic restore points of your app when hosted in a Premium App Service plan. You can even download a zip of the app. 
