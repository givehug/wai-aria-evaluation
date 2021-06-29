import '@blueprintjs/core/lib/css/blueprint.css';
import * as React from 'react';
import { Alert, Button } from '@blueprintjs/core';

const BluePrint = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Button onClick={() => setOpen(true)} text="Open file error alert" />
      <Alert
        confirmButtonText="Okay"
        isOpen={open}
        loading={false}
        onClose={() => setOpen(false)}
        canEscapeKeyCancel={true}
        onCancel={() => setOpen(false)}
        canOutsideClickCancel={true}
      >
        <p>
          Couldn't create the file because the containing folder doesn't exist
          anymore. You will be redirected to your user folder.
        </p>
      </Alert>
    </div>
  );
};

export default BluePrint;
