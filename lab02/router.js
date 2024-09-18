const express = require("express")
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Welcome to the router file")
});

router.get("/name", (req, res)=>{
    res.send("Sally")
});

router.get("/greeting", (req, res)=>{
    res.send("My name is Sally and my student number is N01603365")
});

router.get("/add/:x/:y", (req, res)=>{
    console.log(req.params)
    res.send(JSON.stringify(parseFloat(req.params.x)+ parseFloat(req.params.y)))
});


router.get("/calculate/:x/:y/:o", (req, res)=>{
    console.log(req.params)
    switch(req.params.o){
        case '+': 
            res.send(JSON.stringify(parseFloat(req.params.x) + parseFloat(req.params.y)))
            break;
        case '-': 
            res.send(JSON.stringify(parseFloat(req.params.x) - parseFloat(req.params.y)))
            break;
        case '*': 
            res.send(JSON.stringify(parseFloat(req.params.x) * parseFloat(req.params.y)))
            break;
        case '/': 
            res.send(JSON.stringify(parseFloat(req.params.x) / parseFloat(req.params.y)))
            break;
        case '**': 
            res.send(JSON.stringify(parseFloat(req.params.x) ** parseFloat(req.params.y)))
            break;
        default:
            res.send("invalid operator")
    }
});

// router.get("/add_query", (req, res)=>{
//     console.log(req.query)
//     res.send("result")
// });
// http://127.0.0.1:8000/lab02/add_query?x=10&y=20


//  add + : localhost:8000/calculate/10/2/%2B


module.exports = router;