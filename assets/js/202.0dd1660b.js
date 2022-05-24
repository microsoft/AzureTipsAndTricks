(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{638:function(e,t,a){"use strict";a.r(t);var n=a(69),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout our new Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Triggers and Bindings"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://youtu.be/ICRWjyr2l3E?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("What database should you use in your next Azure Functions app"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"what-database-should-you-use-in-your-next-azure-functions-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-database-should-you-use-in-your-next-azure-functions-app"}},[e._v("#")]),e._v(" What database should you use in your next Azure Functions app")]),e._v(" "),a("h4",{attrs:{id:"azure-functions-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions-integration"}},[e._v("#")]),e._v(" Azure Functions integration")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/functions/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions"),a("OutboundLink")],1),e._v(" are great for running background tasks. And Azure Functions can easily connect to other services, like "),a("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),a("OutboundLink")],1),e._v(", to read and write data, with minimal plumbing code.")]),e._v(" "),a("p",[e._v("In this post, we'll take a look at using a database with Azure Functions and we'll see which database is best suited for which scenario.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),a("h4",{attrs:{id:"use-a-database-with-azure-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-a-database-with-azure-functions"}},[e._v("#")]),e._v(" Use a database with Azure Functions")]),e._v(" "),a("p",[e._v("Most applications need some type of data store to work with. This is also true for applications that run as Azure Functions. Connecting to a database from an Azure Function can be extremely simple. For instance, you can store a connection string in the Function App Settings and use a SqlConnection object to connect to Azure SQL, like in the example below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('     // Get the connection string from app settings and use it to create a connection.\n    var str = Environment.GetEnvironmentVariable("sqldb_connection");\n    using (SqlConnection conn = new SqlConnection(str))\n    {\n        conn.Open();\n        var text = "UPDATE SalesLT.SalesOrderHeader " +\n                "SET [Status] = 5  WHERE ShipDate < GetDate();";\n\n        using (SqlCommand cmd = new SqlCommand(text, conn))\n        {\n            // Execute the command and log the # rows affected.\n            var rows = await cmd.ExecuteNonQueryAsync();\n            log.LogInformation($"{rows} rows were updated");\n        }\n    }\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("p",[e._v("Or, when you want to connect to an Azure Cosmos DB, you can use the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-triggers-bindings?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Function bindings"),a("OutboundLink")],1),e._v(", such as a trigger or input- or output-binding to connect to Cosmos DB, without writing one line of code. The binding creates the plumbing to connect to Cosmos DB, like in this function.json file from a Function with a Cosmos DB Trigger:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "bindings": [\n    {\n      "type": "cosmosDBTrigger",\n      "name": "input",\n      "direction": "in",\n      "connectionStringSetting": "cosmosdbtips_DOCUMENTDB",\n      "databaseName": "SampleDB",\n      "collectionName": "Persons",\n      "leaseCollectionName": "leases",\n      "createLeaseCollectionIfNotExists": true\n    }\n  ]\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br")])]),a("img",{attrs:{src:e.$withBase("/files/81integration.png")}}),e._v(" "),a("p",[e._v("(Using Function bindings to connect to Azure Cosmos DB from an Azure Function)")]),e._v(" "),a("p",[e._v("Connecting to a database is relatively easy. But which database should you use for your Azure Function? In Azure, you can choose from several databases and each has its own characteristics.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/81databaseoptions.png")}}),e._v(" "),a("p",[e._v("(Database options in Azure)")]),e._v(" "),a("p",[e._v("There is "),a("a",{attrs:{href:"https://azure.microsoft.com/services/sql-database/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database"),a("OutboundLink")],1),e._v(", which provides scalable relational data storage. And there are "),a("a",{attrs:{href:"https://azure.microsoft.com/services/mysql/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MySQL"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://azure.microsoft.com/services/postgresql/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for PostgreSQL"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://azure.microsoft.com/services/mariadb/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Database for MariaDB"),a("OutboundLink")],1),e._v(", which also store relational data. And there is also "),a("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),a("OutboundLink")],1),e._v(", which stores unstructured- and document data and can interact with data through multiple APIs, including a "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/sql-api-get-started?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL API"),a("OutboundLink")],1),e._v(", a "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/tutorial-develop-mongodb-nodejs?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("MongoDB API"),a("OutboundLink")],1),e._v(" and a "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/create-graph-dotnet?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graph API"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/81optionscompared.png")}}),e._v(" "),a("p",[e._v("(Comparison of Database options in Azure)")]),e._v(" "),a("p",[e._v("Besides storing relational or non-relational data, these databases are different in that they can run serverless, like an Azure Function and that only Cosmos DB currently has a native integration with Azure Functions through the Function Bindings. The database that you choose, depends on your needs.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("If you need to use a database for your "),a("a",{attrs:{href:"https://azure.microsoft.com/services/functions/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function"),a("OutboundLink")],1),e._v(", you can choose from many different database options, which all have different characteristics. Now, you have the information to make the right choice for your situation. Go and check it out!")])])}),[],!1,null,null,null);t.default=r.exports}}]);