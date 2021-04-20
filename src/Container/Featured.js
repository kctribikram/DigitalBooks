import { Component,state } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";

class Featured extends Component{
    state = {
        limit: 7,
        book : [],
        config : {
           headers : {'authorization' : 'Bearer ${localStorage.getItem}'}
       }
    }
    componentDidMount(){
        axios.get("http://localhost:90/book/show")
        .then((response)=>{
            console.log(response)
            this.setState({
                book : response.data.data
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class = "featured">
                <div class = "container">
            <div id="product">
            {
                this.state.book.slice(this.state.limit, this.state.limit + 1).map((Book) =>{
                    return(
                        
                            <div class = "featured-item">
                            <div class = "featured-item-img">
                                <img src={`http://localhost:90/${Book.Image}`}/>  
                            </div>
                            <div class = "featured-item-content">
                                <div class = "title">
                                <h3>FEATURED BOOK </h3>
                                <h2>{Book.Title}</h2>
                                <h5 class = "item-price">{Book.Cost}</h5>
                                </div>
                                <h6 class = "text">
                               
                                </h6>
                                <div class = "featuredbtns">
                                <Link to={'/bookdetail/'+Book._id}><button type="button" class="btnfeatured">Read More</button></Link>
                                </div>
                            </div>
                            </div>
                    )
                })
            }
            </div>
        </div>
    </div>
        )
    }
}
export default Featured;