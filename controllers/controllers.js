const Movie = require('../modules/movie');
const fs = require('fs');
const { models } = require('mongoose');
const path = require('path');


const getMovies = async (req, res) => {
    const movie = await Movie.find();
    res.render('movies' ,{movie});
};

const getAddMovie =async (req, res) => {
    res.render('add')
};

const postAddMovie = async (req, res) => {
    const newMovie = new Movie ({
        title: req.body.title,
        description: req.body.description,
        releaseDate: req.body.releaseDate,
        genre: req.body.genre,
        rating: req.body.rating,
        poster: req.file.filename
    });
    await newMovie.save();
    res.redirect('/');
};

const getEditMovie = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render('edit',{movie});
};

// POST update movie
const postUpdateMovie = async (req, res) => {
    const movieId = req.params.id;
    const movie = await Movie.findById(movieId);

        movie.title = req.body.title;
        movie.description = req.body.description;
        movie.releaseDate = req.body.releaseDate;
        movie.genre = req.body.genre;
        movie.rating = req.body.rating;
        if (req.file) {
            const oldPosterPath = path.join(__dirname, '../uploads/', movie.poster);
            fs.unlink(oldPosterPath, (err) => {
                if (err) {
                    console.error('Error while deleting old poster:', err);
                }
            });
            movie.poster = req.file.filename;
        }
        await movie.save();
        res.redirect('/');
};

const getDeleteMovie = async (req, res) => {
    const movieId = req.params.id;
        const movie = await Movie.findById(movieId);

        const posterPath = path.join(__dirname, '../uploads/', movie.poster);

        await Movie.findByIdAndDelete(movieId);

        fs.unlink(posterPath, (err) => {
            if (err) {
                console.error('Error while deleting poster:', err);
            }
        });

        res.redirect('/');
};

module.exports = { getMovies, getAddMovie , postAddMovie , getEditMovie , postUpdateMovie , getDeleteMovie}