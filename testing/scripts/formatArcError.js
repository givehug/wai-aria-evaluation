const fs = require('fs');

const testOutput = [
  `
  <div tabindex="0" aria-hidden="true" class="mdc-dom-focus-sentinel"></div>
  tabindex: 0
  nonActiveElementInTabOrder
  Error: tabindex is used on a non-interactive component in a way that puts it in the tab order. Only active element should be in the tab order
  WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value (A)
  Recommend: Remove the tabindex attribute or set it to '-1', OR define the role of the control.
`,
  `
  <div tabindex="0" aria-hidden="true" class="mdc-dom-focus-sentinel"></div>
  tabindex: 0
  nonActiveElementInTabOrder
  Error: tabindex is used on a non-interactive component in a way that puts it in the tab order. Only active element should be in the tab order
  WCAG 2.1 Success Criterion 4.1.2 Name, Role, Value (A)
  Recommend: Remove the tabindex attribute or set it to '-1', OR define the role of the control.
`,
  `
  <div tabindex="0" aria-hidden="true" class="mdc-dom-focus-sentinel"></div>
  ARIAHiddenUsedOnFocusable
  Error: aria-hidden='true' set on focusable item
  WCAG 2.1 Success Criterion 2.1.1 Keyboard (A)
  Recommend: do not set aria-hidden='true' on a focusable item
`,

  `
  <div tabindex="0" aria-hidden="true" class="mdc-dom-focus-sentinel"></div>
  ARIAHiddenUsedOnFocusable
  Error: aria-hidden='true' set on focusable item
  WCAG 2.1 Success Criterion 2.1.1 Keyboard (A)
  Recommend: do not set aria-hidden='true' on a focusable item
`,
];

const formatError = (output) => {
  const lines = output
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  return {
    errorCode: lines[2],
    domElement: lines[0],
    errorDescription: lines[3],
    recommendation: lines[5],
  };
};

const formattedErrors = testOutput.map(formatError);

fs.writeFile('./out.json', JSON.stringify(formattedErrors, null, 2), () => {});

console.log(`Errors: ${formattedErrors.length}`);
