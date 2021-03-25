import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <div class="navbar">
              <div class="logo"><a href="/">Digital Books</a></div>
                <nav>
                  <ul>
                    <li><a href="/login">Login</a></li>
                  </ul>
                </nav>
	        	 </div> 
        )
    }
}
export default Header;