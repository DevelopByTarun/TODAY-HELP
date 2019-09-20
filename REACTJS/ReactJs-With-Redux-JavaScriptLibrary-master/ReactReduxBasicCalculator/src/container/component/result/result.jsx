import React from "react";
import { connect } from 'react-redux';

const Result = (props)=> {

    var gocha = {
        myStyle: {
            fontFamily: "gothic"
        }
    }

    return(
        <div class="alert alert-dark" role="alert">
<strong style={gocha.myStyle}>
    {props.result}
</strong>
        </div>
    );
}

const centralStateMappingToProps = (state)=> {
    return {
        result: state.result
    }
}

export default connect(centralStateMappingToProps)(Result);