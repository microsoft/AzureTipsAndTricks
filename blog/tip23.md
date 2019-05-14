---
type: post
title: "Tip 23 - Testing Web Apps in Production with Azure App Service"
excerpt: "Learn how to use test Web Apps for production using Azure App Service"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-25 17:00:00
---

::: tip
:bulb: Learn more : [App Service Documentation](https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-micrum). 

:tv: Watch the video : [How to Test Web Applications in Production](https://www.youtube.com/watch?v=TLGLBbv3HoA&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=19?WT.mc_id=youtube-azuredevtips-micrum).
:::

#### Intro

We've recently created a [web app](https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html) and uploaded it to Azure App Service. We also took a look at [multiple ways](https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html) to examine those files through the Azure portal interface and how we'd add [extensions](https://microsoft.github.io/AzureTipsAndTricks/blog/tip21.html) and [deployment slots](https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html) for our web app. In this post, we'll look at a feature called `Testing in Production` which isn't as scary as it sounds.  

#### Testing Web Apps in Production with Azure App Service

**Hold up!** You'll want to take a look at the [deployment slots](https://microsoft.github.io/AzureTipsAndTricks/blog/tip22.html) post if you haven't worked with deployment slots before. 


Go to the Azure Portal and select my App Service and click on **Testing in Production** under **Development Tools** to get started. The first thing you'll see is `Static Routing` and you'll notice that it's looking for a deployment slot and traffic percentage. 

**What is Static Routing** This section lets you control how traffic is distributed between your production and other slots. This is useful if you want to try out a new change with a small percentage of requests and then gradually increase the percentage of requests that get the new behavior.


We'll want to split the traffic to our site into 2 groups to test our new site and see if customers like it. Since this is just a demo, I want to send a large number of folks to our new `staging` site as shown below. 

<img :src="$withBase('/files/testinprodazure7.png')">

Great! Now keep in mine that we have two versions of our site. One that is `production` and `staging`. They are identical except for the staging site has a large font that says `jsQuizEngine version 2`. 

We don't want to **swap** sites, we just want to **distribute** traffic between the two site. 

I can test this by going to my production url and refreshing the site until the `staging` site is shown with the production url. 

<img :src="$withBase('/files/testinprodazure1.gif')">

Success! it works, but what happens when they leave the site? We actually store a cookie that keeps track of it. You can find this cookie yourself by expecting the site and looking for the cookie shown below. 

<img :src="$withBase('/files/testinprodazure2.png')">
