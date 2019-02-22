---
type: post
title: "Tip 86 - Deleting an item from a Azure Storage Table"
excerpt: "Learn how to delete an item from an Azure Storage Table"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-28 17:00:00
---

#### Deleting an item from a Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items this week:

* [Creating your first Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks82/)
* [Adding an item to a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks83/)
* [Reading an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks84/)
* [Updating an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks85/)
* [Deleting an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)]

Today, we'll be taking a look at deleting an item through C# code into an Azure Storage Table. 

#### Getting Started

Open the C# Console application that we were working with [last week](http://www.michaelcrump.net/azure-tips-and-tricks85/) and let's add a method to:

* Delete an item based off of the table, RowKey and PartitionKey that we pass in.

#### Delete an item

In our `Program.cs` file, we'll now add in a helper method that passes in a table, RowKey and PartitionKey to identify the message we want to delete.


```csharp
static void DeleteMessage(CloudTable table, string partitionKey, string rowKey)
{
    TableOperation retrieve = TableOperation.Retrieve<Thanks>(partitionKey, rowKey);

    TableResult result = table.Execute(retrieve);

    var deleteEntity = (Thanks)result.Result;

    TableOperation delete = TableOperation.Delete(deleteEntity);

    table.Execute(delete);
}
```

In this example, we retrieve the message and then delete the entity.

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
    DeleteMessage(table, "ThanksApp", "I'm thankful for the time with my family");
    //added these lines

    table.Execute(update);
    Console.ReadKey();

}
```
