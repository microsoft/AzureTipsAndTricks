---
type: post
title: "Tip 95 - Access all files from an Azure Storage Blob Container"
excerpt: "Learn how to get all Files from an Azure Storage Blob Container"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-02-13 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

### Access all files from an Azure Storage Blob Container

Azure Storage is described as a service that provides storages that is available, secure, durable, scalable, and redundant. Azure Storage consists of 1) Blob storage, 2) File Storage, and 3) Queue storage. In the past [posts](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html), I've described how to create an Azure Storage account through the Portal and [how to](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html)  create an Azure Storage Blob Container through C#. I've even detailed how to upload and download a stream into an Azure Storage Blob](https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html) but I've always grabbed one file at a time. In this post, I'll show you how you can quickly access **all the files of a given extension** in a container instead of a single one. 

#### Download a Single File in an Azure Storage Blob Container

If you have an existing container and know the filename, then you can use this code (which was covered before) to grab a single file.

```csharp
static void Main(string[] args)
{
    BlobServiceClient storageAccount = new BlobServiceClient(CloudConfigurationManager.GetSetting("StorageConnection"));
    BlobContainerClient container = storageAccount.GetBlobContainerClient("images-backup");
    container.CreateIfNotExists(PublicAccessType.Blob);

    BlockBlobClient blockBlob = container.GetBlockBlobClient("mikepic.png");
    using (var fileStream = System.IO.File.OpenWrite(@"C:\Users\mbcrump\Downloads\mikepic-backup.png"))
    {
        blockBlob.DownloadTo(fileStream);
    }

    Console.ReadLine();
}
```

#### Download all File Extensions in an Azure Storage Blob Container

If you have an existing container and want to pull down all the files for a specific type, then you can use this code.

```csharp
    BlobServiceClient storageAccount = new BlobServiceClient(CloudConfigurationManager.GetSetting("StorageConnection"));
    BlobContainerClient container = storageAccount.GetBlobContainerClient("images-backup");
    container.CreateIfNotExists(PublicAccessType.Blob);

    var list = container.GetBlobs();
    var blobs = list.Where(b => Path.GetExtension(b.Name).Equals(".png"));

    foreach (var item in blobs)
    {
        string name = item.Name;
        BlockBlobClient blockBlob = container.GetBlockBlobClient(name);
        using (var fileStream = File.OpenWrite(@"C:\Users\mbcrump\Downloads\test\" + name))
        {
            blockBlob.DownloadTo(fileStream);
        }
    }
    Console.ReadLine();
```
