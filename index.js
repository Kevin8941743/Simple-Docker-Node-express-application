import express from "express"

const app = express()

const PORT = 3000

app.get("/", async(req, res) => {
    console.log("This is the default route")
    res.status(200).send("Default route")
})

app.get("/help", async(req, res) => {
    console.log("This is the error route")
    res.status(500).send("Error occured")
    process.exit(0)
})

app.get("/health", async(req, res) => {
    console.log("Everything is good!")
    res.status(200).send("Working well!")
})

app.get("/time", async(req, res) => {
    const time = new Date().toISOString()
    console.log(`The current time is: ${time}`)
    res.status(200).send(`Current time is: ${time}`)
})


app.listen(PORT, () => {
    console.log(`The server is now listening to port: ${PORT}`)
})