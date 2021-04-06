import { Component } from "react";
import { BiAlignRight } from "react-icons/all";
class Header extends Component{
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href = '/'
}

    render(){
      if(localStorage.getItem('token') && localStorage.getItem('role')=='Admin'){
        var menu = 
        <>
            <div class="navbar">
              <div class="logo"><a href="/">Digital Books</a></div>
                <nav>
                <ul>
                    <li><a href="/adminbook" >Books</a></li>
                  </ul>
                  <ul>
                    <li><a href="/" onClick={this.logout}>Logout</a></li>
                  </ul>
                </nav>
	        	 </div> 
        </>
    }
    else if(localStorage.getItem('token') && localStorage.getItem('role')=='Reader'){
        var menu = 
        <>
            <div class="navbar">
              <div class="logo"><a href="/">Digital Books</a></div>
                <nav>
                  <ul>
                    <li><a href="/" onClick={this.logout}>User</a></li>
                  </ul>
                  <ul>
                    <li><a href="/" onClick={this.logout}>Logout</a></li>
                  </ul>
                </nav>
	        	 </div> 
        </>
    }
      else {
        var menu =
        <>
             <div class="navbar">
               <div class="logo"><a href="/">Digital Books</a></div>
                 <nav>
                   <ul>
                     <li><a href="/login">Login</a></li>
                   </ul>
                 </nav>
	        	 </div> 
        </>
      }
  
  
  
  
        return(
            // <div class="navbar">
            //   <div class="logo"><a href="/">Digital Books</a></div>
            //     <nav>
            //       <ul>
            //         <li><a href="/login">Login</a></li>
            //       </ul>
            //     </nav>
	        	//  </div> 
            <div>{menu}</div>
        )
    }
}
export default Header;