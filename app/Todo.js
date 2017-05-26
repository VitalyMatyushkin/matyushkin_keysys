import React, { Component } from 'react';

class Todo extends Component {
    render(){
        // console.log(this.props.todo);
        let todo = this.props.todo;
        let remove = this.props.remove;
        return (
            <div>
                <a href="#" className="list-group-item" onClick={function(){remove(todo.id)}}>{todo.text}</a>
            </div>
        );
    }
}

export default Todo;
