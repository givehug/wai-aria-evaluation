import React, { useState } from 'react';
import Head from 'next/head';

import {
  Modal,
  Button,
  Alert,
  Popconfirm,
  message,
  Breadcrumb,
  Carousel,
  Checkbox,
  AutoComplete,
  Collapse,
  Select,
  Menu,
  Radio,
  TimePicker,
  Slider,
  Table,
  Tabs,
  Tooltip,
  Tree,
} from 'antd';

import WidgetTemplate from '../widgetsTemplate/Template';

export default function AntDesign() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.6/antd.compact.min.css"
        />
      </Head>
      <WidgetTemplate
        libraryName="Ant Design"
        Accordion={<AccordionWidget />}
        Alert={<AlertWidget />}
        AlertDialog={<AlertDialogWidget />}
        Breadcrumbs={<BreadcrumbsWidget />}
        Button={<ButtonWidget />}
        Carousel={<CarouselWidget />}
        Checkbox={<CheckboxWidget />}
        Combobox={<ComboboxWidget />}
        Dialog={<DialogWidget />}
        Disclosure={<DisclosureWidget />}
        Feed={undefined}
        Link={undefined}
        Listbox={<ListboxWidget />}
        Menu={<MenuWidget />}
        MenuButton={<MenuWidget />}
        RadioGroup={<RadioGroupWidget />}
        Slider={<SliderWidget />}
        MultiThumbSlider={<MultiThumbSliderWidget />}
        Spinbutton={<SpinbuttonWidget />}
        Table={<TableWidget />}
        Tabs={<TabsWidget />}
        Toolbar={undefined}
        Tooltip={<TooltipWidget />}
        TreeView={<TreeWidget />}
        TreeGrid={undefined}
        WindowSplitter={undefined}
      />
    </>
  );
}

// Notes
// - no visual styling for active elements

function AccordionWidget() {
  return (
    <Collapse accordion>
      <Collapse.Panel header="This is panel header 1" key="1">
        <p>Panel 1</p>
      </Collapse.Panel>
      <Collapse.Panel header="This is panel header 2" key="2">
        <p>Panel 2</p>
      </Collapse.Panel>
      <Collapse.Panel
        header="This is panel header 3"
        key="3"
        collapsible="disabled"
      >
        <p>Panel 3</p>
      </Collapse.Panel>
    </Collapse>
  );
}

function AlertWidget() {
  return <Alert message="Success Text" type="success" />;
}

function AlertDialogWidget() {
  return (
    <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={() => message.success('Click on Yes')}
      onCancel={() => message.error('Click on No')}
      okText="Yes"
      cancelText="No"
    >
      <a href="#">Delete</a>
    </Popconfirm>
  );
}

function BreadcrumbsWidget() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application Center</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Application List</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>An Application</Breadcrumb.Item>
    </Breadcrumb>
  );
}

function ButtonWidget() {
  return (
    <>
      <Button type="primary" onClick={() => alert('clicked')}>
        Primary Button
      </Button>
      <Button type="primary" disabled>
        Disabled Button
      </Button>
    </>
  );
}

function CarouselWidget() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center' as const,
    background: '#364d79',
  };

  return (
    <div style={{ width: 300, height: 200 }}>
      <Carousel>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

function CheckboxWidget() {
  const plainOptions = ['Apple', 'Pear', 'Orange'];

  return <Checkbox.Group options={plainOptions} defaultValue={['Apple']} />;
}

function ComboboxWidget() {
  const mockVal = (str: string, repeat: number = 1) => ({
    value: str.repeat(repeat),
  });
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };
  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  return (
    <AutoComplete
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      placeholder="input here"
    />
  );
}

function DialogWidget() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

function DisclosureWidget() {
  return (
    <Collapse defaultActiveKey={['1']}>
      <Collapse.Panel header="This is panel header 1" key="1">
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Collapse.Panel>
    </Collapse>
  );
}

function ListboxWidget() {
  const { Option } = Select;
  return (
    <Select defaultValue="lucy" style={{ width: 120 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
  );
}

function MenuWidget() {
  const [current, setCurrent] = useState('mail');
  const { SubMenu } = Menu;

  const handleClick = ({ key }: { key: string }) => {
    setCurrent(key);
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail">Navigation One</Menu.Item>
      <Menu.Item key="app" disabled>
        Navigation Two
      </Menu.Item>
      <SubMenu key="SubMenu" title="Navigation Three - Submenu">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
    </Menu>
  );
}

function RadioGroupWidget() {
  const [value, setValue] = React.useState(1);

  return (
    <Radio.Group
      onChange={(e) => {
        setValue(e.target.value);
      }}
      value={value}
    >
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  );
}

function SliderWidget() {
  return <Slider defaultValue={30} />;
}

function MultiThumbSliderWidget() {
  return <Slider range defaultValue={[20, 50]} />;
}

function SpinbuttonWidget() {
  return (
    <TimePicker
      onChange={(_, timeString) => {
        alert(timeString);
      }}
    />
  );
}

function TableWidget() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
}

function TabsWidget() {
  const { TabPane } = Tabs;

  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
}

function TooltipWidget() {
  return (
    <Tooltip title="prompt text">
      <span>Tooltip will show on mouse enter.</span>
    </Tooltip>
  );
}

function TreeWidget() {
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          disabled: true,
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
              disableCheckbox: true,
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [
            {
              title: <span style={{ color: '#1890ff' }}>sss</span>,
              key: '0-0-1-0',
            },
          ],
        },
      ],
    },
  ];

  return (
    <Tree
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      defaultSelectedKeys={['0-0-0', '0-0-1']}
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      treeData={treeData}
    />
  );
}
