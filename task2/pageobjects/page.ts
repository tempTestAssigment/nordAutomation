import Reporter from '../utilities/Reporter'

export default class Page {
    get headerNavigation() {
        return `header.banner`
    }

    get navCarrer() {
        return '*=Career'
    }

    public open(path: string) {
        Reporter.reportStepText(`Navigating to: ${browser.url}/${path}`)
        return browser.url(`${browser.url}/${path}`)
    }
}
