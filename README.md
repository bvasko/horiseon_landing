# Horiseon Landing Page

## Scope of Work
Take the provided HTML & CSS and convert the page to semantic HTML while ensuring the CSS properties are still properly applied

### Changes
- all divs converted to the appropriate semantic html tag
- alt tags added to images
- title tags added where appropriate
- add tabindex=0 to enable page navigation with the keyboard

### Run Tests Locally
You can run the integration tests by running the following commands
```
npm init
npm run e2e
```

Test results will output in the terminal 
![test results](assets/images/screenshot2.jpg)

### CI test run
The .github/workflows folder contains the github actions setup file
Cypress integration tests will run everytime code is pushed or merged
![test results](assets/images/screenshot3.jpg)
## Landing Page Screenshot
![screenshot](assets/images/screenshot.jpg)
