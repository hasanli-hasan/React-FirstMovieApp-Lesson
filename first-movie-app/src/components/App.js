import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class App extends React.Component {

    state = {
        movies: [
            {
                "name": "The Matrix 3",
                "rating": "8.1",
                "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg",
                "id": 7
            },
            {
                "name": "The Matrix Reloaded",
                "rating": "6.9",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/jBegA6V243J6HUnpcOILsRvBnGb.jpg",
                "overview": "Six months after the events depicted in The Matrix, Neo has proved to be a good omen for the free humans, as more and the matrix and brought to Zion, the one and only stronghold of the Resistance.",
                "id": 8
            },
            {
                "name": "Saw 3D",
                "rating": "7.5",
                "overview": "SAW legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror.",
                "imageURL": "https://image.tmdb.org/t/p/w600_and_h900_bestv2/qHCZ6LjtmqWDfXXN28TlIC9OppK.jpg",
                "id": 11
            }
        ],

        //SearchBardan state-i silib burda yaziriq.
        searchQuery: ""
    }



    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        //eger yuxardaki array hazir sekilde elimizde olmasa bu formada yazmaq daha mentiqlidir
        // this.setState({
        // movies:newMovieList

        // });

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        this.setState({ searchQuery: event.target.value })
    }



    render() {

        let filterdMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar SearchMovieProp={this.searchMovie} />
                    </div>
                </div>

                <MovieList movies={filterdMovies}
                    deleteMovieProp={this.deleteMovie}
                />

            </div>
        )

    }
}

export default App;