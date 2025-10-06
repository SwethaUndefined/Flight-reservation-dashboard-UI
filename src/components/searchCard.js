import {
  Card,
  Row,
  Col,
  Input,
  Typography,
  DatePicker,
  Select,
  Button,
} from "antd";
import { EnvironmentOutlined, SearchOutlined } from "@ant-design/icons";

const SearchCard = () => {
  return (
    <Row className="search-section">
      <Col span={2}></Col>
      <Col span={20}>
        <Card className="search-card">
          <Row gutter={16}>
            <Col span={6}>
              <Typography className="search-options">From</Typography>
              <Input
                size="large"
                placeholder="Departure City"
                prefix={<EnvironmentOutlined />}
              />
            </Col>
            <Col span={6}>
              <Typography className="search-options">To</Typography>
              <Input
                size="large"
                placeholder="Destination City"
                prefix={<EnvironmentOutlined />}
              />
            </Col>
            <Col span={6}>
              <Typography className="search-options">Date</Typography>
              <DatePicker size="large" style={{ width: "100%" }} />
            </Col>
            <Col span={6}>
              <Typography className="search-options">Class</Typography>
              <Select
                size="large"
                placeholder="Select Travel Class"
                optionFilterProp="label"
                showSearch
                style={{ width: "100%" }}
                options={[
                  { value: "first", label: "First Class" },
                  { value: "economy", label: "Economy" },
                  { value: "business", label: "Business" },
                ]}
              />
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                block
                className="search-button"
                icon={<SearchOutlined />}
              >
                Search Flights
              </Button>
            </Col>
          </Row>
        </Card>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default SearchCard;
