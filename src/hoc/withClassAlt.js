import React, { Component } from 'react';

// Stateless Higher Order Component
// const withClassAlt = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent  {...props}/>
//         </div>
//     );
// }

// Stateful HOC
const withClassAlt = (WrappedComponent, className) => {
    return class extends Component {
        render () {
            return (
                <div className={className}>
                    <WrappedComponent  {...this.props} />
                </div>
            )
        }
    }
}

export default withClassAlt;
