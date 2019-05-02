---
type: post
title: "Tip 70 - Key Phrase Extraction with Cognitive Service and Azure"
excerpt: "Learn how to access text analysis with Cognitive Service and Azure"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-18 17:00:00
---

::: tip
:bulb: Learn more : [Azure Cognitive Services](https://docs.microsoft.com/azure/cognitive-services?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Key Phrase Extraction with Cognitive Service and Azure

I recently took a look at Text Analysis that was introduced with Cognitive Services and is now inside the Azure portal. If you open the Azure portal and look for **AI and Cognitive Services** then you'll see the following:

<img :src="$withBase('/files/aicog1.png')">

Let's give **Text Analysis** a spin. Open the blade and fill out the following info. Be sure to select the **Free** tier (F0) as shown below:

<img :src="$withBase('/files/aicog2.png')">

Select **Keys** and copy the value of Key 1. 

<img :src="$withBase('/files/aicog3.png')">

We'll use [Postman](https://www.getpostman.com/) to test. Go ahead and download it if you haven't already and once complete you'll use one of the following endpoints depending on what you want to use. 

```text
https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment
https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases
https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/languages
```

We'll use the  **keyPhrases** endpoint for learning purposes. 

**What are Key Phrases?** They automatically extract key phrases to quickly identify the main points. 


Copy the `https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases` url into Postman and set the following three header properties:

* Ocp-Apim-Subscription-Key = should be your Key 1 (from our discussion earlier). 
* Content-Type = Set it to application/json.
* Accept = Set it to application/json.

Your screen should look like the following: 

<img :src="$withBase('/files/aicog4.png')">

Now switch over to **Body**, then **Raw** and post the following JSON (from some of my recent tweets):

```json
{
        "documents": [
            {
                "language": "en",
                "id": "1",
                "text": "Top 10 .NET Development Tweets that Broke the Web in 2017 - http://mcrump.me/2ot58Co  #dotnet"
            },
            {
                "language": "en",
                "id": "2",
                "text": "Setting up a managed container cluster with AKS and Kubernetes in the #Azure Cloud running .NET Core in minutes - http://mcrump.me/2op9mek  #dotnet"
            }
        ]
}
```

<img :src="$withBase('/files/aicog5.png')">

Now press **Send** and it will return key phrases from my tweets.

```json
{
    "documents": [
        {
            "keyPhrases": [
                "Web",
                ".NET Development Tweets",
                "dotnet"
            ],
            "id": "1"
        },
        {
            "keyPhrases": [
                "Kubernetes",
                "Azure Cloud",
                "minutes -",
                "AKS",
                ".NET Core"
            ],
            "id": "2"
        }
    ],
    "errors": []
}
```
