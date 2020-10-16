---
type: post
title: "Tip 13 - Demystifying storage in Cloud Shell"
excerpt: "Understand what the Azure Cloud Shell is using storage for."
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-10 17:00:00
---

::: tip
:bulb: Learn more : [Overview of Azure Cloud Shell](https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-azureappsdev).

:tv: Watch the video : [How the Azure Cloud Shell uses storage](https://www.youtube.com/watch?v=JRvKnMqdBcY&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=11?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### What's under the hood of Azure Cloud Shell?
The [Azure Cloud Shell](https://azure.microsoft.com/features/cloud-shell?WT.mc_id=azure-azuredevtips-azureappsdev) is something that I've took for granted since it launched at Build 2017. I always knew that I could use it to run [CLI 2.0](https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-azureappsdev) commands and didn't really stop to think what is "Under the hood"... until now. 

When you first open the Cloud Shell, you will find that it requires you to create a Storage account. The reason for that Storage Account is to persist the scripts, keys, etc that you'll use over and over as you interact with your resources. 

You can find it once you go to your Resource Group and look for `cloud-shell*` as shown below. 

<img :src="$withBase('/files/cloudshell1.png')">

If you drill down into the Storage account, you'll land on two directories - `.cloudconsole` and `.pscloudshell`. More on that later. 

<img :src="$withBase('/files/cloudshell2.png')">

Open the Azure Cloud Shell inside of the portal by clicking on the icon at the top (looks like `>_`)

Keep in mind that the Cloud Shell is based off an open-source implementation of [Xterm.js](https://github.com/sourcelair/xterm.js?WT.mc_id=github-azuredevtips-azureappsdev) that emulates the terminal in your browser. It is talking over a web socket to a full Linux BASH shell. Begin by typing:

	michael@Azure:~$ ls -l
	total 0
	lrwxrwxrwx 1 root root 23 Sep 10 16:27 clouddrive -> /usr/michael/clouddrive

Great, we see a clouddrive that is mapped to /usr/michael/clouddrive

Change into that directory and list it out.

	michael@Azure:~$ cd clouddrive
	michael@Azure:~/clouddrive$ ls -l
	total 0
	michael@Azure:~/clouddrive$

Nothing there? Or is there? 

Remember the `.cloudconsole` and `.pscloudshell` directories from above?

	michael@Azure:~/clouddrive$ cd .cloudconsole
	michael@Azure:~/clouddrive/.cloudconsole$ ls
	acc_michael.img

Nice! We just found a `acc_michael.img` file. This is a 5 gig image that persist your home directory. You could have also navigated through the portal to see what was inside this directory but now you under the CLI better! For those that want an extra challenge, go to the Azure Portal and download the Image file and explore it. Feel free to post comments on what you found below. 

So what about the other file called `.pscloudshell`?  

We'll this is for the PowerShell scripting language in the Cloud Shell! 
