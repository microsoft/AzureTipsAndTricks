---
type: post
title: "Tip 51 - Debug Azure Functions with Visual Studio Code"
excerpt: "Learn how to write local Azure Functions with Visual Studio Code"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-14 17:00:00
---


#### Debug Azure Functions with Visual Studio Code

Yesterday, we looked at adding an Azure Function project to Visual Studio Code in this [post](http://www.michaelcrump.net/azure-tips-and-tricks50/). Today, we'll take that same app and look at debugging it locally. 

All you need to do is to place your break point and hit F5 to start debugging. 

<img :src="$withBase('/files/azfuncdebug1.png')">

If you click on the terminal tab, then you can see what is happening behind the scenes such as: Reading the host files, starting up the node instance, and the URL that the app is running on (if you selected the HttpTrigger tempate). 

```text

> Executing task: func host start <


                  %%%%%%
                 %%%%%%
            @   %%%%%%    @
          @@   %%%%%%      @@
       @@@    %%%%%%%%%%%    @@@
     @@      %%%%%%%%%%        @@
       @@         %%%%       @@
         @@      %%%       @@
           @@    %%      @@
                %%
                %

[11/13/17 12:53:27 AM] Reading host configuration file '/Users/mbcrump/Documents/mynewfunction/host.json'
[11/13/17 12:53:27 AM] Host configuration file read:
[11/13/17 12:53:27 AM] {}
[11/13/17 12:53:27 AM]
info: Worker.Node.2e8cfb1a-5cef-47c1-b47c-0b7168edea6e[0]
      Start Process: node  --inspect=5858 "/Users/mbcrump/.azurefunctions/bin/workers/Node/dist/src/nodejsWorker.js" --host 127.0.0.1 --port 63468 --workerId 2e8cfb1a-5cef-47c1-b47c-0b7168edea6e --requestId 69492e6d-71c4-42a7-a778-8d81848dd250
info: Worker.Node.2e8cfb1a-5cef-47c1-b47c-0b7168edea6e[0]
      Debugger listening on ws://127.0.0.1:5858/ec787873-bfd8-4460-ab16-4bed4cad4d7e
info: Worker.Node.2e8cfb1a-5cef-47c1-b47c-0b7168edea6e[0]
      For help see https://nodejs.org/en/docs/inspector
[11/13/17 12:53:28 AM] Generating 1 job function(s)
[11/13/17 12:53:28 AM] Starting Host (HostId=michaelsmacbookpro-656556677, Version=2.0.11308.0, ProcessId=12876, Debug=False, Attempt=0)
Listening on http://localhost:7071/
Hit CTRL-C to exit...

Http Functions:

        HttpTriggerJS: http://localhost:7071/api/HttpTriggerJS
```

Copy the URL the app is running on and paste it in a browser and your breakpoint will fire. If you step through the breakpoint, then you'll see the function is expecting a parameter. 

<img :src="$withBase('/files/azfuncdebug2.png')">

You can look back at the terminal inside of Visual Studio Code to see the log.

```text
11/13/17 1:07:06 AM] JavaScript HTTP trigger function processed a request.
[11/13/17 1:07:06 AM] Function completed (Success, Id=0f906094-215c-4997-80ac-3f382155ab26, Duration=46547ms)
[11/13/17 1:07:06 AM] Executed 'Functions.HttpTriggerJS' (Succeeded, Id=0f906094-215c-4997-80ac-3f382155ab26)
```
