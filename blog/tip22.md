---
type: post
title: "Tip 22 - Deployment Slots for Web Apps using Azure App Service"
excerpt: "Learn how to use Deployment Slots for Web Apps using Azure App Service"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-24 17:00:00
---

::: tip
:bulb: Learn more : [App Service Documentation](https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum). 

:tv: Watch the video : [How to use deployment slots for web applications](https://youtu.be/cavW-t4rItY?WT.mc_id=youtube-azuredevtips-micrum).
:::

#### Test Web Apps in Production with Azure App Service

We've recently created a [web app](https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html) and uploaded it to Azure App Service. We also took a look at [multiple ways](https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html) to examine those files through the Azure portal interface and how we'd add [extensions](https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html) to our web apps. In this post, we'll take a look at using deployment slots for web apps. 

##### Creating Deployment Slot

**Hold Up. What's a Deployment Slot?** Deployment slots let you deploy different versions of your web app to different URLs. You can test a certain version and then swap content and configuration between slots.


Go to the Azure Portal and select my App Service and click on **Deployment Slots** under **Deployment** to get started. Then click on the **Add Slots** button. Give it a name such as `staging` then use an existing configuration source. We'll use our "production" web app. You know, the cool [quiz application](http://myquizapplication.azurewebsites.net/). 

<img :src="$withBase('/files/testinprodazure3.png')">

Great, now if we go back to Deployment Slots, we should see it running. 

<img :src="$withBase('/files/testinprodazure4.png')">

Click on the new staging site that we just created and you'll notice that it has appended the word `staging` then you'll notice we have a [new site](http://myquizapplication-staging.azurewebsites.net).

We need to push a new version of our existing quiz application to this staging slot. Go to `Deployment Options` and select `External Repository` and give it the following url `https://github.com/mbcrump/jsQuizEngine.git` and hit OK. You might have to hit Sync, and you'll eventually see the following: 

<img :src="$withBase('/files/testinprodazure5.png')">

Give it a couple of minutes until you see that it has completed pulling down your code from Git and then go to the new URL of your site. You can find the URL on your overview page. In my case it is, [here](http://myquizapplication-staging.azurewebsites.net).

<img :src="$withBase('/files/testinprodazure6.png')">

Success! This is our new site as indicated by the awesome large font that says `jsQuizEngine version 2`. 

We could now return to the original app service that we created and swap between the two sites that we have. For example, you might want to move the `staging` site over to the `production` site and vice versa. The power of this is that your users don't experience a downtime and you can continue working in your preferred space until ready to move to production. 

