---
type: post
title: "Tip 32 - Using Application Insights with Azure App Service"
excerpt: "Learn how to setup Application Insights in an MVC application using Azure App Service"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-11 17:00:00
---


#### Using Application Insights with Azure App Service

**Application Insights** is a simple way to detect and diagnose exceptions and application performance issues in your web apps and web services. In this blog post, I'll walk you through adding it to an ASP.NET MVC application. 

In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under **Monitoring** then you will see **Application Insights**. Open it and create a new resource and press OK as shown below. 

<img :src="$withBase('/files/appinsight1.png')">

It will bring you to a page with no data but will present you with the following prompt: 

<img :src="$withBase('/files/appinsight2.png')">

You'll see that you can automatically instrument your ASP.NET app with a restart. **Yes, please**. Go ahead, and click on the orange banner to restart your app. 

Once complete, go and visit your app and refresh a couple of times and then go back and take a look at the live stream. I've included a sample below: 

<img :src="$withBase('/files/appinsight3.gif')">

It is working as expected, but let's add an error into our application. Go to your **appname/Controllers/HomeController.cs** and add the following code: 

```csharp
public ActionResult ThrowNewError()
{
  throw new InvalidOperationException("The app just threw an error!"); 
}
```

You'll need to go back to your site and depending on where you placed it, you can invoke the code by going to *.azurewebsites.net/**Home/ThrowNewError**. If you switch back over to Application Insights, then you'll see the errors are being reported. 

<img :src="$withBase('/files/appinsight4.png')">

You can drill deeper down by clicking on **Open in Application Insights**. From here you can see how many **Failed Request** were reported.

<img :src="$withBase('/files/appinsight5.png')">

You can even drill down on what URL was called to trigger the error. 

<img :src="$withBase('/files/appinsight6.png')">

If you add Application Insights to your Visual Studio project by right-clicking the project and then adding **Configure Application Insights**, then you can add code to collect exception telemetry. You can learn more about that by [clicking here](https://docs.microsoft.com/en-us/azure/application-insights/app-insights-asp-net-exceptions?WT.mc_id=docs-azuredevtips-micrum). 

