import React from 'react';

export class Address extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            streetNumber: '1000',
            streetName: 'second st',
            city: 'kansas',
            state: 'MO',
            zipcode: '64112'
        }
    }

    render() {

        return (
            <div>
                <p>{this.state.streetNumber} {this.state.streetName} {this.state.city}, 
                {this.state.state} {this.state.zipcode}</p>
            </div>
        )
    }
}