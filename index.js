const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end(`
    <html>
    <body>It works, changing the words to test ci/cd</body>
    </html>`)
});

const port =  process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App running on port ${port}`);
})