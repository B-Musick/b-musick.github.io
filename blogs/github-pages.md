---
title: "Hosting on Github Pages"
subtitle: "Process of hosting react-vite application through Github Pages"
date: "24-04-2024"
image: "/imgs/gh-pages.png"
categories: "react, github, programming"
---

# Hosting React Application on Github Pages

~Having my previous portfolio hosted on Heroku, which now costs money, I wanted to host my new website for free on Github pages. There are a few nuances to hosting a React website containing a router which I discuss among other things.

- Requirements
- React Router Changes
- Set Correct Base in Config File
- Adding Deploy File
- Check Active Workflow

## Requirements
In order to host your website on Github pages, you will need a few things first. You will of course need a [Github Account]("https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github#signing-up-for-a-new-personal-account), which is free to use.

You will also need to [install github locally](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). 

You will then need to connect your local project to Github. [Create a new repository](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git) on Github and follow the actions shown from the command line.*

## React Router Changes
It should be noted that if you are using **react-router-dom**, and are using a basic **BrowserRouter**, you will need to change this to **HashRouter**. See [stackoverflow post](https://stackoverflow.com/questions/71984401/react-router-not-working-with-github-pages) for more info.

## Set Correct Base in Config File
In your react-vite project. you will have to set the base config for the website in the **vite.config.js** file. Since this is my portfolio and is the base domain for github (b-musick.github.io), I just used it as the base:

```
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  base: 'https://b-musick.github.io/'
})
```

Normally you would need to add the repository name to the end:

```
base: 'https://b-musick.github.io/{repository_name}/'
```

## Adding Deploy File

### Github Actions
[Github Actions](https://github.com/features/actions) will neeed to be triggered to deploy the site to github pages, I will show how to do this using deploy file.
Create a new file in a folder **.github/workflows/deploy.yml** in the root directory. Paste the following in the file:

```
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 21

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist

  deploy:
    name: Deploy
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
      - name: Download artifact
        uses: actions/download-artifact@v2
        with:
          name: production-files
          path: ./dist

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```
I originally found the deploy file from this [repo](https://github.com/ErickKS/vite-deploy), he provides another good guide to deploy a vite app.

I used this [yml build file](https://github.com/bahmutov/npm-install).

I will breakdown the parts of the file to get a better understanding of what its doing. More info can be obtained [here](https://github.com/JamesIves/github-pages-deploy-action).

### Trigger workflow
View this document if you want to learn more about [workflows](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions#workflows).

```
on:
  push:
    branches:
      - main
```

The first part of the script will ensure that the workflow is triggered only when push events occur on specified branches.

### Group jobs
```
jobs:
```
Everything indented under this will be a specific job that is defined.

### Create job
See a job named **build** is defined. Workflows are run on virtual machines, so you need to set the OS for this machine
```
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
```

### Define steps in Job
```
    steps:
      - name: Checkout repo
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: 21

      - name: Install dependencies
        uses: bahmutov/npm-install@v1

      - name: Build project
        run: npm run build

      - name: Upload production-ready build files
        uses: actions/upload-artifact@v2
        with:
          name: production-files
          path: ./dist
```

### Checkout Repository
When want to checkout and use the specific repo associated with the deploy script:

```
- name: Checkout repo
  uses: actions/checkout@v2

```

### Setup node
To setup and define the version for node
```
- name: Setup Node
  uses: actions/setup-node@v1
  with:
    node-version: 21
```
### Deploy the public folder
[link](https://github.com/peaceiris/actions-gh-pages)

## Check Active Workflow
To see the actions in progress, go to the following tab in github:

```
Github > Project Repo > Actions
```

You will see the deployment running and see if it fails or succeeds. If succeeded, you will see a link to where the new site is now being hosted (need to click into the deployment).

<img src="/imgs/action-succeed.png" />