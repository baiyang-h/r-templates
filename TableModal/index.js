import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Button, DatePicker, Form, Input, Modal, Popconfirm, Select, Table} from "antd";
import './index.scss';

const {Option} = Select;

MyComponent.propTypes = {
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

MyComponent.defaultProps = {}

const DEFAULT_PAGESIZE = 20;

function MyComponent(props) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [pageManage, setPageManage] = useState({
    page: 1,
    pageSize: DEFAULT_PAGESIZE,
    total: 0,
  });

  // 获取列表信息
  const fetchList = () => {
    setLoading(true)
    setTimeout(() => {
      const list = []
      for (let i = 0; i < 100; i++) {
        list.push({name: i})
      }
      setLoading(false);
      setDataSource(list)
      setPageManage(state => ({
        ...state,
        total: 100
      }))
    }, 500)
  }

  const onChange = (pagination) => {
    let page = pagination.current || 1;
    let pageSize = pagination.pageSize || DEFAULT_PAGESIZE;
    if (Number(pageManage.pageSize) !== Number(pagination.pageSize)) {
      page = 1;
    }
    setPageManage({
      ...pageManage,
      page,
      pageSize,
    });
    fetchList({
      pageSize,
      page,
    });
  };

  const onOk = () => {
    props.onOk && props.onOk()
  };

  const onCancel = () => {
    props.onCancel && props.onCancel()
  };

  useEffect(()=> {
    if(props.visible) {
      fetchList()
    }
  }, [props.visible])

  const columns = [
    {
      title: '题库名称',
      dataIndex: 'name',
      key: 'name',
      width: 300,
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      width: 300,
      render (v, record) {
        return <>
          <Button type="link" style={{paddingLeft: '5px'}}>查看</Button>
          <Popconfirm
            title="确认删除吗?"
            onConfirm={() => {console.log('删除')}}
            okText="确认"
            cancelText="取消"
          >
            <Button type="link" style={{paddingLeft: '5px'}}>删除</Button>
          </Popconfirm>
        </>;
      }
    },
  ]

  return <Modal
    className="table-modal"
    title="标题名"
    width="70%"
    visible={props.visible}
    cancelText="取消"
    okText="确定"
    onOk={onOk}
    onCancel={onCancel}
  >
    <Form
      form={form}
      name="search"
      className="search-form"
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
    >
      <Form.Item
        label="aa"
        name="aa"
        rules={[{required: true, message: '请输入'}]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="dd"
        name="dd"
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
      <Form.Item label=" " colon={false} labelCol={{span: 8}}>
        <Button style={{marginRight: '15px'}} type="primary">查询</Button>
        <Button>重置</Button>
      </Form.Item>
    </Form>
    <Table
      scroll={{y: 500}}
      rowKey={(record, index) => index}
      loading={loading}
      dataSource={dataSource}
      columns={columns}
      pagination={{
        current: pageManage.page,
        pageSize: pageManage.pageSize,
        total: pageManage.total,
        defaultPageSize: DEFAULT_PAGESIZE,
        pageSizeOptions: ['10', '20', '30', '50', '100', '200'],
        showTotal() {
          return `共 ${pageManage.total} 条`;
        }
      }}
      onChange={onChange}
    />
  </Modal>
}


export default MyComponent