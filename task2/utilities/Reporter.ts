const AllureReporter = require('@wdio/allure-reporter').default
class Reporter {
    async reportStepText(textToReport) {
        AllureReporter.addStep(textToReport)
    }
}
export default new Reporter()
