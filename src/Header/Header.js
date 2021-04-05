import { Component } from "react";

class Header extends Component{
  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href = '/'
}
    render(){
      if(localStorage.getItem('token') && localStorage.getItem('usertype')=='Admin'){
        var menu = 
        <>
            <div class="navbar">
              <div class="logo"><a href="/">Digital Books</a></div>
                <nav>
                  <ul>
                    <li><a href="/logout" onClick={this.logout}>Logout</a></li>
                  </ul>
                </nav>
	        	 </div> 
        </>
    }
    else if(localStorage.getItem('token') && localStorage.getItem('usertype')=='Reader'){
        var menu = 
        <>
            <div class="navbar">
              <div class="logo"><a href="/">Digital Books</a></div>
                <nav>
                  <ul>
                    <li><a href="/logout" onClick={this.logout}>Logout</a></li>
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