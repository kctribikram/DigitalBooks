import { Component,state } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";
import { MdAddCircle } from "react-icons/all";


class Watchlist extends Component{
    state = {
        book : [],
        id : localStorage.getItem('data'),
        config : {
           headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
       }
    }
    componentDidMount(){
        axios.get("http://localhost:90/watchlist/"+ this.state.id)
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

    deletebook=(wid)=>{
        axios.delete('http://localhost:90/watchlist/delete/'+wid, this.state.config)
        .then((response)=>{
            console.log(response.data.message)
            window.location.reload();
        })
        .catch((err)=>{
            console.log(err.response);
        })
    }

    render(){
        return(
            <div class = "viewtrend">
                <Header></Header>
            <div className="bookscontainer">
                  <div class = "title">
                      <h3>My Watchlist</h3>
                  </div>
                  <div class = "trend-grid">
          {
              this.state.book.map((Book) =>{
                  return(
                      <div class = "trend-item">
                          <div className="bodyimg">
                              <img src={`http://localhost:90/${Book.book.Image}`}/>     
                          </div>                 
                        <div class = "trend-item-content">
                          <h3>{Book.book.Title}</h3>
                          <h4>{Book.book.Cost}</h4>
                          <Link to={'/read/'+Book.book._id}><button type="button" class="btnupd">Read</button></Link>
                          <Link to={'/listen/'+Book.book._id}><button type="button" class="btndle">Listen</button></Link>
                          <button type="button" class="btnrem" onClick={this.deletebook.bind(this,Book._id)}>Remove</button>
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
export default Watchlist;