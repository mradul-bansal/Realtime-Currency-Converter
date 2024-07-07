# Currency Converter

## Overview
This is a simple currency converter web application built using HTML, CSS, and JavaScript. It allows users to select a from and to currency, enter an amount, and convert the amount from one currency to another.

**Direct link**: https://bit.ly/Currency--Converter

## Features
- Select from a list of over 150 currencies
- Convert an amount from one currency to another
- Displays the exchange rate and converted amount
- Updates the flag of the selected currency

## API Used
This application uses the following APIs:
- **Currency API**: Fetches the latest exchange rates. The API provides a simple and easy-to-use interface to retrieve exchange rates.
- **Flags API**: Provides the country flags used in the application.

## Technologies Used
- **HTML**: Used for structuring the web page
- **CSS**: Used for styling the web page
- **JavaScript**: Used for dynamic functionality, including fetching data from the APIs and updating the UI

## JavaScript Code
The JavaScript code is divided into several functions:

### updateFlag
Updates the flag of the selected currency. It takes an element parameter, which is the select element that triggered the change event. It retrieves the country code from the countryList object and updates the `src` attribute of the corresponding image element.

### updateExchangeRate
Fetches the latest exchange rate from the API and updates the UI with the converted amount. It takes no parameters. It retrieves the from and to currencies, amount, and exchange rate from the API, and updates the UI with the converted amount.

## How it Works
1. The user selects a from and to currency from the dropdown lists.
2. The user enters an amount to convert.
3. When the user clicks the "Convert" button, the `updateExchangeRate` function is called.
4. The `updateExchangeRate` function fetches the latest exchange rate from the API using the fetch API.
5. The function then updates the UI with the converted amount and exchange rate.

## Setup
To set up this project, follow these steps:
1. Clone the repository using `git clone <repository-url>`
2. Open the `index.html` file in a web browser
3. Select a from and to currency, enter an amount, and click the "Convert" button

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Acknowledgments
- Currency API for providing the exchange rate data
- Flags API for providing the country flags
