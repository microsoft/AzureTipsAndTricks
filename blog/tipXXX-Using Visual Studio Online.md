---
type: post
title: "Tip XXX - Using Visual Studio Online"
excerpt: "Use Visual Studio Online to build, run, and debug a Node.js app from within a browser"
tags: [azure, vscode, vsonline]
share: true
date: 2020-02-19 02:00:00
---

::: tip 

:unicorn: Follow me on [Twitter](https://twitter.com/intent/follow?screen_name=mbcrump) for daily software updates and a chance to get **FREE Azure sticker** set shipped anywhere!

:fire: Checkout our [Visual Studio Online](https://visualstudio.microsoft.com/services/visual-studio-online/?WT.mc_id=microsoft-azuredevtips-micrum) page.

:bulb: Learn more : [Visual Studio Online Extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-vsonline.vsonline).

:::

## Overview

Use Visual Studio Online to build, run, and debug a Node.js app from within a browser. In this lab, you'll learn how to create a VS Online environment from an existing GitHub repository and forward a port for local debugging.

### 1. Launch Visual Studio Online

Browse to the [Visual Studio Online](https://online.visualstudio.com/environments?WT.mc_id=other-azuredevtips-micrum). If you're prompted to sign in, contact a proctor to get you signed in.

### 2. Create a plan

A VS Online plan is required to create VS Online environments. In this lab a VS Online plan has been created for you.

### 3. Create an Environment

To create a new cloud-hosted environment in VS Online select the **Create environment** button in the VS Online management portal.

<img :src="$withBase('/files/create-env-vso-01.png')">

Complete the form with the following values:

- **Environment Name**: My Quick Environment
- **Git Repository**: microsoft/vsonline-quickstart
- **Put environment to sleep after...**: 30 minutes
- **Instance Type**: Standard Environment (Linux)

<img :src="$withBase('/files/create-quickstart-vso-02.png')">

A card with the name **My Quick Environment** will appear in the management portal with a status badge of **Creating**.

### 4. Connect To and Use the Environment

Once the green **Available** status badge appears on the environment card, click **My Quick Environment** to connect.

Once connected, open **Readme.md** from **File Explorer**, and then press [`ctrl`]+[`shift`]+[`V`] to render the markdown file.

Follow the instructions in **Readme.md** to complete the lab.
