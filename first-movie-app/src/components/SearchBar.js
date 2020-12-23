import React from 'react';

class SearchBar extends React.Component {

    // state={
    //   searchQuery :""
    // }

    //enter-dan sonra sehife yenilenmesin deye yazilib
    handleFormSubmit =(event) =>{
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-row m-4">
                    <div className="col-10">

                        <input onChange={this.props.SearchMovieProp} 
                        type="text" className="form-control" placeholder="Search a movie"
                        
                         />

                    </div>
                    <div className="col-2">
                        <button  type="button" 
                                className="btn btn-md btn-danger"
                                style={{float:'right'}}>Add Movie

                        </button>
                    </div>
                </div>
            </form>

        )
    }
}

export default SearchBar;