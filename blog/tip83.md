---
type: post
title: "Tip 83 - Adding an item to a Azure Storage Table"
excerpt: "Learn how to add an item to a Azure Storage Table"
tags: [Storage]
date: 2018-01-22 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

### Adding an item to a Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items this week:

* [Creating your first Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html)
* [Today - Adding an item to a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html)
* [Reading an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html)
* [Updating an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html)

Today, we'll be taking a look at adding an item to the Azure Storage Table that we were working with yesterday.

As a refresher, Azure Storage Blobs can store any type of text or binary data, such as a document, media file, or application installer. Blob storage is also referred to as object storage.


#### Getting Started

Open the C# Console application that we were working with [previously](https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html) and let's add a folder called **Entities** and add a class named **Thanks**.

Copy the following code into your new class:

```csharp
using Azure;
using Azure.Data.Tables;
using System;

namespace TipsAndTrickSampleTest.Entities
{
    class Thanks : ITableEntity
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public string PartitionKey { get; set; }
        public string RowKey { get; set; }
        public DateTimeOffset? Timestamp { get; set; }
        public ETag ETag { get; set; }

        public Thanks(string name, DateTime date)
        {
            Name = name;
            Date = date;
            PartitionKey = "ThanksApp";
            RowKey = name;
        }

        public Thanks()
        {

        }
    }
}
```

This entity use **ITableEntity** as base which will make it easier to work with Azure Storage Tables. We are going to create two fields in our table named **Name** and **Date**. We'll pass in the Name we want to use via a string and provide the current Date for the Date property.

Heading back over to our `Program.cs` file. We'll now add in a helper method to create the item in the table.

```csharp
static void CreateMessage(TableClient table, Thanks message)
{
    table.AddEntity(message);
}
```

This will take advantage of our **Thanks** class and we'll pass in the message along with the date in the **Main** method.

The **Main** method inside of the `Program.cs` file just needs to call the method as shown below:

```csharp
static void Main(string[] args)
{
    var serviceClient = new TableServiceClient(ConfigurationManager.AppSettings["StorageConnection"]);

    TableClient table = serviceClient.GetTableClient("thankfulfor");
    table.CreateIfNotExists();

    //added this line
    CreateMessage(table, new Thanks("I am thankful for the time with my family", DateTime.Now));
    //added this line
    Console.ReadKey();
}
```

If we run the program now, then it will add our message along with the current DateTime to our Azure Storage Table called **thankfulfor**. If we want to test it now, then we can use [Azure Storage Explorer](https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html). If you come back tomorrow, then I'll show you how to do this through code.
