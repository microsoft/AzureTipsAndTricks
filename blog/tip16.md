---
type: post
title: "Tip 16 - Deploy Jekyll Site Hosted on GitHub Pages to Azure"
excerpt: "Learn how to quickly deploy a Jekyll based site hosted on GitHub Pages to Azure"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-13 17:00:00
---

#### Deploy Jekyll Site Hosted on GitHub to Azure

If you have already have an existing [Jekyll](https://jekyllrb.com/) based site that is hosted on GitHub, you can easily deploy that site to [Azure App Services](https://azure.microsoft.com/services/app-service/web?WT.mc_id=azure-azuredevtips-micrum). 

But why? If [GitHub Pages](https://pages.github.com/) is free, then why pay?

* You might want to push your site to a private repo (instead of public)
* Setting up "real" SSL, compared to the [workarounds](https://css-tricks.com/switching-site-https-shoestring-budget/) (see comments)
* Taking advantage of [deployment slots](https://docs.microsoft.com/azure/app-service-web/web-sites-staged-publishing?WT.mc_id=docs-azuredevtips-micrum). 

I'm sure there are more, but those are top of mind for me. 

#### Let's begin
I'm assuming you already have a GitHub Pages site that uses Jekyll hosted on GitHub. If that is true, then the first thing that you'll want to do is grab these three files. 

* [deploy.cmd](https://github.com/mbcrump/mbcrump.github.io/blob/master/deploy.cmd?WT.mc_id=github-azuredevtips-micrum) - is a [Kudu](https://github.com/projectkudu/kudu?WT.mc_id=github-azuredevtips-micrum) Deployment script that handles setup and deployment of the web site and ensures Ruby is installed
* [getruby.cmd](https://github.com/mbcrump/mbcrump.github.io/blob/master/getruby.cmd?WT.mc_id=github-azuredevtips-micrum) - is a site that ensure the latest version of Ruby is installed and ensures Jekyll has been built
* [.deployment](https://github.com/mbcrump/mbcrump.github.io/blob/master/.deployment?WT.mc_id=github-azuredevtips-micrum) - is a configuration file  that Kudu understands that calls the `deploy.cmd` script
* [Gemfile](https://github.com/mbcrump/mbcrump.github.io/blob/master/Gemfile?WT.mc_id=github-azuredevtips-micrum) - you probably already have this but ensure it is there and if not then just copy mine. 

***Thanks goes to [Khalid Abuhakmeh](https://github.com/khalidabuhakmeh?WT.mc_id=github-azuredevtips-micrum) for writing the scripts***

Once you have these three files, ensure they are in the root of your public GitHub pages site (ex. something.github.io)

You'll want to go inside of your **Azure Portal** (or use the CLI tools) and create an **App Service** -> **Web App**. Once the site is deployed, then go to **Deployment Options** and select GitHub, your project and press OK. 

<img :src="$withBase('/files/azuretip16.gif')">

You should see "Settup up Deployment Source..." in the notification windows. You'll probably want to wait a good 15 to 20 minutes for Azure to setup everything. You can stay on the **Deployment Options** blade and you should  see the status of the deployment. 

<img :src="$withBase('/files/fetchanddeploy.png')">

After a while you see a check mark that it completed successfully. Now you can navigate to the URL listed on the **Overview** blade. 
