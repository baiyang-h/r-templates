import React from "react";
import PropTypes from "prop-types";
import {Modal} from "antd";
import './index.scss';

MyComponent.propTypes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

MyComponent.defaultProps = {}


function MyComponent(props) {
  const onOk = () => {
    props.onOk && props.onOk()
  };

  const onCancel = () => {
    props.onCancel && props.onCancel()
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
    <div className="container">
      Modal
    </div>
  </Modal>
}


export default MyComponent