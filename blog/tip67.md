---
type: post
title: "Azure Tips and Tricks Part 67 - Querying documents properties with special characters in Cosmos DB"
excerpt: "Learn how to query documents properties with special characters in Cosmos DB"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-12-12 17:00:00
---


## Querying documents properties with special characters in Cosmos DB

I was working with Cosmos DB yesterday and hit the following snag that I couldn't query my document that had special characters in it. Such is an example: 

<img :src="$withBase('/files/querycosmos1.png')">

Notice the `"$type": "mytype",` has a `$` in it. 

If you head over to **Query Explorer** and try to query it using...

```text
SELECT * 
FROM testing t
WHERE t.$type = 'mytype'
```

... then you'll see the following error: 

<img :src="$withBase('/files/querycosmos2.png')">

I was able to fix this by wrapping the property inside `[]` such as...

```text
SELECT * 
FROM testing t
WHERE t["$type"] = 'mytype'
```

Now my query returned properly

<img :src="$withBase('/files/querycosmos3.png')">
