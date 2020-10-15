---
type: post
title: "Tip 36 - Quickly Renew or Revoke Azure Functions Keys"
excerpt: "Learn how to quickly renew or revok Azure Functions keys using the Azure Portal"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-18 17:00:00
---

::: tip
:bulb: Learn more : [Azure Functions Documentation](https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-azureappsdev).

:tv: Watch the video : [How to renew or revoke Azure Functions keys](https://www.youtube.com/watch?v=v67yVTLEu3U&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=30?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

#### Quickly Renew or Revoke Azure Functions Keys

There are times when you've created a new Azure Function HTTP Trigger where your Function Key needs to be changed. For example, here is my Function URL: 

<img :src="$withBase('/files/funckey1.png')">

`https://mynewtestapp100.azurewebsites.net/api/HttpTriggerCSharp1?code=FJmHHtDmvqwp4wn0zXCS9J70NbakcmNDYCwM6trPOCTK3TdiCVg8pA==`

If you go to that page, you'll see the Trigger was activated as you passed the key: 

```
This XML file does not appear to have any style information associated with it. The document tree is shown below.
<string xmlns="http://schemas.microsoft.com/2003/10/Serialization/')">
Please pass a name on the query string or in the request body
</string>
```

If something happens and someone gets the key, then you should go back to your Function and click **Manage**, then press **Revoke**. Now you can quickly gneerate a new key with the **Add new function key**. You'll need to provide the name **default** and can leave the value empty. Now simply click **Save** and if you go back to  your Function and click on **Get Function URL**, then you'll notice the new key is in place. 

<img :src="$withBase('/files/funckey2.png')">
