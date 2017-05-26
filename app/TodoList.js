import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    render(){
        let todos = this.props.todos;
        let remove = this.props.remove;
        const todoNode = todos.map((todo) => {
            return (<Todo todo={todo} key={todo.id} remove={remove}/>)
         });
        // console.log(todoNode);
        return (
            <div>
                {todoNode}
            </div>
        );
    }
}

export default TodoList;
