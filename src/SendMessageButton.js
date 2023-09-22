import React from "react";
import { Button } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function SendMessageButton() {
  return (
    <Button type="primary">
      Send Message <MessageOutlined />
    </Button>
  );
}

export default SendMessageButton;
