---
type: post
title: "Tip 75 - Create an Azure Storage Blob Container through C#"
excerpt: "Learn how to create an Azure Storage Blobs Container with C#"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-08 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

#### Create an Azure Storage Blob Container through C#

Azure Storage is described as a service that provides storages that is available, secure, durable, scalable, and redundant. Azure Storage consists of 1) Blob storage, 2) File Storage, and 3) Queue storage. In this post, we'll take a look at creating an Azure Storage Blob container with C#. [Yesterday](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html), I described how to do it through the Azure Portal. 

Go ahead and open the Azure Portal and navigate to the Azure Storage account that we worked with [yesterday](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html).

Look under **Settings**, then **Access Keys** and copy the connection string. 

<img :src="$withBase('/files/storagethroughcsharp1.png')">

Create a C# Console Application, and use NuGet to pull in references to :

* WindowsAzure.Storage
* Microsoft.WindowsAzure.ConfigurationManager

<img :src="$withBase('/files/storagethroughcsharp2.png')">
<img :src="$withBase('/files/storagethroughcsharp3.png')">

Inside of your Console app, you will see **App.config**, now add the following section:

```
  <appSettings>
    <add key="StorageConnection" value="YOUR-CONNECTION-STRING-COPIED-FROM-EARLIER"/>
  </appSettings>
```

Copy the following code into your Main method:

```csharp
static void Main(string[] args)
{
    var storageAccount = CloudStorageAccount.Parse(CloudConfigurationManager.GetSetting("StorageConnection"));
    var myClient = storageAccount.CreateCloudBlobClient();
    var container = myClient.GetContainerReference("images-backup");
    container.CreateIfNotExists(BlobContainerPublicAccessType.Blob);
    Console.ReadLine();
}
```

This code will get our connection string from the **App.config**, create our client and a container named **images-backup** if it doesn't exist. We can go back inside of the portal to see if executed correctly. 

<img :src="$withBase('/files/storagethroughcsharp4.png')">
