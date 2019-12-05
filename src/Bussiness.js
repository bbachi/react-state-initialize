import React from 'react';

export class Bussiness extends React.Component {

    state = {
        bussinessName: 'Bussiness Name',
        streetNumber: '1000',
        streetName: 'second st',
        city: 'kansas',
        state: 'MO',
        zipcode: '64112'
    }

    render() {

        return (
            <div>
                <h1>{this.state.bussinessName}</h1>
                <div>Business Address:</div>
                <p>{this.state.streetNumber} {this.state.streetName} {this.state.city}, 
                {this.state.state} {this.state.zipcode}</p>
            </div>
        )
    }
}