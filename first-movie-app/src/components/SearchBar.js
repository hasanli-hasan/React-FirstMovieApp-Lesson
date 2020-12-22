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
                <div className="form-row m-5">
                    <div className="col-12">

                        <input onChange={this.props.SearchMovieProp} 
                        type="text" className="form-control" placeholder="Search a movie"
                        
                         />

                    </div>
                </div>
            </form>

        )
    }
}

export default SearchBar;