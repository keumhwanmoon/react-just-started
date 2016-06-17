import React, { Component } from 'react';
import {render} from 'react-dom';

// class App extends Component {
//   render(){
//     var place = "World"
//     return (
//       <h1>Hello {place}!!</h1>
//     );
//   }
// }

// 부모 컴포넌트
class GroceryList extends Component {
  render() {
    return (
        <ul>
          <ListItem quantity="1" name="Bread" />
          <ListItem quantity="6" name="Eggs" />
          <ListItem quantity="2" name="Milk" />
        </ul>
    )
  }
}

// 자식 컴포넌트
class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.quantity} x {this.props.name}
            </li>
        )
    }
}

render(<GroceryList />, document.getElementById('root'));
