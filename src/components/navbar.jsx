import React, {Component} from "react";

class Navbar extends Component {

    logoDimention= {
        height: 50,
        marginRight: 50
    }
    searchBox = {
       
        height: 45,
        paddingLeft: 45,
        borderRadius: '0px 10px 10px 0px',
        width: '50%'
    }
    searchButton = {
        height: 45,
        borderRadius: '10px 0px 0px 10px',
    }

    render() {
        console.log(this.props);
        return (

          <div className="navbar navbar-inverse">
              <div className="row">
                  <div className="col col-md-1">
                    <img src="logo.png" alt="Book My Show" style= {this.logoDimention} ></img>
                  </div>
                  <div className="col col-md-8">
                       <button style={this.searchButton} onClick = {() => {this.props.filterData(document.getElementById("myInput").value)}}><i className="fa fa-search" ></i></button>
                       <input type="text" style={this.searchBox}  id="myInput" placeholder="Search for Movies, Events, Plays...."/>
                     
                  </div>
              </div>
          </div>
        )
    } 
  

}

export default Navbar;