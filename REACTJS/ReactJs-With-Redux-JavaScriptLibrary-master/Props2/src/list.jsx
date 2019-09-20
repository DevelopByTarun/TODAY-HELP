import React from "react";

export const List = (props)=> {

    return(
        <div>
            <h3>
                {props.product} {props.dosage}
            </h3>
        </div>
    );
}