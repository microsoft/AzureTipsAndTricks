---
type: post
title: "Tip 45 - Getting Started with Docker and Azure"
excerpt: "Learn how to get started using Docker and Azure"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-05 17:00:00
---

::: tip
:bulb: Learn more : [Azure for Containers](https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Get Started with Docker and Azure](https://www.youtube.com/watch?v=Kx7mOgdr3Ro&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=36?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### Getting Started with Docker and Azure

#### Containers for the rest of us

For some reason, I find containers are confusing and my goal with my [Azure Tips and Tricks](https://michaelcrump.net/azure-tips-and-tricks-complete-list/) is to try to make things easier. In this mini-series, I'll walk you through [Docker](https://www.docker.com) and how I use it with Azure. Below is a list of post that you can expect for this week. 

* [Azure Tips and Tricks Part 45 - Getting Started with Docker and Azure](tip45.html)
* [Today - Azure Tips and Tricks Part 46 - Run an app inside a Container Image with Docker](tip46.html)
* [Azure Tips and Tricks Part 47 - Creating a Container Image with Docker](tip47.html)
* [Azure Tips and Tricks Part 48 - Pushing a Container Image to a Docker Repo](tip48.html)

#### Getting Started with Docker and Azure

**What is Docker?** Docker is an open-source project that automates the deployment of applications inside software containers. It automates the repetitive tasks of setting up and configuring development environments so that developers can develop. 


Head over to [Docker](https://www.docker.com/) and you'll want to download the Community Edition. Keep in mind that there are two channels. Which are the Stable and Edge version. As you can imagine, the stable build is... well... stable and the edge build is for those that want the latest bits (which may not be tested). Choose your poison. For this series, we'll use the Stable version. 

Once it has been downloaded and installed, you should see a green light that indicates that docker is running. 

<img :src="$withBase('/files/dockerazure1.png')">

You can easily verify it was installed properly by opening terminal or a command prompt and typing `docker info`.

<img :src="$withBase('/files/dockerazure2.png')">

If you would like to see version information then type `docker version`. 

<img :src="$withBase('/files/dockerazure3.png')">

Great, so now let's pull an image since it is up and running properly. Head over to [store.docker.com](http://store.docker.com) and search for aspnetcore-build. 

**Why this image?** We want to run an ASP.NET Core without installing the tools, platform and SDK on my local machine. 


If you search for `aspnetcore-build` then you'll land on this [page](https://store.docker.com/community/images/microsoft/aspnetcore-build). Pay close attention to the following command (highlighted below) that we'll use to copy into our terminal/command prompt to pull down the image. 

Note the structure of the command - `docker pull microsoft/aspnetcore-build`. If you're familiar with git, then this syntax feels right at home. You can also type `docker help` for a full list of commands. 

<img :src="$withBase('/files/dockerazure4.png')">

You'll see Docker pulled the image from Docker Store, and when it completes, you can type `docker images` to list all the images available to use. 

<img :src="$withBase('/files/dockerazure5.gif')">

```
Michaels-MacBook-Pro:~ mbcrump$ docker images
REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
microsoft/aspnetcore-build   latest              c0c285a7a306        37 hours ago        1.85GB
```
