---
type: post
title: "Tip 96 - Getting up and started with Azure IoT MXChip"
excerpt: "Learn how to get up and running with Azure IoT MXChip"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2018-02-21 17:00:00
---

::: tip
:bulb: Learn more : [Azure IoT Hub Overview](https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Getting up and running with Azure IoT MXChip

I recently was given an Azure IoT DevKit that included the new [MXChip](http://mxchip.com/az3166). The chip is very impressive and while it supports a lot of amazing features, the following caught my eyes:

* OLED,128×64
* 2 user button
* Motion sensor
* Magnetometer sensor
* Atmospheric pressure sensor
* Temperature and humidity sensor

On first boot, it wanted me to configure my Wifi. Since it automatically creates an AP, I was able to use my iPhone to connect to the MXChip's AP and enter my home network for it to connect to. 

<img :src="$withBase('/files/iotdevkit1.png')">

<img :src="$withBase('/files/iotdevkit2.png')">

<img :src="$withBase('/files/iotdevkit3.png')">

Great! It now reboots and I'm on my home WiFi. 

**Note** It can only store one WiFi profile, so if you take it into your office and bring it back home then you'll be configuring it a lot. 
{: .btn .btn--success} 

Next up was noticing that my firmware needed to be upgraded. Thankfully this is as simply as [navigating to this page](https://microsoft.github.io/azure-iot-developer-kit/docs/firmware-upgrading/) and placing the files on the root of the MXChip once you plug it into your USB port. 

<img :src="$withBase('/files/iotdevkit4.png')">

<img :src="$withBase('/files/iotdevkit5.png')">

Now you probably want to test your device by pressing the **B** button. This cycles through various features of the device as shown below. 

<img :src="$withBase('/files/iotdevkit6.png')">

<img :src="$withBase('/files/iotdevkit7.png')">

Now all that is left to do is to download a script that installs all necessary files along with VS Code. If you already have some of them installed, the script will can and skip them.

Get it here for [Windows](https://aka.ms/devkit/prod/installpackage/latest?WT.mc_id=akams-azuredevtips-micrum) or [Mac](https://aka.ms/devkit/prod/installpackage/mac/latest?WT.mc_id=akams-azuredevtips-micrum)

It contains the following: 

* Node.js and Yarn: Runtime for the setup script and automated tasks.
* Azure CLI 2.0 MSI - Cross-platform command-line experience for managing Azure resources. The MSI contains dependent Python and pip.
* Visual Studio Code (VS Code): Lightweight code editor for DevKit development.
* Visual Studio Code extension for Arduino: Extension that enables Arduino development in Visual Studio Code.
* Arduino IDE: The extension for Arduino relies on this tool.
* DevKit Board Package: Tool chains, libraries, and projects for the DevKit
* ST-Link Utility: Essential tools and drivers.

That's it. Now you can begin working with a project [here](https://microsoft.github.io/azure-iot-developer-kit/docs/projects/). 
