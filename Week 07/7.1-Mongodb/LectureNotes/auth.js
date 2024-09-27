const jwt = require("jsonwebtoken")
const JWT_SECRET = "Arjun"

function auth(req, res, next) {
    const token = req.headers.token;

    const response = jwt.verify(token, JWT_SECRET);

    if (response) {
        req.userId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}