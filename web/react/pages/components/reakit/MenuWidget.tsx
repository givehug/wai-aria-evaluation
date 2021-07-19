import React from 'react';
import {
  useMenuState,
  useMenuBarState,
  Menu,
  MenuButton,
  MenuItem,
  MenuSeparator,
  MenuBar,
  MenuGroup,
  MenuItemCheckbox,
  MenuItemRadio,
} from 'reakit/Menu';

// OPEN RECENT
const OpenRecentMenu = React.forwardRef((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      {/* @ts-ignore */}
      <MenuButton ref={ref} {...menu} {...props}>
        Open Recent
      </MenuButton>
      <Menu {...menu} aria-label="Open Recent">
        <MenuItem {...menu}>Reopen Closed Editor</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>More...</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Clear Recently Opened</MenuItem>
      </Menu>
    </>
  );
});

// FILE
const FileMenu = React.forwardRef((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      {/* @ts-ignore */}
      <MenuButton ref={ref} {...menu} {...props}>
        File
      </MenuButton>
      <Menu {...menu} aria-label="File">
        <MenuItem {...menu}>New File</MenuItem>
        <MenuItem {...menu}>New Window</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Open...</MenuItem>
        <MenuItem {...menu}>Open Workspace...</MenuItem>
        <MenuItem {...menu} as={OpenRecentMenu} />
      </Menu>
    </>
  );
});

// EDIT
const EditMenu = React.forwardRef((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      {/* @ts-ignore */}
      <MenuButton ref={ref} {...menu} {...props}>
        Edit
      </MenuButton>
      <Menu {...menu} aria-label="Edit">
        <MenuItem {...menu}>Undo</MenuItem>
        <MenuItem {...menu}>Redo</MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Cut</MenuItem>
        <MenuItem {...menu}>Copy</MenuItem>
        <MenuItem {...menu}>Paste</MenuItem>
      </Menu>
    </>
  );
});

// VIEW
const ViewMenu = React.forwardRef((props, ref) => {
  const menu = useMenuState();
  return (
    <>
      {/* @ts-ignore */}
      <MenuButton ref={ref} {...menu} {...props}>
        View
      </MenuButton>
      <Menu {...menu} aria-label="View">
        <MenuGroup {...menu}>
          <MenuItemRadio {...menu} name="windows" value="explorer">
            Explorer
          </MenuItemRadio>
          <MenuItemRadio {...menu} name="windows" value="search">
            Search
          </MenuItemRadio>
          <MenuItemRadio {...menu} name="windows" value="debug">
            Debug
          </MenuItemRadio>
          <MenuItemRadio {...menu} name="windows" value="extensions">
            Extensions
          </MenuItemRadio>
        </MenuGroup>
        <MenuSeparator {...menu} />
        <MenuItemCheckbox {...menu} name="toggles" value="word-wrap">
          Toggle Word Wrap
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="toggles" value="minimap">
          Toggle Minimap
        </MenuItemCheckbox>
        <MenuItemCheckbox {...menu} name="toggles" value="breadcrumbs">
          Toggle Breadcrumbs
        </MenuItemCheckbox>
      </Menu>
    </>
  );
});

export default function MenuWidget() {
  const menu = useMenuBarState();
  return (
    <MenuBar {...menu}>
      <MenuItem {...menu} as={FileMenu} />
      <MenuItem {...menu} as={EditMenu} />
      <MenuItem {...menu} as={ViewMenu} />
    </MenuBar>
  );
}
