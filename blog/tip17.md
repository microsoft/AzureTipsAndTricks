---
type: post
title: "Tip 17 - Use PowerShell with Azure Cloud Shell"
excerpt: "Learn how to take advantage of PowerShell within Azure Cloud Shell"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-18 17:00:00
---

#### Use PowerShell within Azure Cloud Shell


<img :src="$withBase('/files/bashscreenshot.png')">

**PowerShell** is the other command language that the Azure Cloud Shell supports. I've recently [signed up for a preview](https://aka.ms/PSCloudSignup?WT.mc_id=akams-azuredevtips-azureappsdev) and thought I'd share.  

You can switch to PowerShell by clicking the dropdown and selecting PowerShell. 

<img :src="$withBase('/files/switchtops.png')">

This will prompt you to Restart Cloud Shell with PowerShell which will log you out of your current instance and stop any running processes. 

<img :src="$withBase('/files/restartwithps.png')">

On first launch, it'll authenticate with Azure (just like BASH does) and build your Azure drive. You now have access to all your accounts. You can run the `dir` command and see your subscriptions vs with BASH it would list out the physical files on the currently mounted drive. 

	PS Azure:\> dir

	    Directory: Azure:

	Mode SubscriptionName                     SubscriptionId                       TenantId                             State
	---- ----------------                     --------------                       --------                             -----
	+    Demo - Azure Monitoring				xxx-xxx-xxx-xxx						xxx-xxx-xxx-xxx 					Enabled


Now that I have access to my subscriptions, I can traverse the "Demo - Azure Monitor" subscription by typing `cd '.\Demo - Azure Monitoring\'`.

If I run a `dir` again, then I'd see what is included in that account. Here I see Resource Groups, Storage Accounts, VMs and Web Apps. 

	Directory: Azure:\Demo - Azure Monitoring
	
	
	Mode Name
	---- ----
	+    AllResources
	+    ResourceGroups
	+    StorageAccounts
	+    VirtualMachines
	+    WebApps

I can continue traversing this subscription by typing `cd VirtualMachines` then typing `dir`.

Directory: Azure:\Demo - Azure Monitoring\VirtualMachines


	Name                  ResourceGroupName      Location          VmSize  OsType                       NIC ProvisioningState PowerState
	----                  -----------------      --------          ------  ------                       --- ----------------- ----------
	k8s-a   APPROVAL        eastus  Standard_D2_v2   Linux  -nic-0         Succeeded    running

As you can tell, I can easily discover and navigate Azure resources now by using Powershell. 

The other nice thing that I've seen while playing with PowerShell is the ability to run modules such as the ones found in Microsoft.PowerShell. For instance we can use `Get-Date` as described [here](https://docs.microsoft.com/powershell/module/microsoft.powershell.utility/get-date?view=powershell-5.1?WT.mc_id=docs-azuredevtips-azureappsdev) inside of Cloud Shell. 

	PS Azure:\> Get-Date
	
	Monday, September 18, 2017 11:02:49 PM
