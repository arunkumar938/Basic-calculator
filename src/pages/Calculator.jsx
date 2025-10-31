import React from 'react'
import { useState } from 'react';
import { Button, Form, Row,Col } from "react-bootstrap";

function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    const calculate = (operator) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
            setResult("Please enter valid numbers");
            return;
        }

        let res;
        switch (operator) {
            case "+":
                res = a + b;
                break;
            case "-":
                res = a - b;
                break;
            case "*":
                res = a * b;
                break;
            case "/":
                res = b !== 0 ? a / b : "Cannot divide by zero";
                break;
            default:
                res = "";
        }
        setResult(res);
    };

    const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

    return (
       <Row className='justify-content-center'>
        <Col md={4}>
         <div className='container text-center mt-5'>
            <h1>Basic calculator</h1>
           
<Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter first number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter second number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
              />
            </Form.Group>
            
             <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Result"
                value={result}
              />
            </Form.Group>
          
          </Form>

          <div className="mb-3">
            <Button  className="m-1" onClick={() => calculate("+")}>+</Button>
            <Button  className="m-1" onClick={() => calculate("-")}>-</Button>
            <Button  className="m-1" onClick={() => calculate("*")}>*</Button>
            <Button   className="m-1" onClick={() => calculate("/")}>/</Button>
          </div>
          <Button variant="secondary" onClick={clearAll}>Clear</Button>
        </div>
        </Col>
       </Row>
    )
}

export default Calculator