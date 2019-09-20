import React from 'react';
import {Alert} from 'react-bootstrap';
import {Grid, Row, Col} from 'react-bootstrap';

export const Child = (props)=> {
    
    let myStyle = {
        fontStyle: "italic",
        textAlign: "center"
      };

    return(
        <div>
            <br/>
            <h4 style={myStyle}>Take Data From Parent And Print Here</h4>

        <Grid>
            <Row className="show-grid">
                <Col md={12}>
                <Alert bsStyle="danger">
                    <h5>{props.parentdata}</h5>
                </Alert>
                </Col>
            </Row>
        </Grid>
        </div>
    );
}
