const defaults = require('./wdio.conf.base').config
import * as _ from 'lodash'
// let services ;
let grid = true
let services = undefined
let hostname
let port
let path
let protocol
if (!grid) {
    services = [
        [
            'chromedriver',
            {
                logFileName: 'wdio-chromedriver.log', // default
                outputDir: 'driver-logs', // overwrites the config.outputDir
                args: ['--silent'],
            },
        ],
    ]
} else {
    services = []
    hostname = '139.177.176.89'
    port = 4444
    path = '/wd/hub/'
    protocol = 'http'
}

const overrides = {
    baseUrl: 'https://delfi.lt',
    services: services,
    hostname: hostname,
    port: port,
    path: path,
    protocol: protocol,
}
exports.config = _.defaults(overrides, defaults)
