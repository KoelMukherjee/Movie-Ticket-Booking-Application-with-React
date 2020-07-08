import React, {Component} from "react";
let movieCount = [];
class Language extends Component {
    state = {
        uniqueLanguage: this.removeDuplicate(),

    }
    margin = {
        marginRight: 20
    }
    render() {
        return(
          <React.Fragment>
              {this.state.uniqueLanguage.map(language  => (
                <React.Fragment>
                     <label>{language}</label>
                     <span style={this.margin} className="label label-warning">{this.languageMovieCount(language)}</span>
                </React.Fragment>
              ))}
          </React.Fragment>
         )
    }
    languageMovieCount(movie) {
        console.log(movie);
        var movieList = this.props.value.filter(movies =>  movies.language == movie)
       return movieList.length;
    }
    removeDuplicate() {
        var unique =[... new Set(this.props.value.map(movie => movie.language))];
        return unique;
        
    } 
    
       
}

export default Language;