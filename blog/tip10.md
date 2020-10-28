---
type: post
title: "Tip 10 - Quickly Connect to a Linux VM with SSH"
excerpt: "Learn how to quickly connect to a Linux VM with SSH"
tags: [Virtual Machines]
date: 2017-09-04 17:00:00
---

::: tip
:bulb: Learn more : [Azure Virtual Machines](https://docs.microsoft.com/azure/virtual-machines/?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to quickly connect to a Linux VM with SSH](https://www.youtube.com/watch?v=7pmn6luCwQ4&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=8?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### Quickly Connect to a Linux VM with SSH

You can quickly connect to an existing Linux Virtual Machine by navigating to the "Virtual Machine" blade in the Azure Portal. Once you are on the page, click the "Connect" button at the top of the page. It will provide a command that you can copy and paste into BASH or anywhere that supports SSH. After you paste the command, then it will connect to your Linux Virtual Machine. Provide your username and password and you are logged into your new Virtual Machine. In the example below, I logged into my Ubuntu Linux VM. 

<img :src="$withBase('/files/azuretip10.gif')">
