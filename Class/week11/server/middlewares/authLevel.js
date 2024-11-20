const User = require("../models/user");
const auth = (req, res, next) => {
    if(req.session && req.session.user) {
        User.findOne({_id: req.session.user._id})
        .then(user_account => {
            if(!user_account) {
                return res.end("User not found");
            }

        next();
    })}
    return res.status(401).json({err: "No Privileges"});
}