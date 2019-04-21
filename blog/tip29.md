---
type: post
title: "Tip 29 - Cloning Web Apps Using and Azure App Services"
excerpt: "Learn how to clone web apps using Azure App Services"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-08 17:00:00
---


#### Cloning Web Apps Using and Azure App Services

Keep in mind that this feature is only available to apps hosted on Premium App Service Plans - Thanks to **Mike Kauspedas** for reminding me! 

**Cloning** is the ability to clone an existing Web App to a newly created app that is often in a different region. This will enable customers to deploy a number of apps across different regions quickly and easily. 

**Scenario:** A company has an existing web app in **West US**, they would like to clone the app to **East US** to serve folks that live on that site with better performance such as latency. 


In order to take advantage of this, you'll need to log into your Azure account and go to your App Service that you created and look under **Development Tools** then you will see **Clone App**. Open it and you'll see the following: 

<img :src="$withBase('/files/cloneazure1.png')">

Ensure you give it an:

* App Name - something unique as this site will live in something.azurewebsites.net
* Resource Group - Create a new one or use an existing on
* Give it a App Service Plan/Location - This is a good time to associate a new plan that will determine the location, features, cost and compute resources associated with your app.

**Hold Up** Besides changing the location, this is also a great time to determine the plan needed. You might not need all the horsepower to serve this site if you expect very low traffic in that region. 


* Clone Settings - e clone will copy the content and certificates of your app into a newly created application. You can also copy things like **App Settings**, **Connection Strings**, **Deployment Source**, and **Custom Domains**. 

<img :src="$withBase('/files/cloneazure2.png')">

* Application Insights - You can turn it on or off to help you detech and diagnose issues with .NET apps. 

Finally, there is **Automation Options** which brings you to the [Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-template-deploy?WT.mc_id=docs-azuredevtips-micrum) templates that are so valuable.

**What is a Azure Resource Manager again?** Azure Resource Manager enables you to work with the resources in your solution as a group. You can deploy, update, or delete all the resources for your solution in a single, coordinated operation. You use a template for deployment and that template can work for different environments such as testing, staging, and production. Resource Manager provides security, auditing, and tagging features to help you manage your resources after deployment. [source](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview?WT.mc_id=docs-azuredevtips-micrum)


Once everything is setup then press **Create** and you'll see the **Deployment in Progress** begin. You can click on it while deploying to see details as shown below: 
