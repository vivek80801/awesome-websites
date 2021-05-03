const express = require("express")
const {resolve} = require("path")
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static(resolve(__dirname + "/Websites")))

app.get("/", (req, res) => {
    res.sendFile(resolve(__dirname + "/index.html"))
})

app.listen(port, () => console.log(`server is runing on http://localhost:${port}`))
