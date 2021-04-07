import { Component, state } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom'
import Header from "../Header/Header"

class Listen extends Component {

    state = {
        Audio: '',
        id: this.props.match.params.id
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    componentDidMount() {
        axios.get("http://localhost:90/book/single/" + this.state.id)
            .then((response) => {
                this.setState({
                    Audio: response.data.Audio
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    render() {
        return (
                <div class="main">
                    <p id="logo"><i class="fa fa-music"></i>Music</p>

                        <div class="left">
                            <img id="track_image"/>
                            <div class="volume">
                                <p id="volume_show">90</p>
                                <i class="fa fa-volume-up" aria-hidden="true" onclick="mute_sound()" id="volume_icon"></i>
                                <input type="range" min="0" max="100" value="90" onchange="volume_change()" id="volume"/>  
                            </div>
                        </div>
                            <div class="right">
                                <p id="title">title.mp3</p>
                                <p id="artist">Artist name</p>

                                <div class="middle">
                                    <button onclick="previous_song()" id="pre"><i class="fa fa-step-backward" aria-hidden="true"></i></button>
                                    <button onclick="justplay()" id="play"><i class="fa fa-play" aria-hidden="true"></i></button>
                                    <button onclick="next_song()" id="next"><i class="fa fa-step-forward" aria-hidden="true"></i></button>
                                </div>

                                <div class="duration">
                                    <input type="range" min="0" max="100" value="0" id="duration_slider" onchange="change_duration()"/>
                                </div>
                                    <button id="auto" onclick="autoplay_switch()">Auto play <i class="fa fa-circle-o-notch" aria-hidden="true"></i></button>
                            </div>
                </div>

        )
    }
}
export default Listen;