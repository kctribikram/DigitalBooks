import { Component } from "react";
import Book from "./Book";
import Header from "../Header/Header"

class Home extends Component{
    render(){
        return(
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
                  <button type="button" class="button" onClick={() => {this.props.history.push("/book")}}>Explore</button>
                </div>
          <div class="col">
				      <div class="scard card1">
				      </div>
				      <div class="scard card2">
				      </div>
				      <div class="scard card3">
				      </div>
				      <div class="scard card4">
				      </div>
			    </div>
              </div>
            </div>
          // </div>
        )
    }
}
export default Home;