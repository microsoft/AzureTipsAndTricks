---
type: post
title: "Tip 77 - Working with Azure Storage Explorer"
excerpt: "Learn how to work with Azure Storage Explorer"
tags: [Storage]
date: 2018-01-10 17:00:00
---

::: tip
:bulb: Learn more : [Azure storage account overview](https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

### Working with Azure Storage Explorer

This week we've reviewed the following options with Azure Storage :

* [Working with Azure Storage Blobs and Files through the Portal](https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html)
* [Create an Azure Storage Blob Container through C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip75.html)
* [Uploading and Downloading a Stream into an Azure Storage Blob](https://microsoft.github.io/AzureTipsAndTricks/blog/tip76.html)

While it has been easy working with Azure Storage through the Portal and C#, one gem that I haven't covered was Azure Storage Explorer. In this post, we'll take a look at it.

**What is it?** [Azure Storage Manager](https://azure.microsoft.com/features/storage-explorer?WT.mc_id=azure-azuredevtips-azureappsdev) allows you to easily manage the contents of your storage account. It comes complete with features such as: upload, download, and manage blobs, files, queues, tables, and Cosmos DB entities.


#### How I typically work with Azure Storage Explorer

After downloading the tool, I typically begin with the option **Use a connection string or a shared access signature URI** as shown below.

<img :src="$withBase('/files/azstorageexp1.png')">

I then switch over to my Azure Storage account that I want to work with and look under **Settings**, then **Access Keys** and copy the connection string to my clipboard.

<img :src="$withBase('/files/storagethroughcsharp1.png')">

I paste that into Azure Storage Explorer and now have access to my data.

<img :src="$withBase('/files/azstorageexp2.png')">

Now, I can do things such for my table storage such as CRUD operations as well as querying.

<img :src="$withBase('/files/azstorageexp3.gif')">

