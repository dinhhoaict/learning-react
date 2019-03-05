/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
    render () {
        let i = 100;
        const a = 100;
        return <h1>Hello World from React boilerplate aaaaa {i} {a}</h1>;
    }
}
ReactDOM.render(<Welcome />, document.getElementById('root'));
