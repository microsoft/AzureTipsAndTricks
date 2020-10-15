---
type: post
title: "Tip 53 - Prebuilt Azure VMs ready for Containers"
excerpt: "Learn how to use prebuilt azure vms with containers"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-19 17:00:00
---


#### Prebuilt Azure VMs ready for Containers

While I was at Microsoft Connect last week, I met someone who recently read my Docker Container mini-series that covered [Getting Started with Docker and Azure](https://microsoft.github.io/AzureTipsAndTricks/blog/tip45.html), [Running an app inside a Container Image with Docker](https://microsoft.github.io/AzureTipsAndTricks/blog/tip46.html), [Creating a Container Image with Docker](https://microsoft.github.io/AzureTipsAndTricks/blog/tip47.html) and [Pushing a Container Image to a Docker Repo](https://microsoft.github.io/AzureTipsAndTricks/blog/tip48.html). The question that came up was how they wish we had prebuilt Azure VMs that had container images already on them. This would save them additional time and something that they would expect. You can imagine their surprise when I told them that we had them already. In this post, we'll take a quick look at how to find them. 

Open **Virtual Machines** and click on **Add**, then search for **containers**. You may optionally want to set a filter to restrict to Windows and Linux based. 

<img :src="$withBase('/files/vmcontainer2.png')">

<img :src="$withBase('/files/vmcontainer1.png')">

From this screen, you can see a variety of Windows and Linux VMs. If I wanted a Windows VM, then I'd probably pick this one: 

<img :src="$withBase('/files/vmcontainer3.png')">

Note the following text: It includes Windows Server container images installed and ready to use with Docker.

For Linux, I might choose this one:

<img :src="$withBase('/files/vmcontainer4.png')">

Note the following text: When we started the RancherOS project, we set out to build a minimalist Linux distribution that was perfect for running Docker containers. We wanted to run Docker directly on top of the Linux Kernel, and have all user-space Linux services be distributed as Docker containers.
