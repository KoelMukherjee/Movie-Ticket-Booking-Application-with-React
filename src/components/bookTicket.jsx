import React,{Component} from "react";


var imageArray = [];
for(var i=0; i<50; i++){
imageArray.push({ id: i, src: "black-chair.PNG"});
}
let selectedChair;
class BookTicket extends Component {
    state = {
        imageArray,
    }
    imageSprites = {
        width: '120px',
        height: '80px',
    }
    render() {
        return(
            <React.Fragment>
                 <h3 style = {{color: "Red"}}>Book your Tickets Now !!</h3>
                 <div className="container">
                     <div className="col col-md-8">
                        <div className="jumbotron">
                            {this.state.imageArray.map(i => (
                                <img id={i.id} key={i.id} style={this.imageSprites} src={i.src} onClick = {() => {this.changeImage(i.id)}}></img>
                            ))}
                            <h2 style={{textAlign: "center"}}>Screen this side</h2>
                        </div>
                     </div>
                     <div className="col col-md-4">
                        <div className="jumbotron">
                            <p>Seats Selected : {this.selectedCount()}</p>
                            <p>Total cost: 140 * {this.selectedCount()} = {140* this.selectedCount()}</p>
                       </div>
                    </div>
                 </div>
            </React.Fragment>
           
        )}
        changeImage(i) {
           var toggleImage = this.state.imageArray.map(toggle => {
               console.log(toggle.id, i);
               if(toggle.id === i){
                   console.log(toggle.src);
                   return toggle.src =  toggle.src.includes("green-chair") ? "black-chair.PNG" :  "green-chair.PNG";
                  
               }
              
            });
            console.log(toggleImage);
            this.setState({src: this.state.imageArray});
        }
        selectedCount() {
            selectedChair = 0;
            this.state.imageArray.map(toggle => {
               if(toggle.src === "green-chair.PNG") {
                    console.log(selectedChair);
                    selectedChair += 1;
                }
               
        });
        return selectedChair;
    }
}

export default BookTicket;