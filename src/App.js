import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import CreateTodo from "./component/create-todo.component";
import EditTodo from "./component/edit-todo.component";
import TodoList from "./component/todos-list.component";
import logooo from "./logooo.png"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <a className="navbar-brand" href="https://google.com" target="_blank" rel="noopener noreferrer" >
              <img src={logooo} width="50" height="50" alt="google.com" />
            </a>
            <Link to="/" className="navbar-brand">Todo App!</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>

    );
  }
}

export default App;
