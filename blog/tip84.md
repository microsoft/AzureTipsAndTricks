---
type: post
title: "Tip 84 - Reading an item from an Azure Storage Table"
excerpt: "Learn how to read an item from an Azure Storage Table"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-23 17:00:00
---

#### Adding an item to a Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items this week:

* [Creating your first Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks82/)
* [Adding an item to a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks83/)
* [Today - Reading an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks84/)
* [Updating an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks85/)

Today, we'll be taking a look at reading an item through code that we previously placed into an Azure Storage Table. 

#### Getting Started

Open the C# Console application that we were working with [yesterday](http://www.michaelcrump.net/azure-tips-and-tricks83/) and let's add two methods to:

* Return all messages in a table
* Lookup a message based off of the RowKey and PartitionKey 

#### Return all messages in a table

In our `Program.cs` file, we'll now add in a helper method to return all messages in a given table. 

```csharp
        static void GetAllMessages(CloudTable table)
        {
            TableQuery<Thanks> query = new TableQuery<Thanks>()
                    .Where(TableQuery.GenerateFilterCondition("PartitionKey", QueryComparisons.Equal, "ThanksApp"));

            Console.WriteLine("GetAllMessages begin");
            foreach (Thanks message in table.ExecuteQuery(query))
            {
                Console.WriteLine(message.Name);
                Console.WriteLine(message.Date);
            }
            Console.WriteLine("GetAllMessages ends");
        }
```

In this example, we'll pass in the given table name and passed on the PartitionKey it will return all messsages. In this example, we  ***hardcoded*** the value to be "ThanksApp". 

#### Lookup a message based off of the RowKey and PartitionKey  

Again in our `Program.cs` file, we'll now add another helper method to return a message based off of the RowKey and PartitionKey that we supply. 

```csharp
static void GetMessage(CloudTable table, string partitionKey, string rowKey)
{
    TableOperation retrieve = TableOperation.Retrieve<Thanks>(partitionKey, rowKey);

    TableResult result = table.Execute(retrieve);

    Console.WriteLine(((Thanks)result.Result).Date);
}
```

In this example, we'll pass in the table name, a partition key and a row key to return a message. 

#### Putting it all together

The **Main** method inside of the `Program.cs` file just needs to call the methods as shown below:

```csharp
static void Main(string[] args)
{
    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(
                    CloudConfigurationManager.GetSetting("StorageConnection"));

    CloudTableClient tableClient = storageAccount.CreateCloudTableClient();

    CloudTable table = tableClient.GetTableReference("thankfulfor");

    table.CreateIfNotExists();

//added this line
    GetMessage(table, "ThanksApp", "I'm thankful for the time with my family");
    GetAllMessages(table);
//added this line
    Console.ReadKey();

}
```
