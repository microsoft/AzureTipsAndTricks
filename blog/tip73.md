---
type: post
title: "Tip 73 - Send Emails through Azure with C# and SendGrid"
excerpt: "Learn how to send emails through Azure with C# and SendGrid"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-03 17:00:00
---

::: tip
:bulb: Learn more : [SendGrid on Azure](https://docs.microsoft.com/azure/sendgrid-dotnet-how-to-send-email?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Send Emails through Azure with C# and SendGrid

In this post, I'll walk through the process that I completed to create an account with SendGrid and send an email with C#.

Go to the **Azure Portal** and search services for **SendGrid** and create an account as shown below. You'll notice that I used the **Free** account as it is good enough for what I was trying to accomplish. 

<img :src="$withBase('/files/sendgrid1.png')">

Go to your SendGrid account once provisioned and click on **Manage** and it will bring you to [https://app.sendgrid.com/](https://app.sendgrid.com/) as shown below. 

<img :src="$withBase('/files/sendgrid2.png')">

From the SendGrid portal, you are going to want to grab your API key. You can find it under **Settings**, then **API Keys**

<img :src="$withBase('/files/sendgrid3.png')">

Give your API Key a name and then give it **Full Access** and click **Create and View**. 

<img :src="$withBase('/files/sendgrid4.png')">

**Remember this!** Copy this key somewhere safe as we'll be using it again shortly!


Now that you have your API Key, open Visual Studio and create a new Console Application. (Keep in mind this could be an Azure Function for example). You'll need to add in the **Sendgrid** NuGet package (which you can do from Manage NuGet packages). 

<img :src="$withBase('/files/sendgrid5.png')">

Install the NuGet package and copy and paste the following C# code into your Console application, simply replacing your API key.

```csharp
    class Program
    {
        static void Main(string[] args)
        {
            Execute().Wait();

        }
        static async Task Execute()
        {
            var client = new SendGridClient("ENTER-YOUR-API-KEY-HERE");
            var msg = new SendGridMessage();

            msg.SetFrom(new EmailAddress("a@gmail.com", "Azure Tips and Tricks"));

            var recipients = new List<EmailAddress>
                {
                    new EmailAddress("a@gmail.com"),
                    new EmailAddress("b@gmail.com"),
                    new EmailAddress("c@gmail.com")
                };
            msg.AddTos(recipients);

            msg.SetSubject("Mail from Azure and SendGrid");

            msg.AddContent(MimeType.Text, "This is just a simple test message!");
            msg.AddContent(MimeType.Html, "<p>This is just a simple test message!</p>");
            var response = await client.SendEmailAsync(msg);

        }
    }
```

Run the application and check whatever email that you sent it to!

<img :src="$withBase('/files/sendgrid6.png')">
