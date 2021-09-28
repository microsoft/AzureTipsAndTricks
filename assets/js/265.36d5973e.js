(window.webpackJsonp=window.webpackJsonp||[]).push([[265],{624:function(t,e,r){"use strict";r.r(e);var o=r(43),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),r("p",[t._v("🔥 Download the FREE Azure Developer Guide eBook "),r("a",{attrs:{href:"http://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB Overview"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("p",[t._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/fAfh6HaJwLs?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to copy data from one Azure Cosmos DB container to another container"),r("OutboundLink")],1),t._v(".")])]),t._v(" "),r("h3",{attrs:{id:"how-to-copy-data-from-one-azure-cosmos-db-container-to-another-container"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-copy-data-from-one-azure-cosmos-db-container-to-another-container"}},[t._v("#")]),t._v(" How to copy data from one Azure Cosmos DB container to another container")]),t._v(" "),r("h4",{attrs:{id:"azure-cosmos-db-data-migration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-cosmos-db-data-migration"}},[t._v("#")]),t._v(" Azure Cosmos DB data migration")]),t._v(" "),r("p",[t._v("Sometimes, you need to migrate data from one "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB"),r("OutboundLink")],1),t._v(" to another. You can, for instance, do this if you need to change the partition key of a container, or to consolidate Azure Cosmos DB instances.")]),t._v(" "),r("p",[t._v("The "),r("a",{attrs:{href:"https://github.com/Azure-Samples/azure-cosmosdb-live-data-migrator?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB live data migrator tool"),r("OutboundLink")],1),t._v(" enables you to migrate data from one container to another. In this post, we'll configure the tool to try it out.")]),t._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),r("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),r("ul",[r("li",[t._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("free account"),r("OutboundLink")],1),t._v(" before you begin)")]),t._v(" "),r("li",[t._v("Two "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/create-cosmosdb-resources-portal?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB"),r("OutboundLink")],1),t._v(" instances with databases and containers. One of the containers should contain data that can be migrated.")])]),t._v(" "),r("h4",{attrs:{id:"use-the-azure-cosmos-db-live-data-migrator-tool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-the-azure-cosmos-db-live-data-migrator-tool"}},[t._v("#")]),t._v(" Use the Azure Cosmos DB live data migrator tool")]),t._v(" "),r("p",[t._v("Let's try it out. To use the migration tool, we first need to create an application registration.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure portal"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("Search for "),r("strong",[t._v('"app registrations"')]),t._v(", and click on the "),r("strong",[t._v("App registration")]),t._v(" result")])]),t._v(" "),r("li",[r("p",[t._v("Click "),r("strong",[t._v("New registration")]),t._v(" to start registering the migration tool app")]),t._v(" "),r("ol",[r("li",[t._v("Type in a "),r("strong",[t._v("Name")]),t._v(" for the application. For instance "),r("strong",[t._v('"tips01"')]),t._v(".")]),t._v(" "),r("li",[t._v("Put in a *"),r("em",[t._v("Redirect URI")]),t._v(". This should contain the name, so something like "),r("strong",[t._v('"https://tips01-ui.azurewebsites.net/signin-oidc"')])]),t._v(" "),r("li",[t._v("Click "),r("strong",[t._v("Register")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/118register1.png")}}),t._v(" "),r("p",[t._v("(Create an App Registration in the Azure portal)")]),t._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[t._v("Next, note the "),r("strong",[t._v("Application (client) ID")]),t._v(" in the overview blade of the App registration. "),r("strong",[t._v("Copy it")]),t._v(" to use it later")]),t._v(" "),r("li",[t._v("Navigate to the "),r("strong",[t._v("Authentication")]),t._v(" menu")]),t._v(" "),r("li",[t._v("Fill in a "),r("strong",[t._v("Front-channel logout URL")]),t._v(". Again, this should contain the name, like "),r("strong",[t._v('"https://tips01-ui.azurewebsites.net/signout-callback-oidc"')])]),t._v(" "),r("li",[t._v("Check "),r("strong",[t._v("ID tokens (used for implicit and hybrid flows)")])]),t._v(" "),r("li",[t._v("Click "),r("strong",[t._v("Save")])]),t._v(" "),r("li",[t._v("Next, go to the "),r("strong",[t._v("Manifest")]),t._v(" menu")]),t._v(" "),r("li",[t._v("Add to the "),r("strong",[t._v("requiredResourceAccess")]),t._v(" node, so that it looks like this:")])])])]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('\t"requiredResourceAccess": [\n\t\t{\n\t\t\t"resourceAppId": "00000003-0000-0000-c000-000000000000",\n\t\t\t"resourceAccess": [\n\t\t\t\t{\n\t\t\t\t\t"id": "e1fe6dd8-ba31-4d61-89e7-88639da4683d",\n\t\t\t\t\t"type": "Scope"\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\t"id": "b340eb25-3456-403f-be2f-af7a0d370277",\n\t\t\t\t\t"type": "Scope"\n\t\t\t\t}\n\t\t\t]\n\t\t}\n\t],\n')])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br"),r("span",{staticClass:"line-number"},[t._v("5")]),r("br"),r("span",{staticClass:"line-number"},[t._v("6")]),r("br"),r("span",{staticClass:"line-number"},[t._v("7")]),r("br"),r("span",{staticClass:"line-number"},[t._v("8")]),r("br"),r("span",{staticClass:"line-number"},[t._v("9")]),r("br"),r("span",{staticClass:"line-number"},[t._v("10")]),r("br"),r("span",{staticClass:"line-number"},[t._v("11")]),r("br"),r("span",{staticClass:"line-number"},[t._v("12")]),r("br"),r("span",{staticClass:"line-number"},[t._v("13")]),r("br"),r("span",{staticClass:"line-number"},[t._v("14")]),r("br"),r("span",{staticClass:"line-number"},[t._v("15")]),r("br")])]),r("ol",{attrs:{start:"11"}},[r("li",[t._v("Click "),r("strong",[t._v("Save")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/118register2.png")}}),t._v(" "),r("p",[t._v("(Change the manifest of the App registration)")]),t._v(" "),r("ol",[r("li",[t._v("In the manifest, copy the "),r("strong",[t._v("publisherDomain")]),t._v(" for later")])]),t._v(" "),r("p",[t._v("Now that we have an application registration, we can deploy the migration app.")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("Go to "),r("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure-Samples%2Fazure-cosmosdb-live-data-migrator%2Fmaster%2FMigration.ResourceGroup%2FMigrationServices.json?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),r("OutboundLink")],1),t._v(" to start creating the migration app")]),t._v(" "),r("ol",[r("li",[t._v("First, select a "),r("strong",[t._v("Resource Group")])]),t._v(" "),r("li",[t._v("Next, type in a "),r("strong",[t._v("Resource Name Prefix")]),t._v(". This should be the name that you used earlier. So, in my case, it is "),r("strong",[t._v('"tips01"')])]),t._v(" "),r("li",[t._v("In "),r("strong",[t._v("Default Source Database Account Name")]),t._v(", put in a name for the Azure Cosmos DB connection that will serve as the migration source. This can be anything, and you can change it later")]),t._v(" "),r("li",[t._v("For "),r("strong",[t._v("Default Source Database Account Connection String")]),t._v(", type in the connection string for the source Azure Cosmos DB. You can find this in the Azure portal")]),t._v(" "),r("li",[t._v("Type a name for the "),r("strong",[t._v("Default Destination Database Account Name")])]),t._v(" "),r("li",[t._v("Provide the connection string for the destination Azure Cosmos DB account in "),r("strong",[t._v("Default Destination Database Account Connection String")])]),t._v(" "),r("li",[t._v("In the "),r("strong",[t._v("Allowed Users field")]),t._v(', provide a user that will use the migration tool. This can be an objectId or email address of a user that is in the same tenant where the application will be deployed. You can provide multiple users by separating them with the "|" character')]),t._v(" "),r("li",[t._v("Next, provide the "),r("strong",[t._v("publisher domain")]),t._v(" from the App Registration Manifest in the "),r("strong",[t._v("Aad App Registration Publisher Domain field")])]),t._v(" "),r("li",[t._v("Finally, in the "),r("strong",[t._v("Aad App Registration Client ID field")]),t._v(", put in the "),r("strong",[t._v("Application (client) ID")]),t._v(" from the App registration")]),t._v(" "),r("li",[t._v("Click "),r("strong",[t._v("Review + create")]),t._v(" and then "),r("strong",[t._v("Create")]),t._v(" to deploy the migration tool")])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/118register3.png")}}),t._v(" "),r("p",[t._v("(Deploy the migration tool)")])])]),t._v(" "),r("p",[t._v("The migration tool will deploy several resources. This includes an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service Web App"),r("OutboundLink")],1),t._v(" that runs the UI for the tool. Find the Web App in the Azure portal and open the UI in a browser. The URL will use the name that you provided earlier. So, in my case, it is https://tips01-ui.azurewebsites.net")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("To start creating a migration, click "),r("strong",[t._v("Create")])])]),t._v(" "),r("li",[r("p",[t._v("Now fill in the source and destination details")]),t._v(" "),r("ol",[r("li",[t._v("For source and destination, provide the "),r("strong",[t._v("Azure Cosmos DB database name")]),t._v(" in the "),r("strong",[t._v("DB")]),t._v(" field")]),t._v(" "),r("li",[t._v("Fill in the database "),r("strong",[t._v("Container")]),t._v(" name")]),t._v(" "),r("li",[t._v("Provide the "),r("strong",[t._v("Partition key")]),t._v(" for the source and destination")]),t._v(" "),r("li",[t._v("Click "),r("strong",[t._v("Create / Start")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/118createmigration.png")}}),t._v(" "),r("p",[t._v("(Create a new migration)")])]),t._v(" "),r("li",[r("p",[t._v("You can watch the progress of any open migrations by clicking on the "),r("strong",[t._v("List")]),t._v(" menu and refreshing your browser")])]),t._v(" "),r("li",[r("p",[t._v("When all documents are migrated, click "),r("strong",[t._v("Complete")]),t._v(" to mark the migration as finished")])])]),t._v(" "),r("img",{attrs:{src:t.$withBase("/files/118result.png")}}),t._v(" "),r("p",[t._v("(Complete the migration)")]),t._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),r("p",[t._v("Migrating data between "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB"),r("OutboundLink")],1),t._v(" containers can be difficult. The "),r("a",{attrs:{href:"https://github.com/Azure-Samples/azure-cosmosdb-live-data-migrator?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Cosmos DB live data migrator tool"),r("OutboundLink")],1),t._v(" helps to create and manage migrations. Go and check it out!")])])}),[],!1,null,null,null);e.default=a.exports}}]);