---
type: post
title: "Tip 7 - Use the Table Parameter in the Azure CLI"
excerpt: "Learn how to use the table parameter in the Azure CLI"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-08-29 17:00:00
---

::: tip
:bulb: Learn more : [Azure Command-Line Interface (CLI)](https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to use the table parameter in the Azure CLI](https://www.youtube.com/watch?v=zcKTr2uQwKA&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=6?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Use the Table Parameter in the Azure CLI

By default the Azure CLI 2.0 returns results from a command in JSON. You can easily modify this by adding `--output Table`. Try out the command found in the Gif below with `az vm image list-publishers --location NorthCentralUS --output Table`

<img :src="$withBase('/files/azuretip7.gif')">
