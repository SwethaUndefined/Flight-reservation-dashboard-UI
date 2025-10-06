import React from "react";
import { Row, Col } from "antd";
import Header from "./components/header";
import BookingSearch from "./components/bookingSearch";
import About from "./components/about";
import Footer from "./components/footer";
import "./styles/main.scss";

function App() {
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <BookingSearch />
      </Col>
      <Col span={24}>
        <About />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default App;
