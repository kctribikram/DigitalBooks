import { Component } from "react";
import Book from "./Book";
import axios from 'axios';
import Header from "../Header/Header"
import { Link } from "react-router-dom"
import Footer from "../Footer/Footer";
import Featured from "./Featured";



class Home extends Component{
  state = {
      limit: 5,
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
            <div className="body">
          <div class="homecontainer">
                <Header></Header>
               <div class="row">
                <div class="col">
                  <h1>Digital Books</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  <button type="button" class="btnh" onClick={() => {this.props.history.push("/book")}}>Explore</button>
                </div>
                <div class="col">
                    <div class="scard card1" onClick={() => {this.props.history.push("/book")}}>
                    </div>
                    <div class="scard card2" onClick={() => {this.props.history.push("/book")}}>
                    </div>
                    <div class="scard card3" onClick={() => {this.props.history.push("/book")}}>
                    </div>
                    <div class="scard card4" onClick={() => {this.props.history.push("/book")}}>
                    </div>
                </div>
              </div>
        </div>
              <div class = "trend">
                  <div className="bookscontainer">
                        <div class = "title">
                            <h2>TRENDING NOW</h2>
                            <h3>BEST SELLING BOOKS</h3>
                        </div>
                        <div class = "trend-grid">
                {
                    this.state.book.slice(this.state.limit, this.state.limit + 3).map((Book) =>{
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
            <Featured></Featured>
            <Footer></Footer>
         
        </div>
        )
    }
}
export default Home;