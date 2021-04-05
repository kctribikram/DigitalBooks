import React,{ Component } from "react";
import axios from 'axios';
class AddBook extends Component{
    state = {
        Title : '',
        Auther : '',
        Description : '',
        Cost:'',
        Image : '',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    
    }
    inputHandler=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    fileHandler = (e)=>{
        this.setState({
            pimage : e.target.files[0]
        })
    }
    bookAddMethod = (e)=>{
        e.preventDefault();
        const data = new FormData() // new line

        data.append('Image', this.state.Image)
        data.append('Title', this.state.Title)
        data.append('Cost', this.state.Cost)
        data.append('Auther',this.state.Auther)
        data.append('Description', this.state.Description)

        axios.post("http://localhost:90/product/insert", data)
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
                <p>
                    <label>Book Title</label>
                    <input type="text"
                     value={this.state.Title}
                     name="Title"
                     onChange={this.inputHandler}
                     />
                    </p>

                    <p>
                    <label>Book Auther</label>
                    <input type="text"
                     value={this.state.Auther}
                     name="Auther"
                     onChange={this.inputHandler}
                     />
                    </p>
                    
                    <p>
                    <label>Book Price</label>
                    <input type="text"
                    value={this.state.Cost}
                    name="Cost"
                    onChange={this.inputHandler}
                    />
                    </p>

                    <p>
                    <label>Book Description</label>
                    <input type="text" 
                    value={this.state.Description}
                    name="Description"
                    onChange={this.inputHandler}
                    />
                    </p>
                    <p>
                        <input type="file" name="Image" onChange={this.fileHandler} />



                        <button onClick={this.bookAddMethod}>Add</button>
                    </p>
            </form>
            </div>
        )
    }
}
export default AddBook;