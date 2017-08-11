const express = require('express'),
    router = require('./routes/router'),
    database = require('./lib/database'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    errorhandler = require('errorhandler'),
    app = express(),
    seeder = require('./lib/dbSeeder'),
    port = 3000;

class Server {

    constructor() {
        this.initExpressMiddleWare();
        this.initCustomMiddleware();
        this.initRoutes();
        this.start();
        this.initDbSeeder();
    }

    start() {
        app.set('port', (process.env.PORT || port));

        app.listen(app.get('port'), (err) => {
            console.log('[%s] Listening on http://localhost:%d', process.env.NODE_ENV, app.get('port'));
        });
    }

    initExpressMiddleWare() {
        app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(errorhandler());
        app.use(cookieParser());

        process.on('uncaughtException', (err) => {
            if (err) console.log(err, err.stack);
        });
    }

    initCustomMiddleware() {
        if (process.platform === "win32") {
            require("readline").createInterface({
                input: process.stdin,
                output: process.stdout
            }).on("SIGINT", () => {
                console.log('SIGINT: Closing MongoDB connection');
                database.close();
            });
        }

        process.on('SIGINT', () => {
            console.log('SIGINT: Closing MongoDB connection');
            database.close();
        });
    }

    initDbSeeder() {
        database.open(() => {
            console.log('database open: ' + process.env.NODE_ENV + '----');
            if (process.env.NODE_ENV == 'development') {
                seeder.init();
            }
        });
    }

    initRoutes() {
        router.load(app, './controllers');
    }

}

var server = new Server();