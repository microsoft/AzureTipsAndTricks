---
type: post
title: "Azure Tips and Tricks Part 35 - Work with the Azure Functions File System using the Console"
excerpt: "Learn how to quickly rename Azure functions using the Azure Portal Console"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-17 17:00:00
---


## Work with the Azure Functions File System using the Console

I debated writing this one, but have seen a lot of folks struggling with files and folders while using Azure Functions. The most common question being, "How do I rename my Function?" as shown below.

<img :src="$withBase('/files/azfunc1.png')">

My preferred method for this type of task is working with the Azure Portal Console. You can access it by clicking on the name of your Azure Functions (You may have to click on **Platform features** and looking for **Development Tools** then **Command** as shown below.

<img :src="$withBase('/files/azfunc2.png')">

Now that we have a **Command Prompt**, we should see the following: 

```text
> dir
D:\home\site\wwwroot
Volume in drive D is Windows
 Volume Serial Number is FE33-4717

 Directory of D:\home\site\wwwroot

06/02/2017  02:49 PM    <DIR>          .
06/02/2017  02:49 PM    <DIR>          ..
06/02/2017  06:01 PM                28 host.json
06/02/2017  02:49 PM    <DIR>          TimerTriggerCSharp1
06/02/2017  08:40 PM    <DIR>          TriggerICS
               1 File(s)             28 bytes
               4 Dir(s)  5,497,557,942,272 bytes free
```

We will rename the **TimerTriggerCSharp1** to something more meaningful by typing the following:

`ren TimerTriggerCharp1 MyAwesomeNewTriggerName`

You'll need to refresh the Azure Portal and you can see that the name changed. 

<img :src="$withBase('/files/azfunc3.png')">
