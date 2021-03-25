import axios from "axios";
import { Component } from "react";

class Update extends Component{
    state = {
        Title : '',
        Description : '',
        Cost : '',
        id : this.props.match.params.id
    }
   changeHandler = (e)=>{
       this.setState({
        [e.target.name] : e.target.value
       })
        
   }

componentDidMount(){
    axios.get('http://localhost:90/book/single/' + this.state.id)
    .then((response)=>{
        this.setState({
            Title : response.data.Title,
            Description : response.data.Description,
            Cost : response.data.Cost
        })   

      
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

updateData = (e)=>{
    e.preventDefault();
    axios.put('http://localhost:90/book/update', this.state)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err.response)
    })
}





    render(){
        return(

            <div>
            <form>
                <p><label>Book Title</label>
                    <input type="text" name="pname"
                      value={this.state.Title}
                       onChange={this.changeHandler} />
                </p>

                <p>
                    Book Description
                    <input type="text"
                    name="pdesc"
                    value={this.state.Description}
                    onChange={this.changeHandler}
                    />
                </p>
                <p>
                   <button onClick={this.updateData}>Update</button>
                </p>
            </form>
        </div>
        )
        
    }
}

export default Update