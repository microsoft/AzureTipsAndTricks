---
type: post
title: "Tip 85 - Updating an item from a Azure Storage Table"
excerpt: "Learn how to update an item from an Azure Storage Table"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-24 17:00:00
---

#### Updating an item from a Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items this week:

* [Creating your first Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html?WT.mc_id=github-azuredevtips-micrum)
* [Adding an item to a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html?WT.mc_id=github-azuredevtips-micrum)
* [Reading an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html?WT.mc_id=github-azuredevtips-micrum)
* [Today - Updating an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html?WT.mc_id=github-azuredevtips-micrum)

Today, we'll be taking a look at updating an item through C# code into an Azure Storage Table. 

#### Getting Started

Open the C# Console application that we were working with [yesterday](https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html?WT.mc_id=github-azuredevtips-micrum) and let's add a method to:

* Update an item based off of the table, RowKey and PartitionKey that we pass in.

#### Update an item

In our `Program.cs` file, we'll now add in a helper method that passes in a table, RowKey and PartitionKey and the new message that we want to use.

***Special thanks to Niko12 for his comment below which caused me to rewrite this method.***

```csharp
static void UpdateMessage(CloudTable table, string partitionKey, string rowKey, string newMessage)
{
    TableOperation retrieve = TableOperation.Retrieve<Thanks>(partitionKey, rowKey);

    TableResult result = table.Execute(retrieve);

    Thanks thanks = (Thanks)result.Result;

    thanks.ETag = "*";
    thanks.Name = newMessage;

    if (result != null)
    {
        TableOperation update = TableOperation.Replace(thanks);

        table.Execute(update);
    }

}
```

In this example, once it performs the lookup, if it is not null, then we want to update the message with the one that we specify. 

#### Putting it all together.

The **Main** method inside of the `Program.cs` file, we'll call our helper method. 

```csharp
static void Main(string[] args)
{
    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(
                    CloudConfigurationManager.GetSetting("StorageConnection"));

    CloudTableClient tableClient = storageAccount.CreateCloudTableClient();

    CloudTable table = tableClient.GetTableReference("thankfulfor");

    table.CreateIfNotExists();

    //added these lines
    UpdateMessage(table, "ThanksApp", "I'm thankful for the time with my family", "I'm thankful for the time with my family and friends");
    //added these lines

    table.Execute(update);
    Console.ReadKey();

}
```

<img :src="$withBase('/files/azupdatetable1.gif')">
