import logo from './logo.svg';
import './App.css';
import './Listen.css';
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
import Featured from './Container/Featured';
import AdminBook from './Container/AdminBook';
import Profile from './Container/Profile';
import Read from './Container/Read';
import ReaderBook from './Container/ReaderBook';
import Listen from './Container/Listen';


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
        <Route path='/featured' component={Featured} exact/>
        <Route path='/adminbook' component={AdminBook} exact/>
        <Route path='/update/:id' component={Update} exact/>
        <Route path='/profile' component={Profile} exact/>
        <Route path='/readerbook' component={ReaderBook} exact/>
        <Route path='/read/:id' component={Read} exact/>
        <Route path='/listen/:id' component={Listen} exact/>
      </Switch>
    </Router>
  );
}

export default App;
