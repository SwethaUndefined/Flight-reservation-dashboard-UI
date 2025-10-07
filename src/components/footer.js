import React from "react";
import { Typography } from "antd";

const Footer = () => {
  return (
    <div className="footer">
      <Typography style={{ fontSize: '35px',color: "#fff" }}>
        Ready for Your Next Adventure?
      </Typography>
      <Typography.Text style={{ fontSize: '25px', color: '#fff',lineHeight: '1' }}>
        Join thousands of happy travelers who trust SkyWings
      </Typography.Text>
    </div>
  );
};

export default Footer;
