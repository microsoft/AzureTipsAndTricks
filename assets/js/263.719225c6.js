(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{620:function(e,t,r){"use strict";r.r(t);var a=r(43),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"https://github.com/microsoft/azuretipsandtricks",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/purview/overview/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Purview Overview"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://youtu.be/Kteh9cXkHIE?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure Purview"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"how-to-get-started-with-azure-purview"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-started-with-azure-purview"}},[e._v("#")]),e._v(" How to get started with Azure Purview")]),e._v(" "),r("h4",{attrs:{id:"keep-track-of-your-data-landscape"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keep-track-of-your-data-landscape"}},[e._v("#")]),e._v(" Keep track of your data landscape")]),e._v(" "),r("p",[e._v("It is hard to keep track of all your data. You want to know where data is, and if it contains sensitive information. And you want to know where you data is coming from and how it is being transformed and by whom. "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/purview/overview/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Purview"),r("OutboundLink")],1),e._v(" enables you to manage your data, wherever it is stored, including on-premises and in other clouds. Purview can automatically discover data and classify it, so that you know what is in it.")]),e._v(" "),r("p",[e._v("In this post, we'll get started with "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/purview/overview/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Purview"),r("OutboundLink")],1),e._v(" by creating a new Azure Purview account, and coupling and scanning a data source.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("An "),r("a",{attrs:{href:"https://azure.microsoft.com/services/sql-database/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database"),r("OutboundLink")],1),e._v(" in Azure. You can follow "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-sql/database/single-database-create-quickstart?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("this quickstart"),r("OutboundLink")],1),e._v(" to create one")])]),e._v(" "),r("h4",{attrs:{id:"create-and-use-an-azure-purview-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-and-use-an-azure-purview-account"}},[e._v("#")]),e._v(" Create and use an Azure Purview account")]),e._v(" "),r("p",[e._v("Let's start by creating an Azure Purview account in the Azure portal.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("li",[r("p",[e._v("Search for "),r("strong",[e._v("purview")]),e._v(', select the "Azure Purview" result and click '),r("strong",[e._v("Create")]),e._v(". This shows the "),r("strong",[e._v("Create Purview Account")]),e._v(" blade")]),e._v(" "),r("ol",[r("li",[e._v("Select a "),r("strong",[e._v("Resource Group")])]),e._v(" "),r("li",[e._v("Give the Purview account a "),r("strong",[e._v("Name")])]),e._v(" "),r("li",[e._v("Pick a "),r("strong",[e._v("location")])]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Next: Networking")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116create0.png")}}),e._v(" "),r("p",[e._v("(Create an Azure Purview account in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("You can connect to Azure Purview with a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/private-link/private-endpoint-overview?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Private endpoint"),r("OutboundLink")],1),e._v(" to make it more secure. Leave it set to "),r("strong",[e._v("All networks")]),e._v(" and select "),r("strong",[e._v("Next: Configuration")])]),e._v(" "),r("li",[e._v("In the configuration blade, you can manage the platform size and catalog capabilities of the Purview account. Leave the "),r("strong",[e._v("Platform size")]),e._v(" to "),r("strong",[e._v("4 capacity units")]),e._v(" and select "),r("strong",[e._v("Review + Create")]),e._v(" and then "),r("strong",[e._v("Create")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116create1.png"),width:"75%"}}),e._v(" "),r("p",[e._v("(Configure Platform size of the Purview account)")])])]),e._v(" "),r("p",[e._v("When the Purview account is created, navigate to it in the Azure portal. From there, you can configure access to the account and networking settings. And to use Purview, you need to open "),r("strong",[e._v("Purview Studio")]),e._v(". You can open that from the "),r("strong",[e._v("Overview blade")]),e._v(" of the Purview account.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116purviewportal.png"),width:"75%"}}),e._v(" "),r("p",[e._v("(Azure Purview Studio)")]),e._v(" "),r("p",[e._v("You can use the Purview account to track and manage your data, even when it is on-premises or in other clouds. To get started, you need to register a data source.")]),e._v(" "),r("ol",[r("li",[e._v("In Purview Studio, select the "),r("strong",[e._v("Sources menu")]),e._v(" from the left menu. This shows the data sources that are registered with Purview")]),e._v(" "),r("li",[e._v("Let's register the first data source. Click "),r("strong",[e._v("Register")]),e._v(" to get started")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116register.png"),width:"75%"}}),e._v(" "),r("p",[e._v("(Register a data source in Purview)")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("You can register all sorts of data sources in Purview. "),r("strong",[e._v("Select Azure SQL Database")]),e._v(" and click "),r("strong",[e._v("Continue")]),e._v(" "),r("ol",[r("li",[e._v("Select your "),r("strong",[e._v("Azure subscription")])]),e._v(" "),r("li",[e._v("Pick the "),r("strong",[e._v("Azure SQL Database server")]),e._v(" that contains the database you want to register")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Register")])])])]),e._v(" "),r("li",[e._v("Now that the data source is registered, you can start scanning its data. In the menu of the data source, click "),r("strong",[e._v("New scan")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116purviewportal2.png"),width:"90%"}}),e._v(" "),r("p",[e._v("(Create a new data scan in Purview Studio)")]),e._v(" "),r("ol",[r("li",[e._v("Fill in a name for the scan")]),e._v(" "),r("li",[e._v("Select the "),r("strong",[e._v("database")]),e._v(" that you want to scan")]),e._v(" "),r("li",[e._v("Leave the "),r("strong",[e._v("Credential setting")]),e._v(" as it is. And click "),r("strong",[e._v("See more")]),e._v(" to see the name of the Purview identity that needs to access the database")]),e._v(" "),r("li",[e._v("We need to grant Purview access to the database. Copy the "),r("strong",[e._v("Managed Identity Name")]),e._v(" of the Purview credential")]),e._v(" "),r("li",[e._v("Go to the Azure portal and navigate to the "),r("strong",[e._v("Azure SQL Database Server")])]),e._v(" "),r("li",[e._v("In there, navigate to the "),r("strong",[e._v("Active Directory admin setting")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Set admin")])]),e._v(" "),r("li",[e._v("Paste the "),r("strong",[e._v("Managed Identity Name")]),e._v(" in the search bar")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Select")])]),e._v(" "),r("li",[e._v("And click "),r("strong",[e._v("Save")]),e._v(" to grant the Purview identity access to the database server")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116grantaccess.png")}}),e._v(" "),r("p",[e._v("(grant access to Purview)")]),e._v(" "),r("ol",{attrs:{start:"11"}},[r("li",[e._v("Go back to Purview Studio and click "),r("strong",[e._v("Test connection")]),e._v(" in the Create Scan blade. This should result in a "),r("strong",[e._v('"Connection successful"')]),e._v(" message")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Continue")])]),e._v(" "),r("li",[e._v("Select the table(s) of the database to scan and click "),r("strong",[e._v("Continue")])]),e._v(" "),r("li",[e._v("Leave the rule set as it is. You can take a look at its details to see what this rule set will scan for. The default AzureSqlDatabase rule set scans for many things, including credit card numbers and dates of birth. Click "),r("strong",[e._v("Continue")])]),e._v(" "),r("li",[e._v("You can scan this data source on a schedule. For instance, every week. We'll do it once. Select "),r("strong",[e._v("Once")]),e._v(" and click "),r("strong",[e._v("Continue")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Save and Run")]),e._v(" to start the scan")])]),e._v(" "),r("p",[e._v("When you click on the "),r("strong",[e._v("View details")]),e._v(" link of the data source, you can see if the scan is complete. When it is, you'll also see the results of the scan. It could be that it classified some data, like credit card numbers. Now, you can analyze this information further in an analytics engine like "),r("a",{attrs:{href:"https://powerbi.microsoft.com/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Power BI"),r("OutboundLink")],1),e._v(" and see insights in Purview Studio.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/116result.png")}}),e._v(" "),r("p",[e._v("(Scan results in Purview Studio)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/purview/overview/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Purview"),r("OutboundLink")],1),e._v(" is your main entry point for managing and analyzing all of your data, regardless of where it is stored. Go and check it out!")])])}),[],!1,null,null,null);t.default=o.exports}}]);