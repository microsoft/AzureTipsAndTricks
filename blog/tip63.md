---
type: post
title: "Azure Tips and Tricks Part 63 - Open an existing Azure Function in Visual Studio"
excerpt: "Learn how to open an existing Azure Function in Visual Studio"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-05 17:00:00
---


## Open an existing Azure Function in Visual Studio

I recently wanted to modify an existing Azure Function in Visual Studio 2017 and noticed this is very straightforward. Simply log into the portal and select your Azure Function, go to **Overview** and then click on **Download app content** as shown below: 

<img :src="$withBase('/files/azvsblog1.png')">

You'll want to select the **Content and Visual Studio Project** as well as **Include app settings in the download**

<img :src="$withBase('/files/azvsblog2.png')">

**What is app settings?** This will include a `local.settings.json file which contains your application settings. 
{: .notice--primary}

Here is the content of my downloaded zip file. 

**What about third party .dlls?** Yep, they are included. 
{: .notice--primary}

<img :src="$withBase('/files/azvsblog3.png')">

If you open Visual Studio, you can select the folder and begin working: 

<img :src="$withBase('/files/azvsblog4.png')">

From here, I'd probably setup continuous deployment through pushing the code to GitHub and using the **Deployment options** found inside **Platform features** in the Azure portal. 

<img :src="$withBase('/files/azvsblog5.png')">

**What about C# projects?** You will get a .csproj file in the output folder along with C# scripts (csx files). 
{: .notice--primary}
