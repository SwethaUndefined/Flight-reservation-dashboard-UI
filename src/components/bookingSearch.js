import React from "react";
import { Row, Col, Typography } from "antd";
import { Plane } from "lucide-react";
import SearchCard from "./searchCard";
const BookingSearch = () => {
  return (
    <Row className="booking-search-background" align="middle">
      <Col span={24}>
        <div className="plane-square-body">
          <Plane className="plane-icon-body" />
        </div>
      </Col>
      <Col span={24}>
        <Typography className="slogan">Your Journey Begins Here</Typography>
        <Typography className="slogan-two">Fly Anywhere, Anytime</Typography>
        <Typography className="slogan-sub">
          Book flights to destinations worldwide with the best prices and
          seamless experience
        </Typography>
      </Col>
      <Col span={24}>
      <SearchCard/>
      </Col>
    </Row>
  );
};

export default BookingSearch;
