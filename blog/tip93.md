---
type: post
title: "Tip 93 - Part 4 - Searching an index with Azure Search with C#"
excerpt: "Learn how to query an Azure Search Index using C#"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-02-11 17:00:00
---

::: tip
:bulb: Learn more : [SQL Server on Azure Virtual Machines](https://docs.microsoft.com/azure/virtual-machines/windows/sql/virtual-machines-windows-sql-server-iaas-overview?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Implementing Azure Search with SQL Server and ASP.NET MVC

In this series I'll cover Azure Search, SQL Server and putting it all together in a ASP.NET MVC web app. The complete list can be found below:

* [Part 1 - Implementing Azure Search with SQL Server and ASP.NET MVC](https://microsoft.github.io/AzureTipsAndTricks/blog/tip90.html)
* [Part 2 - Implementing Azure Search with SQL Server](https://microsoft.github.io/AzureTipsAndTricks/blog/tip91.html)
* [Part 3 - Querying an Azure Search Index](https://microsoft.github.io/AzureTipsAndTricks/blog/tip92.html)
* [Part 4 - Searching an index with Azure Search with C#](https://microsoft.github.io/AzureTipsAndTricks/blog/tip93.html)

#### Implementing Azure Search

Last week we've learned that Azure Search is a search-as-a-service that connects to a variety of data sources such as SQL Server. We've created our SQL Server DB, and stood up Azure Search and even query the index through the Azure Portal. In this final section, we'll work with C# and query the index.

Open the Azure Portal, and search for **Search Services** and click on the **Search Services** that we created earlier and look for **Keys**. Copy and paste the key b/c we'll be using it shortly. 

<img :src="$withBase('/files/part4azsearch.png')">

You'll also want to remember the name of your search service. In my case it is - mcadventureworks 

Once that is complete, head into Visual Studio and create a Console Application. Use NuGet to pull in references to **Microsoft.Azure.Search** as shown below. 

<img :src="$withBase('/files/part4azsearch1.png')">

Add the following code to **Program.cs** to search the index:

```csharp
static void Main(string[] args)
{

    var searchServiceName = "yoursearchservice";
    var apiKey = "yourapikey";

    var searchClient = new SearchServiceClient(searchServiceName, new SearchCredentials(apiKey));
    var indexClient = searchClient.Indexes.GetClient("azuresql-index"); //check this to match your index

    DocumentSearchResult<MySQLDB> results;

    Console.WriteLine("Search the entire index for the term 'Michael' \n");

    results = indexClient.Documents.Search<MySQLDB>("Michael");

    WriteDocuments(results);

    Console.Read();
}

private static void WriteDocuments(DocumentSearchResult<MySQLDB> searchResults)
{
    foreach (SearchResult<MySQLDB> result in searchResults.Results)
    {
        Console.WriteLine(result.Document.FirstName + " " + result.Document.LastName);
    }

    Console.WriteLine();
}
```

Create a class named **MySQLDB** and add the following:

```csharp

[SerializePropertyNamesAsCamelCase]
class MySQLDB
{
    [IsFilterable, IsSortable, IsFacetable]
    public string CustomerID { get; set; }
    [IsFilterable, IsSortable, IsFacetable]
    public string FirstName { get; set; }
    [IsFilterable, IsSortable, IsFacetable]
    public string LastName { get; set; }
    [IsFilterable, IsSortable, IsFacetable]
    public string EmailAddress { get; set; }
    [IsFilterable, IsSortable, IsFacetable]
    public string ModifiedDate { get; set; }
    
}
```

When you run the app, it will search the entire index for the term 'Michael' and display the results in your Console window. If you've followed the tutorial so far, then you should get around 17 results. 

```text
Search the entire index for the term 'Michael'

Michael Blythe
Michael Blythe
Michael Bohling
Michael Vanderhyde
Michael Vanderhyde
Michael Galos
Michael Galos
Michael Brundage
Michael Brundage
Michael Graff
Michael Graff
Michael Sullivan
Michael Sullivan
Michael Lee
Michael Lee
Michael John Troyer
Michael John Troyer
```
