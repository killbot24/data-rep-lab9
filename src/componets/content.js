import React from 'react';
export class Content extends React.Component {//Returns below text when called
    render() {
        return (
            <div>
                <h1>hello world!</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
            </div>
            //Displays local time
        );
    }
}