class HelperBrowser {
    async findElement(selector: string, timeToWait = 10) {
        await $(selector).waitForDisplayed({ timeout: timeToWait * 1000 })
        const elem = await $(selector)
        return elem
    }
    async findElements(selector: string, timeToWait = 10): Promise<WebdriverIO.ElementArray> {
        await $$(selector)[0].waitForDisplayed({ timeout: timeToWait * 1000 })
        const elemArr: WebdriverIO.ElementArray = await $$(selector)
        return elemArr
    }
    async click(selector: string, timeout = 20) {
        const elem = await this.findElement(selector)
        await elem.waitForClickable({ timeout: timeout * 1000 })

        const maxRetries = 50
        for (let index = 1; index < maxRetries; index += 1) {
            try {
                await elem.click()
                // await Logger.logInfoToFileOnly(
                //   `Clicked element by selector: ${await element.selector}`
                // );
                return
            } catch (e) {
                if (
                    e.message.includes('is not clickable at point') ||
                    e.message.includes('An unknown server-side error occurred while processing the command') ||
                    e.message.includes(
                        'An element command could not be completed because the element is not visible on the page'
                    )
                ) {
                    //   await Logger.logInfoToFileOnly(
                    //     `Got error: ${e.message} during click, retry #${index}`
                    //   );
                    await browser.pause(250)
                    await elem.scrollIntoView()
                } else {
                    throw new Error(e)
                }
            }
        }
        try {
            await elem.click()
        } catch (error) {
            throw new Error(
                `An element by selector: ${await elem.selector} could not be clicked, maybe it is hidden, 
        overlapped by other element or somehow not clickable. Real error: ${error}`
            )
        }
    }
}

export default new HelperBrowser()
