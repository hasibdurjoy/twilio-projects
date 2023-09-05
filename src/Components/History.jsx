import React from "react";
import { Container, Row } from "react-bootstrap";

const History = () => {
  return (
    <div>
      <Container className="py-5">
        <h3 className="text-center">Our History</h3>
        <h1 className="text-center">The Best Solutions for Our Clients</h1>
        <div className="mt-5 d-flex align-items-center justify-content-between">
          <div>
            <h1 className="fw-bold fs-1 text-primary text-center">150</h1>
            <h3 className="fw-bold fs-3 text-center">Successful Projects</h3>
          </div>
          <div>
            <h1 className="fw-bold fs-1 text-primary text-center">150</h1>
            <h3 className="fw-bold fs-3 text-center">Successful Projects</h3>
          </div>
          <div>
            <h1 className="fw-bold fs-1 text-primary text-center">150</h1>
            <h3 className="fw-bold fs-3 text-center">Successful Projects</h3>
          </div>
          <div>
            <h1 className="fw-bold fs-1 text-primary text-center">150</h1>
            <h3 className="fw-bold fs-3 text-center">Successful Projects</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default History;