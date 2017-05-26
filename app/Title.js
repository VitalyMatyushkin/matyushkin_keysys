import React, { Component } from 'react';

class Title extends Component {
    render(){
        // console.log(this.props.todoCount);
        return (
        <div>
            <div>
                <h1>to-do ({this.props.todoCount})</h1>
            </div>
        </div>
        );
    }
}

export default Title;
