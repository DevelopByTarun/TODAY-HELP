import React from "react";
import { connect } from 'react-redux';

const Second = (props)=> {

    var gocha = {

        myStyle: {
            fontFamily: "gothic"
        }
    }

    return(
        <div>
            <h2 style={gocha.myStyle} className="alert alert-dark">
            Counter Value Is {props.result}
            </h2>
        </div>
    );
}

const centralStateToPropsMapping = (state)=> {

    return {
        result: state.counter
    }
}

export default connect(centralStateToPropsMapping)(Second);