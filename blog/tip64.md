---
type: post
title: "Tip 64 - Using a different route prefix with Azure Functions"
excerpt: "Learn how to use a different route prefix with Azure Function"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-06 17:00:00
---

::: tip
:bulb: Learn more : [Azure Functions Documentation](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev).
:::

#### Using a different route prefix with Azure Functions

Sometimes you have the requirement to use a different route prefix than the one that Azure Functions auto-generates

For example: `https://mynewapimc.azurewebsites.net/api/HttpTriggerCSharp1` uses `api` before the function name. You might want to either remove `api` or change it to another name. 

I typically fix this by going into the Azure Portal and clicking on my Azure Function. I then click on **Platform Features** and **Advanced tools(Kudu)**. 

<img :src="$withBase('/files/azfunckudu1.png')">

I then navigate to `wwwroot` and hit edit on the `host.json` file. 

<img :src="$withBase('/files/azfunckudu2.png')">

Inside the editor, add the `routePrefix` to define the route prefix. So if I wanted the route prefix to be blank, then I'd `use the following:

```json
{
  "http": {
    "routePrefix": ""
  }
}
```

Simply restart your Azure Function and now my URL is accessable without `api`.

<img :src="$withBase('/files/azfunckudu3.png')">

On the flip side, if you wanted a route prefix, then I'd just add the following

```json
{
  "http": {
    "routePrefix": "myroute"
  }
}
```

<img :src="$withBase('/files/azfunckudu4.png')">

