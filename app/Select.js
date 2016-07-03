import React, { Component } from 'react';
import {render} from 'react-dom';

class Select extends Component {
    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return (
            <div>
                Select :
                <select value="B">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
            </div>
        )
    }
}

render(<Select />, document.body);
