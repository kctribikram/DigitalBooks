import axios from "axios";
import { Component } from "react";
import Header from "../Header/Header";
import { AiFillFacebook, AiFillTwitterCircle ,AiFillGithub ,AiFillYoutube, AiOutlineEdit} from "react-icons/all";

class UpdateProfile extends Component{

    state = {
        first_name : '',
        last_name : '',
        age : '',
        email:'',
        contact : '',
        location : '',
        id : this.props.match.params.id,
    }
   changeHandler = (e)=>{
       this.setState({
        [e.target.name] : e.target.value
       })
        
   }
   
    componentDidMount(){
        axios.get("http://localhost:90/user/"+ this.state.id)
        .then((response)=>{
            this.setState({
                first_name : response.data.reader.first_name,
                last_name : response.data.reader.last_name,
                age : response.data.reader.age,
                email: response.data.reader.email,
                contact:response.data.reader.contact,
                location:response.data.reader.location
            })   
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    updateData = (e)=>{
        e.preventDefault();
        axios.put('http://localhost:90/reader/update/'+ this.state.id, this.state)
        .then((response)=>{
            console.log(response)
            this.props.history.push("/profile")
        })
        .catch((err)=>{
            console.log(err.response)
        })
    }

    render(){
        return(
            <div className="app">
                 <Header></Header>
            {
                <div class="updateprofile">
                <div class="updateprofile-header">
                    <div class="pic">
                    </div>
                    <div class="name">{this.state.first_name}</div>
                    <div class="desc">{this.state.location}</div>
                    <div class="sm">
                    <AiFillFacebook className="facebookp"/>
                    <AiFillTwitterCircle className="twitterp"/>
                    <AiFillGithub className="githubp"/>
                    <AiFillYoutube className="youtubep" />
                    </div>
                </div>
                <div class="updateprofile-footer">
                    <div class="numbers">
                    <div class="items">
                    <form className="updateprofile-form">
                        <div class="textu">
                            <input type="text" name="first_name" value= {this.state.first_name} onChange={this.changeHandler} placeholder="First Name"/>     
                        </div>

                        <div class="textu">
                            <input type="text" name="last_name" value={this.state.last_name} onChange={this.changeHandler} placeholder="Last Name"/>     
                        </div>
                        <div class="textu">
                            <input type="text" name="age" value={this.state.age} onChange={this.changeHandler} placeholder="Age"/>     
                        </div>
                        <div class="textu">
                            <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} placeholder="Email"/>     
                        </div>
                        <div class="textu">
                            <input type="text" name="contact" value={this.state.contact} onChange={this.changeHandler} placeholder="Contact"/>     
                        </div>
                        <div class="textu">
                            <input type="text" name="location" value={this.state.location} onChange={this.changeHandler} placeholder="Location"/>     
                        </div>
                        <input type="submit" class="updbtn" onClick={this.updateData}></input>
                    </form>
                    </div>
                    </div>
                </div>
                </div>   
            }
          </div>
        )
        
    }
}

export default UpdateProfile