import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <Container
        fluid
        className="footer text-white py-2 position-fixed bottom-0"
      >
        <Container>
          <Row className="d-flex align-items-center">
            <Col>
              <p className="m-0">
                &copy; 2022 - All right reserved || Design & Developed by{" "}
                <a
                  className="colored-text developer"
                  href="https://github.com/developer-suhag"
                  target="_blank"
                  rel="noreferrer"
                >
                  Suhag
                </a>
              </p>
            </Col>
            <Col>
              <div className="text-end">
                <a
                  href="https://www.facebook.com/suhag.alamin.315/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href="https://github.com/developer-suhag"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://twitter.com/suhag_alamain"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a
                  href="https://www.linkedin.com/in/suhag-al-amin/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icons"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
