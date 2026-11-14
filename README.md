# Online Shopping Cart Management

## 1. Project Overview

This project is an Online Shopping Cart Management system developed using HTML, CSS and JavaScript.

Playwright is used as the automated testing tool to perform end-to-end testing of the application.

## 2. Technologies Used

- HTML
- CSS
- JavaScript
- Playwright
- Node.js

## 3. Main Features

- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products from cart
- Automatic total calculation
- Checkout form
- Input validation
- Order confirmation

## 4. Prerequisites

Before running the project, make sure the following are installed:

- Node.js and npm
- Visual Studio Code (recommended)
- A web browser such as Google Chrome

## 5. Installation and Execution Procedure

### Step 1: Clone or Download the Repository

Clone the GitHub repository:

```bash
git clone https://github.com/smithahc04/OnlineShoppingCart.git
```

Open the downloaded project folder in Visual Studio Code.

### Step 2: Install Project Dependencies

Open the terminal inside the project folder and execute:

```bash
npm install
```

Install the required Playwright browser if it is not already installed:

```bash
npx playwright install
```

### Step 3: Start the Application

Open a terminal inside the project folder and execute:

```bash
npx http-server -p 8000
```

If npm asks permission to install http-server, enter `y` and press Enter.

The application will be available at:

`http://localhost:8000`

Keep this terminal running while executing the tests.

### Step 4: Execute Playwright Tests

Open a second terminal in the same project folder and execute:

```bash
npx playwright test
```

Playwright will automatically execute the test cases and display the results in the terminal.

### Step 5: View the HTML Test Report

To view the detailed test execution report, execute:

```bash
npx playwright show-report
```

The HTML report displays the test results, including passed and failed test cases.

## 6. Test Cases

| Test Case ID | Test Scenario / Objective | Input Data | Expected Result |
|---|---|---|---|
| TC01 | Add product to cart | Laptop | Laptop is added and total is ₹50,000 |
| TC02 | Increase product quantity | Laptop × 2 | Quantity becomes 2 and total is ₹1,00,000 |
| TC03 | Checkout with empty cart | No product | Shows "Please add a product to the cart." |
| TC04 | Reject invalid email | madiha@gmail | Shows "Please enter a valid email." |
| TC05 | Reject invalid phone | 12345 | Shows phone number error |
| TC06 | Remove product | Laptop | Product is removed and total becomes ₹0 |
| TC07 | Place valid order | Valid name, email, phone and address | Shows "Order placed successfully!" |

## 7. Playwright Test Execution Results

- Total Test Cases: 7
- Passed: 7
- Failed: 0
- Test Tool: Playwright

## 8. Defect Found and Fixed

### DEF-01: Invalid Email Accepted

- Severity: Medium
- Priority: High
- Reproduction: Enter an email such as `madiha@gmail` during checkout.
- Expected Result: The system should reject the invalid email.
- Actual Result: Initially, the system accepted the email.
- Root Cause: Email validation only checked for the `@` symbol.
- Fix: Added validation to check for both `@` and `.`.
- Status: Fixed

## 9. Edge Cases Tested

1. Empty cart checkout
2. Invalid email format
3. Invalid phone number
4. Minimum quantity = 1
5. Multiple quantities of the same product
6. Removing a product from the cart
7. Valid checkout with all required details

## 10. Playwright Evaluation

### Advantages

- Easy to install and use
- Supports automated browser testing
- Provides clear pass/fail results
- Supports HTML test reports
- Tests can be executed quickly

### Limitations

- Requires basic JavaScript knowledge
- Browser setup is required
- Local browser extensions can sometimes block the report

### Overall Evaluation

Playwright is suitable for testing the Online Shopping Cart because it can automate user actions, verify expected results and provide clear test execution reports.