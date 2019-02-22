---
type: post
title: "Tip 20 - Working with Files in Azure App Service"
excerpt: "Learn how to work with files that you've uploaded to Azure App Service"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-09-21 17:00:00
---

In the [last post](http://www.michaelcrump.net/azure-tips-and-tricks19/), we created a web app and uploaded it to Azure App Service. In this post, we'll take a look at the files uploaded and three tools that I use to work with them


I can go to the Azure Portal and select my App Service and click on **Console** under **Development Tools** to have a command prompt to quickly work with my Azure App Service. 

<img :src="$withBase('/files/myquizconsole.png')">


As you can tell from the screen-shot, I start in `D:\home\site\wwwroot`. I can type `dir` to see a current directory listing. 

```text

Volume in drive D is Windows
 Volume Serial Number is FE33-4717

 Directory of D:\home\site\wwwroot

09/21/2017  08:35 PM    <DIR>          .
09/21/2017  08:35 PM    <DIR>          ..
09/20/2017  09:03 PM    <DIR>          css
09/20/2017  09:03 PM             5,351 Default.html
09/20/2017  09:03 PM    <DIR>          js
09/20/2017  09:03 PM             1,950 jsQuizEngine.sln
09/20/2017  09:03 PM               304 jsQuizEngine.userprefs
09/20/2017  09:03 PM            31,744 jsQuizEngine.v12.suo
09/20/2017  09:03 PM    <DIR>          PrecompiledWeb
09/20/2017  09:03 PM    <DIR>          quiz
               4 File(s)         39,349 bytes
               7 Dir(s)   1,072,893,952 bytes free

```

I can do basic commands here and even use `type <filename>` to parse the output of a file to the screen. You can make directory and so forth, but keep in mind that this is a sandbox environment and some commands which require elevated permissions may not work. 


**Quick Tip** You can type `help` from the console window for a list of available commands.



##### A VS Code experience to my App Service

There is also another option that is called "**App Service Editor**" located just two items down from **"Console"** that you picked before. 

<img :src="$withBase('/files/vscodeazureexp.png')">

If you're familiar with VS Code, then you'll be right at home as you can explore, search and add to Git. You can also manipulate files from within the window. This makes it easy to add, edit or delete files. 

<img :src="$withBase('/files/manipulatefilesazure.png')">

Just like in VS Code, you can modify your settings and even change your theme. 

<img :src="$withBase('/files/vscodechangetheme.png')">

##### Kudu Diagnostic Console

No App Service tutorial is complete without mentioning Kudu Diagnostic Console. You can access it from within the **App Service Editor** under **your app name** -> **Open Kudu Console** or through the portal under **Advanced Tools**. 

<img :src="$withBase('/files/kuduportal.png')">

You can just click on the folder name to navigate or type in the command. You can also easily manipulate the files, but I like the App Service Editor better for that functionality. The main reason that I typically come to the Kudu Diagnostic Console is to download files. 

