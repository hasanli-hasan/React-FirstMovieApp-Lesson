import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {

    state = {
        movies: [

        ],

        searchQuery: ""
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies")
        this.setState({ movies: response.data })
    }


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

//add

addMovie = async (movie) =>{
    await axios.post(`http://localhost:3002/movies/`,movie)
    this.setState(state =>({
        movies:state.movies.concat([movie])
    }))
}

    render() {

        let filterdMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <Router>
                <div className="container col-lg-9">
                    <Switch>
                        <Route path="/" exact render={() => (
                            <React.Fragment>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <SearchBar SearchMovieProp={this.searchMovie} />
                                    </div>
                                </div>

                                <MovieList movies={filterdMovies}
                                    deleteMovieProp={this.deleteMovie}
                                />
                            </React.Fragment>
                        )}>

                        </Route>

                        <Route path="/add"  render={({history}) => (

                            <AddMovie 

                            onAddMovie ={(movie)=>{this.addMovie(movie)
                                history.push("/")
                            }}
                            
                            />
                            
                        )}>

                        </Route>

                    </Switch>
                </div>
            </Router>
        )

    }
}

export default App;