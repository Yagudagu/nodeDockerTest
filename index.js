const express = require("express");

const app = express();



const app2525 = express();

const app587 = express();

const app465 = express();

app.use(express.json());

app2525.get("/", (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
    <html>
    <body>Adding second response on 2525,Let's try this again</body>
    </html>`)
});

app587.get("/", (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
    <html>
    <body>Adding second response on 587,Let's try this again</body>
    </html>`)
});

app465.get("/", (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
    <html>
    <body>Adding second response on 465,Let's try this again</body>
    </html>`)
});

app.get("/", (req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(`
    <html>
    <body>Let's try this again</body>
    </html>`)
});

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})

app2525.listen(2525, () => {
    console.log(`Second server listening on 2525`);
})

app587.listen(587, () => {
    console.log(`Second server listening on 587`);
})

app465.listen(465, () => {
    console.log(`Second server listening on 465`);
})