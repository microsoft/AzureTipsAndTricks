---
type: post
title: "Tip 27 - Working with App Settings and Azure App Services"
excerpt: "Learn how to work with App Settings and Azure App Services"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-03 17:00:00
---


#### Intro

We've recently created a [web app](http://www.michaelcrump.net/azure-tips-and-tricks19/) and uploaded it to Azure App Service. We also took a look at [multiple ways](http://www.michaelcrump.net/azure-tips-and-tricks20/) to examine those files through the Azure portal interface and how we'd add [extensions](http://www.michaelcrump.net/azure-tips-and-tricks21/) and [deployment slots](http://www.michaelcrump.net/azure-tips-and-tricks22/) for our web app. We also took a look at a feature called [Testing in Production](http://www.michaelcrump.net/azure-tips-and-tricks23/) and how to use  [PowerShell](http://www.michaelcrump.net/azure-tips-and-tricks24/) to automatically distribute the load between your Production and deployment slot. We wrapped up by looking at the [Azure Resource Explorer](http://www.michaelcrump.net/azure-tips-and-tricks25/) to explore REST APIs and how to [perform load testing](http://www.michaelcrump.net/azure-tips-and-tricks26/). In this post, we'll take advantage of App Settings to store a Key/Value pair securely in Azure and access it in your web app. 

#### Working with App Settings and Azure App Services

App Settings are used to store configurable items without making any changes to the code. The key-value pairs are stored behind the scenes in a configuration store which is nice because sensitive information never shows up in a web.config, etc. file. In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under **Development Tools** then you will see **Application Settings**. Open it and scroll down and you'll see **App Settings** as shown below. 

<img :src="$withBase('/files/appsettings1.png')">

We're going to add an App Setting in Azure. I added one with the **key** of `Environment` and the **value** is set to `Staging`

<img :src="$withBase('/files/appsettings2.png')">

Open or create your ASP.NET MVC app and modify the `appSettings` section of the **web.config** file to add our  **Environment** key/value pair as shown below :

```text
  <appSettings>
    <add key="webpages:Version" value="3.0.0.0" />
    <add key="webpages:Enabled" value="false" />
    <add key="Environment" value="Production" />
  </appSettings>
  ```

Now it is in our web configuration of our app. In order to see the value, we'll need to add it to a page to display the value. 

If you're using ASP.NET MVC, then navigate to your **appname/Views/Home/Index.cshtml** file and add the following **using** statement followed by a call to **ConfigurationManager** as shown below :


```html
@using System.Configuration
@{
    ViewBag.Title = "Home Page";
}

<div class="jumbotron')">
    <h1>Testing App Settings</h1>
    @ConfigurationManager.AppSettings["Environment"]
</div>

```

If you run the application locally, then you'll see **Production** as it is coming from the **web.config** file, but if you run it inside of Azure, then you'll see **Staging** as it is coming from the **App Settings** configuration store located in Azure. Neat stuff!

<img :src="$withBase('/files/appsettings3.png')">

