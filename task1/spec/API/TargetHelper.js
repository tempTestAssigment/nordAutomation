const HelperAPI = require('../../utilities/HelperAPI')
const data = require('../../data/apiData')
class TargetHelper {
    async getAccessData() {
        const accessData = await HelperAPI.getRequest(data.apiData.url)
        return accessData
    }

    async getAccessedData(auth = true) {
        const accessData = await this.getAccessData()

        if (auth) {
            const res = await HelperAPI.postRequest(accessData.data.targetUrl, accessData.data)
            return res
        } else {
            const res = await HelperAPI.postRequest(accessData.data.targetUrl)
            return res
        }
    }
}
module.exports = new TargetHelper()
