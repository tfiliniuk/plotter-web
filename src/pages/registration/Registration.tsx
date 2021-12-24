import React from 'react';
import { Form, Input, Button } from 'antd';

type ValuesProps = {
  email?: string;
  password?: string;
  first_name: string;
  last_name: string;
};

type RegistrationProps = {
  handleRegistration: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => void;
};
export const Registration = ({ handleRegistration }: RegistrationProps) => {
  const onFinish = async (values: ValuesProps) => {
    console.log(values);
    try {
      if (
        values.email &&
        values.password &&
        values.first_name &&
        values.last_name
      ) {
        const aa = await handleRegistration(
          values.email,
          values.password,
          values.first_name,
          values.last_name
        );
        console.log('aaa', aa);
      }
    } catch (error) {
      console.log('reg error', error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="First Name"
        name="first_name"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="last_name"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
