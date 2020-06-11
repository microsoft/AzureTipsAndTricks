---
type: post
title: "Tip 78 - Copy Azure Storage Blobs and Files via C#"
excerpt: "Learn how to copy Azure Storage Blobs and Files via C#"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-14 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Copy Azure Storage Blobs and Files via C#

Last week we've reviewed the following options with Azure Storage :

* [Working with Azure Storage Blobs and Files through the Portal](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html)
* [Create an Azure Storage Blob Container through C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html)
* [Uploading and Downloading a Stream into an Azure Storage Blob](https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html)
* [Working with Azure Storage Explorer](https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html)

Today, we are going to copy Azure Storage Blobs (and Files) via C#. Go ahead and open the Azure Portal and open the C# app that we worked with [earlier](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html).

The goal of this exercise is to copy a file inside our Azure Storage Container to a new file. So for example, our Azure Storage Container only contains one file now: 

<img :src="$withBase('/files/storageacct4.png')">

In [previous post](https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html),We've created the Azure Storage Blob Container and uploaded a file to it.

Now we are going to copy a new file inside of it with the name **mikepic-backup.png**. 

```csharp
static void Main(string[] args)
{
    BlobServiceClient serviceClient = new BlobServiceClient(CloudConfigurationManager.GetSetting("StorageConnection"));
    BlobContainerClient container = serviceClient.GetBlobContainerClient("images-backup");
    container.CreateIfNotExists(PublicAccessType.Blob);

    BlockBlobClient blockBlob = container.GetBlockBlobClient("mikepic.png");

    //lines added
    BlockBlobClient copyBlockBlob = container.GetBlockBlobClient("mikepic-backup.png");

    copyBlockBlob.StartCopyFromUri(blockBlob.Uri);
    //end lines added
    Console.ReadLine();
}
```

If we run the application and switch over to our Storage Account and navigate inside the container, we'll see our file has copied successfully:

<img :src="$withBase('/files/azasynccopy1.png')">
