---
type: post
title: "Tip 92 - Part 3 - Querying an Azure Search Index"
excerpt: "Learn how to query an Azure Search Index through the Azure Portal"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-02-06 17:00:00
---


#### Implementing Azure Search with SQL Server and ASP.NET MVC

In this series I'll cover Azure Search, SQL Server and putting it all together in a ASP.NET MVC web app. The complete list can be found below:

* [Part 1 - Implementing Azure Search with SQL Server and ASP.NET MVC](http://www.michaelcrump.net/azure-tips-and-tricks90/)
* [Part 2 - Implementing Azure Search with SQL Server](http://www.michaelcrump.net/azure-tips-and-tricks91/)
* [Part 3 - Querying an Azure Search Index](http://www.michaelcrump.net/azure-tips-and-tricks92/)
* [Part 4 - Searching an index with Azure Search with C#](http://www.michaelcrump.net/azure-tips-and-tricks93/)


#### Implementing Azure Search

This week we've learned that Azure Search is a search-as-a-service that connects to a variety of data sources such as SQL Server. We've created our SQL Server DB, and stood up Azure Search and now it is time to query the indexes. In this section, I'll give you some basic commands that should help get you started. 

Open the Azure Portal, and search for **Search Services** and click on the **Search Services** tab as shown below. 

<img :src="$withBase('/files/azsearchfilter1.png')">

Basic Search - I can type `search=john` and pressing **Search** to search the entire index for the word john. 

<img :src="$withBase('/files/azsearchfilter2.gif')">

Append strings - I can append onto the string with the **&** to pass additional search parameters, which can be specified in any order. For example, the  $count=true parameter returns a sum of all the documents that match the query. Make note that this is using OData.

<img :src="$withBase('/files/azsearchfilter3.png')">

Return top # - You can even pass **$top=2** to return the highest ranked 2 documents. 

<img :src="$withBase('/files/azsearchfilter4.png')">

Filtering - You can use the **$filter** parameter to return results matching the criteria you provided. For example, `$filter FirstName eq 'Robert'` would return any person in the index that has a FirstName that equals Robert. There are many other comparison expressions (such as eq, ne, gt, lt, ge, le). 

Order-by syntax - You can use the **$orderby** parameter to order the results by. You can use either asc or desc to explicitly specify the sort order. By default, it will use the sort order as ascending.

I'd encourage you to view the [OData Expression Syntax for Azure Search](https://docs.microsoft.com/en-us/rest/api/searchservice/odata-expression-syntax-for-azure-search) for a full list and other samples that you can use. 
