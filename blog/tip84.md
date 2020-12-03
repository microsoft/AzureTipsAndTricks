---
type: post
title: "Tip 84 - Reading an item from an Azure Storage Table"
excerpt: "Learn how to read an item from an Azure Storage Table"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-23 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Adding an item to a Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items this week:

* [Creating your first Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html)
* [Adding an item to a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html)
* [Today - Reading an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html)
* [Updating an item from a Azure Storage Table](https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html)

Today, we'll be taking a look at reading an item through code that we previously placed into an Azure Storage Table.

#### Getting Started

Open the C# Console application that we were working with [yesterday](https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html) and let's add two methods to:

* Return all messages in a table
* Lookup a message based off of the RowKey and PartitionKey

#### Return all messages in a table

In our `Program.cs` file, we'll now add in a helper method to return all messages in a given table.

```csharp
static void GetAllMessages(TableClient table)
    {
        Pageable<Thanks> queryResults = table.Query<Thanks>(ent => ent.PartitionKey.Equals("ThanksApp"));

        Console.WriteLine("GetAllMessages begin");
        // Iterate the <see cref="Pageable"> to access all queried entities.
        foreach (Thanks entity in queryResults)
        {
            Console.WriteLine(entity.Name);
            Console.WriteLine(entity.Date);
        }

        Console.WriteLine("GetAllMessages ends");
    }
```

In this example, we'll pass in the given table name and passed on the PartitionKey it will return all messsages. In this example, we  ***hardcoded*** the value to be "ThanksApp".

#### Lookup a message based off of the RowKey and PartitionKey

Again in our `Program.cs` file, we'll now add another helper method to return a message based off of the RowKey and PartitionKey that we supply.

```csharp
static void GetMessage(TableClient table, string partitionKey, string rowKey)
{
    //Please refer to https://docs.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities for more details about query syntax.
    var queryResult = table.Query<Thanks>(filter: $"PartitionKey eq '{partitionKey}' and RowKey eq '{rowKey}'").Single();

    Console.WriteLine(queryResult.Date);
}
```

In this example, we'll pass in the table name, a partition key and a row key to return a message.

#### Putting it all together

The **Main** method inside of the `Program.cs` file just needs to call the methods as shown below:

```csharp
static void Main(string[] args)
{
    var serviceClient = new TableServiceClient(ConfigurationManager.AppSettings["StorageConnection"]);

    TableClient table = serviceClient.GetTableClient("thankfulfor");
    table.CreateIfNotExists();

    //added this line
    GetMessage(table, "ThanksApp", "I am thankful for the time with my family");
    GetAllMessages(table);
    //added this line
    Console.ReadKey();
}
```
