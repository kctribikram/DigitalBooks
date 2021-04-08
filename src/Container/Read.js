import { Component,state } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom'
import Header from "../Header/Header"

class Read extends Component{
  
    state = {
        File : '',
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
                File : response.data.File
            })   
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
                <div className="pdfcontainer">
                   <iframe src={"http://localhost:90/" + this.state.File} width="100%" height="790px"/>
                </div>    

        )
    }
}
export default Read;