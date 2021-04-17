import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import preval from 'preval.macro';
import { ColorCode } from './Constants';

/**
 * Display the footer.
 * Uses the preval macro so that the "deployed" version of the site has a Last update timestamp.
 */
function Bottom() {
  const bottomStyle = { backgroundColor: ColorCode.darkBlue, color: ColorCode.background, fontWeight: 'bold', paddingTop: '20px', paddingBottom: '20px' };
  return (
    <div style={bottomStyle}>
        <Container>
          <Row className="justify-content-center">
          <p>Work Address<br/>
            Dr Rea Antoniou-Kourounioti<br/>
            Computational and Systems Biology<br/>
            John Innes Centre<br/>
            Norwich Research Park<br/>
            Norwich NR4 7UH, United Kingdom<br/>
            Contact: rea.antoniou-kourounioti@jic.ac.uk<br/>
            <small>Page Last Updated: {preval`module.exports = new Date().toLocaleString();`}</small><br/>
            Website designed based on the Academic Research Website Template by Phillip M Johnson: <a href='https://github.com/csdl/csdl.github.io'> https://github.com/csdl/csdl.github.io</a>
          </p>
          </Row>
        </Container>
    </div>
  );
}

export default Bottom;
