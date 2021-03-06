import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare,FaGooglePlusSquare} from "react-icons/fa";

class Footer extends Component{

    render(){
        return(
            <footer>
            <div class="footcontainer">
                <div class="footercontent">
                    <div class="items">
                        <a href="#" class="logo">DigitalBooks</a>  
                        <p>DigitalBooks is an online based audiobook and bookviewer
                     service developed by Tribikram kc as a final assignment of web development that allows users to read and listen
                      audiobooks and other forms of books or word content that are available in the market. </p>
                        <div class="social">
                             <FaFacebookSquare className="facebook" />
                             <FaTwitterSquare className="twitter" />
                             <FaInstagramSquare className="instagram" />
                             <FaGooglePlusSquare className="google" />
                        </div>
                    </div>
                    <div class="items">
                        <h3> Product</h3>
                        <ul>
                            <li><a href="/book">Audiobook</a></li>
                            <li><a href="/book">Digitalbook</a></li>
                        </ul>                          
                    </div>
    
                    <div class="items">
                        <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                    </div>
                    <div class="items">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Knowledge Base</a></li>
                            <li><a href="#">Video Tutorials</a></li>
                        </ul>
                    </div>
    
                </div>
                <p class="end">Copyright ?? 2020 by DigitalBooks. All rights reserved.</p>
            </div>
        </footer>
        )
    }
}
export default Footer;