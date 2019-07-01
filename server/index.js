
const express = require("express");
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => { 
    const server = express();
    server.get('/', (req, res) => {
        const page = '/home';
        app.render(req, res, page);
    });
    server.get('*', (req, res) => {
        return app.getRequestHandler()(req, res);
    });
    server.listen(3000,  () => console.log("App listening on port 3000!"));
})