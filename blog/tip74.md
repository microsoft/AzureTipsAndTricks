---
type: post
title: "Tip 74 - Working with Azure Storage Blobs and Files through the Portal"
excerpt: "Learn how to work with Azure Storage Blobs and Files through the Portal"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-07 17:00:00
---

#### Working with Azure Storage Blobs and Files through the Portal

Azure Storage is described as a service that provides storages that is available, secure, durable, scalable, and redundant. Azure Storage consists of 1) Blob storage, 2) File Storage, and 3) Queue storage. In this post, we'll take a look at Blob storage and how to get started using it through the Azure Portal. 

Go ahead and open the Azure Portal and click **Create a Resource** and select **Azure Storage**. We'll keep it simple as shown below to get started. 

<img :src="$withBase('/files/storageacct1.png')">

Once complete, go into the resource and look under **Services**. 

<img :src="$withBase('/files/storageacct2.png')">

Go ahead and click on **Blobs** and create a **Container** and give it the name **images**.

**Remember this!** Think of a container in this sense as a folder. https://myblob/**container**/image1.jpg


<img :src="$withBase('/files/storageacct3.png')">

You'll now want to click **Upload** and select a file on your physical disk. 

<img :src="$withBase('/files/storageacct4.png')">

Now that your file is uploaded, select it, and you can click on the ellipsis and select **Blob properties** to see additional details. 

<img :src="$withBase('/files/storageacct5.png')">
