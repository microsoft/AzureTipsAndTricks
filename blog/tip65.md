---
type: post
title: "Azure Tips and Tricks Part 65 - Use Visual Studio Code to work with Cosmos DB"
excerpt: "Learn how to use Visual Studio Code to work with Cosmos DB"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-10 17:00:00
---


## Use Visual Studio Code to work with Cosmos DB

**What is Cosmos DB?** Azure Cosmos DB is Microsoft's globally distributed, multi-model database. For more info visit [this page](https://docs.microsoft.com/en-us/azure/cosmos-db/introduction).
{: .notice--primary}

Something that I wasn't aware of until yesterday is the [Visual Studio Code extension for Azure Cosmos DB](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-cosmosdb).

<img :src="$withBase('/files/cosmosvscode1.png')">

You can easily view, create and delete databases, collections, graphs, and documents, along with other things detailed in their marketplace submission.  

After installing it via the extension above, here is what it looks like to setup our Cosmos DB resource and type from within Visual Studio Code. 

<img :src="$withBase('/files/cosmosvscode2.gif')">

Now we'll setup our database and collection. 

<img :src="$withBase('/files/cosmosvscode4.gif')">

Finally, we'll create a document and add the following data to it. 

```json
{
    "name": "learn cosmos db",
}
```

<img :src="$withBase('/files/cosmosvscode3.gif')">
