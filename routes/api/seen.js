const express = require('express');
const tmdb = require('tmdbv3').init('776c3b984bf13b25620cc6c2e64c26aa');
const router = express.Router();

const auth = require('../../middleware/auth')
const User = require('../../models/user')


router.get('/', auth, (req, res) => {
    User.findById(req.user.id, (err, user) => {
        if (err) throw err;
        res.send(user.seen)
    })
})

router.get('/resolve', auth, (req, res) => {
    let result = [];

    User.findById(req.user.id, (err, user) => {
        if (err) throw err;

        for (let i = 0; i < user.seen.length; i++) {
            const id = user.seen[i];

            tmdb.movie.info(id, (err, imdb_res) => {
                if (err) throw err;
                result.push(imdb_res)

                if (result.length === user.seen.length) res.send(result)
            });
        }
    })
})

router.post('/check', auth, (req, res) => {
    const { id } = req.body;

    User.findById(req.user.id, (err, user) => {
        if (err) throw err;

        if (user.seen.find(element => element == id)) {
            res.send(true)
        } else {
            res.send(false)
        }
    })
})


router.post('/add', auth, (req, res) => {
    const { id } = req.body;

    User.findById(req.user.id, (err, user) => {
        if (err) throw err;

        if (user.seen.find(element => element == id)) {
            res.status(400).send('Already in watchlist!')
        } else {
            user.seen.push(id);
            user.save((err, user) => {
                if (err) throw err;
                res.send(user.seen)
            })
        }
    })
})

router.post('/delete', auth, (req, res) => {
    const { id } = req.body;

    User.findById(req.user.id, (err, user) => {
        if (err) throw err;

        if (!user.seen.find(element => element == id)) {
            res.status(400).send('Not found!')
        } else {
            let index = user.seen.indexOf(id);
            if (index !== -1) user.seen.splice(index, 1);

            user.save((err, user) => {
                if (err) throw err;
                res.send(user.seen)
            })
        }
    })
})

module.exports = router