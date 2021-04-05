import { Component,state } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';
import Header from "../Header/Header"
import { Link } from "react-router-dom"


class Book extends Component{
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
            <div className="bookcontainer">
                <Header></Header>
            <div id="product">
            {
                this.state.book.map((Book) =>{
                    return(
                    <div className="gcard">
                        <div className="content">
                            <img src={`http://localhost:90/${Book.Image}`}/>                  
                        </div>
                        <h4>{Book.Title}</h4>                       
                        <span>{Book.Description}</span> 
                        <h5>{Book.Cost}</h5>

                        <Link to={'/bookdetail/'+Book._id}><button type="button" class="btn btn-info">Read More</button></Link>
                    </div>
                    )
                })
            }
            </div>
        </div>
            // <Container>
            //     <Row>
            //         <Col>
            //         <Route path='/register' component={Register} />
            //         <Route path='/login' component={Login} />
            //         </Col>
            //         <Col>{
            //             this.state.book.map((Book)=>{
            //                 return (<div>
            //                     {
            //                     Book.Description 
            //                     }
            //                     {
            //                         Book.Title
            //                     }
            //                     {
            //                         Book.Image
            //                     }    
            //                      </div>
            //                     ) 
            //             })
            //             }
            //         </Col>
            //     </Row>
            //  </Container>
        )
    }
}
export default Book;