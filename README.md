[![Build Status](https://travis-ci.org/alanmacgowan/BookLibrary.Angular.svg?branch=master)](https://travis-ci.org/alanmacgowan/BookLibrary.Angular)
[![Build status](https://ci.appveyor.com/api/projects/status/b8sk8ve5i9vjn7g2?svg=true)](https://ci.appveyor.com/project/alanmacgowan/booklibrary-angular)
[![Dependency Status](https://david-dm.org/alanmacgowan/BookLibrary.Angular.svg)](https://david-dm.org/alanmacgowan/BookLibrary.Angular)
[![devDependency Status](https://david-dm.org/alanmacgowan/BookLibrary.Angular/dev-status.svg)](https://david-dm.org/alanmacgowan/BookLibrary.Angular#info=devDependencies)
[![Coverage Status](https://coveralls.io/repos/github/alanmacgowan/BookLibrary.Angular/badge.svg?branch=master)](https://coveralls.io/github/alanmacgowan/BookLibrary.Angular?branch=master)

# BookLibrary.Angular [In Progress]
Angular 2 sample application
Using:<br/>
* Angular 2
* TypeScript
* Webpack
* npm
* Node js
* Express
* MongoDB
* Mongoose
* Bootstrap
* JQuery
* HTML
* Travis & Appveyor (CI)
* Firebase (Hosting UI - Angular)
* Heroku (Hosting API - Node js)

## Diagram
<img src="https://github.com/alanmacgowan/BookLibrary.Angular/blob/master/BookLibrary%20.jpg" />

### Deployed version (Deployed by travis after successful build):

[https://booklibraryangular.firebaseapp.com](https://booklibraryangular.firebaseapp.com])

### Quick start

```bash
# clone the repository
$ git clone https://github.com/alanmacgowan/BookLibrary.Angular.git myapp

# change directory to your app
$ cd myapp

# install dependencies with npm
$ npm install

# build the app and start the server
$ npm start
```
This will open a browser in [http://localhost:8080/](http://localhost:8080/]) and start the Express server on http://localhost:3000/.

## DEV

After installing all dependencies with npm you can start the server:

* `npm start`

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload automatically, you don't need to reload the page.

## PROD

To build the application :

* `npm run build`

webpack will bundle the application and all necessary files in the  `/dist` folder that you can deploy to the server.

# General

## Directory structure

The directory structure looks like:

```
.
├── app
│   ├── config
│   │   ├── helpers.js
│   │   ├── webpack.aot.js
│   │   ├── webpack.dev.js
│   │   └── webpack.prod.js
│   ├── dist
│   ├── node_modules
│   ├── src
│   │    ├── client
│   │    │    ├── app
│   │    │    │    └── author
│   │    │    │    └── book
│   │    │    │    ...
│   │    │    ├── images
│   │    │    ├── script
│   │    │    ├── styles
│   │    │    ├── index.html
│   │    │    ├── main.aot.ts
│   │    │    ├── main.ts
│   │    │    ├── polyfills.ts
│   │    │    └── vendor.ts
│   │    └── server

