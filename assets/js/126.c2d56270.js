(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{394:function(e,t,a){"use strict";a.r(t);var s=a(13),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/app-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=Wy97gLq7xZU&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=17?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Work with Extensions in Azure App Service"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"adding-extensions-to-web-apps-in-azure-app-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-extensions-to-web-apps-in-azure-app-service"}},[e._v("#")]),e._v(" Adding Extensions to Web Apps in Azure App Service")]),e._v(" "),a("p",[e._v("We've recently created a "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip19.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("web app"),a("OutboundLink")],1),e._v(" and uploaded it to Azure App Service. We also took a look at "),a("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip20.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multiple ways"),a("OutboundLink")],1),e._v(" to examine those files through the Azure portal interface. In this post, we'll take a look at extensions that you can add to Azure app services to add additional functionality.")]),e._v(" "),a("h5",{attrs:{id:"back-in-the-azure-portal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-in-the-azure-portal"}},[e._v("#")]),e._v(" Back in the Azure Portal")]),e._v(" "),a("p",[e._v("I can go to the Azure Portal and select my App Service and click on "),a("strong",[e._v("Extensions")]),e._v(" under "),a("strong",[e._v("Development Tools")]),e._v(" to get started. Then click on the "),a("strong",[e._v("Add")]),e._v(" button.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/webappext1.png")}}),e._v(" "),a("p",[e._v("In the choose extension screen, you have a vast variety of extensions to select from. Some are from MS and others are from independent authors.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/webappext2.gif")}}),e._v(" "),a("p",[e._v("Select "),a("code",[e._v("Azure Web Apps Disk Usage")]),e._v(" by Rajrang Rapuri and agree to the terms and press OK. It should only take a moment to install and then navigate back to Extensions.")]),e._v(" "),a("p",[a("strong",[e._v("What does this thing do?")]),e._v(" Azure Web Apps Disk Usage is a web based File Explorer which lists all folders for your website with size. It provides  detailed information about files and folders name, size, number of files, last date modified and percentage of disk usage. This tool provides a tree like folder view for easier parsing.")]),e._v(" "),a("p",[e._v("If you right-click on the item that you just installed, then you'll see that you can pin, browse, update or delete it.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/webappext3.png")}}),e._v(" "),a("p",[e._v("We'll select browse and it will redirect us to the extension that we installed.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/webappext4.png")}}),e._v(" "),a("p",[e._v("Cool! We're able to see the extension working.")]),e._v(" "),a("h5",{attrs:{id:"exploring-the-extension-in-the-file-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exploring-the-extension-in-the-file-system"}},[e._v("#")]),e._v(" Exploring the Extension in the File System")]),e._v(" "),a("p",[e._v("You may be wondering what happened when we clicked on the Extension. Well, if we click on the "),a("em",[e._v("Kudu Advanced Tools")]),e._v("* option in the Azure Portal, then navigate inside "),a("code",[e._v("SiteExtensions")]),e._v(" and then "),a("code",[e._v("DiskUsage")]),e._v(", then we'll see that here is where the extension was installed into.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/webappext5.png")}}),e._v(" "),a("p",[a("strong",[e._v("Source Code")]),e._v(" The source code to the extension that we installed can be found "),a("a",{attrs:{href:"https://github.com/rajkumar-rangaraj/MAWSFileExplorer?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);