---
type: post
title: "Tip 76 - Uploading and Downloading a Stream into an Azure Storage Blob"
excerpt: "Learn how to create to upload and download a stream into an Azure Storage Blob with C#"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-09 17:00:00
---

#### Uploading and Downloading a Stream into an Azure Storage Blob

Azure Storage is described as a service that provides storages that is available, secure, durable, scalable, and redundant. Azure Storage consists of 1) Blob storage, 2) File Storage, and 3) Queue storage. In this post, we'll take a look at how to upload and download a stream into an Azure Storage Blob with C#. In previous [posts](http://www.michaelcrump.net/azure-tips-and-tricks74/), I've described how to create an Azure Storage account through the Portal and [recently](http://www.michaelcrump.net/azure-tips-and-tricks75/) how to create an Azure Storage Blob Container through C#.

Go ahead and open the Azure Portal and navigate to the Azure Storage account that we worked with [previously](http://www.michaelcrump.net/azure-tips-and-tricks74/) and open the [C# Console application](http://www.michaelcrump.net/azure-tips-and-tricks75/) as we'll be using it shortly.

#### Upload a File

Now that we've created the Azure Storage Blob Container, we'll upload a file to it. We'll build off our last code snippet and add the following lines of code to upload a file off our local hard disk:

```csharp
static void Main(string[] args)
{
    var storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnection"));
    var myClient = storageAccount.CreateCloudBlobClient();
    var container = myClient.GetContainerReference("images-backup");
    container.CreateIfNotExists(BlobContainerPublicAccessType.Blob);

//lines modified
    var blockBlob = container.GetBlockBlobReference("mikepic.png");
      using (var fileStream = System.IO.File.OpenRead(@"c:\mikepic.png"))
      {
         blockBlob.UploadFromStream(fileStream);
      }
//lines modified

    Console.ReadLine();
}
```

If we switch over to our Storage Account and navigate inside the container, we'll see our new file has been added:

<img :src="$withBase('/files/writetoblob1.png')">

#### Download a File

Now that we've uploaded a file to the Azure Storage Blob Container, we'll download a file from it. We'll build off our last code snippet and add the following lines of code to download a file off our local hard disk and give it new name:

```csharp
static void Main(string[] args)
{
    var storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnection"));
    var myClient = storageAccount.CreateCloudBlobClient();
    var container = myClient.GetContainerReference("images-backup");
    container.CreateIfNotExists(BlobContainerPublicAccessType.Blob);

//lines modified
    var blockBlob = container.GetBlockBlobReference("mikepic.png");
    using (var fileStream = System.IO.File.OpenWrite(@"C:\Users\mbcrump\Downloads\mikepic-backup.png"))
    {
      blockBlob.DownloadToStream(fileStream);
    }
//lines modified

    Console.ReadLine();
}
```

Note that are now using the **OpenWrite** method and specifying a new name. We are also taking advantage of the **DownloadToStream** method. If we run the application, our new file should be in the downloads folder.

<img :src="$withBase('/files/writetoblob2.png')">
