# JSON to PDF/Excel Converter

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A lightweight and easy-to-use package for converting JSON data to PDF and Excel formats.

## Features

- Convert JSON data to PDF documents
- Convert JSON data to Excel spreadsheets
- Customize PDF and Excel output options
- Support for various data structures and formatting options

## Installation

You can install the package via npm:

```bash
npm install json-to-pdf-excel-converter
```

## Usage

```javascript
const { JSONToPDF, JSONToExcel } = require('json-to-pdf-excel-converter');

const data = {
  name: 'John Doe',
  age: 30,
  email: 'email@email.com',
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zip: '10001'
    }
};

// Convert JSON data to PDF
JSONToPDF(data, 'output.pdf');

// Convert JSON data to Excel

JSONToExcel(data, 'output.xlsx');
```

## Options

You can customize the output by passing additional options to the `JSONToPDF` and `JSONToExcel` functions:

```javascript
const options = {
  title: 'User Information',
    orientation: 'landscape',
    format: 'A4',
    font: 'Helvetica',
    fontSize: 12,
    margin: 10
};

// Convert JSON data to PDF with custom options
JSONToPDF(data, 'output.pdf', options);
```

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
