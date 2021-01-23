const { config, parse } = require('dotenv')
const { isString } = require('util')

const defaultOptions = {
    encoding: 'utf8',
    examplePath: process.cwd()
}
module.exports = {
    config: function (options = {}) {

        const configOptions = { ...defaultOptions, ...options }
        const parsedEnv = config(configOptions).parsed

        let quasarEnv = {}

        if(parsedEnv){
            quasarEnv = { ...quasarEnv, ...parsedEnv }
        }

        const fs = require('fs')
        const path = require('path')
        const encoding = configOptions.encoding
        const baseEnvPath = path.resolve(configOptions.examplePath, '.env.example')
        const baseEnvBuffer = fs.readFileSync(baseEnvPath, { encoding })
        const baseEnv = parse(baseEnvBuffer)

        if(baseEnv){
            quasarEnv = { ...quasarEnv, ...baseEnv }
        }
        
        return quasarEnv
    }
}
