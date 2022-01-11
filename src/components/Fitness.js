import {useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';



function Fitness({ facade, setErrorMessage}) {

    const [fitness, setFitness] = useState([]);

    
    
const updateFitness = (data) => {
   console.log(data)
    setFitness(data.all);

};


useEffect(() => {
    facade.fetchData('fitness/all', updateFitness, setErrorMessage);
  }, [facade, setErrorMessage]);

  return (
    <Row>
        <Col>
            <h1>Fitness</h1>
            <ul>{fitness.map((f => <li>{f.name}</li>))}</ul>
        </Col>

    </Row>
  );
}

export default Fitness;
