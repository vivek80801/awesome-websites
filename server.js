const express = require("express")
const {resolve} = require("path")
const app = express()
const port = process.env.PORT || 5000;

app.use(express.static(resolve(__dirname + "/Websites")))

app.get("/", (req, res) => {
    res.sendFile(resolve(__dirname + "/index.html"))
})

app.use((req, res) => {
    res.sendFile(resolve(__dirname + "/404.html"))
})

app.use((err, req, res, next) => {
    res.status(500).sendFile("/error.html")
    next()
})

app.listen(port, () => console.log(` 
    open you browser and go to http://localhost:${port}/<your folder name>
    server is runing on http://localhost:${port}
`))
