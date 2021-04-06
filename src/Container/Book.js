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
            <div class = "viewtrend">
                <Header></Header>
            <div className="bookscontainer">
                  <div class = "title">
                      <h3>EXPLORE ALL THE BOOKS</h3>
                  </div>
                  <div class = "trend-grid">
          {
              this.state.book.map((Book) =>{
                  return(
                      <div class = "trend-item">
                          <div className="bodyimg">
                              <img src={`http://localhost:90/${Book.Image}`}/>     
                          </div>                 
                        <div class = "trend-item-content">
                          <h3>{Book.Title}</h3>
                          <h4>{Book.Cost}</h4>
                          <Link to={'/bookdetail/'+Book._id}><button type="button" class="btn btn-info">Read More</button></Link>
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