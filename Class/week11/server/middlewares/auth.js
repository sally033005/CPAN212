const auth = (req, res, next) => {
    if(req.session && req.session.user) {
        next();
    }
    return res.status(401).json({err: "Not Authorized"});
}