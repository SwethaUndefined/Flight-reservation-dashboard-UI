import { Row, Col, Typography, Card } from "antd";
import { Sparkles, TrendingUp, Shield, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Best Prices",
      description: "Compare prices from top airlines",
      fromColor: "#9fc4fc",
      toColor: "#4a7bf1",
    },
    {
      icon: TrendingUp,
      title: "Real-time Updates",
      description: "Live flight status and notifications",
      fromColor: "#d3b1fd",
      toColor: "#9244ed",
    },
    {
      icon: Shield,
      title: "Secure Booking",
      description: "Safe and encrypted transactions",
      fromColor: "#f5b376",
      toColor: "#df5c0a",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service",
      fromColor: "#64d87a",
      toColor: "#3ea64b",
    },
  ];

  return (
    <Row className="about-section">
      <Col span={2}></Col>
      <Col span={20}>
        <Typography className="why-slogan">Why Choose SkyBook?</Typography>
        <Typography className="why-slogan-sub">
          Experience hassle-free booking with our premium features
        </Typography>
        <Row gutter={[16, 16]}>
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="text-center feature-card">
                  <Row>
                    <Col span={4}>
                      <div
                        className="icon-container"
                        style={{
                          background: `linear-gradient(to right, ${feature.fromColor}, ${feature.toColor})`,
                        }}
                      >
                        <FeatureIcon
                          className="icon"
                        />
                      </div>
                    </Col>
                    <Col span={20}></Col>
                    <Col span={24}>
                      <Typography className="card-title">{feature.title}</Typography>
                    </Col>
                    <Col span={24}>
                      <Typography className="card-sub">{feature.description}</Typography>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Col>
      <Col span={2}></Col>
    </Row>
  );
};

export default About;
