---
type: post
title: "Tip 88 - What's the purpose of ETag in Azure Storage Table?"
excerpt: "Learn what's the purpose of ETag in Azure Storage Table?"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-01-30 17:00:00
---

#### What's the purpose of ETag in Azure Storage Table?

In case you are new to the Azure Storage Tables, we've reviewed the following items so far:

* [Creating your first Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks82/)
* [Adding an item to a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks83/)
* [Reading an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks84/)
* [Updating an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks85/)
* [Deleting an item from a Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)
* [Ensure a clean RowKey in Azure Storage Table](http://www.michaelcrump.net/azure-tips-and-tricks86/)
* [What's the purpose of ETag in Azure Storage Table?](http://www.michaelcrump.net/azure-tips-and-tricks88/)

#### What is it? 

There is a lot of confusion around **ETag** and I thought I'd stop for a moment to help clear this up. 

An **ETag** property is used for optimistic concurrency during updates. It is not a timestamp as there is another property called **TimeStamp** that stores the last time a record was updated. For example, if you load an entity and want to update it, the ETag must match what is currently stored. This is important b/c if you have multiple users editing the same item, you don't want them overwriting each other's changes. 

#### A Practical Example 

Bob and David load an edit page on a website at the same time. Bob changes a value for Description and saves the item. After David has had the form open for a while  and makes a change to a unrelated field such as the URL and unknowingly the outdated Description is being saved with their update. David does not know they are discarding a change by Bob unless you alert him. So what you should do is show an error that Bob has changed it already and ask if they sure they want to overwrite Bob's changes or if they want to see those changes first.

This is accomplished by both Bob and David storing the ETag from when the record was loaded. When each user attempts a save you can pass that ETag to the server with the updated data and see if they match. Every change to a record updates the ETag stored for that record. So when David tries to save the ETag that is conflicting, then it won't match and you can handle what should be done.

If you don't care that David's changes may overwrite Bob's changes, then you can pass "*" with the save and Azure won't give an error when the ETag does not match.

_Original credit goes to Michael Lang for this example, I've made minor tweaks to help folks understand it better._
