import React, { Component } from 'react';

class Customers extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>Customers</h2>
                    <ul>
                        <li>{this.props.first} {this.props.last}</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Customers;