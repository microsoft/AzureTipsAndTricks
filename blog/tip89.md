---
type: post
title: "Tip 89 - Shared Access Tokens with Azure Storage Blob Containers"
excerpt: "Learn how to create shared access tokens with Azure Storage Blob Containers"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-31 17:00:00
---

#### Shared Access Tokens with Azure Storage Blob Containers

In case you are new to the Azure Storage Tables, we've reviewed the following items so far:

* [Creating your first Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks82/)
* [Adding an item to a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks83/)
* [Reading an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks84/)
* [Updating an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks85/)
* [Deleting an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)
* [Ensure a clean RowKey in Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)
* [What's the purpose of ETag in Azure Storage Table?](http://www.michaelcrump.net/azure-tips-and-tricks88/)
* [Shared Access Tokens with Azure Storage Blob Containers](http://www.michaelcrump.net/azure-tips-and-tricks89/)

#### What is it? 

A shared access signature (or you may hear SAS) provides delegated access to resources in your storage account. With a SAS, you can grant  access to resources in your storage account, without sharing your master account keys. In other words, a SAS is a secure way to share your storage resources without compromising your account keys.

#### A Practical Example 

Let's say that I have a image that is stored in an Azure Storage Blob Container with the endpoint of [https://mbcrumpsa.blob.core.windows.net/images/mikepic.png](https://mbcrumpsa.blob.core.windows.net/images/mikepic.png). 

I can store this file, one of three ways:

* No public read access: The container and its blobs can be accessed only by the storage account owner. This is the default for all new containers.
* Public read access for blobs only: Blobs within the container can be read by anonymous request, but container data is not available. Anonymous clients cannot enumerate the blobs within the container.
* Full public read access: All container and blob data can be read by anonymous request. Clients can enumerate blobs within the container by anonymous request, but cannot enumerate containers within the storage account.

The second and third option would give full access to the image and it would display with no problem. But if you select **No public read access** as shown below, then the image will not display b/c you don't have permissions. 

<img :src="$withBase('/files/azuresas1.jpg')">

Matter of fact, if you try to access the image by going to the URL, then you'll see the following:

```text
This XML file does not appear to have any style information associated with it. The document tree is shown below.
<Error>
<Code>ResourceNotFound</Code>
<Message>
The specified resource does not exist. RequestId:7dd786ac-001e-0057-3c0a-9bd1e4000000 Time:2018-02-01T03:10:39.7635624Z
</Message>
</Error>
```

This is where we'd typically want to generate a SAS token and serve it up in an application. You can do this very easily by opening the Azure Portal and navigate to your Azure Storage Account and select Blob Service. Then click on **Access Policy** and give it a name, permissions and a start and end date and make sure you save it. 

<img :src="$withBase('/files/azuresas2.jpg')">

I named mine **imageSAP**. Now we could simple access this through code with a call to **GetSharedAccessSignature** as shown below:

```csharp
CloudStorageAccount storageAccount = CloudStorageAccount.Parse(
    CloudConfigurationManager.GetSetting("StorageConnection"));

CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();

CloudBlobContainer container = blobClient.GetContainerReference("images");

var blobs = new List<TweetEntity>();

foreach (var blob in container.ListBlobs())
{
    if (blob.GetType() == typeof(CloudBlockBlob))
    {
        var sas = container.GetSharedAccessSignature(null, "imageSAP");
        // sas now contains the signature that we could append to a URL. 
    }
}

```

As stated in the code, we now have access to the token from our **imageSAP** policy that will generate our signature that gives us access to the image for the specified time. We could then see the image once we go to the site. 
