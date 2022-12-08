import { Component } from "react";
import './dice.css';

class Dice extends Component{
    state = {
        images: [
            {link : './tasks/images/one.png'},
            {link : './tasks/images/two.png'},
            {link : './tasks/images/three.png'},
            {link : './tasks/images/four.png'},
            {link : './tasks/images/five.png'},
            {link : './tasks/images/six.png'}
        ],
        link1:'./tasks/images/one.png',
        link2:'./tasks/images/one.png',
        num1: 0,
        num2: 0,
        p_num:0
        };

    handleRandomNumberFirst = () => {
        this.setState({ num1: Math.round(Math.random() * 5 ),
                        link1: this.state.images[this.state.num1].link });
    };

    handleRandomNumberSecond = () => {
        this.setState({ 
                        num2: Math.round(Math.random() * 5 ),
                        link2: this.state.images[this.state.num2].link  });
    };

    setRandomNumber =()=>{
        this.setState({ p_num: Math.round(Math.random() * 5 )})
    }

    componentDidMount = () => {
        window.addEventListener("click", this.setRandomNumber);
    };

    render(){
        return(
            <div>
                <div className="first dice" onClick={this.handleRandomNumberFirst}>
                    <img src={require(`${this.state.link1}`)} alt='dice'></img>
                </div>
                <div className="second dice" onClick={this.handleRandomNumberSecond}>
                <img src={require(`${this.state.link2}`)} alt='dice'></img>
                </div>
                <p className="rand">{this.state.p_num}</p>
            </div>
        );
    }
} 

export default Dice;
