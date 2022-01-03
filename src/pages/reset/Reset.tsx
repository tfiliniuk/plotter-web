import React from 'react';
import { Form, Input, Button } from 'antd';

interface ResetProps {
  handleLogin: (email: string) => void;
}

type ValuesProps = {
  email: string;
};

export const Reset = ({ handleLogin }: ResetProps) => {
  const onFinish = (values: ValuesProps) => {
    if (values.email) {
      handleLogin(values.email);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
