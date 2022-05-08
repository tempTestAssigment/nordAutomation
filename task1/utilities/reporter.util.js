var AllureReporter = require('jasmine-allure-reporter')
module.exports = jasmine.getEnv().addReporter(
    new AllureReporter({
        resultsDir: 'output/allure-results',
    })
)
