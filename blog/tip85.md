---
type: post
title: "Tip 85 - Updating an item from a Azure Storage Table"
excerpt: "Learn how to update an item from an Azure Storage Table"
tags: [Storage]
date: 2018-01-24 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips).
:::

### Updating an item from a Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items this week:

* [Creating your first Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html)
* [Adding an item to a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html)
* [Reading an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html)
* [Today - Updating an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html)

Today, we'll be taking a look at updating an item through C# code into an Azure Storage Table.

#### Getting Started

Open the C# Console application that we were working with [yesterday](https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html) and let's add a method to:

* Update an item based off of the table, RowKey and PartitionKey that we pass in.

#### Update an item

In our `Program.cs` file, we'll now add in a helper method that passes in a table, RowKey and PartitionKey and the new message that we want to use.

***Special thanks to Niko12 for his comment below which caused me to rewrite this method.***

```csharp
static void UpdateMessage(CloudTable table, string partitionKey, string rowKey, string newMessage)
{
    Thanks entity = table.GetEntity<Thanks>(partitionKey, rowKey);
    entity.Name = newMessage;

    table.UpdateEntity(entity, ETag.All, TableUpdateMode.Replace);

}
```

In this example, once it performs the lookup, if it is not null, then we want to update the message with the one that we specify.

#### Putting it all together.

The **Main** method inside of the `Program.cs` file, we'll call our helper method.

```csharp
static void Main(string[] args)
{
    var serviceClient = new TableServiceClient(ConfigurationManager.AppSettings["StorageConnection"]);

    TableClient table = serviceClient.GetTableClient("thankfulfor");
    table.CreateIfNotExists();

    //added these lines
    UpdateMessage(table, "ThanksApp", "I am thankful for the time with my family", "I am thankful for the time with my family and friends");
    Console.ReadKey();

}
```

<img :src="$withBase('/files/azupdatetable1.gif')">
