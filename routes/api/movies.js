const express = require('express');
const tmdb = require('tmdbv3').init('776c3b984bf13b25620cc6c2e64c26aa');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/tmdb/movie/popular', (req, res) => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=776c3b984bf13b25620cc6c2e64c26aa').then(resp => resp.json()).then(tmdb_res => {
        res.send(tmdb_res)
    })
})

router.get('/tmdb/movie/top_rated', (req, res) => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=776c3b984bf13b25620cc6c2e64c26aa').then(resp => resp.json()).then(tmdb_res => {
        res.send(tmdb_res)
    })
})

router.get('/tmdb/tv/popular', (req, res) => {
    fetch('https://api.themoviedb.org/3/tv/popular?api_key=776c3b984bf13b25620cc6c2e64c26aa').then(resp => resp.json()).then(tmdb_res => {
        res.send(tmdb_res)
    })
})

router.get('/tmdb/tv/top_rated', (req, res) => {
    fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=776c3b984bf13b25620cc6c2e64c26aa').then(resp => resp.json()).then(tmdb_res => {
        res.send(tmdb_res)
    })
})

router.get('/tmdb/movie/:id', (req, res) => {
    tmdb.movie.info(req.params.id, (err, tmbd_res) => {
        if (err) {
            res.status(400).send(err)
        } else {
            res.send(tmbd_res)
        }
    })
})


module.exports = router