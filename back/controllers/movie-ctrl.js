const Movie = require('../models/movie-model');

createMovie = (request, response) => {
    const body = request.body;

    if (!body) {
        return response.status(400).json({
            success: false,
            error: 'You must provide a movie',
        });
    }

    const movie = new Movie(body);

    if (!movie) {
        return response.status(400).json({ success: false, error: err })
    }

    movie
        .save()
        .then(() => {
            return response.status(201).json({
                success: true,
                id: movie._id,
                message: 'Movie created!',
            })
        })
        .catch(error => {
            return response.status(400).json({
                error,
                message: 'Movie not created!',
            })
        });
};

updateMovie = async (request, response) => {
    const body = request.body;

    if (!body) {
        return response.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        });
    }

    Movie.findOne({ _id: request.params.id }, (err, movie) => {
        if (err) {
            return response.status(404).json({
                err,
                message: 'Movie not found!',
            });
        }
        movie.name = body.name;
        movie.time = body.time;
        movie.rating = body.rating;
        movie
            .save()
            .then(() => {
                return response.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Movie updated!',
                })
            })
            .catch(error => {
                return response.status(404).json({
                    error,
                    message: 'Movie not updated!',
                })
            });
    });
};

deleteMovie = async (request, response) => {
    await Movie.findOneAndDelete({ _id: request.params.id }, (err, movie) => {
        if (err) {
            return response.status(400).json({ success: false, error: err });
        }

        if (!movie) {
            return response
                .status(404)
                .json({ success: false, error: `Movie not found` });
        }

        return response.status(200).json({ success: true, data: movie });
    }).catch(err => console.log(err));
};

getMovieById = async (request, response) => {
    await Movie.findOne({ _id: request.params.id }, (err, movie) => {
        if (err) {
            return response.status(400).json({ success: false, error: err });
        }

        if (!movie) {
            return response
                .status(404)
                .json({ success: false, error: `Movie not found` });
        }
        return response.status(200).json({ success: true, data: movie });
    }).catch(err => console.log(err));
};

getMovies = async (request, response) => {
    await Movie.find({}, (err, movies) => {
        if (err) {
            return response.status(400).json({ success: false, error: err });
        }
        if (!movies.length) {
            return response
                .status(404)
                .json({ success: false, error: `Movie not found` });
        }
        return response.status(200).json({ success: true, data: movies });
    }).catch(err => console.log(err));
};

module.exports = {
    createMovie,
    updateMovie,
    deleteMovie,
    getMovies,
    getMovieById,
};
