import React,{Component} from "react";
import Language from './language';
import Navbar from "./navbar";

const movieList = [{
    name: "Bhuj: The Pride of India",
    image: "bhuj.png",
    symbol : '+',
    language: 'Hindi',
    description: "During the 1971 Indo-Pak war, the IAF airstrip at Bhuj was destroyed in combat. Subsequently, 300 local women led by IAF squadron leader Vijay Karnik heroically toiled day in and day out to reconstruct the airbase. This act of resilience was a pivotal moment which not only boosted the morale of the country, but also helped us win the war.The film is a tribute to the unparalleled bravado displayed not only by IAF, but the civilians as well."
},{
    name: "Law",
    image: "law.png",
    symbol : '+',
    language: 'English',
    description: "Law is a crime-thriller movie, where a law graduate fights her case. It is written and directed by Raghu Samarth."
},{
    name: "Gwalior",
    image: "Gwalior.png",
    symbol : '+',
    language: 'Hindi',
    description: "Gwalior is a Hindi movie starring Manav Vij and Neena Gupta in prominent roles. It is a drama directed by Jaspal Singh Sandhu and Rajeev Barnwal."
},{
    name: "Laxmmi Bomb",
    image: "laxmmi-bomb.jpg",
    symbol : '+',
    language: 'Hindi',
    description: "A man gets possessed by the ghost of a transgender woman who seeks revenge on those who wronged her."
},{
    name: "Action",
    image: "action.jpg",
    symbol : '+',
    language: 'Tamil',
    description: "Colonel Subhash, an Indian army officer, is on a mission to catch a mastermind behind a terror attack that took away some of his loved ones."
},{
    name: "Street Dancer 3",
    image: "street-dancer-3.jpg",
    symbol : '+',
    language: 'Hindi',
    description: "Street Dancer 3 (3D) is a coming-of-age story based on the lives of street dancers in India. This includes an ensemble cast of Varun Dhawan and Shraddha Kapoor in prominent roles followed by Nora Fatehi, Aparshakti Khurana, Raghav Juyal, Dharmesh, and dancing master Prabhudeva among others. It is written and directed by Remo D`Souza."
},{
    name: "KGF",
    image: "kgf-chapter-2.jpg",
    symbol : '+',
    language: 'Tamil',
    description: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes. His allies look up to Rocky as their saviour, the government sees him as a threat to law and order; enemies are clamouring for revenge and conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest for unchallenged supremacy."
},{
    name: "Stree",
    image: "stree-hindi.jpg",
    symbol : '+',
    language: 'Hindi',
    description: "Based on an urban legend in Chanderi, Stree is set in a town where everyone is familiar with the fables of a strange woman who calls men by their name and abducts them, leaving their clothes behind. Nobody knows any facts - and those who are abducted seldom show up to tell stories but the fear is palpable. Everybody diligently makes sure the inscription O Stree, Kal Aana (O Woman, Come Tomorrow) is written on their walls, and at night try and stay indoors."
},{
    name: "The Avengers",
    image: "avenger.jpg",
    symbol : '+',
    language: 'English',
    description: "When an unexpected enemy emerges who threatens global safety and security, Nick Fury (Samuel L. Jackson), director of the international peacekeeping agency S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster."
}
]
class Body extends Component {
   
    constructor() {
        super();
        this.state = {
            movies : JSON.parse(JSON.stringify(movieList)),
        }
        this.state.movies.map(movie => {
            movie.description = movie.description.length >= 80 ? movie.description.slice(0,80) +"...": movie.description;
        });
    }
    responsiveImage = {
        maxWidth: '100%',
    }
    wrapContent = {
        marginTop: 50,
    }
    marginBottom ={
        marginBottom: 50,
    }
    render() {
        return (
            <React.Fragment>
             <Navbar  filterData = {this.filterData}></Navbar>   
            <div className="container">
                <div className="jumbotron">
                    <h3>Streaming This Week</h3><Language value={this.state.movies}></Language>
                    <div className="row">
                            {this.state.movies.map((movie,i) => (
                                <div className="col col-md-4"  key={i}>
                                    <img style={this.responsiveImage} src={movie.image} alt={movie.name}></img>
                                    <h3>{movie.name}</h3>
                                    <div style={this.wrapContent}>
                                        <p>{movie.description}  <button onClick = {() => {this.fullDescription(i)}}>{movie.symbol}</button></p>
                                    </div> 
                                    <button style={this.marginBottom} className="btn btn-danger" onClick={event =>  window.location.href='/tickets'}>Book Now</button>
                                </div>
                            ))}
                        </div>
                    </div>

            </div>

            </React.Fragment>
          
        )
    }
    filterData = (value) => {
        console.log("Hiii",  value);
        var filteredResult = this.state.movies.filter(movie => (movie.name.includes(value) || movie.language.includes(value)));
        console.log("Hiii", filteredResult, this.state.movies);
        this.setState({movies: filteredResult});
     }

    fullDescription(i) {
        console.log(movieList);
        this.state.movies.map((movie,index) => {
            if(index === i && movie.symbol == '+'){
                movie.description = movieList[i].description;
                movie.symbol = '-';
                return movie;
            }
            if(index === i && movie.symbol == '-'){
                movie.symbol = '+';
                movie.description = movie.description.length  >= 80 ? movie.description.slice(0,80)+"...":  movie.description;
                return movie;
            }
        });
        this.setState({movies: this.state.movies});
        this.setState( {symbol: this.state.movies});
    }
}

export default Body;