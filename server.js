const express = require("express")
const path = require("path")
const port = 3333

let initialpath = path.join(__dirname, "public")
let app = express()
app.use(express.static(initialpath))

app.get("/", (req, res) =>{
    res.sendfile(path.jooin(initialPath, "index.html"))
})
app.listen(3333, () =>{
    console.log(`server start up ${port}!`) 
})