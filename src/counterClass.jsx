import React, {Component} from 'react';
import {connect} from 'react-redux';
import {counterAdd,counterSub,counterChangeNumberSubAddActionCreator} from  './actions.js'

class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state= {
            number: 0,
        }
    }

    handlerAdd = (event) => {
        this.props.sumar(this.state.number);
    }

    handlerSub = (event) => {
        this.props.restar(this.state.number);
    }

    handlerOnChangeNumber = (event) => {
        const {value,name} = event.target;
        this.setState({
            [name]: Number.parseInt(value),
        })
    }

    render() { 
        return ( 
        <div> {this.props.numero}  <br />
        <input name= "numberAdd" type="number" value= {this.state.numberAdd} onChange={this.handlerOnChangeNumber} />
            <button onClick= {this.handlerAdd} >Add </button>
            <button onClick= {this.handlerSub} >Sub </button>
            <input></input>
        </div>
         );
    }
}
 
const mapStateToProps = state => ({
    numero: state.count,
    numeroMenos: state.numberSub,
})

const mapDispatchToProps = (dispatch) => {
    return {
        sumar: n => dispatch(counterAdd(n)),
        restar: n => dispatch(counterSub(n)),
        changeNumberSub: event => {
            const {value} = event.target

        }
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CounterClass);

