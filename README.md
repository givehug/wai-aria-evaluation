## WAI-ARIA evaluation

### Web

- Created web pages are available at https://wai-aria-evaluation.herokuapp.com/
- Technical requirements: `node 16.0.0` and `npm 7.10.0` or higher
- To install dependencies run `npm run install` from `web` directory
- To build web pages run `npm run build` from `web` directory. The script builds all frameworks subsequently, be patient.
- To start the web server run `npm run start` from `web` directory.

### Testing

- `testing` directory contains output of ARC and AXE automated tests and manual testing in `.csv` and `.xlsx` format and
- `checklistResults.xlsx` contains results of manual testing with separate sheets for corresponding UI libraries
- `testing/scripts` includes a script to format ARC Toolkit results output

### Data Analysis

- `analysis` dir contains `prepare.py` and `analyse.py` the perform initial data preparation and statistical analysis
- the output can be found in `analysis/out` directory
- manually aggregated spreadsheets with chart, visualisations, and tables can be found in `analysis/spreadsheets` directory

### Ethics

- `ethics` dir contains a self-assessed ethics quiz
