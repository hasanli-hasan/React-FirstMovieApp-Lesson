import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import axios from 'axios'

class App extends React.Component {

    state = {
        movies: [

        ],

        //SearchBardan state-i silib burda yaziriq.
        searchQuery: ""
    }

    //  async componentDidMount(){
    //     const baseURL=" http://localhost:3002/movies";
    //     const response=await fetch(baseURL);
    //     const data=await response.json();
    //     console.log(response)
    //     console.log(data)
    //     this.setState({movies:data})
    // }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        this.setState({ movies: response.data })
    }

    // deleteMovie = (movie) => {
    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )

    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    //FETCH API
    //silinen film api json-dan da silinir
    // deleteMovie = async (movie) => {
    //     const baseURL=`http://localhost:3002/movies/${movie.id}`;
    //     await fetch(baseURL,{
    //         method:"DELETE"
    //     })

    //     const newMovieList = this.state.movies.filter(
    //         m => m.id !== movie.id
    //     )
    //     this.setState(state => ({
    //         movies: newMovieList
    //     }))
    // }

    //AXIOS API 
    deleteMovie = async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )
        this.setState(state => ({
            movies: newMovieList
        }))
    }

    //search
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