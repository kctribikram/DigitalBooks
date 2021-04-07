import { Component,state } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";


class Profile extends Component{
    state = {
        reader : [],
        config : {
           headers : {'authorization' : 'Bearer ${localStorage.getItem}'}
       }
    }
    componentDidMount(){
        axios.get("http://localhost:90/reader/show")
        .then((response)=>{
            console.log(response)
            this.setState({
                reader : response.data1.data1
            })
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class = "aa">
            {
                this.state.reader.map((User) =>{
                    return(
                        <div class="wrapper">
                            <div class="left">
                                <img src="https://i.imgur.com/cMy8V5j.png" 
                                alt="user" width="100"/>
                                <h1>Alex William</h1>
                                <p>UI Developer</p>
                            </div>
                            <div class="right">
                                <div class="info">
                                    <h3>Information</h3>
                                    <div class="info_data">
                                        <div class="data">
                                            <h4>Email</h4>
                                            <p>{User.email}</p>
                                        </div>
                                        <div class="data">
                                        <h4>Phone</h4>
                                            <p>0001-213-998761</p>
                                    </div>
                                    </div>
                                </div>
                            
                            <div class="projects">
                                    <h3>Projects</h3>
                                    <div class="projects_data">
                                        <div class="data">
                                            <h4>Recent</h4>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div class="data">
                                        <h4>Most Viewed</h4>
                                            <p>dolor sit amet.</p>
                                    </div>
                                    </div>
                                </div>
                            
                                <div class="social_media">
                                    <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    )
                })
            }
    </div>
        )
    }
}
export default Profile;


