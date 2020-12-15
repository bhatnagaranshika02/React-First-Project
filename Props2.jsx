import React from 'react';
import ReactDOM from 'react-dom';

class example extends React.Component{
    render(){
        return <h2>My name is {this.prop.information.name}{this.prop.information.surname}</h2>;
    }
}
class Garage extends React.Component{
    render(){

        const myinfo = {name: "Anshika" , surname:"Bhatnagar"};
        return(
            <div>
            <h1>What is my name?</h1>

            <example information={myinfo} />
            </div>
        )
    }

}
RenderDOM.render(<Garage />,Document.getElementById('root'));
