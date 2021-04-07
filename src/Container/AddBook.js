import React,{ Component } from "react";
import axios from 'axios';
import Header from "../Header/Header";

class AddProduct extends Component{

    state = {
        Title : '',
        Auther : '',
        Description : '',
        Cost : '',
        Language: '',
        Image:'',
        Audio:'',
        File:'',
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
            [e.target.name] : e.target.files[0]
        })
    }

    proAddMethod = (e)=>{
        e.preventDefault();
        const data = new FormData() // new line

        data.append('Title', this.state.Title)
        data.append('Auther', this.state.Auther)
        data.append('Description', this.state.Description)
        data.append('Cost', this.state.Cost)
        data.append('Language',this.state.Language)
        data.append('Image',this.state.Image)
        data.append('Audio',this.state.Audio)
        data.append('File',this.state.File)

        axios.post("http://localhost:90/book/insert", data,this.state.config)
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }
    render(){
        return(
            <div class='formcontainer'>
                <Header></Header>
                <form className="addbook-form">
                    <h1>Add Book</h1>
                    <div class="txta">
                        <input type="text" name="Title" value={this.state.Title} onChange={this.inputHandler} placeholder="Title"/>     
                    </div>
                    <div class="txta">
                        <input type="text" name="Auther" value={this.state.Auther} onChange={this.inputHandler} placeholder="Auther"/>     
                    </div>
                    <div class="txta">
                        <input type="text" name="Description" value={this.state.Description} onChange={this.inputHandler} placeholder="Description"/>     
                    </div>
                    <div class="txta">
                        <input type="text" name="Cost" value={this.state.Cost} onChange={this.inputHandler} placeholder="Cost"/>     
                    </div>
                    <div class="txta">
                        <input type="text" name="Language" value={this.state.Language} onChange={this.inputHandler} placeholder="Language"/>     
                    </div>
                    <div class="txta">
                        <input type="file" name="Image" onChange={this.fileHandler} />
                    </div>     
                    <div class="txta">
                        <input type="file" name="Audio" onChange={this.fileHandler} />
                    </div>  
                    <div class="txta">
                        <input type="file" name="File" onChange={this.fileHandler} />
                    </div>                     
                    <input type="submit" class="addbtn" onClick={this.proAddMethod}></input>
                </form>
            </div>
        )
    }
}
export default AddProduct;