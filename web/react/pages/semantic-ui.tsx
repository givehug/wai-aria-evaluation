import _ from 'lodash';
import React from 'react';
import Head from 'next/head';

import {
  Accordion,
  Icon,
  Message,
  Button,
  Header,
  Image,
  Modal,
  Breadcrumb,
  Checkbox,
  Confirm,
  Select,
  Search,
  Menu,
  Form,
  Popup,
  Radio,
  Label,
  Table,
  Tab,
} from 'semantic-ui-react';

import WidgetTemplate from '../widgetsTemplate/Template';

export default function SemanticUI() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
        />
      </Head>
      <WidgetTemplate
        libraryName="Semantic UI"
        Accordion={<AccordionWidget />}
        Alert={<AlertWidget />}
        AlertDialog={<AlertDialogWidget />}
        Breadcrumbs={<BreadcrumbsWidget />}
        Button={<ButtonWidget />}
        Carousel={undefined}
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
        Slider={undefined}
        MultiThumbSlider={undefined}
        Spinbutton={undefined}
        Table={<TableWidget />}
        Tabs={<TabsWidget />}
        Toolbar={undefined}
        Tooltip={<TooltipWidget />}
        TreeView={undefined}
        TreeGrid={undefined}
        WindowSplitter={undefined}
      />
    </>
  );
}

function AccordionWidget() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleClick = (_: any, titleProps: any) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;
    setActiveIndex(newIndex);
  };

  return (
    <Accordion>
      <Accordion.Title
        active={activeIndex === 0}
        index={0}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        What is a dog?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 0}>
        <p>
          A dog is a type of domesticated animal. Known for its loyalty and
          faithfulness, it can be found as a welcome guest in many households
          across the world.
        </p>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 1}
        index={1}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        What kinds of dogs are there?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 1}>
        <p>
          There are many breeds of dogs. Each breed varies in size and
          temperament. Owners often select a breed of dog that they find to be
          compatible with their own lifestyle and desires from a companion.
        </p>
      </Accordion.Content>

      <Accordion.Title
        active={activeIndex === 2}
        index={2}
        onClick={handleClick}
      >
        <Icon name="dropdown" />
        How do you acquire a dog?
      </Accordion.Title>
      <Accordion.Content active={activeIndex === 2}>
        <p>
          Three common ways for a prospective owner to acquire a dog is from pet
          shops, private owners, or shelters.
        </p>
        <p>
          A pet shop may be the most convenient way to buy a dog. Buying a dog
          from a private owner allows you to assess the pedigree and upbringing
          of your dog before choosing to take it home. Lastly, finding your dog
          from a shelter, helps give a good home to a dog who may not find one
          so readily.
        </p>
      </Accordion.Content>
    </Accordion>
  );
}

function AlertWidget() {
  return (
    <Message negative>
      <Message.Header>We're sorry we can't apply that discount</Message.Header>
      <p>That offer has expired</p>
    </Message>
  );
}

function DialogWidget() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

const BreadcrumbsWidget = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
  </Breadcrumb>
);

const ButtonWidget = () => (
  <>
    <Button onClick={console.log}>Button</Button>
    <Button disabled>Disabled</Button>
  </>
);

const CheckboxWidget = () => <Checkbox label="Checkbox example" />;

function AlertDialogWidget() {
  const [open, setOpen] = React.useState(false);

  const openW = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <Button onClick={openW}>Show</Button>
      <Confirm open={open} onCancel={close} onConfirm={close} />
    </div>
  );
}

function DisclosureWidget() {
  const [active, setActive] = React.useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Accordion>
      <Accordion.Title active={active} index={0} onClick={handleClick}>
        <Icon name="dropdown" />
        Disclosure header
      </Accordion.Title>
      <Accordion.Content active={active}>Disclosure content</Accordion.Content>
    </Accordion>
  );
}

const ListboxWidget = () => {
  const countryOptions = [
    { key: 'af', value: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', text: 'Australia' },
    { key: 'at', value: 'at', text: 'Austria' },
    { key: 'az', value: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', text: 'Benin' },
  ];
  return <Select placeholder="Select your country" options={countryOptions} />;
};

function ComboboxWidget() {
  const initialState = {
    loading: false,
    results: [],
    value: '',
  };

  const source = Array.from({ length: 5 }, (_, idx) => ({
    title: 'Company ' + idx,
    description: 'description ' + idx,
    price: '$10.0' + idx,
  }));

  function exampleReducer(state: any, action: any) {
    switch (action.type) {
      case 'CLEAN_QUERY':
        return initialState;
      case 'START_SEARCH':
        return { ...state, loading: true, value: action.query };
      case 'FINISH_SEARCH':
        return { ...state, loading: false, results: action.results };
      case 'UPDATE_SELECTION':
        return { ...state, value: action.selection };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef<any>();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: 'START_SEARCH', query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: 'CLEAN_QUERY' });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), 'i');
      const isMatch = (result: any) => re.test(result.title);

      dispatch({
        type: 'FINISH_SEARCH',
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Search
      loading={loading}
      onResultSelect={(e, data) =>
        dispatch({
          type: 'UPDATE_SELECTION',
          selection: data.result.title,
        })
      }
      onSearchChange={handleSearchChange}
      results={results}
      value={value}
    />
  );
}

function MenuWidget() {
  const [activeItem, setActiveItem] = React.useState('');
  const handleItemClick = (e: any, data: any) => setActiveItem(data.name);

  return (
    <Menu>
      <Menu.Item
        name="editorials"
        active={activeItem === 'editorials'}
        onClick={handleItemClick}
      >
        Editorials
      </Menu.Item>

      <Menu.Item
        name="reviews"
        active={activeItem === 'reviews'}
        onClick={handleItemClick}
      >
        Reviews
      </Menu.Item>

      <Menu.Item
        name="upcomingEvents"
        active={activeItem === 'upcomingEvents'}
        onClick={handleItemClick}
      >
        Upcoming Events
      </Menu.Item>
    </Menu>
  );
}

function RadioGroupWidget() {
  const [value, setValue] = React.useState('');
  const handleChange = (e: any, { value }: any) => setValue(value);

  return (
    <Form>
      <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field>
      <Form.Field>
        <Radio
          label="Choose this"
          name="radioGroup"
          value="this"
          checked={value === 'this'}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <Radio
          label="Or that"
          name="radioGroup"
          value="that"
          checked={value === 'that'}
          onChange={handleChange}
        />
      </Form.Field>
    </Form>
  );
}

function TableWidget() {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
          <Table.HeaderCell>Header</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Label ribbon>First</Label>
          </Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
          <Table.Cell>Cell</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon name="chevron left" />
              </Menu.Item>
              <Menu.Item as="a">1</Menu.Item>
              <Menu.Item as="a">2</Menu.Item>
              <Menu.Item as="a">3</Menu.Item>
              <Menu.Item as="a">4</Menu.Item>
              <Menu.Item as="a" icon>
                <Icon name="chevron right" />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}

function TabsWidget() {
  const panes = [
    { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Tab 2', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Tab 3', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  ];

  return <Tab panes={panes} />;
}

function TooltipWidget() {
  return (
    <Popup
      content="Add users to your feed"
      trigger={<Button>tooltip</Button>}
    />
  );
}
