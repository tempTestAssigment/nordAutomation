# Nord Automation Tasks

## Prerequisites

- NodeJS >=14
- Java8
- Allure command line tools to see reports

## Task 1 - API testing with NodeJS

### To start the project locally:

1. cd task1 && npm install
2. npm run test - to starts tests
3. allure serve output/allure-results to see the generated report

### To see deployed solution:

1. Login to Jenkins with given credentials
2. Select job named Task1, click Build now
3. After the run navigate to allure report or click on yellow icon next to the job to see the report

### Structure

- task1/spec/apiTest.spec.js - contains a few test cases as requested for the task
- task1/utilities/HelperAPI.js - contains a simple class object to simplify test writing and avoid code repetition

### Technologies used:

- NodeJS
- Jasmine
- Allure report
- Jenkins
- Axios

## Task 2 - Navigating in UI with webdriver

### To start the project locally:

1. cd task2 && npm install
2. open wdio.conf.js file and change line 4 to be: <br>

```
let grid = false
```

3. npm run wdio - to starts the scenario
4. allure serve reports/allure-results to see the generated report

### To see deployed solution:

1. Login to Jenkins with given credentials
2. Select job named Task2, click Build now
3. After the run navigate to allure report or click on yellow icon next to the job to see the report

### Structure

- task2/scenarios/task2.ts - contains a given flow on tesonet website
- task2/utilities/HelperBrowser.js - contains a simple class object to avoid code repetition

### Technologies used:

- NodeJS
- Allure report
- Jenkins
- Webdriver IO
- Selenium Grid/Docker
