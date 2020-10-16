---
type: post
title: "Tip 30 - Working with Log Stream and Azure App Services"
excerpt: "Learn how to work with Log stream and the Azure App Services"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-09 17:00:00
---

::: tip
:bulb: Learn more : [App Service Documentation](https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Work with Log Stream and Azure App Services](https://www.youtube.com/watch?v=wyuxnZZMeak&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=25?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### Working with Log Stream and Azure App Services

The **Log Stream** is the ability to see logging information in real-time (or as close to it as possible). You can do this by using the Azure Portal or through some of CLI tooling such as PowerShell or BASH. 

In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under **Monitoring** then you will see **Log Stream**. Open it and you'll see the following message `Application logs are switched off. You can turn them on using the 'Diagnostic logs' settings.`

In order to correct this, we'll need to go to the **Diagnostic logs** setting in the same panel. 

<img :src="$withBase('/files/logstream1.png')">

Here you'll see the following options: 

* Application Logging - which allows you to collect diagnostic traces from your web code. This is requrired for the streaming log feature and turns itself off after 12 hours. 
* Application Logging (Blob) - logs are collected in the blob container that is specified under Storage Settings.
* Web server logging - Gathers diagnostic information for your web server.
* Detailed error messages - Gathers detailed error messages from your web app. 
* Failed request tracing - Gathers diagnostic information on failed request. 

**Hold Up** You can easily change options such as the size of log files that it will keep as well as the number of days to keep the log files in retention. You can also download the log files via FTP and FTPS. 


Go ahead and turn **Application Logging(Filesystem)** to On and the **Level** to **Info** press save. Go back and click on the **Log Stream** setting and visit your web page (that is hosted on *.azurewebsites.net). 

You should see the following: 

<img :src="$withBase('/files/logstream2.png')">

If you look at the first couple of lines, then you'll see a **ReadyForRequest** on port 80. Then a request coming from our web browser that includes pulling down the `favicon.ico` file (which is the only image being sent down). 

##### Adding Trace Logging in Code


If you’re using ASP.NET MVC, then navigate to your **appname/Controllers/HomeController.cs** file (or wherever you'd like to test this functionality) and add the following line as shown below :

```csharp
System.Diagnostics.Trace.WriteLine("Entering the About View");
```

Head back over to **Diagnostic logs** and change the **Level** to **Verbose** press save since we just used a WriteLine command. Switch back over to the **Log Stream** option and review the **Application Log** after it calls your `Trace.WriteLine` command and you should see the following: 

<img :src="$withBase('/files/logstream3.png')">
