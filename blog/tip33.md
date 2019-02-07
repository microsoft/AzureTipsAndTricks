---
type: post
title: "Azure Tips and Tricks Part 33 - Prevent Changes to Resources in Azure App Service"
excerpt: "Learn how to prevent changes to resources with Azure App Service"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-15 17:00:00
---


## Prevent Changes to Resources in Azure App Service

**Locks** allow you to prevent changes to a subscription or resources to prevent other users from accidentally deleting or modifying critical resources.
{: .notice--info}

In order to take advantage of locks, you'll need to log into your Azure account and go to your App Service that you created and look under **Settings** then you will see **Locks**. Open it and you'll see that you don't have any locks created. Go ahead and click **Add** and you'll see the following. 

<img :src="$withBase('/files/locksblog1.png')">

You'll want to provide the following information, but only the **Lock type** is required: 

* Name - Give it any name that you want
* Lock Type - This can be **Read-only** or **Delete**

Delete - means that you can't delete the resource, your users can still read and modify though.
ReadOnly - means users can read a resource, but they can't delete or update the resource.

* Notes - A description of the Lock.

Fill out the form and press **OK** as shown below. 

<img :src="$withBase('/files/locksblog2.png')">

You can delete the lock by clicking on the ellipsis. 

<img :src="$withBase('/files/locksblog3.png')">

