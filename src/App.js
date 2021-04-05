import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Header/Header'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom' 
import Container from './Container/Container';
import Home from './Container/Home';
import Login from './Container/Login';
import Register from './Container/Register';
import Book from './Container/Book'
import Update from './Container/Update';
import BookDetail from "./Container/BookDetail"
import AddBook from './Container/AddBook';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/home' component={Home} exact/>
        <Route path='/book' component={Book} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
        <Route path='/update' component={Update} exact/>
        <Route path='/bookdetail/:id' component={BookDetail} exact/>
        <Route path='/addbook' component={AddBook} exact/>
      </Switch>
    </Router>
  );
}

export default App;
