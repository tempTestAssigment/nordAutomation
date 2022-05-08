import Page from './page'

class HomePage extends Page {
    /**
     * overwrite specific options to adapt it to page object
     */
    public open() {
        return super.open('')
    }
}

export default new HomePage()
