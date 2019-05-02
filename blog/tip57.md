---
type: post
title: "Tip 57 - Docker Registry vs. Docker Repository"
excerpt: "Learn the difference between a docker registry and docker repository"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-26 17:00:00
---

::: tip
:bulb: Learn more : [Azure for Containers](https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Docker Registry vs. Docker Repository

Last week, we used [Docker Compose](https://microsoft.github.io/AzureTipsAndTricks/blog/tip55.html?WT.mc_id=github-azuredevtips-micrum) to create an image using our existing [ASP.NET WebAPI project](https://microsoft.github.io/AzureTipsAndTricks/blog/tip54.html?WT.mc_id=github-azuredevtips-micrum) and push it to Docker Cloud. I also covered deploying it to Azure using [Web App for Containers](https://microsoft.github.io/AzureTipsAndTricks/blog/tip56.html?WT.mc_id=github-azuredevtips-micrum). The bit of feedback that I feel that I didn't drive home was the difference between Docker Registry and Docker Repository. I wanted to cover that today. 

#### Docker Registry

Docker Registry is a service that **stores** your docker images, but it could be hosted by a third party and even private if you need so. A couple of examples are:

* [Azure Container Registry](https://azure.microsoft.com/en-us/services/container-registry?WT.mc_id=azure-azuredevtips-micrum)
* [Docker Hub](https://hub.docker.com/)
* [Quay Enterprise](https://coreos.com/quay-enterprise/docs/latest/)

There are also other choices such as Google or AWS Container Registry. 

#### Docker Repository

A Docker Repository is a **collection** of related images with same name, that have different tags. Tags are an alphanumeric identifier attached to images within a repository (e.g., 1.1 or latest).

So the command docker `pull microsoft/aspnetcore:latest` will download the image tagged `latest` within the `microsoft/aspnetcore` repository from the Docker Hub registry.

To wrap it up. Look at the image below. We have a Docker Repository named `microsoft/aspnetcore` that is stored in a Docker Registry using Docker Hub. 

<img :src="$withBase('/files/explaindocker1.png')">

We could click on `tags` and pull the latest version with `pull microsoft/aspnetcore:latest` or version 1.1 with `pull microsoft/aspnetcore:1.1`

<img :src="$withBase('/files/explaindocker2.png')">
