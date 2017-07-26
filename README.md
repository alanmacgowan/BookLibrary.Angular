[![Build Status](https://travis-ci.org/alanmacgowan/BookLibrary.Angular.svg?branch=master)](https://travis-ci.org/alanmacgowan/BookLibrary.Angular)
[![Dependency Status](https://david-dm.org/alanmacgowan/BookLibrary.Angular.svg)](https://david-dm.org/alanmacgowan/BookLibrary.Angular)
[![devDependency Status](https://david-dm.org/alanmacgowan/BookLibrary.Angular/dev-status.svg)](https://david-dm.org/alanmacgowan/BookLibrary.Angular#info=devDependencies)

# BookLibrary.Angular
Base HTML Bootstrap template for BookLibrary sample application
Using:<br/>
* Angular
* Webpack
* npm
* Bootstrap
* JQuery
* HTML
* Javascript
* CSS

### Quick start

```bash
# clone the repository
$ git clone https://github.com/alanmacgowan/BookLibrary.Angular.git myapp

# change directory to your app
$ cd myapp

# install dependencies with npm
$ npm install

# start the server
$ npm run server
```
This will open a browser in [http://localhost:8080/](http://localhost:8080/]).

## DEV

After installing all dependencies with npm you can start the server:

* `npm run server`

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
│   │   └── helpers.js
│   │   └── webpack.aot.js
│   │   └── webpack.dev.js
│   │   └── webpack.prod.js
│   ├── src
│   │    ├── client
│   │    │    ├── app
│   │    │    │    └── author
│   │    │    │    └── book
│   │    │    │    ...
│   │    │    ├── images
│   │    │    ├── script
│   │    │    ├── styles
│   │   └── server

