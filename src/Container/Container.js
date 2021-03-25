import { Component } from "react";
import Register from './Register';
import {Route} from 'react-router-dom';
import Login from "./Login";
import Home from "./Home"
import Book from "./Book";

class Container extends Component{
    render(){
        return(
            <div>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/book" component={Book}/>
            </div>
        )
    }
}
export default Container;