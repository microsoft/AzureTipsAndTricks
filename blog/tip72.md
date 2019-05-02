---
type: post
title: "Tip 72 - Sentiment Analysis with Cognitive Service and Azure"
excerpt: "Learn how to access text analysis such as sentiment analysis with Cognitive Service and Azure"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-20 17:00:00
---

::: tip
:bulb: Learn more : [Azure Cognitive Services](https://docs.microsoft.com/azure/cognitive-services?WT.mc_id=docs-azuredevtips-micrum).
:::

#### Sentiment Analysis with Cognitive Service and Azure

After reviewing the [Text Analysis API](https://docs.microsoft.com/en-us/azure/cognitive-services/text-analytics/overview?WT.mc_id=docs-azuredevtips-micrum), I noticed three capabilities that I wanted to take a further look at: 

* [This post - Sentiment Analysis](tip72.html) - Find out what customers think of your brand or topic by analyzing raw text for clues about positive or negative sentiment. 
* [Key Phrase Detection](tip70.html) - Automatically extract key phrases to quickly identify the main points. 
* [Language Detection](tip71.html) - For up to 120 languages, detect which language the input text is written in and report a single language code for every document submitted on the request. 

In this post, we'll look at sentiment analysis which is part of Cognitive Services and is now inside the Azure portal. 

If you open the Azure portal and look for **AI and Cognitive Services** then you'll see the **Text Analysis API** that we worked with the past couple of days and we'll continue using it today. Open the blade and fill out the following info if you didn't do this yesterday. Be sure to select the **Free** tier (F0) as shown below:

<img :src="$withBase('/files/aicog2.png')">

Select **Keys** and copy the value of KEY 1 if you don't already have this. 

<img :src="$withBase('/files/aicog3.png')">

#### Working with Sentiment Analysis and Postman

We need an endpoint to begin calling the API, if you look at the **Overview** option inside your cognitive service, then you'll see the following: 

<img :src="$withBase('/files/aicog6.png')">

While that is the endpoint, it is missing the feature of the Text Analysis that you might want to call. A complete list is below:  

```text
sentiment
keyPhrases
languages
```

We want to use the **sentiment** endpoint for this tutorial. 

**What is sentiment analysis?** Find out what customers think of your brand or topic by analyzing raw text for clues about positive or negative sentiment. This API returns a sentiment score between 0 and 1 for each document, where 1 is the most positive.


Copy the `https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment` url into Postman and set the following three header properties:

* Ocp-Apim-Subscription-Key = should be your Key 1 (from our discussion earlier). 
* Content-Type = Set it to `application/json`.
* Accept = Set it to `application/json`.

Your screen should look like the following: 

<img :src="$withBase('/files/aicog9.png')">

Now switch over to **Body**, then **Raw** and post the following JSON:

```json
 {
        "documents": [
            {
                "language": "en",
                "id": "1",
                "text": "How to become master writing C# code - http://mcrump.me/2oLeg5i  #dotnet #csharp"
            },
            {
                "language": "en",
                "id": "2",
                "text": "#Azure Tips and Tricks Part 71 - Language Detection with Cognitive Service and Azure."
            },
            {
                "language": "en",
                "id": "3",
                "text": "Deploy http://ASP.NET  Core apps to #Azure - Day 16 - 24 days of Front-end Development with http://ASP.NET  Core, #Angular, and Bootstrap - http://mcrump.me/2Be9vqY  #aspnet #webdev #javascript #webdev #dotnet"
            }
        ]
    }
```

This is a couple of recent tweets from my timeline.  

<img :src="$withBase('/files/aicog10.png')">

Now press **Send** and it will return the sentiment of the text.

```json
{
  "documents": [{
    "score": 0.81279480457305908,
    "id": "1"
  }, {
    "score": 0.5,
    "id": "2"
  }, {
    "score": 0.5,
    "id": "3"
  }],
  "errors": []
}
```

Notice this API returns a sentiment score between 0 and 1 for each document, where 1 is the most positive. Keep in mind that I used some technology tweets for this tutorial, but think of using this API for customer tweets such as `I *LOVE* this hotel` or `I am not impressed with this hotel`. There are many use cases for this. Here is an example of a fictitious airlines that has a strong dislike and like. 
