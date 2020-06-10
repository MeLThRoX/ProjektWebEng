const jwt = require('jsonwebtoken')
const config = require('../config.json')

function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // Check for token
    if (!token)
        return res.status(401).json({ msg: 'No token, authorizaton denied!' });

    try {
        // Verify token
        jwt.verify(token, config.jwtSecret, (err, decoded) => {
            if (err) throw err;
            
            req.user = decoded;
            next();
        });
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid!' });
    }
}

module.exports = auth