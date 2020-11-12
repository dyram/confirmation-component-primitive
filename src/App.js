import React, { useState } from "react";
import "antd/dist/antd.css";

import { Typography, Button, Space, Input } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

const { Text } = Typography;

export default function App() {
  const [otp, setOtp] = useState("");

  return (
    <>
      {/* Code Generator component start */}
      <Space
        direction="vertical"
        style={{
          margin: "2%",
          padding: "4% 10%",
          border: "2px dashed #52C41A",
          textAlign: "center"
        }}
      >
        <Text>
          Please click on generate code button to recieve it from the customer
          and enter the code to change the subscriber status.
        </Text>

        <Button type="ghost">GENERATE CODE</Button>

        <Input
          bordered={false}
          autoFocus
          maxLength={6}
          value={otp}
          style={{ textAlign: "center" }}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          // suffix={
          //   otp.length === 6 && <CheckCircleTwoTone twoToneColor="#52C41A" />
          // }
        />
      </Space>

      {otp.length === 6 && (
        <Button type="primary" style={{ margin: "2%" }}>
          SUBMIT
        </Button>
      )}
      {/* Code Generator end */}
    </>
  );
}
