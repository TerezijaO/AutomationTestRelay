# Cypress 04/2025
## Prerequisites
` To run locally you need to have Node.js and yarn `
## Installing dependencies
` https://docs.cypress.io/app/get-started/install-cypress `
` https://docs.cypress.io/app/get-started/open-the-app `
## Running tests
### Run all tests
` yarn cy:run - not recommended because tests are written to run in the order `
### Instead use this command:
` yarn cy:all `
### To run only release tests 
` yarn cy:release `
### Run specific test
` yarn cy:run --browser chrome --spec <path> `
### To open Cypress UI
` yarn cy:open ` 
NOTE: All tests are predefined to run in chrome browser, to run in different browser:
- browser chrome
- browser firefox
- browser edge
for elecctron browser there is no command, because electron is run by default
Example:
` yarn cy:all --browser chrome `
### In terminal cypress can run in two modes:
- headless (predefined)
- headed (displays the browser instead of running headlessly)
Example:
` yarn cy:all --headed `
# Cypress standards
### Cypress is a test automation tool used for functional testing of web apps by automating browser actions. With cypress we can create:
- Unit tests
- Integration tests
- End to End tests
