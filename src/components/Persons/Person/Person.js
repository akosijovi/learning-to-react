import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import Auxilary from '../../../hoc/Auxilary';
import withClassAlt from '../../../hoc/withClassAlt';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
    constructor( props ) {
        super( props );
        console.log( '[Person.js] Inside Constructor', props );
        this.inputElement = React.createRef();
    }

    componentWillMount () {
        console.log( '[Person.js] Inside componentWillMount()' );
    }

    componentDidMount () {
        console.log( '[Person.js] Inside componentDidMount()' );
        if( this.props.position === 0 ) {
            this.inputElement.current.focus();
        }
    }

    render () {
        console.log( '[Person.js] Inside render()' );
        return (
            <Auxilary>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I am authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input ref={ this.inputElement } type="text" onChange={this.props.changed} value={this.props.name} />
            </Auxilary>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClassAlt(Person, classes.Person);
