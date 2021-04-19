import axios from "axios";
import { Component } from "react";
import Header from "../Header/Header";

class Update extends Component{
    state = {
        Title : '',
        Auther : '',
        Description : '',
        Language : '',
        Image : '',
        Cost : '',
        bid : this.props.match.params.id
    }
   changeHandler = (e)=>{
       this.setState({
        [e.target.name] : e.target.value
       })
        
   }

componentDidMount(){
    axios.get('http://localhost:90/book/single/' + this.state.bid)
    .then((response)=>{
        this.setState({
            Title : response.data.Title,
            Auther : response.data.Auther,
            Description : response.data.Description,
            Language : response.data.Language,
            Cost : response.data.Cost,
            Image : response.data.Image
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
        this.props.history.push("/adminbook")
        window.location.reload();
    })
    .catch((err)=>{
        console.log(err.response)
    })
}

    render(){
        return(

            <div class='formcontainer'>
                <Header></Header>
                <form className="update-form">
                    <h1>Update Book</h1>
                    <div class="textu">
                        <input type="text" name="Title" value={this.state.Title} onChange={this.changeHandler} placeholder="Title"/>     
                    </div>

                    <div class="textu">
                        <input type="text" name="Auther" value={this.state.Auther} onChange={this.changeHandler} placeholder="Auther"/>     
                    </div>
                    <div class="textu">
                        <input type="text" name="Description" value={this.state.Description} onChange={this.changeHandler} placeholder="Description"/>     
                    </div>
                    <div class="textu">
                        <input type="text" name="Language" value={this.state.Language} onChange={this.changeHandler} placeholder="Language"/>     
                    </div>
                    <div class="textu">
                        <input type="text" name="Cost" value={this.state.Cost} onChange={this.changeHandler} placeholder="Cost"/>     
                    </div>
                    <div class="textu">
                        <input type="file" name="Image" onChange={this.fileHandler} />     
                    </div>
                    <input type="submit" class="updbtn" onClick={this.updateData}></input>
                
            </form>
        </div>
        )
        
    }
}

export default Update