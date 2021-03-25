import { Component,state } from "react";
import {Container, Row , Col} from 'react-bootstrap';
import Register from './Register';
import Login from './Login'
import {Route} from 'react-router-dom'
import axios from 'axios';

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
                        <button>Add to cart</button>
                    </div>
                    )
                })
            }
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