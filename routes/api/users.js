const express = require('express');
const sha256 = require('sha256')
const jwt = require('jsonwebtoken');
const router = express.Router();

const config = require('../../config.json');

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
                    jwt.sign(
                        { id: u.id },
                        config.jwtSecret,
                        { expiresIn: 3600 },
                        (err, token) => {
                            if (err) throw err;

                            res.status(201).json({
                                token,
                                user: {
                                    id: u.id,
                                    email: u.email,
                                    username: u.username
                                }
                            })
                        }
                    )


                }
            })
        }
    })
})

router.post('/auth', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    User.findOne({ $or: [{ email: username }, { username }] }).then(user => {
        if (!user) {
            return res.status(400).json({ msg: 'User does not exist' })
        } else {
            if (sha256(password) == user.password) {
                jwt.sign(
                    { id: user.id },
                    config.jwtSecret,
                    { expiresIn: 3600 },
                    (err, token) => {
                        if (err) throw err;

                        res.status(201).json({
                            token,
                            user: {
                                id: user.id,
                                email: user.email,
                                username: user.username
                            }
                        })
                    }
                )
            } else {
                return res.status(400).json({ msg: 'Invalid Password' })
            }
        }
    })
})

module.exports = router