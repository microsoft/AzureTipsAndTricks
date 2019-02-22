---
type: post
title: "Tip 7 - Use the Table Parameter in the Azure CLI"
excerpt: "Learn how to use the table parameter in the Azure CLI"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-08-29 17:00:00
---


By default the Azure CLI 2.0 returns results from a command in JSON. You can easily modify this by adding `--output Table`. Try out the command found in the Gif below with `az vm image list-publishers --location NorthCentralUS --output Table`

<img :src="$withBase('/files/azuretip7.gif')">
