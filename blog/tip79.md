---
type: post
title: "Tip 79 - Creating an Azure Blob Hierarchy"
excerpt: "Learn how to creating an Azure blob hierarchy"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-15 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Creating an Azure Blob Hierarchy

We've reviewed the following options with Azure Storage so far:

* [Working with Azure Storage Blobs and Files through the Portal](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html)
* [Create an Azure Storage Blob Container through C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html)
* [Uploading and Downloading a Stream into an Azure Storage Blob](https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html)
* [Working with Azure Storage Explorer](https://microsoft.github.io/AzureTipsAndTricks/blog/tip77.html)
* [Copy Azure Storage Blobs and Files via C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip78.html)

Today, we are going to look at creating an Azure blob hierarchy via C#. Go ahead and open the Azure Portal and open the C# app that we worked with [earlier](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html). If you want to start from this post, then use the code located [here](https://github.com/mbcrump/azurestorage?WT.mc_id=github-azuredevtips-micrum).

The goal of this exercise is to create a blob hierarchy or folder structure inside of our container. So for example, we'd like to place a file in a structure such as **backup/images-backup.png**. 


If you look below, you will notice that there is no way to create a folder structure from inside the portal. 

<img :src="$withBase('/files/blobfolder1.png')">

But we can easily do this with code by adding the folder structure we want into the code as shown below.

```csharp
static void Main(string[] args)
{
   BlobServiceClient storageAccount = new BlobServiceClient(CloudConfigurationManager.GetSetting("StorageConnection"));
   BlobContainerClient container = storageAccount.GetBlobContainerClient("images-backup");
   container.CreateIfNotExists(PublicAccessType.Blob);

   // line modified
   BlockBlobClient blockBlob = container.GetBlockBlobClient("backup/mikepic.png");
   using (var fileStream = System.IO.File.OpenRead(@"c:\mikepic.png"))
   {
         blockBlob.Upload(fileStream);
   }
   // line modified

   Console.ReadLine();
}
```

If we run the application and switch over to our Storage Account and navigate inside the container, we'll see our container now has a folder:

<img :src="$withBase('/files/blobfolder2.png')">
