// npm init -y
// npm install express nodemon dotenv

require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000;
const path = require("path")

// middleware -> anything we do after receiving a request and anything we do before sending a response
app.use(express.urlencoded({extended: true}))



// app.get("/login", (req, res)=> {
//     res.sendFile(path.join(__dirname, "pages", "login.html"))
// })

// app.post("/login", (req, res)=>{
//     console.log("req.body")
//     res.send("Login received")
// })

app
    .route("/login")
    .get((req, res)=> {
        res.sendFile(path.join(__dirname, "pages", "login.html"))
    })
    .post((req, res)=>{
        console.log("req.body")
        res.send("Login received")
})

app.get("/", (req, res)=>{
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.sendFile(path.join(__dirname, "pages", "home.html"))
});

app.get("/download", (req, res)=>{
    res.download("Capture.PNG")
});

app.get("/watch", (req, res)=>{
    console.log(req.query)
    res.send("welcome to query")
})

//  -> domain/endpoint/params -> :
//  -> localhost:8000/itm/:itemID

app.get("/item/:itemID/:quantity", (req, res)=>{
    console.log(req.params)
    res.send("item")
})

//catch all routes, DO NOT PUT ANY ROUTE BELOW THIS
// app.use("", (req, res) => {
//     res.status(404).send("Page not Found");
//   });

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
});
