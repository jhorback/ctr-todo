import React from "react";
import './ctr-todo-app.scss';

class TodoApp extends React.Component {

    render() {
        return (
            <div class="TodoApp">
                <h1>Connect.Tech - Todo - Native</h1>
                <span>{this.props.name}</span>
            </div>
        );
    }
  }

export default TodoApp;




