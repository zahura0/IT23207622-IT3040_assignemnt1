# IT3040 Assignment – Automated Web Testing


## Student Information
**Name:** PERERA K H G H N  
**IT Number:** IT23207622  
**Semester:** 3rd Year, 2nd Semester  
**Group Number:** 2.2 WE

## Project Overview
This repository contains automated web tests for the IT3040 assignment, using Playwright and TypeScript. The tests are organized into positive and negative scenarios to ensure comprehensive coverage of the application's functionality and error handling.

## Folder Structure
- `tests/Positive/` – Positive test cases
- `tests/Negative/` – Negative test cases
- `playwright.config.ts` – Playwright configuration
- `playwright-report/` – Test reports
- `test-results/` – Raw test results

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation
1. **Clone the repository:**
	```sh
	git clone https://github.com/zahura0/IT23207622-IT3040_assignemnt1.git
	cd IT23207622-IT3040_assignemnt1
	```
2. **Install dependencies:**
	```sh
	npm install
	```
3. **Install Playwright browsers:**
	```sh
	npx playwright install
	```

## Running Tests
To execute all tests and generate a report:
```sh
npx playwright test
```

To run only positive or negative tests:
```sh
npx playwright test tests/Positive
npx playwright test tests/Negative
```

## Viewing Test Reports
After running tests, open the HTML report:
```sh
npx playwright show-report
```

## Notes
- Ensure your repository is publicly accessible for evaluation.
- For any issues, check the Playwright documentation: https://playwright.dev/

---
**This README was prepared for the IT3040 assignment by PERERA K H G H N (IT23207622).**