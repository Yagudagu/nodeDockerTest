const express = require("express");

const app = express();

const app5432 = express();

app.use(express.json());

app5432.get("/", (req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(`
    <html>
    <body>Adding second response on 5432, to show it's open</body>
    </html>`)
});

app.get("/", (req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(`
    <html>
    <body>Could it possibly be a solution?</body>
    </html>`)
});

const port =  process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

app5432.listen(5432, () => {
    console.log(`Second server listening on 5432`);
})