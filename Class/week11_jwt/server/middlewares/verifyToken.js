const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Secret key for JWT

const verifyToken = (req, res, next) => {
    // 1 - verift the header
    //parse the header auth
    //jwt verify
    //send error if not verified
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(403).json({ message: "No token provided" });
    }

    // 2 - Remove "Bearer " prefix if it exists
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : authHeader;

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "Failed to authenticate token" });
        }

        req.userId = decoded.userId; // Add user ID to the request object
        next(); // Allow the request to proceed to the next handler
    });
};

module.exports = verifyToken;
