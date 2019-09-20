import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Col } from 'react-bootstrap';

export const SalaryInput = (props)=> {

    return(
        <div>
            <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Salary&nbsp;::
    </Col>
    <Col sm={10}>
      <FormControl type="number" onChange={props.takeIt} placeholder="Enter Salary Here"/>
    </Col>
  </FormGroup>
  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button bsStyle="primary" type="submit" onClick={props.computeIt}>Compute Salary</Button>
    </Col>
  </FormGroup>
</Form>
        </div>
    );
}