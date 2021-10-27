import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import mission from "../../../../images/mission.jpg";

const Mission = () => {
  return (
    <>
      <Container className="">
        <Row>
          <div className="d-flex align-items-center">
            <Col lg={6}>
              <h3 className="fs-2">
                The mission and goals of our organization
              </h3>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quibusdam et est fugiat ex rerum, corrupti nostrum
                quas beatae officiis, delectus saepe quo, quia tenetur! Nostrum
                magni laborum minima consectetur consequatur placeat ea
                laboriosam iusto possimus. Error itaque quia distinctio.
              </p>
              <Button className="volunteerzen-btn " variant="">
                Become a volunteer
              </Button>
            </Col>
            <Col lg={6}>
              <div>
                <img src={mission} alt="" />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Mission;
