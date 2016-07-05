import React, { Component } from 'react';
import {render} from 'react-dom';

class FocusText extends Component {
    handleClick() {
        this.refs.myTextInput.focus();
    }

    render() {
        return (
            <div>
                <input type="text" ref="myTextInput" />
                <input type="button" value="Focus the text Input"
                       onClick={this.handleClick.bind(this)} />
            </div>
        );
    }
}

render(<FocusText />, document.getElementById('focusText'));