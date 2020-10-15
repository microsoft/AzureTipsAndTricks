---
type: post
title: "Tip 60 - Use Visual Studio 2017 with Docker Support"
excerpt: "Learn how to use Visual Studio 2017 with Docker Support"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-29 17:00:00
---

::: tip
:bulb: Learn more : [Azure for Containers](https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

#### Intro

I've recently covered a variety of Docker topics including:

* [Create and Publish a .NET Core WebAPI project](tip54.html)
* [Add it to a Docker Container using Docker Compose and push it to a Docker Cloud](tip55.html)
* [Use it in Azure with Web App for Containers](tip56.html)
* [Docker Registry vs. Docker Repository](tip57.html)
* [Continuous Deployment with Docker and Web App for Containers](tip58.html)

One topic that keep coming up is how do you use Visual Studio 2017 with Docker support. If you go back and read [this post](tip55.html), then  you'll see that I did everything manually on my mac, but Visual Studio 2017 makes this much easier. Let's take a look. 

#### Use Visual Studio 2017 with Docker Compose

Before we begin, make sure you have [Docker for Windows](https://store.docker.com/editions/community/docker-ce-desktop-windows) installed. 

Open Visual Studio 2017 and create a .NET Core WebAPI project. 

<img :src="$withBase('/files/azurevsdoc1.png')">

When I select **Web API**, you can click a checkbox to enable docker support. I went ahead and toggled the OS to Linux for those that wish to follow on with my existing guide using Visual Studio 2017. 

<img :src="$withBase('/files/azurevsdoc2.png')">

Look at the Solution Explorer

<img :src="$withBase('/files/azurevsdoc3.png')">

Do you remember the [three steps](tip55.html) that I used to add an ASP.NET WebAPI project to a Docker Container using Docker Cloud? If not, here they are:

1.) We need a Dockerfile for the entire to understand the image we are creating. 
2.) We need a docker-compose.yml file to pass to the Docker Compose Command
3.) We need to run the Docker Compose command. 

If you look back at the solution explorer, then you'll see there are two projects in the solution:

**A docker-compose project**

This project is going to run docker-compose to create our image and is the default startup project. It also contains the **docker-compose.yml** file that we created in Step 2. 

<img :src="$withBase('/files/azurevsdoc4.png')">

**Keep it Simple** This project takes care of steps 2 and 3 that we performed manually before.  


**A ASP.NET WebAPI project**

The Dockerfile is already created and waiting for us in the ASP.NET WebAPI project. 

<img :src="$withBase('/files/azurevsdoc5.png')">

Sweet, so what do I have to do...

<img :src="$withBase('/files/azurevsdoc6.png')">

Press **this** button. Yeah, that easy. If you look in your **Visual Studio Output** and select **Docker**, then you'll see the commands running (that we performed manually in step 3)

<img :src="$withBase('/files/azurevsdoc7.png')">

For those that want to examine the output see below: 

```
docker-compose -f "C:\Users\azureappsdev\Documents\Visual Studio 2017\Projects\mbcvswebapi\docker-compose.yml" -f "C:\Users\azureappsdev\Documents\Visual Studio 2017\Projects\mbcvswebapi\docker-compose.override.yml" -f "C:\Users\azureappsdev\Documents\Visual Studio 2017\Projects\mbcvswebapi\obj\Docker\docker-compose.vs.debug.g.yml" -p dockercompose2735583743043077288 config
services:
  mbcvswebapi:
    build:
      args:
        source: obj/Docker/empty/
      context: C:\Users\azureappsdev\Documents\Visual Studio 2017\Projects\mbcvswebapi\mbcvswebapi
      dockerfile: Dockerfile
    entrypoint: tail -f /dev/null
    environment:
      ASPNETCORE_ENVIRONMENT: Development
      DOTNET_USE_POLLING_FILE_WATCHER: '1'
      NUGET_FALLBACK_PACKAGES: /root/.nuget/fallbackpackages
    image: mbcvswebapi:dev
    labels:
      com.microsoft.visualstudio.debuggee.arguments: ' --additionalProbingPath /root/.nuget/fallbackpackages  bin/Debug/netcoreapp1.1/mbcvswebapi.dll'
      com.microsoft.visualstudio.debuggee.killprogram: /bin/bash -c "if PID=$$(pidof
        -x dotnet); then kill $$PID; fi"
      com.microsoft.visualstudio.debuggee.program: dotnet
      com.microsoft.visualstudio.debuggee.workingdirectory: /app
    ports:
    - 80/tcp
    volumes:
    - C:\Users\azureappsdev\Documents\Visual Studio 2017\Projects\mbcvswebapi\mbcvswebapi:/app:rw
    - C:\Users\azureappsdev\vsdbg:/remote_debugger:ro
    - C:\Users\azureappsdev\.nuget\packages:/root/.nuget/fallbackpackages:ro
    - C:\Users\azureappsdev\.nuget\packages:/root/.nuget/packages:ro
version: '3.0'
docker  ps --filter "status=running" --filter "name=dockercompose2735583743043077288_mbcvswebapi_" --format {{.ID}} -n 1
682958fa63f8
docker  inspect --format="{{json .NetworkSettings.Ports}}" 682958fa63f8
{"80/tcp":[{"HostIp":"0.0.0.0","HostPort":"32768"}]}
Waiting for response from http://localhost:32768/api/values ...
Launching http://localhost:32768/api/values ...
```

At this point, it has spun up a localhost and started our site. 

<img :src="$withBase('/files/azurevsdoc8.png')">

#### We can now push the image to Docker Cloud

Head back to the command prompt and enter: 

`docker login` to authenticate your account. 

`docker push mbcrump/mbcwebapi:latest` or whatever you called it in your `docker-compose.yml` to push your image to Docker Cloud. Please ensure you have a Docker repo already setup. 

You can go back to Docker Cloud to verify it pushed successfully. 

<img :src="$withBase('/files/dockerblog2.png')">

