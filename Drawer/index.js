import React from "react";
import PropTypes from "prop-types";
import {Button, Drawer} from "antd";
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

  return <Drawer
    className="my-component-modal"
    title="标题名"
    placement="right"
    maskClosable={false}
    visible={props.visible}
    onClose={onCancel}
    footer={
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <Button onClick={onCancel} style={{ marginRight: 8 }}>取消</Button>
        <Button onClick={onOk} type="primary">确定</Button>
      </div>
    }
  >
    <div className="container">
      Drawer
    </div>
  </Drawer>
}


export default MyComponent