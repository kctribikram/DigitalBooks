import { Component,state } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from "../Header/Header"

class BookDetail extends Component{
  
    state = {
        Title : '',
        Auther : '',
        Cost : '',
        Description:'',
        Image : '',
        id : this.props.match.params.id
    }
   changeHandler = (e)=>{
       this.setState({
        [e.target.name] : e.target.value
       })
        
   }
   
    componentDidMount(){
        axios.get("http://localhost:90/book/single/"+ this.state.id)
        .then((response)=>{
            this.setState({
                Title : response.data.Title,
                Auther : response.data.Auther,
                Cost : response.data.Cost,
                Description: response.data.Description,
                Image:response.data.Image
            })   
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div className="app">
                 <Header></Header>
            {
                <div className="container">
                    <div className="imgBx">
                    <img src={"http://localhost:90/" + this.state.Image}/>
                    </div>
                    <div className="details">
                        <div className="content">
                            <h2 className="title">{this.state.Title}</h2>
                            <h4>{this.state.Auther}</h4>
                            <p className="description">{this.state.Description}</p>
                            <h3 className="cost">{this.state.Cost}</h3>
                            <button className="button">Add to cart</button>
                        </div>
                    </div>
                </div>     
            }
          </div>
        )
    }
}
export default BookDetail;