import React from "react";
import { Button, Form, message, Modal } from "antd";
import MyInp from "@/ui/Form/MyInp";

const SigninDashboard = ({ isModalVisible, setIsModalVisible }) => {
  const handleSignin = (values) => {
    if (
      values?.email?.trim() === "utsho926@gmail.com" &&
      values?.password === "1234@@aA"
    ) {
      message.success("Signin successful");
      setIsModalVisible(false);
    } else {
      message.error("Invalid credentials");
    }
  };
  return (
    <Modal
      title="Signin to continue dashboard access"
      open={isModalVisible}
      // onCancel={() => setIsModalVisible(false)}
      footer={null}
    >
      <Form layout="vertical" onFinish={handleSignin}>
        <MyInp
          type={"email"}
          label="Email"
          name="email"
          placeholder={"Enter your email"}
          rules={[{ required: true, message: "Email is required" }]}
        />
        <MyInp
          type={"password"}
          label="Password"
          name="password"
          placeholder={"Enter your password"}
          rules={[{ required: true, message: "Password is required" }]}
        />
        <Button type="primary" htmlType="submit" block>
          Sign in
        </Button>
      </Form>
    </Modal>
  );
};

export default SigninDashboard;
