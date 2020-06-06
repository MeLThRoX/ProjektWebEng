const express = require('express');
const sha256 = require('sha256')
const router = express.Router();

// Model
const User = require('../../models/user')

router.post('/create', (req, res) => {
    const { email, username, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    User.findOne({ $or: [{ email }, { username }] }).then(user => {
        if (user) {
            return res.status(400).json({ msg: 'E-Mail or username already exists' })
        } else {
            new User({
                email,
                username,
                password: sha256(req.body.password)
            }).save((err, u) => {
                if (err) {
                    res.status(400).send({ msg: err.toString() })
                } else {
                    res.status(201).json({
                        user: {
                            id: u.id,
                            email: u.email,
                            username: u.username
                        }
                    })
                }
            })
        }
    })
})

module.exports = router