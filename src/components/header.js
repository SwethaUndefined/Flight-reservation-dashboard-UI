import React from "react";
import { Row, Col, Space, Typography, Avatar } from "antd";
import {
  SearchOutlined,
  InboxOutlined,
  BarChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Plane, Moon } from "lucide-react";

const Header = () => {
  return (
    <Row
      className="header-background"
      align="middle"
      style={{ padding: "16px 0" }}
    >
      <Col span={2}></Col>

      <Col span={3}>
        <Row align="middle" gutter={16}>
          <Col>
            <div className="plane-square">
              <Plane className="plane-icon" />
            </div>
          </Col>
          <Col>
            <Space direction="vertical" size={0}>
              <Typography className="header-text header-text-gradient">
                SkyWings
              </Typography>
              <Typography className="header-subtitle-gradient">
                Fly with confidence
              </Typography>
            </Space>
          </Col>
        </Row>
      </Col>

      <Col span={14}>
        <Space
          size={60}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Space className="nav-item">
            <SearchOutlined className="nav-icon" />
            <span className="header-nav-items">Search Flights</span>
          </Space>

          <Space className="nav-item">
            <InboxOutlined className="nav-icon" />
            <span className="header-nav-items">My Bookings</span>
          </Space>

          <Space className="nav-item">
            <BarChartOutlined className="nav-icon" />
            <span className="header-nav-items">Analytics</span>
          </Space>

          <Space className="nav-item">
            <SettingOutlined className="nav-icon" />
            <span className="header-nav-items">Admin Panel</span>
          </Space>
        </Space>
      </Col>

      <Col span={1}>
        <Moon className="nav-icon" />
      </Col>
      <Col span={4}>
        <Space>
       <Avatar size="large" className="avatar">SR</Avatar>
          <Typography className="card-sub">Swetha Ragunathan</Typography>
        </Space>
      </Col>
    </Row>
  );
};

export default Header;
