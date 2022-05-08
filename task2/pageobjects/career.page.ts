import Page from './page'
import Reporter from '../utilities/Reporter'
import HelperBrowser from '../utilities/HelperBrowser'

class Career extends Page {
    get optionForCareerSelection() {
        return 'select#deps option'
    }

    public async getSelectValues() {
        const selectItems = await HelperBrowser.findElements(this.optionForCareerSelection)
        for (let item of selectItems) {
            const categoryTitle = await item.getText()
            Reporter.reportStepText(`${categoryTitle}`)
        }
    }
}

export default new Career()
