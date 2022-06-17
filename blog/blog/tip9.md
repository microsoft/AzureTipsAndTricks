---
type: post
title: "Tip 9 - Quickly Connect to Windows VMs with RDP"
excerpt: "Learn how to quickly connect to Windows VMs using RDP"
tags: [Virtual Machines]
date: 2017-09-03 17:00:00
---

::: tip
:bulb: Learn more : [Azure Virtual Machines](https://docs.microsoft.com/azure/virtual-machines/?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Quickly Connect to Windows VMs Using RDP](https://www.youtube.com/watch?v=RXS9F7yy4A8&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=7?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### Quickly Connect to Windows VMs with RDP

You can quickly connect to an existing Windows Virtual Machine by navigating to the "Virtual Machine" blade in the Azure Portal. Once you are on the page, click the "Connect" button at the top of the page. It will prompt you to download an Remote Desktop Protocol (.rdp) file. After you click on it, then it will open the Remote Desktop Connection application. Windows will give you a security prompt and firewall rule which you'll need to allow. Provide your username and password and you are logged into your new Virtual Machine. 

<img :src="$withBase('/files/azuretip9.gif')">

That was easy!

