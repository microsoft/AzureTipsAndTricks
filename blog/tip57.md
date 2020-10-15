---
type: post
title: "Tip 57 - Docker Registry vs. Docker Repository"
excerpt: "Learn the difference between a docker registry and docker repository"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-26 17:00:00
---

::: tip
:bulb: Learn more : [Azure for Containers](https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

#### Docker Registry vs. Docker Repository

We used [Docker Compose in Tip 55](tip55.html) to create an image using our existing [ASP.NET WebAPI project](tip54.html) and push it to Docker Cloud. I also covered deploying it to Azure using [Web App for Containers](tip56.html). The bit of feedback that I feel that I didn't drive home was the difference between Docker Registry and Docker Repository. I wanted to cover that in this tip.

#### Docker Registry

Docker Registry is a service that **stores** your docker images, but it could be hosted by a third party and even private if you need so. A couple of examples are:

* [Azure Container Registry](https://azure.microsoft.com/services/container-registry?WT.mc_id=azure-azuredevtips-azureappsdev)
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
