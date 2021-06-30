import React from 'react';
import {
  ChakraProvider,
  Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  ButtonGroup,
  Checkbox,
  CheckboxGroup,
  HStack,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Radio,
  RadioGroup,
  Stack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tooltip,
} from '@chakra-ui/react';
import WidgetTemplate from '../widgetsTemplate/Template';

export default function ChakraUI() {
  return (
    <ChakraProvider>
      <WidgetTemplate
        libraryName="Chakra UI"
        Accordion={<AccordionWidget />}
        Alert={<AlertWidget />}
        AlertDialog={<AlertDialogWidget />}
        Breadcrumbs={<BreadcrumbsWidget />}
        Button={<ButtonWidget />}
        Carousel={undefined}
        Checkbox={<CheckboxWidget />}
        Combobox={undefined}
        Dialog={<DialogWidget />}
        Disclosure={<DisclosureWidget />}
        Feed={undefined}
        Link={<LinkWidget />}
        Listbox={<ListboxWidget />}
        Menu={<MenuWidget />}
        MenuButton={<MenuWidget />}
        RadioGroup={<RadioGroupWidget />}
        Slider={<SliderWidget />}
        MultiThumbSlider={undefined}
        Spinbutton={undefined}
        Table={<TableWidget />}
        Tabs={<TabWidget />}
        Toolbar={undefined}
        Tooltip={<TooltipWidget />}
        TreeView={undefined}
        TreeGrid={undefined}
        WindowSplitter={undefined}
      />
    </ChakraProvider>
  );
}

function TabWidget() {
  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

function TooltipWidget() {
  return (
    <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
      Hover me
    </Tooltip>
  );
}

function SliderWidget() {
  return (
    <Slider aria-label="slider-ex-1" defaultValue={30}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
    </Slider>
  );
}

function TableWidget() {
  return (
    <Table variant="simple">
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
        <Tr>
          <Td>feet</Td>
          <Td>centimetres (cm)</Td>
          <Td isNumeric>30.48</Td>
        </Tr>
        <Tr>
          <Td>yards</Td>
          <Td>metres (m)</Td>
          <Td isNumeric>0.91444</Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>To convert</Th>
          <Th>into</Th>
          <Th isNumeric>multiply by</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}

function RadioGroupWidget() {
  const [value, setValue] = React.useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
}

function MenuWidget() {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button}>
            {isOpen ? 'Close' : 'Open'}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => alert('Item 1')}>Item 1</MenuItem>
            <MenuItem onClick={() => alert('Item 2')}>Item 2</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

function LinkWidget() {
  return (
    <Link href="https://chakra-ui.com" isExternal>
      Chakra Design system
    </Link>
  );
}

function DisclosureWidget() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Disclosure
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function DialogWidget() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

function ListboxWidget() {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
}

function CheckboxWidget() {
  return (
    <CheckboxGroup colorScheme="green" defaultValue={['naruto', 'kakashi']}>
      <HStack>
        <Checkbox value="naruto">Naruto</Checkbox>
        <Checkbox value="sasuke">Sasuke</Checkbox>
        <Checkbox value="kakashi">kakashi</Checkbox>
      </HStack>
    </CheckboxGroup>
  );
}

function AccordionWidget() {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Section 2 title
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

function BreadcrumbsWidget() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="#">Docs</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

function ButtonWidget() {
  return (
    <ButtonGroup variant="outline" spacing="6">
      <Button colorScheme="blue">Save</Button>
      <Button isDisabled>Cancel</Button>
    </ButtonGroup>
  );
}

function AlertWidget() {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>Your browser is outdated!</AlertTitle>
      <AlertDescription>
        Your Chakra experience may be degraded.
      </AlertDescription>
      <CloseButton position="absolute" right="8px" top="8px" />
    </Alert>
  );
}

function AlertDialogWidget() {
  const [isAlertDialogOpen, setIsAlertDialogOpen] = React.useState(false);
  const onAlertDialogClose = () => setIsAlertDialogOpen(false);
  const cancelAlertDialogRef = React.useRef();

  return (
    <>
      <Button colorScheme="red" onClick={() => setIsAlertDialogOpen(true)}>
        Delete Customer
      </Button>
      <AlertDialog
        isOpen={isAlertDialogOpen}
        leastDestructiveRef={cancelAlertDialogRef as any}
        onClose={onAlertDialogClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Customer
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelAlertDialogRef as any}
                onClick={onAlertDialogClose}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onAlertDialogClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
