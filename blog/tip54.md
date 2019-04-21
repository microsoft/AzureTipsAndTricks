---
type: post
title: "Tip 54 - Getting a .NET Core WebAPI Project Ready for Docker"
excerpt: "Learn how to get a .NET Core WebAPI Project ready for docker"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-20 17:00:00
---


#### Getting a .NET Core WebAPI Project Ready for Docker

How hard do you think it is to:

* [Today - Create and Publish a .NET Core WebAPI project](https://microsoft.github.io/AzureTipsAndTricks/blog/tip54.html?WT.mc_id=github-azuredevtips-micrum)
* [Add it to a Docker Container using Docker Compose and push it to a Docker Hub](https://microsoft.github.io/AzureTipsAndTricks/blog/tip55.html?WT.mc_id=github-azuredevtips-micrum)
* [Use it in Azure with Web App for Containers](https://microsoft.github.io/AzureTipsAndTricks/blog/tip56.html?WT.mc_id=github-azuredevtips-micrum)

In this mini-series, we'll cover each part starting with creating and publishing a .NET Core WebAPI project. Tomorrow, we'll use Docker Compose to create an image and push it to Docker Hub and we'll wrap up by deploying it to Azure using Web App for Containers. 

#### Create a .NET Core WebAPI Project

Ensure [.NET Core](https://www.microsoft.com/net/learn/get-started/windows?WT.mc_id=microsoft-azuredevtips-micrum) is installed and then follow the direction below: 

Create a directory on your HDD `mkdir mbcwebapi`. Now `cd mbcwebapi` into it. 

Create another directory inside your mbcwebapi folder `mkdir mbcwebapi`. Now `cd mbcwebapi` into it. 

Run `dotnet new webapi` to scaffold a new ASP.NET WebAPI Project. 


```text
Michaels-MacBook-Pro:mbcwebapi mbcrump$ dotnet new webapi
The template "ASP.NET Core Web API" was created successfully.
This template contains technologies from parties other than Microsoft, see https://aka.ms/template-3pn for details.

Processing post-creation actions...
Running 'dotnet restore' on /Users/mbcrump/mbcwebapi/mbcwebapi.csproj...
  Restoring packages for /Users/mbcrump/mbcwebapi/mbcwebapi.csproj...
  Restore completed in 35.83 ms for /Users/mbcrump/mbcwebapi/mbcwebapi.csproj.
  Generating MSBuild file /Users/mbcrump/mbcwebapi/obj/mbcwebapi.csproj.nuget.g.props.
  Generating MSBuild file /Users/mbcrump/mbcwebapi/obj/mbcwebapi.csproj.nuget.g.targets.
  Restore completed in 1.96 sec for /Users/mbcrump/mbcwebapi/mbcwebapi.csproj.

Restore succeeded.
```
If you use `dotnet run` then you'll have a URL that you can paste into your browser. 

<img :src="$withBase('/files/webapiazure1.png')">

Add `http://localhost:5000/api/values` to see a response from the WebAPI, otherwise the site will 404. 

<img :src="$withBase('/files/webapiazure2.png')">

You should see `["value1","value2"]`. Nice! It is working properly!

#### Publish the .NET Core WebAPI

The `dotnet publish` command packs the application and its dependencies into a folder for deployment to a hosting system. We are going to prep our project for Docker, so use `dotnet publish -c Release -o ./obj/Docker/publish`. 

```text
Michaels-MacBook-Pro:mbcwebapi mbcrump$ dotnet publish -c Release -o ./obj/Docker/publish
Microsoft (R) Build Engine version 15.3.409.57025 for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  mbcwebapi -> /Users/mbcrump/mbcwebapi/bin/Release/netcoreapp2.0/mbcwebapi.dll
  mbcwebapi -> /Users/mbcrump/mbcwebapi/obj/Docker/publish/
Michaels-MacBook-Pro:mbcwebapi mbcrump$ 
```

If you navigate to the /obj/Docker/publish folder, then you will see our WebAPI is packaged and ready for deployment. 

```text
11/19/2017  12:12 PM               178 appsettings.Development.json
11/19/2017  12:12 PM               228 appsettings.json
11/19/2017  12:41 PM           284,199 mbcwebapi.deps.json
11/19/2017  12:41 PM             6,656 mbcwebapi.dll
11/19/2017  12:41 PM             1,312 mbcwebapi.pdb
11/19/2017  12:41 PM             2,560 mbcwebapi.PrecompiledViews.dll
11/19/2017  12:41 PM             7,680 mbcwebapi.PrecompiledViews.pdb
11/19/2017  12:41 PM               221 mbcwebapi.runtimeconfig.json
11/19/2017  12:41 PM               383 web.config
```
