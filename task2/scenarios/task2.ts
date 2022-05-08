import HomePage from '../pageobjects/home.page'
import CarrerPage from '../pageobjects/career.page'
import HelperBrowser from '../utilities/HelperBrowser'
import Reporter from '../utilities/Reporter'

describe('Task 2 scenario', () => {
    it('Task 2 automation', async () => {
        await Reporter.reportStepText('Starting execution for finding carrer categories titles')
        await HomePage.open()
        await HelperBrowser.click(HomePage.navCarrer)
        await CarrerPage.getSelectValues()
    })
})
