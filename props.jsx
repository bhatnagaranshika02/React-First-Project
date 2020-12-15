import React from 'react';
import ReactDOM from 'react-dom';

class example extends React.Component{
    render(){
        return 'My name is {this.prop.name}'
    }
}
const var = <example name="Anshika" />;
RenderDOM.render(var,Document.getElementById('root'));
