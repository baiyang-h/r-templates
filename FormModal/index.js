import React from "react";
import PropTypes from "prop-types";
import {Checkbox, DatePicker, Form, Input, Modal, Select} from "antd";
import './index.scss';

const {Option} = Select;

MyComponent.propTypes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

MyComponent.defaultProps = {}

function MyComponent(props) {

  const [form] = Form.useForm();

  const onOk = () => {
    form.validateFields().then((values) => {
      console.log(values)
      props.onOk && props.onOk()
    })
  };

  const onCancel = () => {
    props.onCancel && props.onCancel()
  };

  const layout = {
    labelCol: {span: 4},
    // wrapperCol: {span: 8},
  };

  return <Modal
    className="my-component"
    title="标题名"
    visible={props.visible}
    cancelText="取消"
    okText="确定"
    onOk={onOk}
    onCancel={onCancel}
  >
    <Form
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
        <Input/>
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
        valuePropName="checked"
        wrapperCol={{offset: 4}}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
    </Form>
  </Modal>
}

export default MyComponent