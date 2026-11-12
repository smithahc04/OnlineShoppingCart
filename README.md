# Online Shopping Cart Management

## Project Overview

This project is an Online Shopping Cart Management system developed using HTML, CSS and JavaScript.

Playwright is used as the automated testing tool to test the application.

## Technologies Used

- HTML
- CSS
- JavaScript
- Playwright
- Node.js

## Main Features

- Add products to cart
- Increase product quantity
- Decrease product quantity
- Remove products from cart
- Automatic total calculation
- Checkout form
- Input validation
- Order confirmation

## Test Cases

| Test Case ID | Test Scenario / Objective | Input Data | Expected Result | Author |
|---|---|---|---|---|
| TC01 | Add product to cart | Laptop | Laptop is added and total is ₹50,000 | Student A |
| TC02 | Increase product quantity | Laptop × 2 | Quantity becomes 2 and total is ₹1,00,000 | Student A |
| TC03 | Checkout with empty cart | No product | Shows "Please add a product to the cart." | Student A |
| TC04 | Reject invalid email | madiha@gmail | Shows "Please enter a valid email." | Student A |
| TC05 | Reject invalid phone | 12345 | Shows phone number error | Student A |
| TC06 | Remove product | Laptop | Product is removed and total becomes ₹0 | Student A |
| TC07 | Place valid order | Valid name, email, phone and address | Shows "Order placed successfully!" | Student A |

## Playwright Test Execution

Total Test Cases: 7

Passed: 7

Failed: 0

Test Tool: Playwright

## Defect Found and Fixed

### DEF-01: Invalid Email Accepted

- Severity: Medium
- Priority: High
- Reproduction: Enter an email such as `madiha@gmail` during checkout.
- Expected Result: The system should reject the invalid email.
- Actual Result: Initially, the system accepted the email.
- Root Cause: Email validation only checked for the `@` symbol.
- Fix: Added validation to check for both `@` and `.`.
- Status: Fixed

## Edge Cases Tested

1. Empty cart checkout
2. Invalid email format
3. Invalid phone number
4. Minimum quantity = 1
5. Multiple quantities of the same product
6. Removing a product from the cart
7. Valid checkout with all required details

## Playwright Evaluation

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