const axios = require('axios')

class HelperAPI {
    /**
     * Returns full GET response object from given url.
     * @param {*} url endpoint for GET request
     * @returns GET response
     */
    async getRequest(url) {
        try {
            const res = await axios.get(url)
            return await res
        } catch (error) {
            console.error(`Failed GET request from ${url}.\n Reason: ${error}`)
            return error
        }
    }

    /**
     * Returns full POST response object from given url
     * @param {*} url endpoint for POST request
     * @param {*} auth If basic AUTH is used provide payload
     * @returns full POST response object from given url.
     */
    async postRequest(url, auth) {
        try {
            const res = await axios.post(
                url,
                {},
                {
                    auth: auth,
                }
            )
            const data = await res
            return data
        } catch (error) {
            console.error(`Failed POST request to:${url}.\n Reason: ${error}`)
            return error.response
        }
    }

    /**
     * Validates response status code
     * @param {*} method Request method. For now only POST or GET
     * @param {*} url endpoint for request
     * @param {*} expectedStatus expected status code. E.G 404
     */
    async validateRequestStatus(method, url, expectedStatus) {
        let res
        if (method.toLowerCase() === 'get') {
            res = await this.getRequest(url)
        } else if (method.toLowerCase() === 'post') {
            res = await this.postRequest(url)
        } else {
            console.log('Method not supported yet')
            return
        }
        const status = await res.status
        expect(status).toEqual(expectedStatus)
    }

    /**
     * Using Jasmine toBe Method validates given data and logs into console
     * @param {*} data Actual data
     * @param {*} expectedData Expected data
     * @param {*} reverse If true will return passed with expected data not-matching
     */
    async validateRequestToBe(data, expectedData, reverse = false) {
        if ((reverse = true)) {
            expect(data).not.toBe(expectedData)
            console.log(`${data} did not match data: ${expectedData}, as expected`)
        } else {
            expect(data).toBe(expectedData)
            console.log(`${data} matched expected data: ${expectedData}`)
        }
    }
    /**
     * Using Jasmine toEqual Method validates given data and logs into console
     * @param {*} data Actual data
     * @param {*} expectedData Expected data
     */
    async validateRequestToEqual(data, expectedData) {
        expect(data).toEqual(expectedData)
        console.log(`${data} matched expected data: ${expectedData}`)
    }

    /**
     * Using Jasmine toContain Method validates given data and logs into console
     * @param {*} data Actual data
     * @param {*} expectedData Expected data
     */
    async validateRequestToContainl(data, expectedData) {
        expect(data).toContain(expectedData)
        console.log(`${data} contains: ${expectedData}`)
    }

    /**
     * Using Jasmine toMatch Method validates given data and logs into console
     * @param {*} data Actual data
     * @param {*} expectedData Expected data
     */
    async validateRequestToMatch(data, expectedPattern) {
        expect(data).toMatch(expectedPattern)
        console.log(`${data} matched pattern: ${expectedPattern}`)
    }
}
module.exports = new HelperAPI()
