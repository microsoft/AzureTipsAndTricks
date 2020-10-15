---
type: post
title: "Tip 46 - Run an app inside a Container Image with Docker"
excerpt: "Learn how to create an app that runs inside a container image with Docker"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-06 17:00:00
---

::: tip
:bulb: Learn more : [Azure for Containers](https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Run an App Inside a Container Image with Docker](https://www.youtube.com/watch?v=lpr2tO-FCEw&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=37?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Containers for the rest of us

For some reason, I find containers are confusing and my goal with my [Azure Tips and Tricks](https://michaelcrump.net/azure-tips-and-tricks-complete-list/) is to try to make things easier. In this mini-series, I'll walk you through [Docker](https://www.docker.com) and how I use it with Azure. Below is a list of post that you can expect for this week. 

* [Azure Tips and Tricks Part 45 - Getting Started with Docker and Azure](tip45.html)
* [Today - Azure Tips and Tricks Part 46 - Run an app inside a Container Image with Docker](tip46.html)
* [Azure Tips and Tricks Part 47 - Creating a Container Image with Docker](tip47.html)
* [Azure Tips and Tricks Part 48 - Pushing a Container Image to a Docker Repo](tip48.html)

#### Create an app to run inside a Container Image with Docker

Let's continue where we [left off](https://microsoft.github.io/AzureTipsAndTricks/blog/tip45.html) in our last post, which showed how to get started using Docker. We're specifically looking at how I use Docker with Azure in these posts.

Begin by opening two tabs instances of either command prompt or terminal. In the right tab, enter the following command to see what docker images are available.  

```
Michaels-MacBook-Pro:~ mbcrump$ docker images
REPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE
microsoft/aspnetcore-build   latest              c0c285a7a306        39 hours ago        1.85GB
```

Let's run the following command passing the `run` parameter, an `interactive terminal` and `naming` our app and the `image id` which the first couple of letters (found with the above command) is good enough. 

After this command executes, I'll be inside my container. 

    docker run -it --name myapp c0

I can validate this by running `dotnet --info` 

```
root@40bac5113803:/# dotnet --info
.NET Command Line Tools (2.0.2)

Product Information:
 Version:            2.0.2
 Commit SHA-1 hash:  a04b4bf512

...
```

I know this because I don't have dotnet core tools installed on my Mac. Very cool! You now have a running container that has the dotnet core tools with just a couple of commands. 

<img :src="$withBase('/files/dockerazure6.png')">

We could further validate this by running `uname -r` or just `uname`. 

```
root@40bac5113803:/# uname -r
4.9.49-moby
root@40bac5113803:/# uname
Linux
```

Let's go ahead and create an app. Run through the following commands to create a new `dotnet core console app`. 

root@40bac5113803:~# `mkdir myapp`

root@40bac5113803:~# `cd myapp`

root@40bac5113803:~/myapp# `dotnet new console`

root@40bac5113803:~/myapp# `dotnet restore`

root@40bac5113803:~/myapp# `dotnet run`

Hello World!

<img :src="$withBase('/files/dotnetazure7.png')">
