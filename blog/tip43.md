---
type: post
title: "Tip 43 - Working with Azure Logic App using Visual Studio 2017"
excerpt: "Learn how to use Visual Studio 2017 to work with Azure Logic App"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-31 17:00:00
---

::: tip
:bulb: Learn more : [Azure Logic Apps Documentation](https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-azureappsdev).

:tv: Watch the video : [How to work with Azure Logic App using Visual Studio 2017](https://www.youtube.com/watch?v=blX-xpN8jFQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=35?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Working with Azure Logic App using Visual Studio 2017

A great tip that I remember learning from [Jeff Hollan](https://twitter.com/jeffhollan?lang=en?WT.mc_id=twitter-azuredevtips-azureappsdev) is that folks can work with Logic Apps with Visual Studio. I'm going to use Visual Studio 2017 but previous version work as well. 

Fire up Visual Studio 2017 and select **File** -> **New Project** -> **Cloud** -> **Resource Group**

<img :src="$withBase('/files/vs2017logicapp1.png')">

Give it a name and then you'll need to choose a template. Scroll down until you see **Logic App**. 

<img :src="$withBase('/files/vs2017logicapp2.png')">

Once everything spins up, you'll notice you have the following file structure in Visual Studio. 

<img :src="$withBase('/files/vs2017logicapp3.png')">

* Deploy-AzureResourceGroup.ps1 - Is a PowerShell deployment script for the Logic App
* LogicApp.json - This is where your main logic for your Logic App Lives
* LogicApp.parameters.json - The parameters file that you'll mostly want to leave alone

If you click on the **LogicApp.json** you'll see the code and a **JSON Outline** in Visual Studio and you could begin hand coding your app, but I'd rather use a designer. Go ahead and go to **Tools** and **Extensions** and search for **Logic Apps** and press **Download**. 

<img :src="$withBase('/files/vs2017logicapp4.png')">

A VSIX installer will appear after you close out of Visual Studio and just follow the steps to install it. 

<img :src="$withBase('/files/vs2017logicapp5.png')">

Now you can right click your **LogicApp.json** and have the ability to open it with the Designer! 

<img :src="$withBase('/files/vs2017logicapp6.png')">

You'll need an internet connection and it will prompt you to log in. 

<img :src="$withBase('/files/vs2017logicapp7.png')">

Bingo! Now you're cooking with Fire! You can work with the designer just like you did in the Azure Portal. 
