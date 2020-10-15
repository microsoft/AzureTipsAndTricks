---
type: post
title: "Tip 66 - Using the Data Migration Tool with Cosmos DB"
excerpt: "Learn how to use the Data Migration Tool with Cosmos DB"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-11 17:00:00
---

::: tip
:bulb: Learn more : [Azure Cosmos DB](https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

#### Using the Data Migration Tool with Cosmos DB

One tasks that seems to come up over and over is migrating data from one format into another. I was recently building out an API and needed to dump some data into Cosmos DB. The tool that made short work of this was the [Azure DocumentDB Data Migration Tool](https://www.microsoft.com/en-us/download/details.aspx?id=46436). In my case, I needed to dump a large JSON file into Cosmos DB. Here is how I did it. 

#### The Tools + Sample Data

Download and install the [Azure DocumentDB Data Migration Tool](https://www.microsoft.com/en-us/download/details.aspx?id=46436)

Grab whatever sample file that you'd like to experiment with. I'm using the `en_kjv.json` JSON file from [here](https://github.com/thiagobodruk/bible/tree/master/json?WT.mc_id=github-azuredevtips-azureappsdev)

Now we're ready to begin work! 

#### Get to Work

Open the Data Migration Tool and under **Source Information**, point to the local JSON file as shown below. 

<img :src="$withBase('/files/migrationcosmos1.png')">

Ensure you have a Cosmos DB database id and collection. I'm using the following: 

<img :src="$withBase('/files/migrationcosmos7.png')">

Go to **Keys** (inside your Cosmos DB blade in the portal) to copy the **Primary Connection String**

<img :src="$withBase('/files/migrationcosmos2.png')">

You'll need to append the Database name to the end of the string. For example `Database=bible` will be appended to the string `AccountEndpoint=https://mbcrump.documents.azure.com:443/;AccountKey=VxDEcJblah==;Database=bible` that I copied out of the portal. Now press **Verify Connection**. 

<img :src="$withBase('/files/migrationcosmos3.png')">

You'll need to add the **Collection** and in my case it is `verses`. We'll take the defaults on the next two screens and you'll finally see a **Confirm inport settings** page. 

<img :src="$withBase('/files/migrationcosmos4.png')">

You can even click on **View Command** to see the command that will be used to migrate your data. This is helpful to just learn the syntax. 

You'll finally see the Import has completed with 66 transferred. (This is the total number of books in the Bible.)

<img :src="$withBase('/files/migrationcosmos5.png')">

If you go back to the Azure Portal and open Cosmos DB and look under **Data Explorer**, you'll see the data has been imported successfully into our collection. 

<img :src="$withBase('/files/migrationcosmos6.png')">
