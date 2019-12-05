import React from 'react';

export class Name extends React.Component {

    constructor(props) {
        super(props)

        console.log('This is first method called upon initialization')
    }

    render() {

        return (
            <div>
                <p>Name Component</p>
            </div>
        )
    }
}