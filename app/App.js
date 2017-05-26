import React, { Component } from 'react';
import {render} from 'react-dom';
import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';


window.id = 0;
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    addTodo(val){
        const todo = {text: val, id: window.id++}
        this.state.data.push(todo);
        this.setState({data: this.state.data});
    }
    handleRemove(id){
        const remainder = this.state.data.filter((todo) => {
            if(todo.id !== id) return todo;
        });
        this.setState({data: remainder});
    }
    render(){
        // console.log(this);
        return (
          <div>
              <Title todoCount={this.state.data.length}/>
              <TodoForm
                  addTodo={this.addTodo.bind(this)}
                  // data={this.state.data}
              />
              <TodoList
                  todos={this.state.data}
                  remove={this.handleRemove.bind(this)}
              />
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
