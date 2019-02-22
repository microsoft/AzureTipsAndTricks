---
type: post
title: "Tip 26 - Load Testing web apps with Azure App Services"
excerpt: "Learn how to quickly load test your web application with Azure App Services"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-02 17:00:00
---


#### Intro

We've recently created a [web app](http://www.michaelcrump.net/azure-tips-and-tricks19/) and uploaded it to Azure App Service. We also took a look at [multiple ways](http://www.michaelcrump.net/azure-tips-and-tricks20/) to examine those files through the Azure portal interface and how we'd add [extensions](http://www.michaelcrump.net/azure-tips-and-tricks21/) and [deployment slots](http://www.michaelcrump.net/azure-tips-and-tricks22/) for our web app. We also took a look at a feature called [Testing in Production](http://www.michaelcrump.net/azure-tips-and-tricks23/) which allows us to distribute traffic between our production and other slots. We also looked at using [PowerShell](http://www.michaelcrump.net/azure-tips-and-tricks24/) to automatically distribute the load between your Production and deployment slot sites with the Testing in Production feature and looking briefly at the [Azure Resource Explorer](http://www.michaelcrump.net/azure-tips-and-tricks24/) to explore REST APIs. In this post, we'll look at a simple and quick way to perform load testing of your web app. 

#### Load Testing web apps with Azure App Services

Load Testing allows you to test your web app's performance and determine if your app can handle increased traffic during peak times. If you log into your Azure account and go to your App Service that you created and look under **Development Tools** then you will see it. 

<img :src="$withBase('/files/azureperformance1.png')">

Inside the blade, select **New** and you will see the following options:

<img :src="$withBase('/files/azureperformance2.png')">

You have the option to **Configure Test** and you can leave this as **Manual Test** or **Visual Studio Web Test**. The main difference between the two is that with the latter you can select multiple URLs and even use a HTTP Archive file (such as one created by Fiddler). Leave the testing option as manual and select a name and location and make sure you leave the defaults as 250 users for 5 minutes. 

**Use Case Scenario** Suppose you have a web app and you have something for sale. You have an upcoming promo that last year had 175 users connected for 5 minutes. Users complained that the site was slow and since your site has grown, you want to improve customer satisfaction by reducing the page load time and test your web app with a load of 250 users for 5 minutes. 


Let the test run and you'll be presented with the following information once it has completed. 

<img :src="$withBase('/files/azureperformance3.gif')">

For this demo, We can see that the average response time decreased while request per second increased. If we had of chosen a larger time, then we probably would have more detail to help locate where we could improve performance of our web app. You may also want to check out the **Status Message** panel for additional information about the test. 

<img :src="$withBase('/files/azureperformance4.png')">

**Look out!** Keep in mind that there is a charge for performing a load test in terms of virtual-users as indicated in the screen-shot. 

