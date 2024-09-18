const express = require("express");
const app = express();
const PORT = 8000;
const lab02_router = require("./router")
 
 
// middleware
app.use(express.urlencoded({ extended: true }));
 
//add router files
app.use("/lab02", lab02_router)
 
app.get("/", (req, res)=>{
    res.send("Hello")
})
 
app.use("", (req, res) => {
  res.status(404).send("Page not Found");
});
 
app.listen(PORT, () => {
  console.log(`http://127.0.0.1:${PORT}`);
});