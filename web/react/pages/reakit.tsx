import React from 'react';

import * as system from 'reakit-system-bootstrap';

import { Provider, Button } from 'reakit';
import { useDialogState, Dialog, DialogDisclosure } from 'reakit/Dialog';
import { useCheckboxState, Checkbox } from 'reakit/Checkbox';
import {
  useDisclosureState,
  Disclosure,
  DisclosureContent,
} from 'reakit/Disclosure';
import {
  useMenuState,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
} from 'reakit/Menu';
import { useRadioState, Radio, RadioGroup } from 'reakit/Radio';
import { useTabState, Tab, TabList, TabPanel } from 'reakit/Tab';
import {
  useToolbarState,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
} from 'reakit/Toolbar';
import { Tooltip, TooltipReference, useTooltipState } from 'reakit/Tooltip';
import MenuWidget from './components/reakit/MenuWidget';

import WidgetTemplate from '../widgetsTemplate/Template';

export default function Reakit() {
  return (
    <Provider unstable_system={system}>
      <WidgetTemplate
        libraryName="Reakit"
        Accordion={undefined}
        Alert={undefined}
        AlertDialog={<AlertDialogWidget />}
        Breadcrumbs={undefined}
        Button={<ButtonWidget />}
        Carousel={undefined}
        Checkbox={<CheckboxWidget />}
        Combobox={undefined}
        Dialog={<DialogWidget />}
        Disclosure={<DisclosureWidget />}
        Feed={undefined}
        Link={undefined}
        Listbox={undefined}
        Menu={<MenuWidget />}
        MenuButton={<MenuButtonWidget />}
        RadioGroup={<RadioGroupWidget />}
        Slider={undefined}
        MultiThumbSlider={undefined}
        Spinbutton={undefined}
        Table={undefined}
        Tabs={<TabsWidget />}
        Toolbar={<ToolbarWidget />}
        Tooltip={<TooltipWidget />}
        TreeView={undefined}
        TreeGrid={undefined}
        WindowSplitter={undefined}
      />
    </Provider>
  );
}

function AlertDialogWidget() {
  const dialog = useDialogState();
  return (
    <>
      <DialogDisclosure {...dialog}>Discard</DialogDisclosure>
      <Dialog {...dialog} role="alertdialog" aria-label="Confirm discard">
        <p>Are you sure you want to discard it?</p>
        <div style={{ display: 'grid', gridGap: 16, gridAutoFlow: 'column' }}>
          <Button onClick={dialog.hide}>Cancel</Button>
          <Button
            onClick={() => {
              alert('Discarded');
              dialog.hide();
            }}
          >
            Discard
          </Button>
        </div>
      </Dialog>
    </>
  );
}

function ButtonWidget() {
  return (
    <>
      <Button as="div" onClick={() => alert('clicked')}>
        Button
      </Button>
      <Button disabled onClick={() => alert('clicked')}>
        Disabled
      </Button>
    </>
  );
}

function CheckboxWidget() {
  const checkbox = useCheckboxState({ state: [] });
  return (
    <>
      <label>
        <Checkbox {...checkbox} value="apple" />
        Apple
      </label>
      <label>
        <Checkbox {...checkbox} value="orange" />
        Orange
      </label>
      <label>
        <Checkbox {...checkbox} value="watermelon" />
        Watermelon
      </label>
    </>
  );
}

function DialogWidget() {
  const dialog = useDialogState();
  return (
    <>
      <DialogDisclosure {...dialog}>Open dialog</DialogDisclosure>
      <Dialog {...dialog} tabIndex={0} aria-label="Welcome">
        <Button onClick={dialog.hide}>Close</Button>
      </Dialog>
    </>
  );
}

function DisclosureWidget() {
  const disclosure = useDisclosureState({ visible: true });
  return (
    <>
      <Disclosure {...disclosure}>Toggle</Disclosure>
      <DisclosureContent {...disclosure}>Content</DisclosureContent>
    </>
  );
}

function MenuButtonWidget() {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu}>Preferences</MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
}

function RadioGroupWidget() {
  const radio = useRadioState();
  return (
    <RadioGroup {...radio} aria-label="fruits">
      <label>
        <Radio {...radio} value="apple" /> apple
      </label>
      <label>
        <Radio {...radio} value="orange" /> orange
      </label>
      <label>
        <Radio {...radio} value="watermelon" /> watermelon
      </label>
    </RadioGroup>
  );
}

function TabsWidget() {
  const tab = useTabState();
  return (
    <>
      <TabList {...tab} aria-label="My tabs">
        <Tab {...tab}>Tab 1</Tab>
        <Tab {...tab} disabled>
          Tab 2
        </Tab>
        <Tab {...tab}>Tab 3</Tab>
      </TabList>
      <TabPanel {...tab}>Tab 1</TabPanel>
      <TabPanel {...tab}>Tab 2</TabPanel>
      <TabPanel {...tab}>Tab 3</TabPanel>
    </>
  );
}

function ToolbarWidget() {
  const toolbar = useToolbarState({ loop: true });
  return (
    <Toolbar {...toolbar} aria-label="My toolbar">
      <ToolbarItem {...toolbar} as={Button}>
        Item 1
      </ToolbarItem>
      <ToolbarItem {...toolbar} as={Button}>
        Item 2
      </ToolbarItem>
      <ToolbarSeparator {...toolbar} />
      <ToolbarItem {...toolbar} as={Button}>
        Item 3
      </ToolbarItem>
    </Toolbar>
  );
}

function TooltipWidget() {
  const tooltip = useTooltipState();
  return (
    <>
      <TooltipReference {...tooltip} as={Button}>
        Reference
      </TooltipReference>
      <Tooltip {...tooltip}>Tooltip</Tooltip>
    </>
  );
}
