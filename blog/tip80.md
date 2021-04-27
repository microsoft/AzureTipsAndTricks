---
type: post
title: "Tip 80 - Adding Metadata to a file inside Azure Storage Blob Container"
excerpt: "Learn how to add metadata to a file inside Azure Storage Blob Container"
tags: [Storage]
date: 2018-01-16 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

### Adding Metadata to a file inside Azure Storage Blob Container

We've reviewed the following options with Azure Storage so far:

* [Working with Azure Storage Blobs and Files through the Portal](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html)
* [Create an Azure Storage Blob Container through C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html)
* [Uploading and Downloading a Stream into an Azure Storage Blob](https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html)
* [Working with Azure Storage Explorer](https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html)
* [Copy Azure Storage Blobs and Files via C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip78.html)
* [Creating an Azure Blob Hierarchy](https://microsoft.github.io/AzureTipsAndTricks/blog/tip79.html)
* [Today - Adding Metadata to a file inside Azure Storage Blob Container](https://microsoft.github.io/AzureTipsAndTricks/blog/tip80.html)

Today, we are going to look at setting user-defined metadata to a file inside an Azure Storage Blob Container via C#. Go ahead and open the Azure Portal and open the C# app that we worked with [earlier](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html). If you want to start from this post, then use the code located [here](https://github.com/mbcrump/azurestorage?WT.mc_id=github-azuredevtips-azureappsdev).

**What is User-defined metadata?** [User-defined metadata](https://docs.microsoft.com/azure/storage/blobs/storage-properties-metadata?WT.mc_id=docs-azuredevtips-azureappsdev) is metadata that you specify on a given resource in the form of a name-value pair. You can use metadata to store additional values with a storage resource. These additional metadata values are for your own purposes only, and do not affect how the resource behaves.*(courtesy of docs)*


If you look below, you will notice that there is a way to do this inside the portal.

<img :src="$withBase('/files/azmetadata1.png')">

You'll notice this is key-value pairs.

<img :src="$withBase('/files/azmetadata2.png')">

We can also do this with code by adding as shown below.

```csharp
static void Main(string[] args)
{
    BlobServiceClient storageAccount = new BlobServiceClient(CloudConfigurationManager.GetSetting("StorageConnection"));
    BlobContainerClient container = storageAccount.GetBlobContainerClient("images-backup");
    container.CreateIfNotExists(PublicAccessType.Blob);
    //add method
    SetMetadata(container);
    //add method
    Console.ReadLine();
}

static void SetMetadata(BlobContainerClient container)
{
    //clear metadata
    container.SetMetadata(new Dictionary<string, string>());

    Dictionary<string, string> metaData = new Dictionary<string, string>(2);
    metaData.Add("Owner", "Michael Crump");
    metaData["LastUpdated"] = DateTime.Now.ToString();
    //set metadata
    container.SetMetadata(metaData);
}
```

This method clears the metadata and add the key-value pair that we talked about earlier.

We can also write a GetMetadata method to retrieve metadata from our container.

```csharp
static void GetMetadata(BlobContainerClient container)
{
    //retrieve container metadata
    BlobContainerProperties properties = container.GetProperties();
    foreach (var metadata in properties.Metadata)
    {
        Console.WriteLine(string.Format($"{metadata.Key}: {metadata.Value}"));
    }
}
```

If we run the application and look at our console output, then we'll see the following:

<img :src="$withBase('/files/azmetadata3.png')">
