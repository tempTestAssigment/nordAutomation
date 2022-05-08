const axios = require('axios')

class HelperAPI {
    async getRequest(url) {
        try {
            const res = await axios.get(url)
            return await res
        } catch (error) {
            console.error(`Failed GET request from ${url}.\n Reason: ${error}`)
            return error
        }
    }

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

    async validateRequestStatus(method, url, expectedStatus, err = false) {
        let res
        if (method.toLowerCase() === 'get') {
            res = await this.getRequest(url)
        } else if (method.toLowerCase() === 'post') {
            res = await this.postRequest(url)
        }
        const status = err ? await res.status : await res.status
        expect(status).toEqual(expectedStatus)
    }

    async validateRequestToBe(data, expectedData, reverse = false) {
        if ((reverse = true)) {
            expect(data).not.toBe(expectedData)
            console.log(`${data} did not match data: ${expectedData}, as expected`)
        } else {
            expect(data).toBe(expectedData)
            console.log(`${data} matched expected data: ${expectedData}`)
        }
    }

    async validateRequestToEqual(data, expectedData) {
        expect(data).toEqual(expectedData)
        console.log(`${data} matched expected data: ${expectedData}`)
    }

    async validateRequestToContainl(data, expectedData) {
        expect(data).toContain(expectedData)
        console.log(`${data} contains: ${expectedData}`)
    }

    async validateRequestToMatch(data, expectedPattern) {
        expect(data).toMatch(expectedPattern)
        console.log(`${data} matched pattern: ${expectedPattern}`)
    }
}
module.exports = new HelperAPI()
