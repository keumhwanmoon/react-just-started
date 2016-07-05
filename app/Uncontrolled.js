import React, { Component } from 'react';
import { render } from 'react-dom';

class Uncontrolled extends Component {
    handleSubmit(event) {
        console.log("Submitted values are :", event.target.name.value, event.target.email.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="formGroup">
                    Name: <input name="name" type="text" />
                </div>
                <div className="formGroup">
                    E-mail: <input name="email" type="email" />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

render(<Uncontrolled />, document.getElementById('unControlled'));