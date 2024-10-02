const auth = (req, res, next) => {
    if (!req.query.username){
        return res.send("No user found");
    }
    console.log("Hello to " + req.query.username);
    next();
};

// const auth1 = (req, res, next) => {
//     if (!req.query.username){
//         return res.send("No user found");
//     }
//     console.log("Hello to " + req.query.username);
//     next();
// };

module.exports = auth;
// module.exports = {auth, auth1};