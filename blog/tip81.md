---
type: post
title: "Azure Tips and Tricks Part 81 - Working with AzCopy and Azure Storage"
excerpt: "Learn how to add metadata to a file inside Azure Storage Blob Container"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-17 17:00:00
---

## Working with AzCopy and Azure Storage

We've reviewed the following options with Azure Storage so far:

* [Working with Azure Storage Blobs and Files through the Portal](http://www.michaelcrump.net/azure-tips-and-tricks74/)
* [Create an Azure Storage Blob Container through C#](http://www.michaelcrump.net/azure-tips-and-tricks75/)
* [Uploading and Downloading a Stream into an Azure Storage Blob](http://www.michaelcrump.net/azure-tips-and-tricks76/)
* [Working with Azure Storage Explorer](http://www.michaelcrump.net/azure-tips-and-tricks77/)
* [Copy Azure Storage Blobs and Files via C#](http://www.michaelcrump.net/azure-tips-and-tricks78/)
* [Creating an Azure Blob Hierarchy](http://www.michaelcrump.net/azure-tips-and-tricks79/)
* [Adding Metadata to a file inside Azure Storage Blob Container](http://www.michaelcrump.net/azure-tips-and-tricks80/)
* [Working with AzCopy and Azure Storage](http://www.michaelcrump.net/azure-tips-and-tricks81/)

Today, we are going to look at working with AzCopy to manipulate our Azure Storage container that we've been using throughout this series. Feel free to walk through other post in the series to get up to speed.

**What is AzCopy?** AzCopy is a command-line utility designed for copying data to/from Microsoft Azure Blob, File, and Table storage, using simple commands designed for optimal performance. You can copy data between a file system and a storage account, or between storage accounts. *(courtesy of docs)*
{: .notice--info}

You can download either the latest version of AzCopy on [Windows](http://aka.ms/downloadazcopy) or [Linux](https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azcopy-linux).

For this example, I'm going to use Windows. After I downloaded and installed the utility, I navigated inside my command prompt to the following folder `%ProgramFiles(x86)%\Microsoft SDKs\Azure\AzCopy` and ran the `azcopy.exe` command to ensure everything was working properly. 

<img :src="$withBase('/files/azcopy1blog.png')">

So you may be wondering if you need to do the device login as we did with the [Azure CLI](https://www.michaelcrump.net/azure-cli-with-win10-bash/). The answer is no, we'll be using our Azure Storage Access Key.

## Getting the Azure Storage Access Key 

Go ahead and open the Azure Portal and navigate to the Azure Storage account that we worked with [earlier](http://www.michaelcrump.net/azure-tips-and-tricks74/).

Look under **Settings**, then **Access Keys** and copy the key1. 

<img :src="$withBase('/files/azcopy2blog.png')">

Store the key somewhere that you can retrieve it again. 

## Kick the tires with a couple of commands. 

We can easily download a file from our Azure Storage Blob Container that we've been working with earlier with the following command:

```text
AzCopy /Source:https://mbcrumpsa.blob.core.windows.net/images-backup /Dest:C:\mytest /SourceKey:thekeyyoucopiedearlier /Pattern:"mikepic.png"
```

<img :src="$withBase('/files/azcopy3blog.gif')">

We can do the reverse and upload a file from our hard disk to Azure Storage Blob Container with the following command:

```text
AzCopy /Source:C:\mytest /Dest:https://mbcrumpsa.blob.core.windows.net/images-backup /DestKey:thekeyyoucopiedearlier /Pattern:"mikepicnew.png"
```

<img :src="$withBase('/files/azcopy4blog.gif')">

**Keep in mind:** The main difference between these two commands is the use of **SourceKey** for downloading and **DestKey** for uploading. The key that is being used is identical (named key1 from the example above).
{: .notice--info}

Finally, you can copy from one Azure Storage account to another one with the following command:

```text
AzCopy /Source:https://mbcrumpsa.blob.core.windows.net/images-backup /Dest:https://mbcrumpsa.blob.core.windows.net/images /SourceKey:thekeyyoucopiedearlier /DestKey:thekeyyoucopiedearlier /Pattern:"mikepicnew.png"
```

In this case, I am copying a file named `mikepicnew.png` from `images-backup` to `images` and then I'll refresh the container. 

<img :src="$withBase('/files/azcopy5blog.gif')">
