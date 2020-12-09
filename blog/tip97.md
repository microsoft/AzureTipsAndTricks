---
type: post
title: "Tip 97 - How to generate a weekly gigest email for a blog using Azure Functions, SendGrid and Azure Storage"
excerpt: "Learn how to generate a weekly digest email for a blog using Azure Functions, SendGrid and Azure Storage"
tags: [Serverless]
date: 2018-02-25 17:00:00
---

::: tip
:bulb: Learn more : [Azure Functions Documentation](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

### How to generate a weekly gigest email for a blog using Azure Functions, SendGrid and Azure Storage

#### Overview

**Full Source Code** The source code for the app can be found on [GitHub](https://github.com/mbcrump/EmailSubscription)


This blog post is part of a series on how to generate a weekly digest email for a blog using Azure Functions, SendGrid and Azure Storage.

* [Part 1 - What we're going to build and how to build it (this post)](https://microsoft.github.io/AzureTipsAndTricks/blog/tip97.html)
* [Part 2 - Storing Emails using Azure Table Storage](https://microsoft.github.io/AzureTipsAndTricks/blog/tip98.html)
* [Part 3 - Writing the Frontend with HTML5 and jQuery](https://microsoft.github.io/AzureTipsAndTricks/blog/tip99.html)
* [Part 4 - Sending Emails with Sendgrid and Azure Functions](https://microsoft.github.io/AzureTipsAndTricks/blog/tip100.html)

#### The Problem

While reading a blog post, one of these popped up:

<img :src="$withBase('/files/emailsub1.png')">

We've all seen then before, and I must admit that I've never really looked into it before I started writing [this Azure Tips and Tricks series](https://michaelcrump.net/azure-tips-and-tricks-complete-list/).

We're all crazy busy, so it seems to be a good idea, for someone to give you an email address and be notified of new posts. OK, so I wanted to do it, and started looking into sites that offer this. After looking around, I kept finding this:

<img :src="$withBase('/files/emailsub2.png')">

Most companies offer you a certain number of subscribers for free, then you'll quickly get to a paid version once you go over that number.

Since I like to save a penny now and again and am aware that I have more subscribers that the free account offers (200), I decided to roll my own. But what would I need?

#### My Requirements to roll my own

My requirements for my version of creating an email subscription is the following:

* A way to email folks for free or really, really cheap.
* Storage to save the email address and a way to indicate if they want to unsubscribe.
* A web page that folks can fill out that can make a POST call.
* Code running in the cloud (1) on a schedule and (2) perform actions based on a POST request.
* Visual Studio and C# as I'm well versed in them.

#### My Stack

After poking around for a bit, I landed on the following:

* SendGrid will handle email (25K emails free monthly)
* Azure Storage Tables to save the email address and subscription status (this gives me an unlimited number of subscribers).
* Timer Trigger with Azure Functions to run on a schedule to send emails. (Runs weekly and retrieves my last 7 days worth of blog posts)
* HTTP Trigger with Azure Functions to collect POST data coming from my website that contains the email address and subscription status that someone types in.
* Azure Functions supports Visual Studio tooling and the full .NET Framework. (in case, I want to use something outside of .NET Core)

#### Creating a SendGrid account

Go to the **Azure Portal** and search services for **SendGrid** and create an account as shown below. You'll notice that I used the **Free** account as it is good enough for what I was trying to accomplish.

<img :src="$withBase('/files/sendgrid1.png')">

Go to your SendGrid account once provisioned and click on **Manage** and it will bring you to [https://app.sendgrid.com/](https://app.sendgrid.com/). From the SendGrid portal, you are going to want to grab your API key. You can find it under **Settings**, then **API Keys**. Give your API Key a name and then give it **Full Access** and click **Create and View**. Now that you have your API Key, save it somewhere safe.

#### Creating an Azure Storage Table

Go back to the Azure Portal and click **Create a Resource** and select **Azure Storage**. We'll keep it simple as shown below to get started.

<img :src="$withBase('/files/storageacct1.png')">

Once complete, go into the resource and look under **Services**.

<img :src="$withBase('/files/storageacct2.png')">

Go ahead and click on **Tables** and you could create a new table through the portal as shown below.

<img :src="$withBase('/files/aztablesblog1.png')">

Go ahead and give the table a name that you'll remember and look under **Settings**, then **Access Keys** and copy the connection string as we'll use that shortly.

<img :src="$withBase('/files/storagethroughcsharp1.png')">

Now that we have our **SendGrid** account and our **Azure Storage Table** created. We can proceed.

#### Open Visual Studio

Create a C# Azure Function application by opening Visual Studio and selecting the template under the **Cloud** node as shown below:

<img :src="$withBase('/files/emailsub3.png')">

Under Storage, change the default emulator to the **Azure Storage Account** that we created earlier:

<img :src="$withBase('/files/emailsub4.png')">

We'll begin by using the **Timer Trigger** and leaving everything as the defaults.

<img :src="$withBase('/files/emailsub5.png')">

Once the project spins up, we'll use NuGet to pull in references to :

* Azure.Data.Tables `To work with Azure Table Storage.`
* Microsoft.WindowsAzure.ConfigurationManager `To hide our API keys`
* Sendgrid `To send our emails`
* System.ServiceModel.Syndication `To work with RSS feeds - use prerelease packages to find it`

