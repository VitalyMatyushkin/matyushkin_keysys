import React, { Component } from 'react';

class TodoForm extends Component {
    render(){
        let addTodo = this.props.addTodo;
        // let data = this.props.data;
        // console.log(addTodo);
        let input;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                if (input.value !== '') {
                    addTodo(input.value);
                }
                input.value = '';
            }}>
                <input
                    type="text"
                    className="form-control"
                    ref={
                        node => {input = node}
                    }
                />
                <br/>
            </form>
        );
    }
}

export default TodoForm;

