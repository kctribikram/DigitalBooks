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


class AdminBook extends Component{
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
    deletebook=(bid)=>{
        axios.delete('http://localhost:90/book/delete/'+bid,this.state.config)
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

                <div className="addicon">
                <MdAddCircle className="add" onClick={() => {this.props.history.push("/addbook")}}/>
                </div>
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
                          <Link to={'/update/'+Book._id}><button type="button" class="btnupd">Edit</button></Link>
                            <button type="button" class="btndle" onClick={this.deletebook.bind(this,Book._id)}>Delete</button>
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
export default AdminBook;