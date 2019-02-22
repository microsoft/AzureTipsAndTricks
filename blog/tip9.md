---
type: post
title: "Tip 9 - Quickly Connect to Windows VMs with RDP"
excerpt: "Learn how to quickly connect to Windows VMs using RDP"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-03 17:00:00
---


You can quickly connect to an existing Windows Virtual Machine by navigating to the "Virtual Machine" blade in the Azure Portal. Once you are on the page, click the "Connect" button at the top of the page. It will prompt you to download an Remote Desktop Protocol (.rdp) file. After you click on it, then it will open the Remote Desktop Connection application. Windows will give you a security prompt and firewall rule which you'll need to allow. Provide your username and password and you are logged into your new Virtual Machine. 

<img :src="$withBase('/files/azuretip9.gif')">

