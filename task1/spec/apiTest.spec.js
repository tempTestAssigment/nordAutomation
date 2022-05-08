const TargetHelper = require('./API/TargetHelper')
const testData = require('../data/apiData')
const HelperAPI = require('../utilities/HelperAPI')
const Report = require('../utilities/reporter.util')

describe('Get request tests for info site', () => {
    const url = testData.apiData.url
    it(`GET request for ${url} should return status code 200 `, async () => {
        await HelperAPI.validateRequestStatus('get', testData.apiData.url, 200)
    })

    it(`GET request: ${url} should return correct username`, async () => {
        const responseData = await TargetHelper.getAccessData()
        await HelperAPI.validateRequestToEqual(responseData.data, jasmine.any(Object))
        await HelperAPI.validateRequestToBe(responseData.data.username, undefined, true)
        await HelperAPI.validateRequestToEqual(responseData.data.username, jasmine.any(String))
        await HelperAPI.validateRequestToEqual(responseData.data.username, testData.apiData.correctUsername)
    })

    it(`GET request ${url} should return correct password`, async () => {
        const responseData = await TargetHelper.getAccessData()
        await HelperAPI.validateRequestToEqual(responseData.data, jasmine.any(Object))
        await HelperAPI.validateRequestToBe(responseData.data.password, undefined, true)
        await HelperAPI.validateRequestToBe(responseData.data.password, jasmine.any(String))
        await HelperAPI.validateRequestToEqual(responseData.data.password, testData.apiData.correctPassword)
    })

    it(`GET request ${url} should  correct target url`, async () => {
        const responseData = await TargetHelper.getAccessData()
        await HelperAPI.validateRequestToEqual(responseData.data, jasmine.any(Object))
        await HelperAPI.validateRequestToBe(responseData.data.targetUrl, undefined, true)
        await HelperAPI.validateRequestToEqual(responseData.data.targetUrl, jasmine.any(String))
        await HelperAPI.validateRequestToContainl(responseData.data.targetUrl, 'http://')
        await HelperAPI.validateRequestToEqual(responseData.data.targetUrl, testData.apiData.correctTargetUrl)
    })
})

describe('Post request tests for target page', () => {
    it('POST request: Target page should return 403 with empty authentication', async () => {
        const res = await TargetHelper.getAccessData()
        await HelperAPI.validateRequestStatus('post', res.data.targetUrl, 401)
    })

    it('POST request: Target should return correct IP adress', async () => {
        const responseData = await TargetHelper.getAccessedData()
        await HelperAPI.validateRequestToEqual(responseData.data, jasmine.any(Object))
        await HelperAPI.validateRequestToBe(responseData.data.ip, undefined, true)
        await HelperAPI.validateRequestToEqual(responseData.data.ip, jasmine.any(String))
        await HelperAPI.validateRequestToEqual(responseData.data.ip, testData.apiData.correctIPAddress)
        await HelperAPI.validateRequestToMatch(responseData.data.ip, testData.apiData.regexForIP)
    })

    it('POST request: Target should return correct Token', async () => {
        const responseData = await TargetHelper.getAccessedData()
        await HelperAPI.validateRequestToEqual(responseData.data, jasmine.any(Object))
        await HelperAPI.validateRequestToBe(responseData.data.token, undefined, true)
        await HelperAPI.validateRequestToEqual(responseData.data.token, jasmine.any(String))
    })
})
