import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import { Menu } from '../common/components';

const LandingLayout = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Menu />
      </Col>
    </Row>
    <Row>
      <Col xs={12}>
        <main>
          Landing Layout
        </main>
      </Col>
    </Row>
  </Grid>
);

export default LandingLayout;
