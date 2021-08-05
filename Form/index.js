import React from "react";
import './index.scss';
import {Button, Checkbox, DatePicker, Form, Input, Select} from "antd";

const {Option} = Select;

function MyComponent() {

  const [form] = Form.useForm();

  const onSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values)
    })
  }

  const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  };

  return <Form
    name="form"
    form={form}
    {...layout}
    initialValues={{remember: true}}
  >
    <Form.Item
      label="aa"
      name="aa"
      rules={[{required: true, message: '请输入'}]}
    >
      <Input placeholder="请输入" />
    </Form.Item>

    <Form.Item
      name="bb"
      label="bb"
    >
      <Select
        placeholder="请选择"
        allowClear
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
        <Option value="other">other</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="cc"
      name="cc"
    >
      <DatePicker />
    </Form.Item>

    <Form.Item
      name="dd"
      valuePropName="dd"
      wrapperCol={{offset: 8, span: 16}}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item>
      <Button type="primary" onClick={onSubmit}>
        Submit
      </Button>
    </Form.Item>
  </Form>
}


export default MyComponent