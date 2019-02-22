---
type: post
title: "Tip 78 - Copy Azure Storage Blobs and Files via C#"
excerpt: "Learn how to copy Azure Storage Blobs and Files via C#"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-14 17:00:00
---

#### Copy Azure Storage Blobs and Files via C#

Last week we've reviewed the following options with Azure Storage :

* [Working with Azure Storage Blobs and Files through the Portal](http://www.michaelcrump.net/azure-tips-and-tricks74/)
* [Create an Azure Storage Blob Container through C#](http://www.michaelcrump.net/azure-tips-and-tricks75/)
* [Uploading and Downloading a Stream into an Azure Storage Blob](http://www.michaelcrump.net/azure-tips-and-tricks76/)
* [Working with Azure Storage Explorer](http://www.michaelcrump.net/azure-tips-and-tricks77/)

Today, we are going to copy Azure Storage Blobs (and Files) via C#. Go ahead and open the Azure Portal and open the C# app that we worked with [earlier](http://www.michaelcrump.net/azure-tips-and-tricks75/).

The goal of this exercise is to copy a file inside our Azure Storage Container to a new file. So for example, our Azure Storage Container only contains one file now: 

<img :src="$withBase('/files/storageacct4.png')">

We are going to copy a new file inside of it with the name **mikepic-backup.png**. 

Now that we've created the Azure Storage Blob Container, we'll upload a file to it. We'll build off our [previous post](http://www.michaelcrump.net/azure-tips-and-tricks76/) and add the following lines of code to upload a file off our local hard disk:

```csharp
static void Main(string[] args)
{
    var storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnection"));
    var myClient = storageAccount.CreateCloudBlobClient();
    var container = myClient.GetContainerReference("images-backup");
    container.CreateIfNotExists(BlobContainerPublicAccessType.Blob);

    var blockBlob = container.GetBlockBlobReference("mikepic.png");
//lines added
    var copyBlockBlob = container.GetBlockBlobReference("mikepic-backup.png");

    var cb = new AsyncCallback(x => Console.WriteLine("copy completed"));
    copyBlockBlob.BeginStartCopy(blockBlob, cb, null);
//end lines added

    Console.ReadLine();
}
```

If we run the application and switch over to our Storage Account and navigate inside the container, we'll see our file has copied successfully:

<img :src="$withBase('/files/azasynccopy1.png')">
