---
type: post
title: "Azure Tips and Tricks Part 98 - Creating an Email Subscription with Azure Functions - Storing Emails"
excerpt: "Learn how to generate a weekly digest email for a blog using Azure Functions, SendGrid and Azure Storage"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-02-26 17:00:00
---

## Where are we?

**Full Source Code** The source code for the app can be found on [GitHub](https://github.com/mbcrump/EmailSubscription)
{: .notice--info}

This blog post is part of a series on how to generate a weekly digest email for a blog using Azure Functions, SendGrid and Azure Storage. 

* [Part 1 - What we're going to build and how to build it](http://www.michaelcrump.net/azure-tips-and-tricks97/)
* [Part 2 - Storing Emails using Azure Table Storage](http://www.michaelcrump.net/azure-tips-and-tricks98/)
* [Part 3 - Writing the Frontend with HTML5 and jQuery](http://www.michaelcrump.net/azure-tips-and-tricks99/)
* [Part 4 - Sending Emails with Sendgrid and Azure Functions](http://www.michaelcrump.net/azure-tips-and-tricks100/)

We're trying to build a Email Subscription similar to the following. If you want to catch up, then read the previous post. 

<img :src="$withBase('/files/emailsub1.png')">

## Continuing where we left off

We recently created a Visual Studio project that used the Azure Functions template. We used NuGet to pull in references to the following packages that we'll be working with shortly:

* WindowsAzure.Storage `To work with Azure Table Storage.`
* Microsoft.WindowsAzure.ConfigurationManager `To hide our API keys`
* Sendgrid `To send our emails`
* System.ServiceModel.Syndication `To work with RSS feeds - use prerelease packages to find it`

Return to the project we created yesterday and right-click the project and select **Add Item** and select **Azure Functions**. Now give it a name such as **StoreEmail** and select **Http Trigger** along with the defaults as shown below.

<img :src="$withBase('/files/emailsub6.png')">

We only need this to be a **post** request, so modify the **Run** method's signature to match the following :

`[HttpTrigger(AuthorizationLevel.Function, "post", Route = null)]`

**Keep in mind:** You can use [output bindings](https://docs.microsoft.com/en-us/azure/azure-functions/functions-triggers-bindings) to provide a declarative way to connect to data from within your code vs using the code below. Thanks to Matt Honeycutt in the comments. 
{: .notice--info} 

Since we'll be working with Azure Table Storage and I prefer to show you code that you can reuse anywhere, we need to setup a class that has a single field: 

* EmailAddress - to store the email that the user typed in

We'll also supply the PartitionKey to be the same every time and use a Guid for our RowKey. 

```csharp
class Email : TableEntity
{
    public string EmailAddress { get; set; }

    public EmailEntity(string email)
    {
        EmailAddress = email;
        PartitionKey = "SendEmailToReaders";
        RowKey = Guid.NewGuid().ToString();
    }

    public EmailEntity()
    {

    }
}

```

I also have a helper class that we'll use to store the data, so add the following which will allow us to pass a table object and a new email instance: 

```csharp
static void CreateMessage(CloudTable table, Email newemail)
{
    TableOperation insert = TableOperation.Insert(newemail);

    table.Execute(insert);
}
```

Finally, we'll need add the code for the **Run** method: 

```csharp
public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Function, "post", Route = null)]HttpRequestMessage req, TraceWriter log)
{

//(Block #1)
    var postData = await req.Content.ReadAsFormDataAsync();
    var missingFields = new List<string>();
    if (postData["fromEmail"] == null)
    {
        missingFields.Add("fromEmail");
    }

    if (missingFields.Any())
    {
        var missingFieldsSummary = String.Join(", ", missingFields);
        return req.CreateResponse(HttpStatusCode.BadRequest, $"Missing field(s): {missingFieldsSummary}");
    }
//(End Block #1)

//(Block #2)
    try
    {
        // the line below can be hardcoded if you aren't using AppSettings
        CloudStorageAccount storageAccount = CloudStorageAccount.Parse(ConfigurationManager.AppSettings["TableStorageConnString"]);

        CloudTableClient tableClient = storageAccount.CreateCloudTableClient();

        CloudTable table = tableClient.GetTableReference("MCBlogSubscribers");

        table.CreateIfNotExists();

        CreateMessage(table, new EmailEntity(postData["fromEmail"]));

        return req.CreateResponse(HttpStatusCode.OK, "Thanks! I've successfully received your request. "); //
    }
    catch (Exception ex)
    {
        return req.CreateResponse(HttpStatusCode.InternalServerError, new
        {
            status = false,
            message = $"There are problems storing your email address: {ex.GetType()}"
        });
    }
//(End Block #2)
}
```

Keep in mind, you'll need to pull in your using references for the namespaces we added earlier.
{: .notice--info} 

**Block #1** is all about pulling in the POST data and checking to see if an email address is being sent. If it is, then it will send a summary of what fields are missing. 

**Block #2** tries to save the input via the Azure Table Storage account that we created and if it saves successfully, then returns to the client everything went fine. Otherwise, output to the client what the problem was. Keep in mind, that I'm using **ConfigurationManager** and you can hardcode this value if you please.  

Hit the Run button in Visual Studio and you'll see the following: 

<img :src="$withBase('/files/emailsub7.png')">

Make note of the localhost where it is running and use something like **Postman** to test your POST call. 

In the gif below, I've configured Postman to my localhost URL and supplied an email address. 

I can test the Azure Function by 1) Not supplying anything and 2) Supplying an email address. You'll see the error handling and success messages return to Postman. 

<img :src="$withBase('/files/emailsub7.gif')">

