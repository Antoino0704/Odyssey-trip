/* web server for english site */

const express = require("express")
const app = new express()

app.use(express.static("./html"))

app.get("./", (req, res) => {
    res.sendFile("index.html", {root: __dirname + "/html"})
})

app.listen(3000)