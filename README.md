#ws-menu-acceptance-tests
This project runs ws ui tests using Cucumber and Playwright with Javascript and generates Cucumber report

The structure of project is as follows: 

├── reports/                  # Cucumber reports
├── src/
│   └── resources/
│       └── features/         # Cucumber feature files
├── tests/
│   ├── pages/                # Page objects for Playwright
│   ├── steps/                # Step definitions
│   └── support/              # Hooks
├── generate-report.js        # Script to generate HTML report
├── package.json              # Project configuration and scripts
└── README.md                 # Project documentation


To run the tests and generate report, run below command

npm test

<<<<<<< HEAD
Note: If you dont have Cucumber installed as dependency please run below command first

npm install --save-dev @cucumber/cucumber

=======
>>>>>>> 9aba89b (ws acceptance tests to navigate to menu page)
To see the cucumber report in a html format, run below command

node generate-report.js

