const express = require("express")

const port = process.env.POST || 9090
const app = express()
app.use(express.json())

app.get("/" , (req , res) => {
    res.send("Then is Home Route")

})
app.listen (port , () => {
    console.log(`the server is running at port ${port}`)
})