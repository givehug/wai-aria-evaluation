import React from 'react';
import {
  ChakraProvider,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';
import WidgetTemplate from '../widgetsTemplate/Template';

function ChakraUI() {
  return (
    <ChakraProvider>
      <WidgetTemplate
        libraryName="Chakra UI"
        Alert={<AlertWidget />}
        AlertDialog={<AlertDialogWidget />}
      />
    </ChakraProvider>
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

export default ChakraUI;
