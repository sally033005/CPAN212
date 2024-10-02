// npm init -y
// npm install express nodemon

//package.json
// "scripts": {
//     "start": "nodemon app.js"
//   }
//npm start will run nodemon app.js

const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();
const path = require("path")

//npm install --save multer 
//https://www.npmjs.com/package/multer
const multer  = require('multer')
  
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "uploads"))
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now()
      cb(null, uniquePrefix + "-" + file.originalname);
      //keep the file type
    }
  })
  
  const upload = multer({ storage: storage })


// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

 
// routes
app.get("/", (req, res)=>{
    res.send("Welcome to our server")
})
 
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "register.html" ))
})

app.post("/register", upload.single("file"), (req, res)=>{
    console.log(req.body);
    res.send("I got your information")
})

app.post("/save/multiple", upload.array("file", 20), (req, res)=>{
    console.log(req.body);
    res.send("I got your information")
})
 
// app.get("/fetch/multiple", (req, res) =>{
    
// })
// let filenames = _.sampleSize(files_array, 2);
// let results;
// filenames.forEach((item)) => {
//     fs.readFile(path.join(__dirname, "uploads", item), (err, data) =>{
//         if(err) throw err;
//         console.log(item);
//         console.log(data);
//         results += data
//     })
// }

// console.log(results);
// res.json({})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});

