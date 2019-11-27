import React, {Component} from 'react';
import {connect} from 'react-redux';
import {counterAdd,counterSub,counterChangeNumberSubAddActionCreator} from  './actions.js'

class CounterClass extends Component {

    constructor(props) {
        super(props);
        this.state= {
            number: 0,
            numberAdd:1,
        }
    }

    handlerAdd = (event) => {
        this.props.sumar(this.state.numberAdd);
    }

    handlerSub = (event) => {
        this.props.restar(this.state.numberAdd);
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
            <input name= "numberAdd" type="number" value= {this.state.number} onChange={this.handlerOnChangeNumber} />
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
            const {value} = event.target;
            dispatch(counterChangeNumberSubAddActionCreator(value))
        }
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(CounterClass);

