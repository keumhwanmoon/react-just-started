import React, { Component } from 'react';
import {render} from 'react-dom';

class Textarea extends Component {
    constructor() {
        super();
        this.state = {
            textarea: "React\nReact\nReact"
        };
    }

    render() {
        return (
            <div>
                Textarea : 
                <textarea value={this.state.textarea.value}/>
            </div>
        )
    }
}

render(<Textarea />, document.body);
