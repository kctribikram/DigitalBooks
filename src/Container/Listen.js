import { Component,state } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from "../Header/Header"

class Listen extends Component{
  
    state = {
        Title : '',
        Auther : '',
        Audio : '',
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
                Audio : response.data.Audio,
                Image:response.data.Image
            })   
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
                <div className="container">
                    <div className="imgBx">
                    <img src={"http://localhost:90/" + this.state.Image}/>
                    </div>
                    <div className="details">
                        <div className="content">
                            <h1 className="title">{this.state.Title}</h1>
                            <h4>{this.state.Auther}</h4>
                            <audio src={"http://localhost:90/" + this.state.Audio} controls>
                            </audio>
                        </div>
                    </div>
                </div>     
        )
    }
}
export default Listen;