---
type: post
title: "Azure Tips and Tricks Part 87 - Avoid Bad Request Errors in Azure Storage Table"
excerpt: "Learn how to ensure a clean rowkey is returned using Azure Storage Table"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-29 17:00:00
---

## Ensure a clean RowKey in Azure Storage Table

In case you are new to the Azure Storage Tables, we've reviewed the following items so far:

* [Creating your first Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks82/)
* [Adding an item to a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks83/)
* [Reading an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks84/)
* [Updating an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks85/)
* [Deleting an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)
* [Ensure a clean RowKey in Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)

## The problem

If you've ever been working with Azure Table Storage and tried to insert data and received **400 Bad Request**, then you've probably narrowed this down to a malformed **PartitionKey** or **RowKey** after many hours. This is due to the fact that for **PartitionKey** and **RowKey**, there are some disallowed characters such as: 

* The forward slash (/) character
* The backslash (\) character
* The number sign (#) character
* The question mark (?) character
* Control characters from U+0000 to U+001F, including:
* The horizontal tab (\t) character
* The linefeed (\n) character
* The carriage return (\r) character
* Control characters from U+007F to U+009F

**Debugging in Visual Studio** If you are debugging in Visual Studio, then you can also check the *StorageException.RequestInformation.ExtendedInformation* to gain additional information about the error. 
{: .notice--info}

## The Solution

There is many ways that you can handle this, but my favorite is this extension method that simply strips away those characters as shown below.  

```csharp
public static string ToAzureKeyString(this string str)
{
    var sb = new StringBuilder();
    foreach (var c in str
        .Where(c => c != '/'
                    && c != '\\'
                    && c != '#'
                    && c != '/'
                    && c != '?'
                    && !char.IsControl(c)))
        sb.Append(c);
    return sb.ToString();
}
```
