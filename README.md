# VUTTR (Very Useful Tools to Remember) ReactJS App

Welcome to **VUTTR ReactJS App**. This app was developed by **Daniel Silva** for the [bossabox](http://bossabox.com) challenge.

NOTE: This document is a **work in progress**.

## Overview

This project was developed in [JavaScript](https://www.ecma-international.org) with [ReactJS](https://reactjs.org) framework. That’s uses the [VUTTR API](https://github.com/danjsillva/bossabox-challenge-api).

## Setup

You need [NodeJS](https://nodejs.org/en/) and [NPM](https://www.npmjs.com) or [Yarn](https://yarnpkg.com/en/) to run the commands. This guide uses Yarn but NPM do the same.

Recommended versions:

- NodeJS: v10.16.0
- Yarn: 1.16.0

## Running dev server

First, run the following command to install the dependencies.

```bash
yarn install
```

Now you can start dev server by this command.

```bash
yarn start
```

### That’s all!

The terminal returns this message:

```bash
Compiled successfully!

You can now view desafio-web-react in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://10.0.0.51:3000/

Note that the development build is not optimized.
To create a production build, use yarn build.

```

This command starts the dev server at port 3000 and open your browser on this page. If your browser not open automatically, you can paste the url and it will works.

### Behind the commands

This project uses some NodeJS packages beyond the ReactJS. They are:

- axios: ^0.18.0
- bootstrap: ^4.3.1
- node-sass: ^4.12.0
- react: ^16.8.6
- react-dom: ^16.8.6
- react-router-dom: ^5.0.0
- react-scripts: 3.0.1
- styled-components: ^4.2.0

### Structure of project directories

```bash
.
├── README.md
├── node_modules
│   └── *
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── App.js
│   ├── App.scss
│   ├── App.test.js
│   ├── Router.js
│   ├── assets
│   │   └── images
│   ├── components
│   ├── config
│   │   └── api.js
│   ├── index.js
│   ├── services
│   │   └── ToolService.js
│   └── views
│       └── tools
│           ├── ModalAdd.js
│           ├── ModalRemove.js
│           ├── Tool.js
│           └── Tools.js
└── yarn.lock
```
